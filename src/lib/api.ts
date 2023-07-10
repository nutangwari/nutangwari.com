import fs from 'fs';
import path from 'path';
import { GlobalConfig } from '@/config/app.config';


const { blogsDir } = GlobalConfig;


const ROOT = process.cwd();


const getSlugs = (): string[] => {
    const blogsDirPath = path.join(ROOT, blogsDir);

    const fileNames = fs.readdirSync(blogsDirPath);
    return fileNames.map(file => file.replace('.mdx', ''));
}


const getBlogById = (slugId: string) => {
    const blogPath = path.join(ROOT, blogsDir, `${slugId}.mdx`);
    return fs.readFileSync(blogPath);
}

export {
    getSlugs,
    getBlogById
}