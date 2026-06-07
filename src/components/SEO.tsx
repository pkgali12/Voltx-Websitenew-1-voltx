import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  type = 'website' 
}: SEOProps) {
  const defaultTitle = "Voltx EV | High Performance BLDC Motors & Electric Mobility";
  const defaultDescription = "Voltx EV designs and manufactures high-performance custom BLDC motors, electric bicycles, EV conversion kits, and innovative logistics solutions.";
  const defaultKeywords = "Voltx EV, BLDC Motors, Hub Motors, Electric Bicycles, EV Conversion Kits, India, Electric Vehicles, Material Handling";

  const seoTitle = title ? `${title} | Voltx EV` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
    </Helmet>
  );
}
