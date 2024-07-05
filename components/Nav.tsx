import Link from 'next/link'
import type { FC } from 'react'

//Hooks
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface INav {
  containerStyles: string
  linkStyles: string
  underlineStyles: string
}

const links = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/gallery', name: 'gallery' },
  { path: '/projects', name: 'projects' },
  { path: '/contact', name: 'contact' }
]

const Nav: FC<INav> = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`uppercase ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId='underline'
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
export default Nav
