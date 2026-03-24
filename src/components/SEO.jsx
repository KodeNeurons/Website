import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    buildOrganizationSchema,
    buildUrl,
    buildWebsiteSchema,
    siteMetadata,
} from '../lib/siteMetadata';

export default function SEO({
    title,
    description,
    keywords,
    type = 'website',
    path = '/',
    image,
    imageAlt,
    robots = 'index,follow',
    googleVerification,
    schema = [],
}) {
    const fullUrl = buildUrl(path);
    const titleHasBrand = title
        ? /(kodeneurons|codeneurons|kode\s*neurons|code\s*neurons)/i.test(title)
        : false;
    const resolvedTitle = title
        ? titleHasBrand
            ? title
            : `${title} | ${siteMetadata.name}`
        : `${siteMetadata.name} | ${siteMetadata.defaultTitle}`;
    const metaDescription = description || siteMetadata.defaultDescription;
    const metaKeywords = keywords || siteMetadata.defaultKeywords;
    const metaImage = image || siteMetadata.defaultImage;
    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': path === '/' ? 'WebPage' : 'WebPage',
        name: resolvedTitle,
        url: fullUrl,
        description: metaDescription,
        inLanguage: siteMetadata.language,
        isPartOf: {
            '@type': 'WebSite',
            name: siteMetadata.name,
            url: siteMetadata.siteUrl,
        },
    };
    const schemas = [
        buildOrganizationSchema(),
        buildWebsiteSchema(),
        pageSchema,
        ...(Array.isArray(schema) ? schema : [schema]).filter(Boolean),
    ];

    return (
        <Helmet>
            <title>{resolvedTitle}</title>
            <meta name="description" content={metaDescription} />
            {googleVerification ? <meta name="google-site-verification" content={googleVerification} /> : null}
            <meta name="keywords" content={metaKeywords} />
            <meta name="robots" content={robots} />
            <meta name="author" content={siteMetadata.name} />
            <link rel="canonical" href={fullUrl} />

            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={resolvedTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:site_name" content={siteMetadata.name} />
            <meta property="og:locale" content={siteMetadata.locale} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:alt" content={imageAlt || resolvedTitle} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={resolvedTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />

            {schemas.map((entry, index) => (
                <script
                    key={`${entry['@type'] || 'schema'}-${index}`}
                    type="application/ld+json"
                >
                    {JSON.stringify(entry)}
                </script>
            ))}
        </Helmet>
    );
}
