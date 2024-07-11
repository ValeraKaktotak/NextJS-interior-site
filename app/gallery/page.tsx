import Image from 'next/image'
import type { FC } from 'react'

interface Ipage {}

const page: FC<Ipage> = ({}) => {
  return (
    <div className='container grid grid-cols-2 gap-4 py-10 md:grid-cols-4'>
      <article className='flex flex-col gap-4'>
        <article>
          <Image
            src='/image/bedroom.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
        <article>
          <Image
            src='/image/gallery2.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
        <article>
          <Image
            src='/image/gallery.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
      </article>

      <article className='flex flex-col gap-4'>
        <article>
          <Image
            src='/image/swiper1.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
        <article>
          <Image
            src='/image/gallery11.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
        <article>
          <Image
            src='/image/living.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
      </article>

      <article className='flex flex-col gap-4'>
        <article>
          <Image
            src='/image/gallery14.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
        <article>
          <Image
            src='/image/gallery15.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
        <article>
          <Image
            src='/image/gallery12.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
      </article>

      <article className='flex flex-col gap-4'>
        <article>
          <Image
            src='/image/gallery7.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
        <article>
          <Image
            src='/image/gallery9.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
        <article>
          <Image
            src='/image/gallery3.jpg'
            alt='bedroom'
            width={2290}
            height={1527}
            priority
            className='rounded-lg transition hover:scale-90'
          />
        </article>
      </article>
    </div>
  )
}
export default page
