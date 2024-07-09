'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

// Import Swiper React components
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

//Components
import { Button } from '@/components/ui/button'

//Utils
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'

interface ICatalogSwiperSection {}

const CatalogSwiperSection: FC<ICatalogSwiperSection> = ({}) => {
  return (
    <div className='py-8 lg:py-28'>
      <div className='container grid pb-8 lg:grid-cols-1'>
        <div className='text-left'>
          <motion.h1
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='py-4 text-4xl font-medium lg:py-0 lg:text-6xl'
          >
            Modern Classic
          </motion.h1>
          <motion.h2
            initial='offscreen'
            whileInView='onscreen'
            variants={desVariants}
            className='pb-6 text-xl font-bold tracking-wider'
          >
            LUXURY DECOR TO CREATE COMFORT IN OUR HOME
          </motion.h2>
        </div>

        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          variants={tagVariants}
          className='grid grid-cols-2 gap-x-8 text-gray-500'
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            praesentium corporis eveniet, vero quisquam, eos quod nesciunt qui
            non, dicta provident sit commodi consequatur consequuntur molestiae
            nisi similique est? Quas.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            praesentium corporis eveniet, vero quisquam, eos quod nesciunt qui
            non, dicta provident sit commodi consequatur consequuntur molestiae
            nisi similique est? Quas.
          </p>
        </motion.div>
        <Link href='/gallery'>
          <Button className='mt-4 flex items-center rounded-full px-8 py-3 text-white shadow-lg'>
            View Gallery <ArrowUpRight className='ml-2 h-5 w-5' />
          </Button>
        </Link>
      </div>

      {/*Swiper Section */}

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src='/image/swiper1.jpg'
            alt='swiperImg1'
            width={520}
            height={220}
            className='w-full'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/image/swiper2.jpg'
            alt='swiperImg2'
            width={520}
            height={220}
            className='w-full'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/image/swiper3.jpg'
            alt='swiperImg3'
            width={520}
            height={220}
            className='w-full'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/image/swiper4.jpg'
            alt='swiperImg4'
            width={520}
            height={220}
            className='w-full'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/image/swiper5.jpg'
            alt='swiperImg5'
            width={520}
            height={220}
            className='w-full'
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  )
}
export default CatalogSwiperSection
