import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/screencasts/apply.jpg'
import discordImage from '@/images/screencasts/inter.png'
import figmaImage from '@/images/screencasts/sinup.png'
import videoPlayerImage from '@/images/resources/video-player.svg'
import Link from 'next/link'

const resources = [
  {
    title: 'Sign Up',
    description:
      'Share with us your CV and your preferences for a job, such as the role, location, type of business, and industry. We will touch base on WhatsApp.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'We apply on your behalf',
    description:
      'Our associates, who are well-trained in the US job market, will manually search and apply to over 1000 relevant jobs on your behalf.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          
        </div>
      )
    },
  },
  {
    title: 'Get 5X more interviews',
    description:
      "We'll use your resume to apply for jobs with high keyword matches from a pool of 100K daily refreshed listings, so that it is picked up by ATS software, boosting your chances of landing an interview.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function ThreeSteps() {
  return (
    <section
      id="threesteps"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="resources-title">
          Three Easy Steps
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        Our proven organizational system enables to keep everything simple and clear. </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          We have an intuitively designed and user-friendly platform, providing You with 100% guaranteed&nbsp;  
          <a class="underline decoration-indigo-500/30">Transparency, </a> clear&nbsp;
          <a class="underline decoration-indigo-500/30">communication</a> and&nbsp;
          <a class="underline decoration-indigo-500/30">intimation</a>, all under your&nbsp;<a class="underline decoration-indigo-500/30">control.</a> 
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="pt-32">
        Have questions or need further clarification? reach out to our team.
        </p>
        <p className="mt-3">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Schedule a meeting for later{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
