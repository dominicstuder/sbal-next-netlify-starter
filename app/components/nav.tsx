import { TransitionLink } from './utils/TransitionLink';


const navItems = {
  '/work': {
    name: 'Work',
  },
  '/studio': {
    name: 'Studio',
  },
  '/contact': {
    name: 'Contact',
  }
}



export function Navbar() {
  return (
    <aside className="z-50 relative antialiased lg:mix-blend-difference">
      {/* <div className='flex w-full h-20 fixed header-wrapper border-b border-b-black'> */}
      <div className='flex w-full h-15 fixed header-wrapper md:bg-white dark:bg-stone-950/0 lg:bg-white/0  '>
      <div className="grid pt-3 pb-3 px-2.5  w-full grid-cols-12 md:gap-2 md:px-4  " >

         <div className=" content-center  col-span-6" >
            <h1 className="content-center text-black w-full lg:text-white dark:text-neutral-50 " >
              
            <TransitionLink href="/">
                        <span className='site-title text-base   md:text-base lg:text-4xl bold uppercase'>
                          Studio By and Large
                          </span>
                          </TransitionLink>


      
             
          </h1>
        </div>
        <nav
          className="flex justify-end text-sm  col-span-6 bold lg:text-white"
          id="nav"
        >
          {/* <div className="nav-inner hidden sm:hidden md:flex  bg-stone-100 dark:bg-stone-900 dark:text-neutral-50 "> */}
          <div className="nav-inner justify-end hidden sm:hidden md:flex  dark:text-neutral-50 ">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <TransitionLink
                    key={path}
                    href={path}
                    
                  >
                    {name}
                  </TransitionLink>
                )
              })}
          </div>
        </nav>
        </div>
      </div>
    </aside>

  )
}