const fs = require("fs");
const path = require("path");

const baseUrl = "https://www.wildthings.com";

const staticPages = [];

// Generate the URL elements for the static pages
const urls = staticPages.map(
  (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
  </url>
`,
);

// Add the main URL to the beginning of the URLs array
urls.unshift(`
  <url>
    <loc>${baseUrl}</loc>
  </url>
`);

// Construct the sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`.trim();

// Write the sitemap to a file
fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), sitemap);
