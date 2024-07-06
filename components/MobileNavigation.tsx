import { AlignJustify } from 'lucide-react'
import type { FC } from 'react'

//Components
import Logo from '@/components/Logo'
import Nav from '@/components/Nav'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'

interface IMobileNavigation {}

const MobileNavigation: FC<IMobileNavigation> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex h-full flex-col items-center justify-between py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <SheetClose asChild>
              <Nav
                containerStyles='flex flex-col items-center gap-y-6'
                linkStyles='relative hover:text-primary transition-all text-1xl font-semibold'
                underlineStyles='absolute left-0 top-full h-[2px] w-full bg-primary'
              />
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNavigation
