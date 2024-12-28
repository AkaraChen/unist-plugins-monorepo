# video

Embed video by using image syntax.

## Install

```sh
npm install @akrc/remark-video
```

## Usage

```ts
import { remark } from 'remark'
import video from '@akrc/remark-video'

const processor = remark().use(video)
```

For the options of video, see [`VideoOption`](https://github.com/AkaraChen/unist-plugins-monorepo/blob/main/remark/video/src/index.ts#L18-L26)
