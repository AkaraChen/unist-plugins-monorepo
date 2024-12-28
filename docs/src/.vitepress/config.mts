import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "AKR's unist plugins",
    description: 'A collection of unist plugins for processing',
    themeConfig: {
        nav: [{ text: 'Home', link: '/' }],

        sidebar: [
            {
                text: 'remark',
                items: [
                    {
                        text: 'code-block-file',
                        link: '/remark/code-block-file',
                    },
                    {
                        text: 'hashtag',
                        link: '/remark/hashtag',
                    },
                    {
                        text: 'video',
                        link: '/remark/video',
                    }
                ],
            },
        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/AkaraChen/unist-plugins-monorepo',
            },
        ],
    },
})
