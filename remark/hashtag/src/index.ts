import type { Root } from 'mdast'
import { findAndReplace } from 'mdast-util-find-and-replace'
import { VFile } from 'vfile'

export interface HashTagOptions {
    /**
     * Remove the hash symbol from the tag.
     * @default true
     */
    removeHash?: boolean
}

export function remarkPluginHashTag(options: HashTagOptions = {}) {
    const { removeHash = true } = options
    return function (tree: Root, file: VFile) {
        findAndReplace(tree, [
            [
                /#([^\s#\u4E00-\u9FFF\w]+|[\u4E00-\u9FFF\w]+)(?=\s|$)/g,
                match => {
                    const name = match.slice(1)
                    file.data.tags = file.data.tags || []
                    ;(file.data.tags as string[]).push(name)
                    return removeHash ? name : match
                },
            ],
        ])
    }
}
