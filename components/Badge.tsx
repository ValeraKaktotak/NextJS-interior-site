'use client'

import { useEffect, useRef, useState, type FC } from 'react'
import CountUp from 'react-countup'

interface IBadge {
  containerStyles: string
  endCountNum: number
  endCountText: string
}

const Badge: FC<IBadge> = ({ containerStyles, endCountNum, endCountText }) => {
  const [startCount, setStartCount] = useState(false)
  const countUpRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true)
        } else {
          setStartCount(false)
        }
      },
      { threshold: 0.5 } // Настройка порога видимости 50%
    )

    if (countUpRef.current) {
      observer.observe(countUpRef.current)
    }

    return () => {
      if (countUpRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(countUpRef.current)
      }
    }
  }, [])

  return (
    <div ref={countUpRef} className={`${containerStyles}`}>
      <div className='flex items-center justify-center gap-x-2'>
        <div className='text-4xl font-bold leading-none'>
          {startCount && <CountUp end={endCountNum} delay={0.7} duration={4} />}
          {endCountText}
        </div>
      </div>
    </div>
  )
}
export default Badge
