import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";

function escapeJSONString(str) {
  return str
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
    .replace(/"/g, '\\"');
}

function SEOComponent({
  title,
  description,
  canonicalURL,
  image,
  video,
  keywords,
}) {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: escapeJSONString(title),
    description: escapeJSONString(description),
    url: canonicalURL,
    image: image,
    author: {
      "@type": "Person",
      name: "Eric Dequevedo",
    },
    publisher: {
      "@type": "Organization",
      name: "Quantum Cyber Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cflaborecare.com/logo-removebg-preview.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalURL,
    },
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalURL} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Eric Dequevedo" />
      <meta name="publisher" content="Quantum Cyber Solutions" />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalURL} />
      {image && <meta property="og:image" content={image} />}
      {video && <meta property="og:video" content={video} />}
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Quantum Cyber Solutions" />
      <meta name="twitter:site" content="@QCsolutionss" />
      <meta name="twitter:creator" content="@QCsolutionss" />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://www.cflaborecare.com/"
      />
      {/* PWA Specific Tags */}
      <meta name="theme-color" content="#800080" /> {/* Purple Theme Color */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="Quantum Cyber Solutions"
      />
      <meta name="msapplication-TileColor" content="#800080" />{" "}
      {/* Purple Tile Color */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

// Define PropTypes
SEOComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonicalURL: PropTypes.string.isRequired,
  image: PropTypes.string,
  video: PropTypes.string,
  keywords: PropTypes.string.isRequired,
};

export default SEOComponent;
