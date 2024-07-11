import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

interface ILogo {}

const Logo: FC<ILogo> = ({}) => {
  return (
    <Link href='/'>
      <Image
        src='/logo.png'
        priority
        width={160}
        height={55}
        alt='logo'
        className='h-auto w-auto'
      />
    </Link>
  )
}
export default Logo
