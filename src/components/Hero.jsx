import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/aas/aas-new-logo-cropped.svg'


function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      
      <div className="flex justify-center text-blue-600 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          “Apply at Scale is a wonderful resource that helped me secure a job durin crisis.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-blue-600 before:content-['—_']">
          Stacey Solomon
        </strong>
        , Product Lead at Retail Park
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="flex lg:flex-1 lg:bg-transparent">
      <a href="#" className="m-1 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-16 w-auto"
          src="https://applyatscale.com/aas/aas-new-logo-cropped.svg"
          alt=""
        />
      </a>
    </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Stop Wasting Time Applying to Jobs
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              We‘ll search and apply to 1000+ hyper-relevant jobs for you, so you can focus on Interview Prep, Networking and other important tasks.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="#free-chapters" color="blue">
                Get Started
              </Button>
              <Button href="#pricing" variant="outline" color="blue">
                Schedule for a quick discussion
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
