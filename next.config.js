const rehypePrettyCode = require('rehype-pretty-code');


/** @type {import('rehype-pretty-code').Options} */
const options = {
    theme: 'dracula-soft'
}

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [
            // [
            //     rehypePrettyCode,
            //     options
            // ]
        ]
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
}

module.exports = withMDX(nextConfig)
