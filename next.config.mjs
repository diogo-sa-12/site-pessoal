import createMDX from '@next/mdx'

const withMDX = createMDX({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/site-pessoal' : '',
  images: {
    unoptimized: true,
  },
}

export default withMDX(nextConfig)
