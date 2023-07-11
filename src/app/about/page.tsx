import Link from "next/link"
import Image from "next/image";

const experience = [
    {
        company: 'VMware',
        url: 'https://www.vmware.com',
        image: 'vmw.jpg',
        position: 'Senior Member of Technical Staff',
        tenure: '2021 — 2023',
        skills: ['angular', 'typescript', 'nodejs', 'ngrx', 'scss', 'clarity', 'docker']
    },
    {
        company: 'NICE',
        url: 'https://www.nice.com',
        image: 'nice.png',
        position: 'Specialist Software Engineer',
        tenure: '2018 — 2021',
        skills: ['angular', 'typescript', 'canvas', 'svg', 'backboneJs', 'rxjs', 'scss', 'bootstrap', 'ionic']
    },
    {
        company: 'Citi',
        url: 'https://www.citi.com',
        image: 'citi.png',
        position: 'Assistant Manager - UI',
        tenure: '2017 — 2018',
        skills: ['angular', 'typescript', 'react', 'rxjs', 'scss', 'bootstrap']
    },
    {
        company: 'SunGard (now FIS)',
        url: 'https://www.nice.com',
        image: 'fis.jpg',
        position: 'Product Development Engineer',
        tenure: '2015 — 2017'
    },
    {
        company: 'TCS',
        url: 'https://www.tcs.com',
        image: 'tcs.webp',
        position: 'Software Engineer',
        tenure: '2013 — 2015'
    }
]

export default function About() {
    return (
        <div className="mx-auto mt-10 w-3/5 mb-20">

            <h2 className="text-center text-2xl">Hey, I&apos;m Nutan Gwari 👋</h2>

            <p className="my-16 text-xl font-extralight">
                I&apos;am frontend engineer, passionate for developing experience rich web applications.

                Proficient in technologies including Angular, React,
                TypeScript, and SCSS, I have successfully implemented features for complex modules and
                developing modular and customizable component libraries for different projects. Additionally,
                automated common tasks and improved productivity by developing custom utilities and libraries.
                Throughtout my career I have collaborated with cross-functional teams, addressed technical debts, and ensured the
                smooth delivery of features.
            </p>``

            <section>
                <h2 className="mb-2 text-lg">Work Experience:</h2>
                {
                    experience.map(exp => {
                        return (
                            <ul key={exp.company} className="list-none w-full">
                                <li className="flex gap-x-4 px-4 -mx-4 py-1 rounded-[12px] border-none hover:bg-neutral-50 dark:hover:bg-neutral-800 group">

                                    <Link href={exp.url}
                                        className="flex flex-grow gap-x-4 px-4 -mx-4 pt-4 rounded-[12px] border-none"
                                        target="_blank">
                                        <Image className="rounded-full object-contain h-10 w-10" width={40} height={40} src={exp.image} alt="" />

                                        <div className="flex flex-col text-sm border-b border-neutral-100 dark:border-neutral-900 flex-auto pb-4 text-neutral-700 group-hover:border-transparent dark:text-neutral-300">
                                            <div className="flex justify-between gap-x-2 items-center">
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="text-neutral-500 dark:text-neutral-500 flex justify-between gap-x-2 items-center">
                                                <span>{exp.position}</span>
                                                <span className="text-neutral-400 dark:text-neutral-500 tabular-nums">{exp.tenure}</span>
                                            </div>
                                            <div>
                                                {
                                                    false && exp.skills?.length && exp.skills?.map(skill => (
                                                        <span key={skill} className="mr-1 border-none px-2 py-1 rounded-full text-sm text-neutral-400 bg-black">{skill}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </Link>

                                </li>
                            </ul>
                        )
                    })
                }
            </section>
        </div>
    )
}