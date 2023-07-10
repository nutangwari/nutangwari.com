import { SocialLinks } from "@/lib/app.constant"
import Link from "next/link";

const footerLinks = SocialLinks;

const FooterNote = () => {
    return (
        <div className="text-neutral-400 text-sm ">
            <div>Copyright @ Nutan Gwari {(new Date()).getFullYear()}</div>
            {/* <div>Powered by nextjs & tailwind</div> */}
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="fixed bottom-0 right-0 p-5 w-full flex justify-between">
            <ul className="list-none px-4 flex gap-x-5 text-xl text-neutral-400">
                {
                    footerLinks.map(link => {
                        const SocialIcon = link.icon
                        return (
                            <li key={link.label} className='cursor-pointer transition-colors hover:text-neutral-100'>
                                <Link href={link.url} target='_blank'>
                                    <SocialIcon />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <FooterNote />
        </footer>
    )
}