import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/author.png'
import { Container } from './Container'
import balaji from '@/images/aas/balajik.jpg'
import leela from '@/images/aas/leela.jpg'


function TwitterIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
      <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066" />
    </svg>
  )
}

export function Sub({ role, name, speech, authorImage }) {
  return (
    <div className="bg-slate-50 pt-px sm:rounded-6xl">
      <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={authorImage}
          alt=""
          sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
        />
      </div>
      <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
        <SectionHeading number="Co-Founder" id="author-title">
          {role}
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          <span className="block text-blue-600">{name}</span>
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {speech}
        </p>
        <p className="mt-8">
          <Link
            href="#"
            className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
          >
            <TwitterIcon className="h-10 w-10 fill-current" />
            <span className="ml-4">Follow on Twitter</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >

      <Container>
        <SectionHeading number="5" id="author-title">
          Who We Are
        </SectionHeading>
      </Container>
   


      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">

        <div className='flex flex-col gap'>
          <Sub role="Product" name="Leela Yanamaddi 🦸🏼‍♀️" authorImage={leela} speech="I love building tech products and services keeping users at the center and shipping them to market. I derive pleasure from hustle and love building tech products that minimizes human efforts.
Carnegie Mellon and Ashoka University alum 🦾."/>
          <Sub role="Tech" name="Balaji Kummari 🥷🏽" authorImage={balaji} speech="From building Pulsejet engines to coding full-stack Apps, I love tinkering and building stuff. Launched a couple of startups and failed better each time, now trying to be the best tech wingman🦿." />

        </div>
      </div>
    </section>
  )
}
