import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { CloseIcon } from './CloseIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          "Your Time Matters: Leave Job Applications to Us"
        </p>
        <p className="mt-4">
          At ApplyAtScale, we've got your back in the job hunt like no other!
          Say goodbye to the tedious task of applying to jobs one by one. We're here to take the reins and apply to over
          1000 hyper-relevant job opportunities on your behalf.
        </p><br />

        <div className='flex'>
        <CloseIcon className="h-8 w-8 flex-none fill-blue-500 scale-100" />
        <span className="ml-4 decoration-red-600 underline">Spending hours applying jobs one by one everyday.</span>
        </div>
        <div className='flex'>
        <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
        <span className="ml-4 decoration-green-600 underline">Work Peacefully on your current job and attend interviews for jobs applied by us.</span>
        </div><br /><br />

        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          "Imagine the time and energy you'll save! "
        </p>

        <p className="mt-4">
          With us in your corner,
          you can shift your focus to what truly matters – honing your interview skills,
          expanding your network, and preparing for that dream job. Let's join forces, and together,
          we'll turbocharge your job search journey like never before.
        </p>
       
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Honing Interview Skills: Dedicate time to prepare for interviews and improve',
            'Expanding Professional Network: attend industry events, and connect with professionals',
            'Career Development: Work on skills and certifications to upskill.',
            'Learning and Training: Take courses or workshops to acquire new skills',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4 ">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 pt-6">
        We provide a free trial of 25 job applications.. By the end of this trial, you’ll have all the confidence you need to dig
          in and start your journey with us into a new future.
        </p>
        <p className="mt-7">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Claim Your 25 Free Applications{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
