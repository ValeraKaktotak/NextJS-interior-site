'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useRef, type FC } from 'react'

//Components
import { Button } from '@/components/ui/button'

//Utils
import { titleVariants } from '@/utils/animation'

interface Ipage {}

const Page: FC<Ipage> = ({}) => {
  const myRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: myRef,
    offset: ['start end', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <div>
      <div className={`bg-[url('/image/whoarewe.jpg')] bg-cover bg-center`}>
        <h1 className='container py-32 text-center text-6xl font-semibold tracking-widest lg:py-64'>
          Who are we?
        </h1>
      </div>

      <section className='container'>
        <div className='pt-4'>
          <motion.h2
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='text-center text-3xl font-semibold lg:p-10 lg:text-5xl'
          >
            We have great idea & Interior Design
          </motion.h2>

          <motion.p
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='mt-5 pb-10 text-center text-2xl font-medium'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            pariatur molestiae iste. Tempore cum, ut reiciendis dicta veniam,
            aliquam adipisci dignissimos, vero numquam quam labore laborum vitae
            illo enim vel.
          </motion.p>
        </div>

        <section className='items-center gap-x-8 lg:flex'>
          {/*Left Image Section */}
          <motion.section style={{ scale }} ref={myRef} className='w-full'>
            <Image
              src='/image/gallery1123.jpg'
              alt='whoarewe'
              width={700}
              height={700}
              priority
              className='mx-auto'
            />
          </motion.section>

          {/*Right Content Section */}
          <motion.section
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='w-full'
          >
            <p className='mt-6 pb-8 tracking-wide'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              nulla, consequuntur, possimus fugiat reprehenderit quod ab minus
              id molestiae sapiente veniam? Maiores, quae quos! Temporibus natus
              in ab accusamus saepe! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Dicta nulla, consequuntur, possimus fugiat
              reprehenderit quod ab minus id molestiae sapiente veniam? Maiores,
              quae quos! Temporibus natus in ab accusamus saepe! <br /> <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              nulla, consequuntur, possimus fugiat reprehenderit quod ab minus
              id molestiae sapiente veniam? Maiores, quae quos! Temporibus natus
              in ab accusamus saepe! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Dicta nulla, consequuntur, possimus fugiat
              reprehenderit quod ab minus id molestiae sapiente veniam? Maiores,
              quae quos! Temporibus natus in ab accusamus saepe! <br /> <br />
              <span className='text-xl font-extrabold tracking-tight'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                ipsam earum rem obcaecati magnam rerum doloribus, voluptate
                adipisci perferendis, error cumque quasi deleniti quibusdam
                nulla enim laborum totam id deserunt?
              </span>
            </p>
            <Button className='inline-flex items-center rounded-full px-8 py-3 shadow-lg'>
              Read More <ArrowUpRight className='ml-2 h-5 w-5' />
            </Button>
          </motion.section>
        </section>

        {/*Team Section */}
        <section className='lg:py-20'>
          <div className='pb-4 pt-8'>
            <motion.h1
              initial='offscreen'
              whileInView='onscreen'
              variants={titleVariants}
              className='text-center text-4xl font-bold uppercase tracking-wider'
            >
              Team
            </motion.h1>
          </div>

          <section className='grid gap-20 py-8 sm:grid-cols-3 sm:gap-4'>
            <motion.article
              initial='offscreen'
              whileInView='onscreen'
              variants={titleVariants}
              className='border-2 border-primary'
            >
              <div className='-m-0.5 aspect-square bg-gray-100 p-4 text-center transition hover:-translate-y-3 hover:translate-x-3 dark:bg-tertiary'>
                <Image
                  src='/image/profile2.jpg'
                  alt='profile'
                  width={200}
                  height={200}
                  className='mx-auto rounded-full'
                />
                <h2 className='py-4 text-2xl font-semibold uppercase'>
                  Building Surveys
                </h2>
                <p className='text-sm sm:line-clamp-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque, maiores labore! Autem consectetur quo voluptas
                  incidunt sed! Temporibus laudantium, quidem facere dignissimos
                  alias perspiciatis possimus impedit voluptate iusto assumenda
                  sequi!
                </p>
              </div>
            </motion.article>

            <motion.article
              initial='offscreen'
              whileInView='onscreen'
              variants={titleVariants}
              className='border-2 border-primary'
            >
              <div className='-m-0.5 aspect-square bg-gray-100 p-4 text-center transition hover:-translate-y-3 hover:translate-x-3 dark:bg-tertiary'>
                <Image
                  src='/image/profile1.jpg'
                  alt='profile'
                  width={200}
                  height={200}
                  className='mx-auto rounded-full'
                />
                <h2 className='py-4 text-2xl font-semibold uppercase'>
                  Building Surveys
                </h2>
                <p className='text-sm sm:line-clamp-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque, maiores labore! Autem consectetur quo voluptas
                  incidunt sed! Temporibus laudantium, quidem facere dignissimos
                  alias perspiciatis possimus impedit voluptate iusto assumenda
                  sequi!
                </p>
              </div>
            </motion.article>

            <motion.article
              initial='offscreen'
              whileInView='onscreen'
              variants={titleVariants}
              className='border-2 border-primary'
            >
              <div className='-m-0.5 aspect-square bg-gray-100 p-4 text-center transition hover:-translate-y-3 hover:translate-x-3 dark:bg-tertiary'>
                <Image
                  src='/image/profile3.jpg'
                  alt='profile'
                  width={200}
                  height={200}
                  className='mx-auto rounded-full'
                />
                <h2 className='py-4 text-2xl font-semibold uppercase'>
                  Building Surveys
                </h2>
                <p className='text-sm sm:line-clamp-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque, maiores labore! Autem consectetur quo voluptas
                  incidunt sed! Temporibus laudantium, quidem facere dignissimos
                  alias perspiciatis possimus impedit voluptate iusto assumenda
                  sequi!
                </p>
              </div>
            </motion.article>
          </section>
        </section>
      </section>
    </div>
  )
}
export default Page
