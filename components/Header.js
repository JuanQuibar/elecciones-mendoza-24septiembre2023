'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
const Header = () => {

    const pathname = usePathname()

    return(

        <nav className='pl-3 flex gap-3 uppercase mt-3 md:text-[22px] font-[400] text-[#606060]  '>

            <Link href='/' className={pathname === '/' ? 'font-[900] text-[#00549e] border-b-2 border-b-[#00549e]' : '' } >
                <p className=''>gobernadores</p>
            </Link>

            <Link href='/intendentes' className={pathname === '/intendentes' ? 'font-[900] text-[#00549e] border-b-2 border-b-[#00549e]' : '' }>
                <p className='  '>intendentes</p>
            </Link>

      </nav>
    )

}

export default Header