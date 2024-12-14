export interface ParsedFile {
    name: string
    content: string
}

export interface ParsedResult {
    files: ParsedFile[]
}

export function parse(input: string): ParsedResult {
    const fileRegex =
        /\/\/\s*([\w.-]+\.\w+)\n([\s\S]*?)(?=\/\/\s*[\w.-]+\.\w+|$)/g
    const files: ParsedFile[] = []
    let match: RegExpExecArray | null

    while ((match = fileRegex.exec(input)) !== null) {
        const [, name, content] = match
        files.push({ name, content: content.trim() })
    }

    return { files }
}
