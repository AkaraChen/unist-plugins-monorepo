import type { Preset } from 'unified'
import remarkVideo from '@akrc/remark-video'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import { remarkPluginHashTag } from 'remark-plugin-hashtag'
import { createComposer } from 'unified-util-composer'

export const renderRemark: Preset = {
    plugins: [remarkFrontmatter, remarkGfm, remarkPluginHashTag, remarkVideo],
}

export const createRenderRemark = createComposer({
    frontmatter: { plugin: remarkFrontmatter },
    frontmatterMdx: { plugin: remarkMdxFrontmatter },
    gfm: { plugin: remarkGfm },
    hashtag: { plugin: remarkPluginHashTag },
    video: { plugin: remarkVideo },
})
