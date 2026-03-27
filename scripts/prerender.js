const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const { addHook } = require("pirates");

const projectRoot = path.resolve(__dirname, "..");
const buildDir = path.join(projectRoot, "build");
const buildIndexPath = path.join(buildDir, "index.html");
const assetManifestPath = path.join(buildDir, "asset-manifest.json");

const routes = [
  { path: "/", filePath: buildIndexPath },
  { path: "/about", filePath: path.join(buildDir, "about", "index.html") },
  { path: "/services", filePath: path.join(buildDir, "services", "index.html") },
  { path: "/projects", filePath: path.join(buildDir, "projects", "index.html") },
  { path: "/products", filePath: path.join(buildDir, "products", "index.html") },
  { path: "/careers", filePath: path.join(buildDir, "careers", "index.html") },
  { path: "/contact", filePath: path.join(buildDir, "contact", "index.html") },
  { path: "/blog", filePath: path.join(buildDir, "blog", "index.html") },
  { path: "/404", filePath: path.join(buildDir, "404.html") },
];

function loadAssetMap() {
  const manifest = JSON.parse(fs.readFileSync(assetManifestPath, "utf8"));
  return Object.entries(manifest.files || {}).reduce((accumulator, [key, value]) => {
    accumulator[path.basename(key)] = value;
    return accumulator;
  }, {});
}

function registerAssetStubs(assetMap) {
  const assetExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico"];

  require.extensions[".css"] = (module) => {
    module.exports = {};
  };

  assetExtensions.forEach((extension) => {
    require.extensions[extension] = (module, filename) => {
      module.exports = assetMap[path.basename(filename)] || "";
    };
  });
}

function registerTranspiler() {
  return addHook(
    (code, filename) => {
      const result = babel.transformSync(code, {
        filename,
        babelrc: false,
        configFile: false,
        presets: [
          ["@babel/preset-env", { targets: { node: "current" } }],
          ["@babel/preset-react", { runtime: "automatic" }],
        ],
        plugins: ["@babel/plugin-transform-modules-commonjs"],
      });

      return result ? result.code : code;
    },
    {
      exts: [".js", ".jsx"],
      ignoreNodeModules: true,
    }
  );
}

function splitHeadMarkup(appHtml) {
  const patterns = [
    /<title\b[^>]*>[\s\S]*?<\/title>/gi,
    /<meta\b[^>]*\/?>/gi,
    /<link\b[^>]*\/?>/gi,
    /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
  ];

  const headParts = [];
  let bodyMarkup = appHtml;

  patterns.forEach((pattern) => {
    bodyMarkup = bodyMarkup.replace(pattern, (match) => {
      headParts.push(match);
      return "";
    });
  });

  return {
    bodyMarkup,
    headMarkup: headParts.join(""),
  };
}

function injectHead(html, headMarkup) {
  const titleMatch = headMarkup.match(/<title\b[^>]*>[\s\S]*?<\/title>/i);
  const titleMarkup = titleMatch ? titleMatch[0] : "";
  const remainingHeadMarkup = titleMarkup ? headMarkup.replace(titleMarkup, "") : headMarkup;

  let nextHtml = html;

  if (titleMarkup) {
    nextHtml = nextHtml.replace(/<title>.*?<\/title>/i, titleMarkup);
  }

  nextHtml = nextHtml.replace("<!-- SEO_HEAD -->", remainingHeadMarkup);

  if (nextHtml.includes("<!-- SEO_HEAD -->")) {
    return nextHtml.replace(/<html([^>]*)>/i, '<html$1 data-prerendered="true">');
  }

  return nextHtml
    .replace("</head>", `${remainingHeadMarkup}</head>`)
    .replace(/<html([^>]*)>/i, '<html$1 data-prerendered="true">');
}

function renderRoute(routePath, template) {
  const React = require("react");
  const { renderToString } = require("react-dom/server");
  const { StaticRouter } = require("react-router");
  const { HelmetProvider } = require("react-helmet-async");
  const AppShell = require(path.join(projectRoot, "src", "AppShell")).default;

  const helmetContext = {};
  const app = React.createElement(
    HelmetProvider,
    { context: helmetContext },
    React.createElement(
      StaticRouter,
      { location: routePath },
      React.createElement(AppShell)
    )
  );

  const appHtml = renderToString(app);
  const { bodyMarkup, headMarkup } = splitHeadMarkup(appHtml);
  const htmlWithApp = template.replace('<div id="root"></div>', `<div id="root">${bodyMarkup}</div>`);

  return injectHead(htmlWithApp, headMarkup);
}

function ensureDirectory(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function main() {
  if (!fs.existsSync(buildIndexPath)) {
    throw new Error("build/index.html was not found. Run the production build before prerendering.");
  }

  const template = fs.readFileSync(buildIndexPath, "utf8");
  const assetMap = loadAssetMap();

  registerAssetStubs(assetMap);
  const revertHook = registerTranspiler();

  try {
    routes.forEach((route) => {
      const html = renderRoute(route.path, template);
      ensureDirectory(route.filePath);
      fs.writeFileSync(route.filePath, html);
    });
  } finally {
    revertHook();
  }
}

main();
