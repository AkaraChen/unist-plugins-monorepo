import type { Root } from 'mdast'
import { visit } from 'unist-util-visit'
import mime from 'mime'

function isAlphaNumeric(char: string) {
    return /^[a-zA-Z0-9]+$/.test(char)
}

export function extname(input: string) {
    const parts = input.split('.')
    if (parts.length === 1) return null
    const last = parts.pop()
    if (!last || last.trim() === '') return null
    if (!isAlphaNumeric(last[0]!)) return null
    return last.trim()
}

export interface VideoOptions {
    /**
     * By default, the plugin will inspect image node's mime type to determine if it's a video.
     * But you can specify the extensions to match the video, this will disable the mime type check.
     * @default undefined
     * @example ['mp4']
     */
    extensions?: string[]
}

export default function remarkVideos(option?: VideoOptions) {
    const { extensions } = option || {}
    return (tree: Root) => {
        return visit(tree, 'image', node => {
            const ext = extname(node.url)
            if (!ext) return
            if (
                (extensions && extensions.includes(ext)) ||
                (!extensions && mime.getType(ext)?.startsWith('video'))
            ) {
                // @ts-expect-error it's ok
                node.type = 'video'
                node.data = {
                    hName: 'video',
                    hProperties: {
                        src: node.url,
                        controls: true,
                    },
                }
            }
        })
    }
}
