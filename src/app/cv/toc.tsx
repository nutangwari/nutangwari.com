'use client';
const tocLinks = ['Skills', 'Intro', 'Experience', 'Projects']

export default function TOC() {

    const handleGotoLink = (link: string) => {
        const elm = document.getElementById(link.toLowerCase());

        elm?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    return (
        <ul className="fixed sm:left-[50px] left-[150px] top-[300px]">
            {
                tocLinks.map(link => {
                    return (
                        <li key={link} className="flex items-center group cursor-pointer mb-5" onClick={() => { handleGotoLink(link) }}>
                            <span className="block h-[1px] w-[50px] bg-cyan-700 group-hover:bg-cyan-500 group-hover:w-[80px] transition-all"></span>
                            <span className="ml-2 text-neutral-400 group-hover:text-neutral-100">{link}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}