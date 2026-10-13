// Runs after `react-scripts build`. For every route in src/utils/seo.json it
// writes build/<file> with that route's title, description and canonical URL
// already in the HTML, so crawlers get a 200 with correct metadata even before
// JavaScript runs (Netlify serves /about from about.html). It also writes
// build/sitemap.xml from the same list.
const fs = require("fs");
const path = require("path");
const { siteUrl, routes } = require("../src/utils/seo.json");

const buildDir = path.join(__dirname, "..", "build");
const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// [pattern, value key]: each pattern captures everything up to the value.
const REPLACEMENTS = [
  [/(<title>)[^<]*(?=<\/title>)/, "title"],
  [/(<meta name="description" content=")[^"]*(?=")/, "description"],
  [/(<link rel="canonical" href=")[^"]*(?=")/, "url"],
  [/(<meta property="og:url" content=")[^"]*(?=")/, "url"],
  [/(<meta property="og:title" content=")[^"]*(?=")/, "title"],
  [/(<meta property="og:description" content=")[^"]*(?=")/, "description"],
  [/(<meta name="twitter:title" content=")[^"]*(?=")/, "title"],
  [/(<meta name="twitter:description" content=")[^"]*(?=")/, "description"],
];

for (const route of routes) {
  const values = {
    title: route.title,
    description: route.description,
    url: siteUrl + route.path,
  };
  let html = template;
  for (const [pattern, key] of REPLACEMENTS) {
    if (!pattern.test(html)) {
      throw new Error(`seo-pages: tag not found in build/index.html: ${pattern}`);
    }
    html = html.replace(pattern, (_, prefix) => prefix + escape(values[key]));
  }
  fs.writeFileSync(path.join(buildDir, route.file), html);
  console.log(`seo-pages: wrote build/${route.file} (${values.url})`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url>\n    <loc>${siteUrl}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(buildDir, "sitemap.xml"), sitemap);
console.log(`seo-pages: wrote build/sitemap.xml (${routes.length} URLs)`);
