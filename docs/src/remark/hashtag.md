# hashtag

Extract hashtag from markdown file, emit to `vfile.data.tags`, and remove hash symbol from the content.

## Install

```sh
npm install remark-plugin-hashtag
```

## Usage

```ts
import { remark } from 'remark'
import hashtag from 'remark-plugin-hashtag'

const processor = remark().use(hashtag, { removeHash: false })
```

For the options of hashtag, see [HashTagOptions](https://github.com/AkaraChen/unist-plugins-monorepo/blob/main/remark/hashtag/src/index.ts#L5-L11).
