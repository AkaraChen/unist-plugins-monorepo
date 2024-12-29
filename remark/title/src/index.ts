import type { Heading, Root, Text } from 'mdast'
import { CONTINUE, EXIT, visit } from 'unist-util-visit'
import type { VFile } from 'vfile'

export type FuncMatcher = (node: Heading) => string | false

export interface TitleOptions {
    /**
     * The depth of the title node
     * @default 1
     */
    depth?: number
    /**
     * Find the first matched h1 node
     * When input a regex, return the first match of regex
     * When input a function, return the first node that function return true
     * When input a number, return the nth node
     */
    matcher?: RegExp | FuncMatcher | number
    /**
     * Write to the field of vfile.data
     * @default 'title'
     */
    field?: string
}

export default function remarkTitle(options: TitleOptions = {}) {
    const { matcher = 0, field = 'title', depth = 1 } = options

    return function (root: Root, file: VFile) {
        let idx = -1

        return visit(root, 'heading', node => {
            if (node.depth !== depth) return CONTINUE
            idx++
            const text = (node.children[0] as Text).value
            const write = (title?: string) => {
                file.data[field] = title || text
            }
            if (typeof matcher === 'number') {
                if (idx === matcher) {
                    write()
                    return EXIT
                }
            } else if (matcher instanceof RegExp) {
                console.log(matcher, text)
                if (matcher.test(text)) {
                    write()
                    return EXIT
                }
            } else {
                const result = matcher(node)
                if (result) {
                    write(result)
                    return EXIT
                }
            }
        })
    }
}
