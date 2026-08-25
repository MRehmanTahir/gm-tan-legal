import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const FALLBACK_SITE_URL = 'https://gm-tan-legal.com'

function replaceMeta(html: string, attribute: 'name' | 'property', key: string, content: string) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[\\s\\S]*?\\/>`)
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${content}" />`)
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
            `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>2026-08-25</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
          )
        },
      },
    ],
  }
})
