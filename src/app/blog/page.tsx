import Link from "next/link";
import { BlogFrontMatter } from "@/lib/api-types";
import { getAllBlogs } from "@/lib/markdown";


const getAllBlogsMeta = async () => {
  return await getAllBlogs<BlogFrontMatter>();
};

const BlogPage = async () => {
  const blogPosts = await getAllBlogsMeta();

  return (
    <div className='prose prose-invert text-zinc-400 px-4 sm:px-6 md:px-8 mx-auto mt-12 mb-6'>
      <h1>Blogs</h1>
      {blogPosts.map((post) => {
        return (
          <Link
            key={post.slugId}
            href={`/blog/${post.slugId}`}
            className='flex justify-between items-center my-8 hover:text-neutral-300'
          >
            {/* <span>{post.blogMeta.createDate}</span> */}

            <div className='  items-center'>
              <span className='not-prose font-semibold text-lg text-neutral-300 hover:text-neutral-50'>
                {post.frontmatter.title}
              </span>
              <time className='text-sm text-neutral-500 mx-2 '>
                {post.frontmatter.createDate}
              </time>
            </div>

            <span className='h-[0.5px] bg-neutral-500 mx-2 flex-grow'></span>
            
            {
              post.frontmatter.tags.length && post.frontmatter.tags.map((tag) => (
                <span className='bg-neutral-100 border mx-1 border-black border-opacity-5 px-2 text-sm rounded-full dark:bg-neutral-800 dark:text-neutral-500'>
                  {tag}
                </span>
              ))
            }

            {/* <p className='text-neutral-500 mr-3 flex justify-between mx-2 items-center'>{post.frontmatter.createDate}</p> */}
          </Link>
        );
      })}
    </div>
  );
};

export default BlogPage;
