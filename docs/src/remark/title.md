# title

Extract title from markdown file, emit to `vfile.data.title` (or you can write to other field, as you needed).

## Install

```sh
npm install @akrc/remark-title
```

## Usage

```ts
import { remark } from 'remark'
import remarkTitle from '@akrc/remark-title'

const processor = remark().use([
    remarkTitle,
    // or
    [remarkTitle, { depth: 1, matcher: 0 }], // match the first h1 title
])
```

For the options of remark titie, see [TitleOptions](https://github.com/AkaraChen/unist-plugins-monorepo/blob/main/remark/title/src/index.ts#L7-L25).
