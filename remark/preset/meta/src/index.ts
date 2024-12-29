import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import {
    remarkCodeBlockFile,
    type FileMeta,
} from 'remark-plugin-code-block-file'
import { remarkPluginHashTag } from 'remark-plugin-hashtag'
import remarkTitle from '@akrc/remark-title'
import type { Preset } from 'unified'
import { createComposer } from 'unified-util-composer'

export const meta: Preset = {
    plugins: [
        remarkTitle,
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkCodeBlockFile,
        remarkPluginHashTag,
    ],
}

export const createMeta = createComposer({
    title: { plugin: remarkTitle },
    frontmatter: { plugin: remarkFrontmatter },
    mdxFrontmatter: { plugin: remarkMdxFrontmatter },
    codeBlockFile: { plugin: remarkCodeBlockFile },
    hashtag: { plugin: remarkPluginHashTag },
})

export interface Meta<Matter> {
    title: string
    tags: string[]
    files: Array<FileMeta>
    frontMatter: Matter
}
