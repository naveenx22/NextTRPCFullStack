
function Nav() {


    const navigation = [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
      ]



   return (
    <div className="flex items-center justify-between p-6 lg:px-8 lg:bg-transparent" aria-label="Global">
    <div className="flex lg:flex-1 lg:bg-transparent">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-16 w-auto"
          src="https://applyatscale.com/aas/aas-new-logo-cropped.svg"
          alt=""
        />
      </a>
    </div>
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"

      >
        <span className="sr-only">Open main menu</span>
        {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
          {item.name}
        </a>
      ))}
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </div>

   )
}

export default Nav;