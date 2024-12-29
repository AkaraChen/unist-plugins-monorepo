import type { Root } from 'mdast'
import type { VFile } from 'vfile'
import { matter } from 'vfile-matter'

export const remarkPluginMatter = () => {
    return function (_: Root, file: VFile) {
        matter(file)
    }
}

export default remarkPluginMatter
