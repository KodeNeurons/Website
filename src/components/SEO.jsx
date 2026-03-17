import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, type = 'website', path = '', googleVerification }) {
    const siteUrl = 'https://kodeneurons.in'; // Update if domain changes
    const siteName = 'KodeNeurons';
    const fullUrl = `${siteUrl}${path}`;
    const metaDescription = description || 'KodeNeurons - A next-generation AI software studio building intelligent web, mobile, and AI products for startups and enterprises worldwide.';

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title ? `${title} | ${siteName}` : `${siteName} | AI & Software Studio`}</title>
            <meta name="description" content={metaDescription} />
            {googleVerification ? <meta name="google-site-verification" content={googleVerification} /> : null}
            <meta name="keywords" content={keywords || 'AI development, software studio, web development, React, India, app development, AI agents'} />
            <meta name="robots" content="index,follow" />
            <meta name="author" content={siteName} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title ? `${title} | ${siteName}` : `${siteName} | AI & Software Studio`} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={title ? `${title} | ${siteName}` : `${siteName} | AI & Software Studio`} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        </Helmet>
    );
}
