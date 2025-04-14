// import { TransitionLink } from './utils/TransitionLink';
import Link from "next/link";

// const navItems = {
//   '/work': {
//     name: 'Work',
//   },
//   '/studio': {
//     name: 'Studio',
//   }
// }

export function Footer() {
  return (
    <aside className="z-50 relative antialiased pt-40">
      <div className='flex w-full h-20'>
      <div className="grid pt-6 pb-2 px-2.5 md:px-4  w-full grid-cols-1 md:gap-2 md:grid-cols-3 " >

        <div className="col-span-1 dark:text-neutral-50" >
                <div className="text-xs bold">
             <Link href="mailto:mail@byandlarge.studio">
                E. mail@byandlarge.studio
              </Link>
                </div>
                {/* <div className="text-xs bold">
                <Link target="_blank" href="https://www.instagram.com/studiobyandlarge/">
                IG. @studiobyandlarge
                </Link>
              </div> */}
     

        </div>
        <div className="col-span-1 dark:text-neutral-50" >

                <div className="text-xs bold">
                <Link target="_blank" href="https://www.instagram.com/studiobyandlarge/">
                IG. @studiobyandlarge
                </Link>
              </div>
     

        </div>


        <div className="col-span-1" >

              <div className="text-xs bold  dark:text-neutral-50">
              ©2025 Studio By and Large
            </div>

        </div>

        </div>
      </div>
    </aside>
    
  )
}
