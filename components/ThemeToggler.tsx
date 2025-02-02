import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import type { FC } from 'react'
import { Button } from './ui/button'

interface IThemeToggler {}

const ThemeToggler: FC<IThemeToggler> = ({}) => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='h-[50px] w-[50px] rounded-full'
      >
        <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0' />
        <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      </Button>
    </div>
  )
}
export default ThemeToggler
