'use client'
import { Field, Label, Switch } from '@headlessui/react'
import Link from 'next/link'
import { useState, type FC } from 'react'

//Utils
import { cn } from '@/lib/utils'

//Components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowUpRight } from 'lucide-react'

const Page: FC = () => {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className='px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          Contact Sales
        </h2>
        <p className='mt-2 text-lg leading-8 text-muted-foreground'>
          Please fell free to ask anything
        </p>
      </div>

      <form className='mx-auto mt-16 max-w-xl sm:mt-20'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className='mt-2.5'>
            <Input type='name' id='firstname' placeholder='First Name' />
          </div>

          <div className='mt-2.5'>
            <Input type='name' id='lastname' placeholder='Last Name' />
          </div>

          <div className='sm:col-span-2'>
            <div className='mt-2.5'>
              <Input type='name' id='company' placeholder='Company' />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <div className='mt-2.5'>
              <Input type='email' id='email' placeholder='Email Address' />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <div className='mt-2.5'>
              <Textarea placeholder='Type Your Message Here...' />
            </div>
          </div>

          <Field className='flex gap-x-4 sm:col-span-2'>
            <Switch
              as='div'
              checked={agreed}
              onChange={setAgreed}
              className={cn(
                agreed ? 'bg-primary' : 'bg-gray-200',
                'flex h-5 w-8 flex-none cursor-pointer items-center rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus:outline focus-visible:outline-2 focus-visible:outline-offset-2'
              )}
            >
              <span
                aria-hidden='true'
                className={cn(
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
            <Label className='text-sm leading-6 text-gray-600'>
              By selecting this, you agree to our{' '}
              <Link href='#' className='font-semibold text-primary'>
                privacy&nbsp;policy
              </Link>
              .
            </Label>
          </Field>

          <div className='mt-10'>
            <Button
              type='submit'
              className='flex w-full items-center rounded-full px-8 py-3 shadow-lg'
            >
              Let&apos;s Talk <ArrowUpRight className='ml-2 h-5 w-5' />
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Page
