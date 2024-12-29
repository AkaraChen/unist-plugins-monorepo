import withMdx from '@next/mdx'
import { rehypeRender, createRehypeRender } from '@akrc/rehype-preset-render'
import { renderRemark, createRenderRemark } from '@akrc/remark-preset-render'
import type { NextConfig } from 'next'

export interface MdxOptions {
    rehypeComposer?: Parameters<typeof createRehypeRender>[0]
    remarkComposer?: Parameters<typeof createRenderRemark>[0]
}

export type WithMDX = (config: NextConfig) => NextConfig

export const mdx = (options: MdxOptions): WithMDX => {
    const { rehypeComposer, remarkComposer } = options
    const rehypePlugins = rehypeComposer
        ? createRehypeRender(rehypeComposer)
        : rehypeRender.plugins
    const remarkPlugins = remarkComposer
        ? createRenderRemark(remarkComposer)
        : renderRemark.plugins
    return withMdx({
        options: {
            rehypePlugins,
            remarkPlugins,
        },
    })
}
