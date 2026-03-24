export const siteMetadata = {
  name: 'Kodeneurons',
  legalName: 'Kodeneurons',
  siteUrl: 'https://kodeneurons.in',
  defaultTitle: 'AI Software Development Company',
  defaultDescription:
    'Kodeneurons builds AI, web, mobile, and data products for startups and businesses with a focus on performance, usability, and scalable engineering.',
  defaultKeywords:
    'kodeneurons, codeneurons, kode neurons, code neurons, AI development company, software development company India, web development, mobile app development, machine learning, product engineering',
  defaultImage: 'https://kodeneurons.in/og-image.jpg',
  locale: 'en_IN',
  language: 'en',
  country: 'IN',
  themeColor: '#FF7A00',
  email: 'contact@kodeneurons.in',
  phone: '+91-7499601744',
  sameAs: [
    'https://www.linkedin.com/company/kodeneurons-3/',
    'https://www.instagram.com/kodeneurons_3/',
  ],
};

export function buildUrl(path = '/') {
  const normalizedPath = path === '/' ? '' : path.replace(/\/+$/, '');
  return `${siteMetadata.siteUrl}${normalizedPath || '/'}`;
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildUrl(item.path),
    })),
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteMetadata.legalName,
    alternateName: ['kodeneurons', 'codeneurons', 'KodeNeurons', 'CodeNeurons'],
    url: siteMetadata.siteUrl,
    logo: `${siteMetadata.siteUrl}/favicon.ico`,
    image: siteMetadata.defaultImage,
    description: siteMetadata.defaultDescription,
    email: siteMetadata.email,
    telephone: siteMetadata.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: siteMetadata.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteMetadata.phone,
      contactType: 'customer service',
      email: siteMetadata.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: siteMetadata.sameAs,
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteMetadata.name,
    alternateName: ['kodeneurons', 'codeneurons', 'KodeNeurons', 'CodeNeurons'],
    url: siteMetadata.siteUrl,
    inLanguage: siteMetadata.language,
    description: siteMetadata.defaultDescription,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.name,
      url: siteMetadata.siteUrl,
    },
  };
}
