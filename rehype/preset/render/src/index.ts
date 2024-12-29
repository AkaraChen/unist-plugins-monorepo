import type { Preset } from 'unified'
import { createComposer } from 'unified-util-composer'
import { themes as shikiTheme } from '@akrc/shiki-preset'
import rehypeShiki from '@shikijs/rehype'
import rehypeMdxImportMedia from 'rehype-mdx-import-media'

export const rehypeRender: Preset = {
    plugins: [[rehypeShiki, { themes: shikiTheme }], rehypeMdxImportMedia],
}

export const createRehypeRender = createComposer({
    shiki: {
        plugin: rehypeShiki,
        options: { themes: shikiTheme },
    },
    importMedia: { plugin: rehypeMdxImportMedia },
})
