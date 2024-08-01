import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const Header = ({ children, className }: HeaderProps) => {
    return (
        <div className={cn('header', className)}>
            <Link className="md:flex-1" href='/'>
                <Image
                    src={'/assets/icons/logo.svg'}
                    width={120}
                    height={32}
                    className="hidden md:block"
                    alt="Logo with name"
                />
            </Link>

            <Image
                src={'/assets/icons/logo-icon.svg'}
                width={32}
                height={32}
                className="mr-2 md:hidden"
                alt="Logo"
            />
            {children}
        </div>
    )
}

export default Header