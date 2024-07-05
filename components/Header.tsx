'use client'
import type { FC } from 'react'
import ThemeToggler from './ThemeToggler'

interface IHeader {}

const Header: FC<IHeader> = ({}) => {
  return (
    <div>
      <ThemeToggler />
    </div>
  )
}
export default Header
