# code-block-file

Parse these code block syntax as multiple files, for example:

```ts
// file: src/index.ts

export const a = 1

// file: src/other.ts

export const b = 2
```

will be recognized as:

```json
{
    "files": [
        {
            "path": "src/index.ts",
            "content": "export const a = 1"
        },
        {
            "path": "src/other.ts",
            "content": "export const b = 2"
        }
    ]
}
```

## Install

```sh
npm install remark-code-block-file
```

## Why

This is useful when buiding a search engine for code snippets, or when you want to extract code snippets from markdown files.

## Usage

```ts
import { remark } from 'remark'
import { codeBlockFile } from 'remark-code-block-file'

const processor = remark().use(codeBlockFile)
const result = processor.processSync("Your markdown content")

console.log(result.data.files) // Array of `FileMeta`
```

For the definition of `FileMeta`, see [src/index.ts](../../../remark/code-block-file/src/index.ts)
