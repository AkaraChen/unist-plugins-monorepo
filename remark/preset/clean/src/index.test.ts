import { test, describe, expect } from 'vitest'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { remark } from 'remark'
import remarkStringify from 'remark-stringify'
import clean from '.'

const content = `
# Title
`

test('clean unified', async () => {
    const processor = unified().use(remarkParse).use(clean).use(remarkStringify)

    const file = await processor.process(content)
    expect(file.toString()).toBe('Title\n')
})

test('clean remark', async () => {
    const processor = remark().use(clean)
    const file = await processor.process(content)
    expect(file.toString()).toBe('Title\n')
})
