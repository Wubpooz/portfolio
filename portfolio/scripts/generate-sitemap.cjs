const fs = require('node:fs');
const path = require('node:path');

const SITE_URL = 'https://mw-portfolio-cfi.pages.dev';
const PUBLIC_DIR = path.join(__dirname, '../public');
const PROJECTS_FILE = path.join(__dirname, '../src/data/projects.ts');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

try {
  console.log('Generating sitemap...');
  
  if (!fs.existsSync(PROJECTS_FILE)) {
    throw new Error(`Projects file not found at ${PROJECTS_FILE}`);
  }

  const fileContent = fs.readFileSync(PROJECTS_FILE, 'utf8');
  
  // Extract all unique project slugs
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const slugs = new Set();
  let match;
  while ((match = slugRegex.exec(fileContent)) !== null) {
    slugs.add(match[1]);
  }

  console.log(`Found ${slugs.size} unique project slug(s).`);

  const urls = [
    { loc: `${SITE_URL}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${SITE_URL}/resume`, changefreq: 'monthly', priority: '0.6' },
    { loc: `${SITE_URL}/projects`, changefreq: 'weekly', priority: '0.9' }
  ];

  for (const slug of Array.from(slugs).sort()) {
    urls.push({
      loc: `${SITE_URL}/projects/${slug}`,
      changefreq: 'monthly',
      priority: '0.7'
    });
  }

  const xmlEntries = urls.map(url => {
    return `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;

  fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf8');
  console.log(`Sitemap successfully written to ${SITEMAP_PATH}`);
} catch (error) {
  console.error('Failed to generate sitemap:', error);
  process.exit(1);
}
