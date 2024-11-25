import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Recommended Meta Tags for SEO */}
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />

          {/* Favicon and Icons */}

          {/* Preconnect and DNS Prefetch */}
          <link
            rel="preconnect"
            href="https://www.quantumcybersolutions.com/"
          />
          <link
            rel="dns-prefetch"
            href="https://www.quantumcybersolutions.com/"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
