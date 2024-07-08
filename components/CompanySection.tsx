'use client'
import { motion } from 'framer-motion'
import type { FC } from 'react'

//components
import Badge from '@/components/Badge'
import { titleVariants } from '@/utils/animation'

interface ICompanySection {}

const CompanySection: FC<ICompanySection> = ({}) => {
  return (
    <div className='bg-primary py-24 dark:bg-tertiary sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
          {/* Badge 1 */}
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='mx-auto flex max-w-xs flex-col gap-y-4'
          >
            <dt className='leading-7 text-white'>Transaction Every 24 Hours</dt>
            <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
              <Badge
                containerStyles=''
                endCountText=' million'
                endCountNum={44}
              />
            </dd>
          </motion.div>
          {/* Badge 2 */}
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='mx-auto flex max-w-xs flex-col gap-y-4'
          >
            <dt className='leading-7 text-white'>Assets Under Running</dt>
            <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
              <Badge
                containerStyles=''
                endCountText=' trillion'
                endCountNum={119}
              />
            </dd>
          </motion.div>
          {/* Badge 3 */}
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            variants={titleVariants}
            className='mx-auto flex max-w-xs flex-col gap-y-4'
          >
            <dt className='leading-7 text-white'>New Users Annually</dt>
            <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
              <Badge containerStyles='' endCountText=' +' endCountNum={45000} />
            </dd>
          </motion.div>
        </dl>
      </div>
    </div>
  )
}
export default CompanySection
