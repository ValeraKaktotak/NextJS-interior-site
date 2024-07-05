'use client'
import type { FC } from 'react'

//Components
import Logo from '@/components/Logo'
import MobileNavigation from '@/components/MobileNavigation'
import Nav from '@/components/Nav'
import ThemeToggler from '@/components/ThemeToggler'

interface IHeader {}

const Header: FC<IHeader> = ({}) => {
  return (
    <header>
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
