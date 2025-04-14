"use client";

import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { motion } from "motion/react"
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

export default function MobileDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (

    <div className="menu-button fixed w-full z-10 visible md:invisible">
      {/* Button to toggle dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black p-1 absolute right-3 flex mt-1 items-center text-sm nav-button dark:text-neutral-50 bold z-50"
        aria-label="Toggle menu"
      >
        {isOpen && (
             <span className="pr-1">Close</span>
            )}
        
        <span>Menu</span>
      </button>

      {/* Dropdown Menu */}
      <div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full absolute min-h-screen z-10 flex flex-col justify-items-center pt-20  w-24 text-4xl text-black bold p-2 bg-white gap-2 flex flex-col dark:text-neutral-50 dark:bg-black"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
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
     <div className='flex w-full justify-self-end absolute bottom-40'>
      <div className="grid pt-6 pb-2 px-2.5 md:px-4  w-full grid-cols-1 md:gap-2 md:grid-cols-3 " >

        <div className="col-span-1 dark:text-neutral-50" >
                <div className="text-xs bold">
             <a href="mailto:mail@byandlarge.studio">
                E. mail@byandlarge.studio
              </a>
                </div>
                {/* <div className="text-xs bold">
                <Link target="_blank" href="https://www.instagram.com/studiobyandlarge/">
                IG. @studiobyandlarge
                </Link>
              </div> */}
     

        </div>
        <div className="col-span-1 dark:text-neutral-50" >

                <div className="text-xs bold">
                <a target="_blank" href="https://www.instagram.com/studiobyandlarge/">
                IG. @studiobyandlarge
                </a>
              </div>
     

        </div>


        <div className="col-span-1" >

              <div className="text-xs bold pt-4 dark:text-neutral-50">
              ©2025 Studio By and Large
            </div>

        </div>

        </div>
      </div>
  
          </motion.div>
        )}
      </div>
    </div>
  );
}
