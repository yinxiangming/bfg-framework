import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BFG Framework',
  description: 'Open-source e-commerce and SaaS backend (Django) + admin & storefront (Next.js). Multi-tenant, RBAC, CMS, plugins.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/quickstart' },
      { text: 'Architecture', link: '/guide/architecture' },
      { text: 'Plugins', link: '/guide/plugin' },
      { text: 'Enterprise', link: '/enterprise' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Quick Start', link: '/guide/quickstart' },
          { text: 'Architecture', link: '/guide/architecture' },
          { text: 'Building a Plugin', link: '/guide/plugin' },
        ],
      },
      { text: 'Enterprise Support', link: '/enterprise' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/bfg-framework' },
    ],
    footer: {
      message: 'BFG Framework — Open source. Enterprise support available.',
      copyright: 'Copyright © BFG',
    },
  },
})
