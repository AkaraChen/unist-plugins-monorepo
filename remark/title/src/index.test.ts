import { remark } from 'remark'
import { test, expect } from 'vitest'
import remarkTitle from '.'

const content = `
# Title

# only-regex-matcher

# number matcher

## Custom depth
`

test('title', async () => {
    const file = await remark().use(remarkTitle).process(content)
    expect(file.data.title).toBe('Title')

    const file2 = await remark()
        .use(remarkTitle, { matcher: /only-regex-matcher/ })
        .process(content)
    expect(file2.data.title).toBe('only-regex-matcher')

    const file3 = await remark()
        .use(remarkTitle, { matcher: 2 })
        .process(content)
    expect(file3.data.title).toBe('number matcher')

    const file4 = await remark().use(remarkTitle, { depth: 2 }).process(content)
    expect(file4.data.title).toBe('Custom depth')
})
