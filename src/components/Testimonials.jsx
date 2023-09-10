import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content: "Facing a layoff during a recession with only 60 days left on my H1B visa, I was in a critical situation. I took their premium service and went all in aggressively. 4 weeks down the line, I secured three job offers, with a 75% salary increase compared to my previous position. Their professionalism and efficiency were exceptional. I am grateful for their support during this crucial time. Highly recommend Apply at Scale and it exceeded all my expectations.",
      author: {
        name: 'Antonio Littel',
        role: 'Frontend Developer',
        image: avatarImage3,
      },
    },
    {
      content: "Apply at Scale has been very helpful in my MBA Internship application journey. Even though the USA is a land of opportunities, it takes immense efforts to land a job; Apply at scale helped me save time in internship application process, this giving myself time to prepare for interviews. I’m hoping to coming back for a full time job preparation. "

      , author: {
        name: 'Cameron Considine',
        role: 'Entrepreneur',
        image: avatarImage7,
      },
    },
 
   
    {
      content: "The customized service has not only been impressive but also led to attractive interview calls. I am thrilled with the personalized attention I received, and I highly recommend Apply at Scale for their outstanding support. Apply at Scale has been a game-changer for me"

      , author: {
        name: 'Krista Prosacco',
        role: 'Professional Designer',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'All I can say is wow — this is easily the best resource to outsource job search-n-apply  offered at an affordable price .',
      author: {
        name: 'Leah Kiehn',
        role: 'Creative Lead',
        image: avatarImage6,
      },
    },
    
    {
      content: "During these challenging times when the job market is stagnant, Apply at Scale has proven to be invaluable in my job search. Given the demanding nature of my current job, I have limited time to devote to submitting job applications on a daily basis. However, Apply at Scale enabled me to effortlessly submit numerous job applications. What sets it apart is the convenient application tracker feature, which allows me to monitor the progress and quantity of applications in real time."

      , author: {
        name: 'Regina Wisoky',
        role: 'Design Student',
        image: avatarImage11,
      },
    },
    {
      content: "I was feeling overwhelmed and exhausted from constantly applying to jobs without getting any responses. Apply at Scale came to my rescue! Their service not only saved me time and effort but also significantly increased my chances of getting noticed by employers. Within a few weeks of using Apply at Scale, I received several interview invitations and eventually received a job offer that exceeded my expectations. "
      , author: {
        name: 'Vernon Cummerata',
        role: 'UI Engineer',
        image: avatarImage8,
      },
    },
  ],
  [
 
    {
      content:
        'Rage applying is really awesome. I never thought I could get such diverse set of opportunities. I feel abundant now with freedom to choose from the vast. Everyone should benefit from this.',
      author: {
        name: 'Carla Schoen',
        role: 'Startup Founder',
        image: avatarImage10,
      },
    },
    {
      content: "As I work full time and couldn’t spare much time for applying jobs. Applying each job is such a painful process sometimes it takes more than 15 minutes for one application. I got tired and demotivated after a week of applying by myself. I heard of 'Apply at Scale' where they apply for your jobs online. Team did a great help in applying jobs and always available to talk. They followed my priority in applying jobs as well. "

      , author: {
        name: 'Rahul Kare',
        role: 'Growth Marketer',
        image: avatarImage4,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from early customers...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          Don't just take our word for it. <br />
          Here are the experiences of people who found success with our platform.
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && 'hidden lg:list-item',
                        testimonialIndex === 1 && 'lg:mt-8',
                        testimonialIndex > 1 && 'mt-8'
                      )}
                    >
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Read more testimonials</ExpandableButton>
      </Expandable>
    </section>
  )
}
