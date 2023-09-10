import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="flex lg:flex-1 lg:bg-transparent ml-10">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-16 w-auto"
          src="https://applyatscale.com/aas/aas-new-logo-cropped.svg"
          alt=""
        />
      </a>
      <div className="relative text-center text-md text-slate-600 ml-96">
        <p>Copyright &copy; {new Date().getFullYear()} Apply At Scale, LLC</p>
        <p>All rights reserved.</p>
      </div>
    </div>
   
    </footer>
  )
}
