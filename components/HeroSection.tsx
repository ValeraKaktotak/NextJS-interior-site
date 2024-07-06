import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import type { FC } from 'react'

//Components
import { Button } from './ui/button'

interface IHeroSection {}

const HeroSection: FC<IHeroSection> = ({}) => {
  return (
    <div className='container h-[auto] py-12 text-center lg:flex lg:justify-between lg:py-20 lg:text-left xl:py-24'>
      {/*Left section */}
      <div className='lg:w-1/2 lg:py-8 xl:py-14'>
        <p className='uppercase tracking-widest'>Offer for the best Interior</p>
        <h1 className='h1'>
          Make your home a <br />
          piece of art
        </h1>
        <p className='pb-6 text-muted-foreground xl:pb-10'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          molestias animi omnis ullam pariatur aperiam doloremque! Praesentium
          assumenda fuga aliquid reiciendis nisi corporis numquam neque quaerat!
          Odit expedita fuga velit.
        </p>
        <Button className='inline-flex items-center rounded-full px-8 py-3 text-white shadow-lg'>
          Book now <ArrowUpRight className='ml-2 h-5 w-5' />
        </Button>
      </div>

      {/*Right image section */}
      <div className='lg:w-1/2'>
        <Image
          src='/image/hall.png'
          alt='hall'
          width={800}
          height={500}
          className='absolute right-20 hidden lg:block lg:h-[344px] lg:w-[500px] xl:h-[448px] xl:w-[700px]'
        />
      </div>
    </div>
  )
}
export default HeroSection
