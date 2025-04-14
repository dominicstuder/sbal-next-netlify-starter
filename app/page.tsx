"use client"

// import Image from "next/image";
import { useEffect, useRef } from 'react';
// import FadeInVideo from './components/utils/FadeInVideo';
import FadeInVideoFull from './components/utils/FadeInVideoFull';
import { TransitionLink } from './components/utils/TransitionLink';
import Carousel from './components/carousel';
import { TransitionImageLink } from './components/utils/TransitionImageLink';
import FadeInImage from './components/utils/FadeInImage';

export default function Home() {
  const customCursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const customCursor = customCursorRef.current;

    if (!customCursor) return;

    // Update cursor position
    const handleMouseMove = (e: MouseEvent) => {
      if (customCursor) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
      }
    };

    // Show/Hide cursor when hovering over elements with 'cursor-hover' class
    const images = document.querySelectorAll(".cursor-hover");
    images.forEach((image) => {
      image.addEventListener("mouseenter", (e) => {
        const cursorText =
          (e.target as HTMLElement).getAttribute("data-cursor") ||
          "View Case Study";
        if (customCursor) {
          customCursor.querySelector(".cursor-text")!.textContent = cursorText;
          // customCursor.style.display = "block";
          customCursor.classList.add("show");
        }
      });

      image.addEventListener("mouseleave", () => {
        // if (customCursor) customCursor.style.display = "none";
        customCursor.classList.remove("show");
      });
    });

    // Attach event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      images.forEach((image) => {
        image.removeEventListener("mouseenter", () => {});
        image.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div>
      {/* Custom Cursor */}
      <div ref={customCursorRef} className="custom-cursor">
        <span className="cursor-text">View Case Study</span>
        <div className="cursor-bg"></div> {/* Blurred Background */}
      </div>
      <main className="main dark:bg-stone-950">
      <div className="h-[80vh] md:h-screen">

      <Carousel>

      </Carousel>
      </div>
        <div className="flex relative flex-col px-2.5 pb-10 md:pb-20 bg-white md:px-4 dark:bg-stone-950">
          <div className="grid grid-cols-12 z-20 pb-5 gap-4 pt-10 md:pb-40 md:pt-40 border-b border-inherit">
                  <div className="col-span-11 md:col-span-12 lg:col-span-4 lg:col-start-0 flex 2xl:col-span-3 flex-col w-full">
                  <h2 className="pb-4 dark:text-neutral-50 text-base leading-[1.2] md:text-base md:leading-[1.1]  lg:text-base lg:leading-[1.2] bold">Studio By and Large is a Newcastle-based brand, design, and development studio, we partner with ambitious clients to create impactful brands and websites.</h2>
                  {/* <h2 className="dark:text-neutral-50 leading-[1.1] text-xs lg:leading-[1.1] bold uppercase">About</h2> */}
                  </div>
                  {/* <div className=" md:block col-span-11 md:col-span-12 text-base lg:col-span-4 lg:col-start-7 flex flex-col">
                  <h2 className="dark:text-neutral-50 leading-[1.2] lg:leading-[1.2] bold">We work with established companies and small-to-medium startups across diverse industries. Founded in 2014 by designer and developer Dominic Studer, the studio operates at the intersection of branding and digital, delivering thoughtful, unique solutions for every project.</h2>
               

                  </div> */}
          </div>
          <div className="grid gap-y-1 w-full gap-x-1 pt-10 md:pt-40 grid-cols-2 gap-y-4 md:grid-cols-2   md:gap-1 md:gap-y-4  2xl:grid-cols-4">
            <div className='text-sm bold col-span-2 2xl:col-span-4 dark:text-neutral-50 '>
            Featured Work
            </div>

               
            <div  className='col-span-1 work-hover pb-10'>
                  <TransitionImageLink href="/work/astrid">
                  <div className='cursor-hover relative' data-cursor="View Astrid Case Study">
                  <FadeInImage
                    src="/astrid-homepage-1.webp"
                    width={1200}
                    height={1600}
                    datacursor=""   
                    alt=""
                    />
                    </div>
                  </TransitionImageLink>

            
                    <div className="col-span-6 col-start-2 pt-2">
                      <h2 className="text-xs leading-[1] md:text-base  md:leading-[1]  dark:text-neutral-50 bold">ASTRID</h2>
                      <h2 className="text-xs pt-1 pt-1 pr-3 leading-[1.1] md:text-sm md:leading-[1.1]   md:max-w-lg dark:text-neutral-50 bold"> Brand strategy, identity development, and the creation of both digital and physical assets</h2>
                      {/* <h5 className="text-xs pt-2"><TransitionLink href="/work/mata"> View case study</TransitionLink></h5> */}


                    </div>
                </div>
              <div className='col-span-1 work-hover pb-10'>
              <div className="home-page-image-wrapper  cursor-hover col-span-12  lg:col-span-8 lg:col-start-2 lg:cursor-hover 2xl:col-span-5 2xl:col-start-3" data-cursor="View Flowrclub Case Study">
                    <TransitionLink href="/work/flowrclub">
                        <FadeInVideoFull 
                           src="/flowrclub_hp_animation.mp4"
                          width={500} height={500}
                        />
                    </TransitionLink>
                </div>
                  <div className="col-span-6 col-start-2 pt-2">
                      <h2 className="text-xs leading-[1] md:text-base md:leading-[1]  dark:text-neutral-50 bold">FLOWRCLUB</h2>
                      <h2 className="text-xs pt-1 pr-3 leading-[1]  md:text-sm md:leading-[1] md:max-w-lg  dark:text-neutral-50 bold">Crafting unique scents inspired by iconic cannabis strains</h2>
                      {/* <h5 className="text-xs pt-2"><TransitionLink href="/work/mata"> View case study</TransitionLink></h5> */}

                  </div>
              </div>
           <div  className='col-span-1 work-hover pb-10'>
            <TransitionImageLink href="/work/butterwoodranch">

            <div className='cursor-hover relative' data-cursor="View Butterwood Ranch Study">

                <FadeInImage
                  src="/bwr_feature_wp.webp"
                  width={1200}
                  height={1600}
                  datacursor=""   
                  alt=""
                  />
                  </div>
                </TransitionImageLink>
                <div className="col-span-6 col-start-2 pt-2">
                  <h2 className="text-xs leading-[1] md:text-base md:leading-[1]  dark:text-neutral-50 bold">BUTTERWOOD RANCH</h2>
                  <h2 className="text-xs leading-[1] pt-1 pr-3  md:text-sm md:leading-[1] md:max-w-lg dark:text-neutral-50 bold">Website for a farm stay and shop in the Northern Rivers
                  </h2>
                  {/* <h5 className="text-xs pt-2"><TransitionLink href="/work/butterwoodranch"> View case study</TransitionLink></h5> */}

                </div>
              </div>
              <div  className='col-span-1 work-hover pb-10'>
                  <TransitionImageLink href="/work/prescriptionskin">
                  <div className='cursor-hover relative' data-cursor="View Prescription Skin Study">
                  <FadeInImage
                    src="/ps-homepage-1.webp"
                    width={1200}
                    height={1800}
                    datacursor=""   
                    alt=""
                    />
                    </div>
                  </TransitionImageLink>
                  <div className="col-span-6 col-start-2 pt-2">
                    <h2 className="text-xs leading-[1] md:text-base md:leading-[1]  dark:text-neutral-50 bold uppercase">Prescription Skin</h2>
                    <h2 className="text-xs pt-1 pr-3 leading-[1]  md:text-sm md:leading-[1] md:max-w-lg dark:text-neutral-50 bold">E-commerce and packaging for a function-first, uniquely formulated skincare product</h2>
                    {/* <h5 className="text-xs pt-2"><TransitionLink href="/work/prescriptionskin"> View case study</TransitionLink></h5> */}

                  </div>
              </div>  
              </div>
       
              <div className="grid grid-cols-12 z-20 gap-1  md:gap-4 pt-12 md:pt-40 ">
                  <div className="col-span-12 md:col-span-12 lg:col-span-4 lg:col-start-0 flex flex-col pb-5">
                  <h2 className="pb-1 dark:text-neutral-50 leading-[1.2] text-sm md:text-base lg:leading-[1.2] bold">We work with established companies and small-to-medium startups across diverse industries. Founded in 2014 by designer and developer Dominic Studer, the studio operates at the intersection of branding and digital, delivering thoughtful, unique solutions for every project.</h2>
                  </div>

                  <div className="col-span-6 md:col-span-12 md:text-base  lg:col-span-3 lg:col-start-7 flex flex-col bold">
                  <h3 className="text-xs pb-1 uppercase dark:text-neutral-50 ">Creative services</h3>

                  <h2 className="dark:text-neutral-50 leading-[1.2] lg:leading-[1.2] text-sm md:text-base  ">Brand Strategy</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.2] lg:leading-[1.2] text-sm md:text-base  ">Brand Identity</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.2] lg:leading-[1.2] text-sm md:text-base  ">Creative Direction</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.2] lg:leading-[1.2] text-sm md:text-base  ">Art Direction</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.2] lg:leading-[1.2] text-sm md:text-base  ">Content Production</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.2] lg:leading-[1.2] text-sm md:text-base  ">Graphic Design</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.2] lg:leading-[1.2] text-sm md:text-base  ">Packaging Design</h2>
           

                  </div>
                  <div className="col-span-6 md:col-span-12 text-xs md:text-base lg:col-span-3 flex flex-col bold">
                  <h3 className="text-xs pb-1 uppercase dark:text-neutral-50 ">Digital services</h3>

                  <h2 className="dark:text-neutral-50 leading-[1.1] lg:leading-[1.2] text-sm md:text-base  ">UX/UI Design</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.1] lg:leading-[1.2] text-sm md:text-base  ">Website Design</h2>

                  <h2 className="dark:text-neutral-50 leading-[1.1] lg:leading-[1.2] text-sm md:text-base  ">Interaction and Motion Design</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.1]  lg:leading-[1.2] text-sm md:text-base  ">Website Development</h2>
                  <h2 className="dark:text-neutral-50 leading-[1.1] lg:leading-[1.2] text-sm md:text-base  ">E-Commerce</h2>
                  </div>
          </div>
        </div>
              <div  className='col-span-12 mt-20 '>
                <div className='text-2xl md:text-4xl lg:text-8xl bold text-center flex justify-center  dark:text-neutral-50'>
                <TransitionLink href="/work "><span className="px-20 py-10 border border-inherit">View all work</span> </TransitionLink>
                </div>
              </div>
           
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  
      </footer>
    </div>
  );
}
