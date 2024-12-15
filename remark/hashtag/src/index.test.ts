import { it, expect } from 'vitest'
import { remarkPluginHashTag } from '.'
import { remark } from 'remark'

const processor = remark().use(remarkPluginHashTag)

it('should can extract hashtag', async () => {
    const content = `
# Hello
#tag
`.trim()
    const result = await processor.process(content)
    expect(result.toString().includes(`\ntag`)).toBeTruthy()
})

it('should extract multiple hashtags', async () => {
    const content = `
# Hello
#tag1 #tag2 #tag3

#tag4
`.trim()
    const result = await processor.process(content)
    expect(result.data.tags).toEqual(['tag1', 'tag2', 'tag3', 'tag4'])
})

it('not remove hash symbol', async () => {
    const content = `#ok`
    const result = await remark()
        .use(remarkPluginHashTag, { removeHash: false })
        .process(content)
    expect(result.toString().includes(`#ok`)).toBeTruthy()
})
