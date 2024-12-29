import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import strip from 'strip-markdown'
import type { Preset } from 'unified'
import { createComposer } from 'unified-util-composer'

export const clean: Preset = {
    plugins: [remarkGfm, remarkFrontmatter, remarkStringify, strip],
}

export const createClean = createComposer({
    gfm: { plugin: remarkGfm },
    frontmatter: { plugin: remarkFrontmatter },
    stringify: { plugin: remarkStringify },
    strip: { plugin: strip },
})

export default clean
