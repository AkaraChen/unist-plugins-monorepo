import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AKR's unist plugins",
  description: "A collection of unist plugins for processing",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'remark',
        items: [
          { text: 'remark-plugin-code-block-file', link: '/remark/code-block-file' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AkaraChen/unist-plugins-monorepo' }
    ]
  }
})
