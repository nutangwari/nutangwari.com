'use client';

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from 'next/navigation'

type NavLink = {
    label: string;
    path: string;
};

const navLinks: NavLink[] = [
    {
        label: "Home",
        path: "/",
    },
    // {
    //     label: "Blog",
    //     path: "/blog",
    // },
    {
        label: "About",
        path: "/about",
    },
    // {
    //     label: "Projects",
    //     path: '/projects'
    // },
    {
        label: "CV",
        path: "/cv",
    },
];

export default function Nav() {
    const pathName = usePathname()
    return (
        <div className='w-full py-2 px-10 flex items-center justify-between '>

            <Logo />

            <div className="flex justify-end gap-x-20 text-neutral-400 ">
                {navLinks.map((link) => {
                    return (
                        <Link className={`
                            ${pathName === link.path ? 'text-neutral-100': ''}
                            hover:text-neutral-300 transition-colors`}
                            href={link.path}
                            key={link.path}>

                            {link.label}

                        </Link>
                    );
                })}
            </div>


        </div>
    );
}
