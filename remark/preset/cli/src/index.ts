export const cliPreset = {
    plugins: [
        'remark-preset-lint-consistent',
        'remark-preset-lint-recommended',
        'remark-preset-lint-markdown-style-guide',
        'remark-mdx',
        ['remark-lint-maximum-line-length', false],
        ['remark-lint-ordered-list-marker-value', false],
        ['remark-lint-file-extension', false],
    ],
}

export default cliPreset
