'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { FC } from 'react'

//Components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

//Utils
import { titleVariants } from '@/utils/animation'

interface IFooter {}

const Footer: FC<IFooter> = ({}) => {
  return (
    <footer className='bg-tertiary'>
      <section className='container py-14 lg:grid lg:grid-cols-2'>
        <section className='grid gap-4 pb-4 text-left lg:grid-cols-3 lg:pb-0'>
          <motion.article
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>Company</h2>
            <nav className='flex flex-col'>
              <Link href='/' className='py-1 hover:underline'>
                About Us
              </Link>
              <Link href='/' className='py-1 hover:underline'>
                Press
              </Link>
              <Link href='/' className='py-1 hover:underline'>
                Careers
              </Link>
              <Link href='/' className='py-1 hover:underline'>
                Contact
              </Link>
            </nav>
          </motion.article>

          <motion.article
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>
              Development
            </h2>
            <nav className='flex flex-col'>
              <Link href='/' className='py-1 hover:underline'>
                Documentation
              </Link>
              <Link href='/' className='py-1 hover:underline'>
                Reference
              </Link>
              <Link href='/' className='py-1 hover:underline'>
                Changelog
              </Link>
              <Link href='/' className='py-1 hover:underline'>
                Status
              </Link>
            </nav>
          </motion.article>

          <motion.article
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>Connect</h2>
            <nav className='flex flex-col'>
              <Link href='/' className='py-1 hover:underline'>
                Instagram
              </Link>
              <Link href='/' className='py-1 hover:underline'>
                Twitter
              </Link>
              <Link href='/' className='py-1 hover:underline'>
                Linkedin
              </Link>
              <Link href='/' className='py-1 hover:underline'>
                Facebook
              </Link>
            </nav>
          </motion.article>
        </section>

        <motion.section
          initial='offscreen'
          whileInView='onscreen'
          variants={titleVariants}
        >
          <p className='pb-4 text-xl font-semibold'>Stay Updated</p>
          <div className='relative lg:max-w-sm'>
            <Input
              type='text'
              id='first name'
              placeholder='Email Address'
              className='pr-28'
            />
            <Button className='absolute right-2 top-2 rounded-full px-3 text-sm'>
              Subscribe
            </Button>
          </div>
          <p className='pt-4 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            numquam nam, tempora, sunt recusandae rerum facere dolorum repellat
            nisi rem, consequatur excepturi. Ad dolor praesentium architecto
            doloremque laudantium temporibus dolore.
          </p>
        </motion.section>
      </section>

      {/*Copyright */}
      <section className='bg-black py-10 dark:bg-primary'>
        <div className='container text-center text-white lg:flex lg:justify-between'>
          <div className='pb-4 lg:pb-0'>
            <p>&copy; 2024 Interior. All Rights Reserved</p>
          </div>
          <nav>
            <Link className='p-4 hover:underline' href='/'>
              Privacy
            </Link>
            <Link className='p-4 hover:underline' href='/'>
              Terms
            </Link>
          </nav>
        </div>
      </section>
    </footer>
  )
}
export default Footer
