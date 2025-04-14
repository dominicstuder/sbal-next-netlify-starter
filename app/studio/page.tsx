


export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen">
      <main className="main">
        <div className="flex relative flex-col mt-20 px-2.5 pb-20 bg-white md:px-4 dark:bg-stone-950">
          <div className="grid grid-cols-12 z-20  gap-4 pt-20 pb-12 md:pb-40 border-b border-inherit">
                  <div className="col-span-12 md:col-span-12 lg:col-span-4 lg:col-start-0 flex 2xl:col-span-3 flex-col w-full">
                  <h2 className="pb-4 dark:text-neutral-50 text-base leading-[1.1] md:text-xl lg:text-xl lg:leading-[1.1] bold">Studio By and Large is a Newcastle-based brand, design, and development studio, we partner with ambitious clients to create impactful brands and websites.</h2>
                  </div>
                  <div className="col-span-12 md:col-span-12 text-base lg:col-span-4 lg:col-start-7 flex flex-col">
                  <h2 className="dark:text-neutral-50 leading-[1.1] lg:leading-[1.1] bold">We work with established companies and small-to-medium startups across diverse industries. Founded in 2014 by designer and developer Dominic Studer, the studio operates at the intersection of branding and digital, delivering thoughtful, unique solutions for every project.</h2>
                  </div>
          </div>
          <div className="grid grid-cols-12 z-20  gap-4 pt-12 md:pt-40 ">
                  <div className="col-span-12 md:col-span-12 lg:col-span-4 lg:col-start-0 flex flex-col">
                  <h2 className="pb-4 dark:text-neutral-50 text-base lg:leading-[1.1] bold">What we do</h2>
                  </div>
                  <div className="col-span-12 md:col-span-12 text-base lg:col-span-3 lg:col-start-7 flex flex-col">
                  <h2 className="dark:text-neutral-50 leading-[1.1] lg:leading-[1.1] bold">Brand Strategy</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.1] lg:leading-[1.1] bold">Brand Identity</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.1] lg:leading-[1.1] bold">Graphic Design</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.1] lg:leading-[1.1] bold">Packaging Design</h2>
         

                  </div>
                  <div className="col-span-12 md:col-span-12 lg:col-span-3 flex flex-col">
                  <h2 className="dark:text-neutral-50 leading-[1.1] text-base lg:leading-[1.1] bold">Website Design</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.1] text-base lg:leading-[1.1] bold">Website Development</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.1] text-base lg:leading-[1.1] bold">E-Commerce</h2>
                  </div>
          </div>
        </div>
        
 
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  
      </footer>
    </div>
  );
}
