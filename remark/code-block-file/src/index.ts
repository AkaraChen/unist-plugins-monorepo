import { Root } from 'mdast'
import { Position } from 'unist'
import { visit } from 'unist-util-visit'
import { parse, ParsedFile } from './parser'
import { VFile } from 'vfile'

interface FileMeta extends ParsedFile {
    position: Position
}

export function remarkCodeBlockFile() {
    return function (tree: Root, file: VFile) {
        visit(tree, 'code', node => {
            const result = parse(node.value)
            if (!file.data.files) {
                file.data.files = []
            }
            ;(file.data.files as Array<FileMeta>).push(
                ...result.files.map(file => ({
                    ...file,
                    position: node.position,
                })),
            )
        })
    }
}

export default remarkCodeBlockFile
