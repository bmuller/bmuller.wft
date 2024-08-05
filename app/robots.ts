import { baseUrl } from 'app/sitemap'

export default () => (
  {
    rules: [{ userAgent: '*' }],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
)
