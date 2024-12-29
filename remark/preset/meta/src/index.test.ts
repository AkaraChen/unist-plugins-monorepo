import { test, expect } from 'vitest'
import { meta, type Meta } from '.'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'

test('get meta', async () => {
    const processor = unified().use(remarkParse).use(meta).use(remarkStringify)
    const content = `
---
key: value
---

# Title

#any

\`\`\`
// file.txt

114514
\`\`\`
`.trim()
    const file = await processor.process(content)
    const result = file.data as unknown as Meta<{ key: string }>
    console.log(result)
    expect(result.title).toBe('Title')
    expect(result.tags).toEqual(['any'])
    expect(result.files).toEqual([
        {
            name: 'file.txt',
            content: '114514',
            position: {
                start: { line: 9, column: 1, offset: 35 },
                end: { line: 13, column: 4, offset: 62 },
            },
        },
    ])
    expect(result.matter).toEqual({ key: 'value' })
})
