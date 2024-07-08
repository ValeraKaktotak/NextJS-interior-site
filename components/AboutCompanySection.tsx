'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { FC } from 'react'

//Utils
import { titleVariants } from '@/utils/animation'

interface IAboutCompanySection {}

const AboutCompanySection: FC<IAboutCompanySection> = ({}) => {
  return (
    <div className='container h-[auto] py-12 xl:py-24'>
      <div className='grid place-items-center lg:grid-cols-2'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          variants={titleVariants}
        >
          <Image
            src='/image/aboutfront.png'
            alt='About'
            width={900}
            height={500}
            className='max-md:hidden'
          />
        </motion.div>
        <div className='items-center'>
          <motion.h2
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='px-12 py-4 text-3xl font-bold leading-tight lg:text-5xl'
          >
            We Are Awards Winning Company
          </motion.h2>
          <motion.p
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='mt-3 px-12 uppercase tracking-wider text-gray-400'
          >
            World Awards
          </motion.p>
          <motion.p
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='mt-4 px-12 pb-4'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            dolores, ad repellat similique minima corporis eligendi in dolorum,
            nesciunt vel voluptatum eum deserunt enim nisi sapiente. Eos aliquid
            dolores quo!
          </motion.p>
          <motion.p
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='px-12 pb-4'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            dolores, ad repellat similique minima corporis eligendi in dolorum,
            nesciunt vel voluptatum eum deserunt enim nisi sapiente. Eos aliquid
            dolores quo!
          </motion.p>
        </div>
      </div>
    </div>
  )
}
export default AboutCompanySection
