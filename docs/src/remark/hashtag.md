# hashtag

Extract hashtag from markdown file, emit to `vfile.data.tags`, and remove hash symbol from the content.

## Install

```sh
npm install remark-hashtag
```

## Usage

```ts
import { remark } from 'remark'
import hashtag from 'remark-hashtag'

const processor = remark().use(hashtag, { removeHash: false })
```

For the options of hashtag, see .
