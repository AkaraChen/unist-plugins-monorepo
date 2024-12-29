import {
    remarkCodeBlockFile,
    type FileMeta,
} from 'remark-plugin-code-block-file'
import { remarkPluginHashTag } from 'remark-plugin-hashtag'
import remarkTitle from '@akrc/remark-title'
import remarkMatter from '@akrc/remark-matter'
import type { Preset } from 'unified'
import { createComposer } from 'unified-util-composer'
import remarkFrontmatter from 'remark-frontmatter'

export const meta: Preset = {
    plugins: [
        remarkTitle,
        remarkFrontmatter,
        remarkMatter,
        remarkCodeBlockFile,
        remarkPluginHashTag,
    ],
}

export const createMeta = createComposer({
    title: { plugin: remarkTitle },
    codeBlockFile: { plugin: remarkCodeBlockFile },
    hashtag: { plugin: remarkPluginHashTag },
})

export interface Meta<Matter> {
    title: string
    tags: string[]
    files: Array<FileMeta>
    matter: Matter
}
