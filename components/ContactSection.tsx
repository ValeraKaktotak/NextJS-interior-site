'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { FC } from 'react'

//Utils
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores placeat veritatis consequuntur beatae accusamus ducimus perspiciatis dolorum voluptates, sunt saepe fugiat officiis doloribus facere animi sit exercitationem tenetur molestiae.',
    date: 'Jul 10, 2024',
    datetime: '2024-07-10',
    category: { title: '4.7', href: '#' },
    author: {
      name: 'Natasha',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: '/image/profile1.jpg'
    }
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores placeat veritatis consequuntur beatae accusamus ducimus perspiciatis dolorum voluptates, sunt saepe fugiat officiis doloribus facere animi sit exercitationem tenetur molestiae.',
    date: 'Jul 10, 2024',
    datetime: '2024-07-10',
    category: { title: '4.9', href: '#' },
    author: {
      name: 'Michael Chris',
      role: 'Co-Founder / SEO',
      href: '#',
      imageUrl: '/image/profile2.jpg'
    }
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores placeat veritatis consequuntur beatae accusamus ducimus perspiciatis dolorum voluptates, sunt saepe fugiat officiis doloribus facere animi sit exercitationem tenetur molestiae.',
    date: 'Jul 10, 2024',
    datetime: '2024-07-10',
    category: { title: '4.2', href: '#' },
    author: {
      name: 'Samuel JOS',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: '/image/profile3.jpg'
    }
  }
]

interface IContactSection {}

const ContactSection: FC<IContactSection> = ({}) => {
  return (
    <section className='pt-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <motion.h2
          initial='offscreen'
          whileInView='onscreen'
          variants={titleVariants}
          className='text-3xl font-bold tracking-tight sm:text-4xl'
        >
          Customer Reviews
        </motion.h2>
        <motion.p
          initial='offscreen'
          whileInView='onscreen'
          variants={desVariants}
          className='mt-2 text-lg leading-8 text-muted-foreground'
        >
          Learn how to grow your business with our expert advice.
        </motion.p>

        <motion.section
          initial='offscreen'
          whileInView='onscreen'
          variants={tagVariants}
          className='gap-y16 mx-auto mt-10 grid grid-cols-1 gap-x-8 border-b border-t border-gray-200 py-10 sm:mt-16 sm:py-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className='flex max-w-xl flex-col items-start justify-between'
            >
              <div className='flex items-center gap-x-4 text-xs'>
                <time dateTime={post.datetime}>
                  <Image
                    src='/image/star.svg'
                    alt='star'
                    width={80}
                    height={5}
                  />
                </time>
                <a
                  href={post.category.href}
                  className='relative z-10 rounded-full bg-primary px-3 py-1.5 font-medium text-white transition-all duration-300 hover:bg-gray-100 hover:text-black'
                >
                  {post.category.title}
                </a>
              </div>
              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600'>
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className='mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground'>
                  {post.description}
                </p>
              </div>
              <div className='relative mt-8 flex items-center gap-x-4'>
                <Image
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  width={50}
                  height={50}
                  className='rounded-full bg-gray-500'
                />
                <div className='text-sm leading-6'>
                  <p className='font-semibold'>
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <p className='text-muted-foreground'>{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.section>
      </div>
    </section>
  )
}
export default ContactSection
