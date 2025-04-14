import React from 'react';


export default function Page() {
  return (

      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen">
          <main className="main flex flex-col row-start-2 sm:items-start">
              <div className="flex">
              <div className="flex flex-col w-full  px-4 pb-8 mt-40">
            
                  <h3 className="max-w-screen-md	leading-[1.1] pb-4 text-base md:text-xl md:leading-[1.1] dark:text-neutral-50 bold">Get in touch to discuss a potential project or work opportunity.</h3>
                  <h3 className="max-w-screen-md	 pb-4 text-base md:text-xl dark:text-neutral-50 bold"><a href="mailto:mail&#64;byandlarge.studio">mail@byandlarge.studio</a></h3>


              </div>

            </div>
        
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      
          </footer>
        </div>

  )
}
