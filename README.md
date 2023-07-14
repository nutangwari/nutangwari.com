My personal portfolio website built using nexjs 13, tailwindcss and used markdown to create the individual blog pages.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Although project is licensed under MIT License, Feel free to fork the project and use it for personal usage.

Clone the project and run `npm install` or `yarn install` to install the dependencies.

for development server run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Project Directory:
**App**: App folder contains all the pages, it follows Next App router for routing and creating individual pages, all pages can be found under this folder.
**lib**: Lib folder includes basic util methods such as accessing all the markdown files, converting markdown files to HTML etc.
**Components**: Component folder includes UI based commonly used components, all components are react server components, unless it requires some UI side functionality, such components are marked as `use client` at the top of the file.
**_blogs**: All individual blogs are written in markdown and are placed under `_blogs` directory, _ prefix in directory name marks this as private directory. In order to create a new blog page, add new markdown file and start adding your blog content. it will automatically will be listed in the blogs page.


Styling:
All the styles are done using tailwindcss classes, and default configs are added in the tailwind.config.ts file and global.css file




## Deploy on Vercel

Project is deployed on vercel, every commit to main branch triggers auto deployment. Which is default behavior, but sometimes for minor changes i wanted to avoid the auto deployments, hence i have added a script at vercel config, which checks commit message and if there is "[skip deploy]" present in the commit message, it skips deployment for that particular commit. You might see commit messages with skip deploy keyword present in it. for more about vercel deployment check below links:

[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

[Next.js deployment documentation](https://nextjs.org/docs/deployment)
