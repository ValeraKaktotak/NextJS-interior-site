'use client'

import type { FC } from 'react'
import CountUp from 'react-countup'

interface IBadge {
  containerStyles: string
  endCountNum: number
  endCountText: string
}

const Badge: FC<IBadge> = ({ containerStyles, endCountNum, endCountText }) => {
  return (
    <div className={`${containerStyles}`}>
      <div className='flex items-center justify-center gap-x-2'>
        <div className='text-4xl font-bold leading-none'>
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
      </div>
    </div>
  )
}
export default Badge
