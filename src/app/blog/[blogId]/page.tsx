// import { getMarkdown } from "@/app/markdownt";
import { getSlugs } from "@/lib/api";
import { BlogFrontMatter } from "@/lib/api-types";
import { getMarkdown } from "@/lib/markdown";

type PageParams = {
  blogId: string;
};

export async function generateStaticParams() {
  return getSlugs().map((slug) => ({
    blogId: slug,
  }));
}

const getBlogData = async (slugId: string) => {
  return await getMarkdown<BlogFrontMatter>(slugId);
};

export default async function BlogDetailPage({
  params,
}: {
  params: PageParams;
}) {
  const { blogId } = params;
  const { content, frontmatter } = await getBlogData(blogId);

  return (
    <>
      <div className='prose prose-invert text-zinc-400 px-4 sm:px-6 md:px-8 mx-auto mt-12 mb-36'>
        <h1 className='py-1 mx-auto mt-12 text-4xl tracking-tighter sm:text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500'>
          {frontmatter.title}
        </h1>
        <article>{content}</article>
      </div>
    </>
  );
}
