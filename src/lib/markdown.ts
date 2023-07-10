import { getBlogById, getSlugs } from "@/lib/api";
import { compileMDX } from "next-mdx-remote/rsc";
import RehypePrettyCode, { Options } from 'rehype-pretty-code';
import { BlogFrontMatter, BlogPostResult, Slug } from "./api-types";

const rehypeOptions: Options = {
    theme: 'dracula-soft',
    // keepBackground: false
}

export async function getMarkdown<T>(slugId: string) {

    const source = getBlogById(slugId);

    const { content, frontmatter} = await compileMDX<T>({
        source,
        options: {
            parseFrontmatter: true,
            mdxOptions: { 
                rehypePlugins: [
                    [RehypePrettyCode, rehypeOptions]
                ]
            }
        }  
    })

    return {
        content,
        frontmatter,
        slugId
    }
}

export function getAllBlogs<T>() {
    return Promise.all(getSlugs().map(async (slug) => {
        return await getMarkdown<T>(slug);
    }));
}