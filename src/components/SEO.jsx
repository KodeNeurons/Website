import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'KodeNeurons';
const SITE_URL = 'https://kodeneurons.in';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEO({
  title,
  description,
  keywords,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  noIndex = false,
  structuredData = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | AI-Powered Software Solutions`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

/* ========== Reusable Structured Data Generators ========== */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KodeNeurons',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'AI-powered software solutions company specializing in custom development, automation, and SaaS platforms.',
  sameAs: [
    'https://linkedin.com/company/kodeneurons',
    'https://twitter.com/kodeneurons',
    'https://github.com/kodeneurons',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@kodeneurons.in',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KodeNeurons',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export function createServiceSchema(name, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'Organization',
      name: 'KodeNeurons',
      url: SITE_URL,
    },
    description,
    areaServed: 'Worldwide',
  };
}

export function createFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function createBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function createJobPostingSchema(job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.desc,
    employmentType: 'FULL_TIME',
    jobLocationType: 'TELECOMMUTE',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'KodeNeurons',
      url: SITE_URL,
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'Worldwide',
    },
  };
}
