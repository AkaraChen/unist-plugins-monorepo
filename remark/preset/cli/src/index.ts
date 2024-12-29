import remarkPresetLintConsistent from 'remark-preset-lint-consistent'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import remarkPresetLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide'
import remarkMdx from 'remark-mdx'
import remarkLintMaximumLineLength from 'remark-lint-maximum-line-length'
import remarkLintOrderedListMarkerValue from 'remark-lint-ordered-list-marker-value'
import remarkLintFileExtension from 'remark-lint-file-extension'
import type { Preset } from 'unified'

export const cliPreset: Preset = {
    plugins: [
        remarkPresetLintConsistent,
        remarkPresetLintRecommended,
        remarkPresetLintMarkdownStyleGuide,
        remarkMdx,
        [remarkLintMaximumLineLength, false],
        [remarkLintOrderedListMarkerValue, false],
        [remarkLintFileExtension, false],
    ],
}

export default cliPreset
