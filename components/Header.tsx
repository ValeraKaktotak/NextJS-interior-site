'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type FC } from 'react'

//Components
import Logo from '@/components/Logo'
import MobileNavigation from '@/components/MobileNavigation'
import Nav from '@/components/Nav'
import ThemeToggler from '@/components/ThemeToggler'

interface IHeader {}

const Header: FC<IHeader> = ({}) => {
  const [header, setHeader] = useState(false)
  const path = usePathname()

  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    }
    window.addEventListener('scroll', scrollYPos)

    return () => window.removeEventListener('scroll', scrollYPos)
  }, [])

  return (
    <header
      className={`${
        header
          ? 'bg-tertiary py-4 shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 transition-all ${path === '/' && 'bg-[#fff]'}`}
    >
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/*Logo Section */}
          <Logo />
          <div className='flex items-center gap-x-6'>
            {/*Nav Section */}
            <Nav
              containerStyles='hidden sm:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] w-full bg-primary'
            />

            {/*Theme Toggle */}
            <ThemeToggler />

            {/*Mobile Navigation */}
            <div className='sm:hidden'>
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
