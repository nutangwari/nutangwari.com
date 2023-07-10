import Link from "next/link";
import { CoreSkills, Resume } from "./resume-keypoints"
import { FiArrowUpRight as ArrowIcon } from 'react-icons/fi';
import { SocialLinks } from "@/lib/app.constant";
import TOC from "./toc";

const experience = Resume;
const socialLinks = SocialLinks;
const coreSkills = CoreSkills

export default function CV() {
    return (
        <div className="mx-auto mt-10 w-3/5 mb-20 relative">

            <TOC />

            <header>
                <h1 className="text-3xl">Nutan Gwari</h1>
                <h2 className="text-neutral-300">Frontend Engineer</h2>
                <div className="flex mt-2 text-neutral-500">
                    { socialLinks.map(link => (
                        <Link className="mr-3" href={link.url} target='_blank'><link.icon /></Link>
                    ))}
                </div>
            </header>

            {/* Core Skills */}
            <section id="skills" className="mt-20 scroll-m-40">
                <h2 className="text-neutral-100 text-lg mb-5">Skills: </h2>
                <div className="flex flex-wrap">
                { coreSkills.map(skill =>(
                    <div className="rounded-full py-1 px-3 bg-black text-cyan-500 text-sm mr-3 mt-1">{skill}</div>
                ))}
                </div>
                
            </section>

            {/* Intro */}
            <section id="intro" className="mt-20 text-neutral-400 scroll-m-40">
                <h2 className="text-neutral-100 text-lg mb-5">Intro: </h2>
                <p className="mb-3">
                    I started my career in 2013 as a Junior Software Engineer at <Link href="https://www.tcs.com" target="_blank" className="text-cyan-500 font-bold">TCS</Link> and have since gained valuable experience working with product-based organizations in various domains.
                </p>

                <p className="mb-3">
                    During my time at <Link href="https://www.sungard.com" target="_blank" className="text-cyan-500 font-bold">SunGard</Link>, I was part of the core R&D team where I developed highly performant and customizable UI widgets for the company-wide UI framework. I played a key role in promoting framework adoption, delivering new releases, and maintaing multiple release versions.
                </p>

                <p className="mb-3">
                    At <Link href="https://www.citi.com" target="_blank" className="text-cyan-500 font-bold"> Citi</Link>, I led the frontend engineering efforts for internal compliance products, revamping legacy applications using modern Angular frameworks and following company branding guidelines. I also participated in the StepUp program, mentoring teams in Angular, TypeScript, and RxJS
                </p>

                <p className="mb-3">
                    In my role as a Specialist Software Engineer at <Link href="https://www.nice.com" target="_blank" className="text-cyan-500 font-bold">NICE</Link> working on the <Link href="https://www.satmetrix.com" target="_blank" className="underline text-green-500">Satmetrix</Link> product, I led the UI team in building a survey building framework and a high-performance survey rendering engine. I also developed a Mobile SDK npm package, which won recognition in the company-wide <b>NICE Global Hackathon</b>. Additionally, I was responsible for identifying and addressing security vulnerabilities, taking tech sessions and automatic performance benchmarking.
                </p>

                <p className="mb-3">
                    Currently, as a Senior Member of Technical Staff at <Link href="https://www.vmware.com" target="_blank" className="text-cyan-500 font-bold">VMware</Link>, working on the <Link href="https://www.vmware.com/in/products/nsx.html" target="_blank" className="underline text-green-500">NSX</Link> product, specializing in Network Security and Virtualization. I develop and maintain modules such as NAT, DNS, and DHCP, and have created Node.js utilities and libraries to automate processes. I also contribute to maintaining <Link href="https://clarity.design/" target="_blank" className="underline text-green-500">Clarity</Link> components using <kbd>Storybook</kbd>.
                </p>
            </section>

            {/* Experience */}
            <section id="experience" className="mt-20 container grid text-neutral-400 scroll-m-40">
                <h2 className="text-neutral-100 text-lg mb-5">Experience: </h2>
                {
                    experience.map(job => {
                        return (
                            <div className="grid grid-cols-10 mb-16 items-baseline gap-10">
                                <div className="col-span-2">{job.tenure}</div>
                                <div className="col-span-8">
                                    <h3 className="flex flex-col mb-3">
                                        <span className="text-xl text-neutral-100">{job.designation}</span>
                                        <Link className="flex items-center text-cyan-500 hover:text-cyan-300 transition-colors" href={job.url} target="_blank">
                                            {/* <img src={job.image} className="object-contain rounded-full h-6 w-6 mr-2"/> */}
                                            <span>{job.company}</span>
                                            <ArrowIcon className="ml-1" size="1rem" />
                                        </Link>
                                    </h3>
                                    <ul className="list-disc">
                                        {job.points.map(point => <li>{point}</li>)}
                                    </ul>

                                    <ul className="mt-3">
                                        {job.skills.map(skill => (<span
                                            className="rounded-full inline-block text-sm 
                                            text-purple-400 bg-neutral-800 mr-3 mt-1 px-3 py-1">
                                            {skill}
                                        </span>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

        </div>
    )
}