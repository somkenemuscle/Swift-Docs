import Link from "next/link"
import { cn } from "@/lib/utils"

const Header = ({ children, className }: HeaderProps) => {
    return (
        <div className={cn('header', className)}>
            <Link className="md:flex-1" href='/'>
                <h1 className='font-extrabold text-black'>📑 Swift <span className='font-extrabold text-slate-600'>Docs</span></h1>
            </Link>
            {children}
        </div>
    )
}

export default Header