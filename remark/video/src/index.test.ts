import { test, expect } from 'vitest'
import { extname } from '.'
import { remark } from 'remark'
import remarkImage from './index'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

test('extname', () => {
    expect(extname('mp4')).toBe(null)
    expect(extname('video.mp4')).toBe('mp4')
    expect(extname('video.mp4.mp4')).toBe('mp4')
    expect(extname('video')).toBe(null)
    expect(extname('video.')).toBe(null)
    expect(extname('video. ')).toBe(null)
    expect(extname('video. .')).toBe(null)
    expect(extname('./video')).toBe(null)
    expect(extname('./video.mp4')).toBe('mp4')
    expect(extname('.\\video.mp4 ')).toBe('mp4')
    expect(extname('C:\\video.mp4')).toBe('mp4')
    expect(extname('C://e1//video.mp4')).toBe('mp4')
    expect(extname('/home/usr/a.mp4')).toBe('mp4')
})

test('should match mime', async () => {
    const processor = remark()
        .use(remarkImage)
        .use(remarkRehype)
        .use(rehypeStringify)
    const input = '![video](video.mp4)'
    const vfile = await processor.process(input)
    expect(vfile.toString()).include('<video')
})

test('should match extensions', async () => {
    const processor = remark()
        .use(remarkImage, { extensions: ['mp4'] })
        .use(remarkRehype)
        .use(rehypeStringify)
    const input = '![video](video.mp4)'
    const vfile = await processor.process(input)
    expect(vfile.toString()).include('<video')
})

test('should not match extensions', async () => {
    const processor = remark()
        .use(remarkImage, { extensions: ['jpg'] })
        .use(remarkRehype)
        .use(rehypeStringify)
    const input = '![video](video.mp4)'
    const vfile = await processor.process(input)
    expect(vfile.toString()).not.include('<video')
})
