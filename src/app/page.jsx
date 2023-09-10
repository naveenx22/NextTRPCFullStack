import { Author } from '@/components/Author'
import FAQ from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import { ThreeSteps } from '@/components/ThreeSteps'
import { Why } from '@/components/Why'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Introduction /> */}
      <NavBar />
      {/* <TableOfContents /> */}
      <Why />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Prakash Parekh',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “Exhausted of applyin for jobs and no responses, Apply at Scale was a game-changer! In a few weeks, I got multiple interviews and a job offer beyond expectations.”
        </p>
      </Testimonial>
      {/* <Screencasts /> */}
      <ThreeSteps />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Operations Lead at FedEx',
          image: avatarImage2,
        }}
      >
        <p>
          “Discovering this platform during my visa grace period crisis was a game-changer. 
          It saved me from a major life upheaval. Grateful beyond words!”
        </p>
      </Testimonial>
      <Resources />
      {/* <FreeChapters /> */}
      <Pricing />
      {/* <Testimonials /> */}
      <Author />
      <FAQ />
      <FreeChapters />
      <Footer />
    </>
  )
}
