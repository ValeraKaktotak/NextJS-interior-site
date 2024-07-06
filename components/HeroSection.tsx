'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import type { FC } from 'react'

//Components
import { Button } from '@/components/ui/button'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'

interface IHeroSection {}

const HeroSection: FC<IHeroSection> = ({}) => {
  return (
    <div className='container h-[auto] py-12 text-center lg:flex lg:justify-between lg:py-20 lg:text-left xl:py-24'>
      {/*Left section */}
      <div className='lg:w-1/2 lg:py-8 xl:py-14'>
        <motion.p
          initial='offscreen'
          animate='onscreen'
          variants={titleVariants}
          className='uppercase tracking-widest'
        >
          Offer for the best Interior
        </motion.p>
        <motion.h1
          initial='offscreen'
          animate='onscreen'
          variants={desVariants}
          className='h1'
        >
          Make your home a <br />
          piece of art
        </motion.h1>
        <motion.p
          initial='offscreen'
          animate='onscreen'
          variants={tagVariants}
          className='pb-6 text-muted-foreground xl:pb-10'
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          molestias animi omnis ullam pariatur aperiam doloremque! Praesentium
          assumenda fuga aliquid reiciendis nisi corporis numquam neque quaerat!
          Odit expedita fuga velit.
        </motion.p>
        <motion.div
          initial='offscreen'
          animate='onscreen'
          variants={tagVariants}
        >
          <Button className='inline-flex items-center rounded-full px-8 py-3 text-white shadow-lg'>
            Book now <ArrowUpRight className='ml-2 h-5 w-5' />
          </Button>
        </motion.div>
      </div>

      {/*Right image section */}
      <motion.div
        initial='offscreen'
        animate='onscreen'
        variants={titleVariants}
        className='relative lg:w-1/2'
      >
        <Image
          src='/image/hall.png'
          alt='hall'
          width={800}
          height={500}
          className='absolute left-0 hidden lg:block lg:h-[344px] lg:w-[500px] xl:h-[448px] xl:w-[700px]'
        />
      </motion.div>
    </div>
  )
}
export default HeroSection
