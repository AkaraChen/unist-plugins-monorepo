import { it, expect } from 'vitest'
import { parse } from './parser'

it('should can parse one file', () => {
    const content = `
// file.txt

Hello, world!
`
    const result = parse(content)
    expect(result).toEqual({
        files: [
            {
                name: 'file.txt',
                content: 'Hello, world!',
            },
        ],
    })
})

it('should can parse multiple files', () => {
    const content = `
// file1.txt

Hello, world!

// file2.txt
Hi, there!

// file3.txt

Would
`
    const result = parse(content)
    expect(result).toEqual({
        files: [
            {
                name: 'file1.txt',
                content: 'Hello, world!',
            },
            {
                name: 'file2.txt',
                content: 'Hi, there!',
            },
            {
                name: 'file3.txt',
                content: 'Would',
            },
        ],
    })
})
