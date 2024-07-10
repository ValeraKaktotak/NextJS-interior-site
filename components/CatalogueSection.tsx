import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

//Utils
import { truncateText } from '@/utils/truncate'

interface ICatalogueSection {}

const CatalogueSection: FC<ICatalogueSection> = ({}) => {
  const items = [
    {
      id: '01',
      category: 'BEDROOM SETUP',
      title: 'Cossy Bedroom Setup',
      image: '/image/bedroom.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quae voluptate nobis quisquam soluta quaerat tempore ut corporis dolorem porro, suscipit dolorum ab, sint ad quas necessitatibus dolores at? Id.'
    },
    {
      id: '02',
      category: 'KITCHEN SETUP',
      title: 'Neat & Clean Kitchen',
      image: '/image/kitchen1.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quae voluptate nobis quisquam soluta quaerat tempore ut corporis dolorem porro, suscipit dolorum ab, sint ad quas necessitatibus dolores at? Id.'
    },
    {
      id: '03',
      category: 'DROWING SETUP',
      title: 'Family Drowing Room',
      image: '/image/drowing.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quae voluptate nobis quisquam soluta quaerat tempore ut corporis dolorem porro, suscipit dolorum ab, sint ad quas necessitatibus dolores at? Id.'
    },
    {
      id: '04',
      category: 'LIVING SETUP',
      title: 'Clean Family Room',
      image: '/image/living.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quae voluptate nobis quisquam soluta quaerat tempore ut corporis dolorem porro, suscipit dolorum ab, sint ad quas necessitatibus dolores at? Id.'
    }
  ]

  return (
    <section className='grid gap-8 divide-gray-300 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x'>
      {items.map((item) => (
        <div key={item.id} className='group relative overflow-hidden'>
          <div>
            <Image
              src={item.image}
              alt={item.title}
              width={380}
              height={100}
              objectFit='cover'
              className='w-full'
            />
          </div>

          <div className='absolute top-0 m-12 bg-white bg-opacity-60 p-8 text-black backdrop-blur lg:m-4'>
            <div className='flex justify-between pb-4'>
              <p className='text-sm'>{item.category}</p>
              <span className='text-sm'>{item.id}</span>
            </div>
            <Link href='#' className='block text-xl font-semibold'>
              {item.title}
            </Link>
            <p className='py-4'>{truncateText(item.description, 80)}</p>
            <Link className='inline-flex items-center font-medium' href='#'>
              See Details <MoveRight className='ml-2 inline-flex' />
            </Link>
          </div>

          <div className='inset-0 hidden flex-col items-center justify-end gap-32 border-b-2 bg-tertiary pb-16 text-2xl transition duration-300 ease-in-out group-hover:translate-y-[-100%] md:absolute md:flex md:border-b-0'>
            <p className='rotate-[270deg] tracking-wider'>{item.category}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </section>
  )
}
export default CatalogueSection
