import React, { useEffect, useState } from "react";
import { ExternalLink, Film, PlayCircle, X } from "lucide-react";
import SEO from "../components/SEO";
import { buildBreadcrumbSchema, buildUrl } from "../lib/siteMetadata";

const YT_API_KEY = process.env.REACT_APP_YT_API_KEY;
const PLAYLIST_ID = process.env.REACT_APP_Platlist_ID;

const featuredShowcases = [
  {
    id: "ai-workflows",
    title: "AI Workflow Automation",
    description:
      "Custom agents and workflow automation systems that reduce manual operations and speed up decision-making.",
    label: "AI Systems",
  },
  {
    id: "web-platforms",
    title: "SaaS and Web Platforms",
    description:
      "Scalable web applications built for internal operations, e-commerce, and customer-facing digital products.",
    label: "Web Apps",
  },
  {
    id: "mobile-solutions",
    title: "Mobile and Location-Based Products",
    description:
      "Android and cross-platform applications with clean UX, real-time sync, and production-ready backend integration.",
    label: "Mobile Apps",
  },
];

export default function Projects() {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!PLAYLIST_ID || !YT_API_KEY) {
      return undefined;
    }

    let ignore = false;

    const fetchVideos = async () => {
      setIsFetching(true);

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&maxResults=50&key=${YT_API_KEY}`
        );
        const data = await response.json();

        if (!ignore) {
          setVideos(
            (data.items || []).map((item) => ({
              id: item.contentDetails.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              thumbnail: item.snippet.thumbnails?.high?.url,
            }))
          );
        }
      } catch (error) {
        console.error("Playlist API error:", error);
      } finally {
        if (!ignore) {
          setIsFetching(false);
        }
      }
    };

    fetchVideos();

    return () => {
      ignore = true;
    };
  }, []);

  const showcaseItems = videos.length > 0 ? videos : featuredShowcases;

  return (
    <div className="bg-white text-[#0A0F2C] min-h-screen">
      <SEO
        title="Software Projects and Live Demos"
        description="Explore Kodeneurons software projects, product demos, AI systems, and client work across web, mobile, and automation."
        keywords="projects, live demos, software portfolio, AI demos, web apps, mobile apps"
        path="/projects"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Kodeneurons Projects",
            url: buildUrl("/projects"),
            description:
              "Collection of software projects, demos, and implementation highlights from Kodeneurons.",
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />

      <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-white">
        <div
          className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.07), transparent 65%)" }}
        />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-6">
            <Film className="w-3.5 h-3.5" />
            Live Project Demos
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 text-[#0A0F2C]">
            Our Work,{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              In Action
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explore real implementations across AI, web, and mobile products built for students, startups, and businesses.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 mb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] mb-2">Portfolio Highlights</p>
              <h2 className="text-3xl font-extrabold text-[#0A0F2C]">What we build in practice</h2>
            </div>
            {isFetching ? (
              <p className="text-sm text-gray-400">Loading the latest YouTube demos...</p>
            ) : null}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseItems.map((item) => {
              const isVideo = Boolean(item.thumbnail);

              return (
                <div
                  key={item.id}
                  onClick={isVideo ? () => setSelected(item) : undefined}
                  className={`group rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_12px_40px_rgba(255,122,0,0.12)] hover:border-[#FF7A00]/25 hover:-translate-y-1 transition-all duration-300 ${isVideo ? "cursor-pointer" : ""}`}
                >
                  <div className="relative h-52 overflow-hidden bg-gray-50">
                    {isVideo ? (
                      <>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[#0A0F2C]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-[#FF7A00] flex items-center justify-center shadow-[0_0_25px_rgba(255,122,0,0.5)]">
                            <PlayCircle className="w-7 h-7 text-white ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 bg-[#FF7A00] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-lg tracking-wide">
                          Demo
                        </div>
                      </>
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-[#0A0F2C] via-[#122055] to-[#FF7A00] p-6 flex flex-col justify-between text-white">
                        <Film className="w-10 h-10 opacity-80" />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 mb-2">
                            {item.label}
                          </p>
                          <p className="text-lg font-bold leading-snug">{item.title}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-[#0A0F2C] mb-1.5 line-clamp-2 group-hover:text-[#FF7A00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">{item.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#FF7A00] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-3 h-3" />
                      {isVideo ? "Watch Demo" : "Representative Work"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,15,44,0.7)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-gray-100"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#FF7A00] hover:bg-orange-50 hover:border-[#FF7A00]/30 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selected.id}?autoplay=1`}
              title={selected.title}
              className="w-full aspect-video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div className="p-5 text-center border-t border-gray-100">
              <h3 className="text-base font-bold text-[#0A0F2C] mb-3 line-clamp-1">{selected.title}</h3>
              <button
                onClick={() => setSelected(null)}
                className="px-6 py-2.5 bg-[#FF7A00] text-white font-semibold rounded-xl text-sm hover:bg-[#e86e00] shadow-[0_4px_14px_rgba(255,122,0,0.35)] hover:scale-105 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
