export interface AllPosts {
    title: string;
    content: string;
    createdAt: string;
    excerpt: string;
}

export interface BlogFrontMatter {
    title: string;
    tags: string[];
    createDate: string;
    updateDate?: Date;
    isPublised: boolean;
    description: string;
}

export type BlogContent = React.ReactElement;
export type Slug = string;

export interface BlogPostResult {
    content?: BlogContent;
    frontmatter: BlogFrontMatter;
    slugId: string;
}
