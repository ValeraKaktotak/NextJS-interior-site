import Image from 'next/image'
import type { FC } from 'react'

//Components
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

interface Ipage {}

const page: FC<Ipage> = ({}) => {
  return (
    <div>
      <div className={`bg-[url('/image/whoarewe.jpg')] bg-cover bg-center`}>
        <h1 className='container py-32 text-center text-6xl font-semibold tracking-widest lg:py-64'>
          Who are we?
        </h1>
      </div>

      <section className='container'>
        <div className='pt-4'>
          <h2 className='text-center text-3xl font-semibold lg:p-10 lg:text-5xl'>
            We have great idea & Interior Design
          </h2>
          <p className='mt-5 pb-10 text-center text-2xl font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            pariatur molestiae iste. Tempore cum, ut reiciendis dicta veniam,
            aliquam adipisci dignissimos, vero numquam quam labore laborum vitae
            illo enim vel.
          </p>
        </div>

        <section className='items-center gap-x-8 lg:flex'>
          {/*Left Image Section */}
          <section className='w-full text-center'>
            <Image
              src='/image/gallery1123.jpg'
              alt='whoarewe'
              width={700}
              height={700}
              priority
              className='inline-flex'
            />
          </section>

          {/*Right Content Section */}
          <section className='w-full'>
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
          </section>
        </section>

        {/*Team Section */}
        <section className='lg:py-20'>
          <div className='pb-4 pt-8'>
            <h1 className='text-center text-4xl font-bold uppercase tracking-wider'>
              Team
            </h1>
          </div>
        </section>
      </section>
    </div>
  )
}
export default page
