"use client";
import { Disclosure } from '@headlessui/react'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
// import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
      question: "Why not automate with AI etc?",
      answer: "Several organizations, including Y Combinator startups, have attempted to provide a seamless solution, but none have been successful. We found Simplify.jobs, www.careerflow.ai, and www.loopcv.pro, which offer automation solutions, but they can become difficult to manage and require manual effort at some point."
    },
    {
      question: "How do we source the jobs?",
      answer: "We set up multiple job alerts based on Role, Level, Industry, Location, Company size in LinkedIn based on your inputs. We also go to multiple job boards like Glassdoor, Indeed, Dice, etc., based on your preferences."
    },
    {
      question: "How can I track the applications that you applied to?",
      answer:
        "You will be able to seamlessly track all the applications that are being applied to in real- time on our platform.And, of course, you will also get email confirmations from the employers after we apply."
    },
    {
      question: "Can I customize according to my job search?",
      answer: "Yes, to a certain degree like changing company names, address and other variables in each cover letter but than can decrease the number of applications we apply. If applying for multiple roles (Standard and Premium Plans), we can have a separate cover letter and resume for each role."
    },
    {
      question: "How many associates will I be assigned for me?",
      answer: "Depends. Let's say you took a $299 Standard Plan with validity of 3 months for 1000 applications. If you are aggressively searching for jobs and want us to apply for all 1000 applications in month, we assign two associates where each one fills 500 applications in month. If you want to go at a slower pace, then we assign you one associate who will apply for 1000 jobs within 2 or 3 months based on your desired speed."
  },
  {
    question: "Can I speak to the associates or is it opaque?",
    answer: "You will have direct access to your Associate and Client Manager and will be part of WhatsApp/iMessage group chat that is exclusively for three of you. Feedback loop starts from Day 1. Client Manager is there for ensuring quality and to help you with any other queries and concerns."
  },
    // More questions...
  ]

export default function FAQ() {
  return (

    <section
    id="FAQ"
    aria-labelledby="faq-title"
    className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
  >

    <Container>
        <SectionHeading number="6" id="faq-title">
          FAQs
        </SectionHeading>

    <div className="bg-white">
      <div className="-mx-10 px-0 py-12 sm:py-32  lg:py-28">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        {/* <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span> */}
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </Container>
    </section>
  )
}
