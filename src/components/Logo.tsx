import Link from "next/link";


export default function Logo() {

    return (
        <Link className='flex items-center tracking-tighter cursor-pointer text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500 select-none'
           href="/">

            <span className="">&lt;nutan /&gt;</span>

        </Link>
    )
}