import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import strip from 'strip-markdown'
import type { Preset } from 'unified'

export const clean: Preset = {
    plugins: [
        remarkParse,
        remarkGfm,
        remarkFrontmatter,
        remarkStringify,
        strip,
    ],
}

export default clean
