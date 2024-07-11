import Image from 'next/image'
import type { FC } from 'react'

const projects = [
  {
    id: 1,
    name: 'Drowing room for family time',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur aut neque ea tempore exercitationem quae optio quos, rem placeat saepe, obcaecati repellat eius magnam odio ab. Officiis, ratione commodi!',
    image: '/image/project3.jpg',
    link: ''
  },
  {
    id: 2,
    name: 'Kitchen look modern and clean',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur aut neque ea tempore exercitationem quae optio quos, rem placeat saepe, obcaecati repellat eius magnam odio ab. Officiis, ratione commodi!',
    image: '/image/project2.jpg',
    link: ''
  },
  {
    id: 3,
    name: 'Perfect living room for family time',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur aut neque ea tempore exercitationem quae optio quos, rem placeat saepe, obcaecati repellat eius magnam odio ab. Officiis, ratione commodi!',
    image: '/image/project4.png',
    link: ''
  }
]

interface Ipage {}

const page: FC<Ipage> = ({}) => {
  return (
    <div>
      <div
        className={`bg-[url('/image/backgroundproject.jpg')] bg-cover bg-center`}
      >
        <h1 className='container py-64 text-6xl font-semibold tracking-widest text-white'>
          Our Projects
        </h1>
      </div>

      <section className='container grid gap-8 py-8 lg:grid-cols-2'>
        {projects.map((project) => (
          <article
            key={project.id}
            className='group relative overflow-hidden rounded-xl'
          >
            <div>
              <Image
                src={project.image}
                alt={project.name}
                width={480}
                height={380}
                className='w-full'
              />
            </div>
            <div className='absolute bottom-0 right-0 w-[90%] translate-y-full flex-col items-center justify-end gap-32 bg-white/70 from-transparent to-black p-4 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 dark:bg-black/40 sm:p-12'>
              <h1 className='text-2xl font-semibold max-sm:text-base'>
                {project.name}
              </h1>
              <p className='pt-4 max-sm:line-clamp-4 max-sm:text-sm'>
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
export default page
