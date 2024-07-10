'use client'
import { motion } from 'framer-motion'

//hooks
import useScrollProgress from '@/hooks/useScrollProgress'

//Variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 }
}

export default function Template({ children }: { children: React.ReactNode }) {
  const completion = useScrollProgress()

  return (
    <>
      <motion.section
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{ type: 'tween', delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.section>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className='fixed bottom-0 right-0 top-0 z-50 w-1 bg-primary transition-transform duration-700'
      ></span>
    </>
  )
}
