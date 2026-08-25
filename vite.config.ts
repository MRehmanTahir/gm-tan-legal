import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const FALLBACK_SITE_URL = 'https://gm-tan-legal.com'
const SEO_ROUTES = [
  {
    path: '/privacy-policy/',
    title: 'Privacy Policy | GM Tan & Company',
    description: 'Read how GM Tan & Company collects, uses, protects and retains personal data submitted through its website and client enquiry channels.',
    heading: 'Privacy Policy',
  },
  {
    path: '/terms-of-engagement/',
    title: 'Terms of Engagement | GM Tan & Company',
    description: 'General terms concerning the engagement of GM Tan & Company, including scope, instructions, fees, confidentiality, conflicts and termination.',
    heading: 'Terms of Engagement',
  },
  {
    path: '/disclaimer/',
    title: 'Legal Disclaimer | GM Tan & Company',
    description: 'Important information about the general nature of website content, legal advice, enquiries and solicitor-client relationships.',
    heading: 'Disclaimer',
  },
]

function replaceMeta(html: string, attribute: 'name' | 'property', key: string, content: string) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[\\s\\S]*?\\/>`)
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${content}" />`)
}

function createPageHtml(
  baseHtml: string,
  siteUrl: string,
  route: (typeof SEO_ROUTES)[number],
) {
  const pageUrl = `${siteUrl}${route.path}`
  let html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<link rel="canonical" href="[^"]+" \/>/, `<link rel="canonical" href="${pageUrl}" />`)

  html = replaceMeta(html, 'name', 'description', route.description)
  html = replaceMeta(html, 'property', 'og:type', 'website')
  html = replaceMeta(html, 'property', 'og:url', pageUrl)
  html = replaceMeta(html, 'property', 'og:title', route.title)
  html = replaceMeta(html, 'property', 'og:description', route.description)
  html = replaceMeta(html, 'name', 'twitter:title', route.title)
  html = replaceMeta(html, 'name', 'twitter:description', route.description)

  const schemaPattern = /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/
  const schemaMatch = html.match(schemaPattern)
  if (schemaMatch) {
    const schema = JSON.parse(schemaMatch[1])
    schema['@graph'] = schema['@graph'].filter((item: { '@type': string }) => item['@type'] !== 'FAQPage')
    schema['@graph'].push(
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: route.heading,
        headline: route.title,
        description: route.description,
        inLanguage: 'en-MY',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#legal-service` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: route.heading, item: pageUrl },
        ],
      },
    )
    html = html.replace(schemaPattern, `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>`)
  }

  return html
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || FALLBACK_SITE_URL).replace(/\/$/, '')

  return {
    plugins: [
      react(),
      {
        name: 'seo-assets',
        transformIndexHtml(html) {
          return html.replaceAll('__SITE_URL__', siteUrl)
        },
        closeBundle() {
          const outputDir = resolve(process.cwd(), 'dist')
          mkdirSync(outputDir, { recursive: true })
          const baseHtml = readFileSync(resolve(outputDir, 'index.html'), 'utf8')

          for (const route of SEO_ROUTES) {
            const routeDir = resolve(outputDir, route.path.slice(1))
            mkdirSync(routeDir, { recursive: true })
            writeFileSync(resolve(routeDir, 'index.html'), createPageHtml(baseHtml, siteUrl, route))
          }

          let notFoundHtml = baseHtml
            .replace(/<title>[\s\S]*?<\/title>/, '<title>Page Not Found | GM Tan & Company</title>')
            .replace(/<link rel="canonical" href="[^"]+" \/>\s*/, '')
          notFoundHtml = replaceMeta(notFoundHtml, 'name', 'description', 'The requested page could not be found on the GM Tan & Company website.')
          notFoundHtml = replaceMeta(notFoundHtml, 'name', 'robots', 'noindex, follow')
          notFoundHtml = replaceMeta(notFoundHtml, 'property', 'og:url', `${siteUrl}/404`)
          notFoundHtml = replaceMeta(notFoundHtml, 'property', 'og:title', 'Page Not Found | GM Tan & Company')
          notFoundHtml = replaceMeta(notFoundHtml, 'property', 'og:description', 'The requested page could not be found.')
          notFoundHtml = notFoundHtml.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
          writeFileSync(resolve(outputDir, '404.html'), notFoundHtml)

          writeFileSync(
            resolve(outputDir, 'robots.txt'),
            `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
          )
          writeFileSync(
            resolve(outputDir, 'sitemap.xml'),
            `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>2026-08-25</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n${SEO_ROUTES.map((route) => `  <url>\n    <loc>${siteUrl}${route.path}</loc>\n    <lastmod>2026-08-25</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.3</priority>\n  </url>`).join('\n')}\n</urlset>\n`,
          )
        },
      },
    ],
  }
})
