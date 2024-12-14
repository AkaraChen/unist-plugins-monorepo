import { it, expect } from 'vitest'
import remarkCodeBlockFile from '.'
import { remark } from 'remark'

it('should can parse', () => {
    const content = `
\`\`\`
// file.txt

Hello
\`\`\`
`
    const result = remark().use(remarkCodeBlockFile).processSync(content)
    expect(result.data).toEqual({
        files: [
            {
                name: 'file.txt',
                content: 'Hello',
                position: {
                    start: { line: 2, column: 1, offset: 1 },
                    end: { line: 6, column: 4, offset: 27 },
                },
            },
        ],
    })
})
