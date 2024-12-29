import { mdx } from '@akrc/next-mdx'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMdx = mdx({})

export default withMdx(nextConfig)
