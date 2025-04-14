"use client"

import { useEffect, useRef } from 'react';
import  FadeInImage  from '../components/utils/FadeInImage';
import { TransitionImageLink } from '../components/utils/TransitionImageLink';


export default function Page() {
  const customCursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const customCursor = customCursorRef.current;

    if (!customCursor) return;

    // Update the position of the cursor on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (customCursor) {
        customCursor.style.left = `${e.clientX}px`; // clientX instead of pageX
        customCursor.style.top = `${e.clientY}px`; // clientY instead of pageY
      }
    };



    // Show/Hide the custom cursor only when hovering over an image
    const images = document.querySelectorAll('.cursor-hover');
    images.forEach(image => {
      image.addEventListener('mouseenter', (e) => {
        const cursorText = (e.target as HTMLImageElement).getAttribute('data-cursor') || 'View Case Study';
        if (customCursor) {
          customCursor.textContent = cursorText; // Change the text of the cursor
          customCursor.style.display = 'block';
          customCursor.classList.add('show');
        }
      });

      image.addEventListener('mouseleave', () => {
        if (customCursor) customCursor.style.display = 'none';
        customCursor.classList.remove('show');
      });
    });

    // Attach the mousemove listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup listeners when component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      images.forEach(image => {
        image.removeEventListener('mouseenter', () => {});
        image.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  

  
  return (

<div className="grid work-grid w-full grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-2.5 md:px-4 md:pb-20 md:gap-16">
        {/* Custom Cursor */}
        <div ref={customCursorRef} className="custom-cursor">
        <span className="cursor-text">View Case Study</span>
        <div className="cursor-bg"></div> {/* Blurred Background */}
      </div>
      
      <main className="main flex w-full flex-col gap-8 row-start-2 items-center sm:items-start">
 
        <div className="grid gap-y-1 w-full gap-x-1 pt-20 grid-cols-1 gap-y-2 md:grid-cols-3  md:gap-1 md:gap-y-4 lg:grid-cols-6 2xl:grid-cols-6">
        <div className='text-xs md:text-sm bold  dark:text-neutral-50'>
          Case studies
        </div>
        <div  className='col-span-2 col-start-1 work-hover pb-10'>
              <TransitionImageLink href="/work/astrid">
                <div className='cursor-hover relative' data-cursor="View Astrid case study">
                  <FadeInImage
                  src="/astrid_feature_slider.webp"
                  width={1200}
                  height={1600}
                      datacursor="View Astrid Case Study"
                  alt=""
                  />
                </div>
          
                <div className="col-span-6 col-start-2 pt-2">
                  {/* <h2 className="text-sm leading-[1] md:text-xl md:leading-[1]  dark:text-neutral-50 bold">Astrid</h2> */}
                  <h2 className="text-sm leading-[1] md:text-base md:leading-[1]  dark:text-neutral-50 bold">ASTRID</h2>
                  <h2 className="text-sm leading-[1] md:text-base md:leading-[1]  pt-1 dark:text-neutral-50 bold">Australia‘s first female lead plant medicine dispensary</h2>

                  <h2 className="text-xs leading-[1] dark:text-neutral-50 pt-1">View case study</h2>

                </div>
                </TransitionImageLink>
            </div>
            <div className='col-span-2 work-hover pb-10'>
            <TransitionImageLink href="/work/butterwoodranch">
            <div className='cursor-hover relative'  data-cursor="View Butterwood Ranch case study">
            <FadeInImage
                    src="/bwr_feature_slider3.webp"
                    width={1200}
                    height={800}
                    datacursor=""   
                    alt=""
                    />
              </div>
              </TransitionImageLink>
              <TransitionImageLink href="/work/butterwoodranch">
                <div className="col-span-6 col-start-2 pt-2">
                    <h2 className="text-sm leading-[1] md:text-base md:leading-[1]  dark:text-neutral-50 bold uppercase">Butterwood Ranch</h2>
                    <h2 className="text-sm leading-[1] md:text-base  pt-1 md:leading-[1]  dark:text-neutral-50 bold">A farm stay and shop in the Northern Rivers of NSW
                    </h2>
                    <h6 className="text-xs leading-[1] dark:text-neutral-50 pt-1">View case study</h6>

                </div>
                </TransitionImageLink>
            </div>
            <div className='col-span-2 work-hover pb-10'>
              <div className='relative'>
                    <FadeInImage
                    src="/mint_4.webp"
                    width={1200}
                    height={1600}
                    datacursor=""   
                    alt=""
                    />
              </div>
                <div className="col-span-6 col-start-2 pt-2">
                    <h2 className="text-sm leading-[1] md:text-base md:leading-[1]  dark:text-neutral-50 bold uppercase">Mint</h2>
                    <h2 className="text-sm leading-[1] md:text-base  pt-1 md:leading-[1]  dark:text-neutral-50 bold">A holistic healtcare clinic in Melbourne
                    </h2>
                    <h6 className="text-xs leading-[1] dark:text-neutral-50 pt-1">Case study coming soon</h6>

                </div>
            </div>
            <div className='col-span-2 work-hover pb-10'>
              <TransitionImageLink href="/work/prescriptionskin">
                <div className='cursor-hover relative'  data-cursor="View Prescription Skin case study">
                  <FadeInImage 
                    src="/byandlarge_prescriptionskin_feature.webp"
                    width={1200}
                    height={1600}
                      datacursor="View Prescription Skin Case Study"
                      alt="Prescription Skincare product on beige background"
                    />
                  </div>
               
                <div className="col-span-6 col-start-2 pt-2">
                  <h2 className="text-sm leading-[1] md:text-base md:leading-[1] dark:text-neutral-50 bold">PRESCRIPTION SKIN</h2>
                  <h2 className="text-sm leading-[1] pt-1 md:text-base md:leading-[1]  dark:text-neutral-50 bold">A function first, uniquely formulted skincare brand</h2>
                  <h6 className="text-xs leading-[1] dark:text-neutral-50 pt-1">View case study</h6>

                </div>
                </TransitionImageLink>
            </div>
            <div className='col-span-2 work-hover pb-10'>
     

              <div className='relative'>
                    <FadeInImage
                    src="/work-page-gftm-1.webp"
                    width={1200}
                    height={1600}
                    datacursor=""   
                    alt=""
                    />
              </div>
    
                <div className="col-span-6 col-start-2 pt-2">
                    <h2 className="text-sm leading-[1] md:text-base md:leading-[1]  dark:text-neutral-50 bold">GREAT FOREST TRAIL MARATHON</h2>
                    <h2 className="text-sm leading-[1] md:text-base  pt-1 md:leading-[1]  dark:text-neutral-50 bold">A grass roots trail marathon in Victoria</h2>
                    <h6 className="text-xs leading-[1] dark:text-neutral-50 pt-1">Case study coming soon</h6>

                </div>
            </div>
            <div  className='col-span-2 work-hover pb-10'>
            <TransitionImageLink href="/work/flowrclub">

            <div className='cursor-hover relative'  data-cursor="View Flowrclub case study">
         <FadeInImage
           src="/flowrclub_shoot_feature.webp"
           width={1200}
           height={1800}
           datacursor=""   
           alt=""
           />
           </div>
       
         <div className="col-span-6 col-start-2 pt-2">
           <h2 className="text-sm leading-[1] md:text-base md:leading-[1]  dark:text-neutral-50 bold">FLOWRCLUB</h2>
           <h2 className="text-sm leading-[1] md:text-base md:leading-[1]  pt-1 dark:text-neutral-50 bold ">Crafts unique scents inspired by iconic cannabis strains</h2>
           <h6 className="text-xs leading-[1] dark:text-neutral-50 pt-1">View case study</h6>

         </div>
         </TransitionImageLink>
       </div>
       </div>
       <div className="grid gap-y-1 w-full gap-x-1 pt-20 grid-cols-2 gap-y-1 md:grid-cols-3  md:gap-1 md:gap-y-1 lg:grid-cols-4 2xl:grid-cols-6">
       <div className='text-xs md:text-sm bold  dark:text-neutral-50'>
          All work
        </div>
        <div  className='col-span-1 col-start-1 work-hover '>

            <div className='grayscale hover:grayscale-0 relative'>

            <FadeInImage
              src="/work-page-mata-1.webp"
              width={1200}
              height={1600}
              datacursor=""   
              alt=""
              />
              </div>

            </div>
            <div  className='col-span-1 work-hover '>
  
            <div className='grayscale hover:grayscale-0 relative' >
            <FadeInImage
              src="/work-page-astrid-1.webp"
              width={1200}
              height={1800}
              datacursor=""   
              alt=""
              />
              </div>


            </div>
            <div  className='col-span-1 work-hover'>
   
            <div className='relative hover:grayscale-0 grayscale' >
            <FadeInImage
              src="/work-page-aa-7.webp"
              width={1200}
              height={1800}
              datacursor=""   
              alt=""
              />
              </div>



            </div>
         
            <div  className='col-span-1 work-hover '>
        
            <div className='relative grayscale hover:grayscale-0 '>
            <FadeInImage
              src="/work-page-mint-3.webp"
              width={1200}
              height={1800}
              datacursor=""   
              alt=""
              />
              </div>

            </div>
            <div className='col-span-1 grayscale hover:grayscale-0 '>
              
                      <FadeInImage
                      src="/byandlarge_flowrclub_workpage_02.webp"
                      datacursor="View Flowrclub Case Study"
                      width={1500}
                      height={2000}
                      alt="Billboard with the Flowrclub poster"
                      />
            </div>
      


           
         
            <div  className='col-span-1'>
       
                  <div className='grayscale hover:grayscale-0  relative'>
                    <FadeInImage
                    src="/byandlarge_mata_11.webp"
                    width={1200}
                    height={1600}
                    datacursor=""   
                    alt=""
                    />
                  </div>

            </div>
            <div  className='col-span-1 grayscale hover:grayscale-0 '>
        
            
                    <FadeInImage
                    src="/work-page-mata-2.webp"
                    width={1200}
                    height={1600}
                    datacursor=""   
                    alt=""
                    />
         
       

            </div>
            <div  className='col-span-1 grayscale hover:grayscale-0 '>
    
       
                <FadeInImage
                  src="/work-page-flowrclub-3.webp"
                  width={1200}
                  height={1800}
                  datacursor=""   
                  alt=""
                  />


            </div>
            <div className='col-span-1 grayscale hover:grayscale-0 '>
                      <FadeInImage
                      src="/work-page-flowrclub-4.webp"
                      datacursor="View Flowrclub Case Study"
                      width={1500}
                      height={2000}
                      alt="Billboard with the Flowrclub poster"
                      />
            </div>
            <div className='col-span-1 grayscale hover:grayscale-0 '>
                  
                          <FadeInImage
                          src="/byandlarge_butterwood_02.webp"
                          datacursor="View Butterwood Ranch Case Study"
                          width={1500}
                          height={2000}
                          alt="A candle on grey background overlayed over a blurry image of a forest"
                          />
                  
            </div>
            <div className='col-span-1 grayscale hover:grayscale-0 '>

           

                  <FadeInImage
                    src="/byandlarge_prescriptionskin_10.webp"
                    width={1200}
                    height={1600}
                      datacursor="View Prescription Skin Case Study"
                      alt="Prescription Skincare product on beige background"
                    />
                 
              </div>

              <div  className='col-span-1 grayscale hover:grayscale-0 '>
            
                <FadeInImage
                  src="/work-page-flowrclub-2.webp"
                  width={1200}
                  height={1800}
                  datacursor=""   
                  alt=""
                  />
                 
                
              </div>

              <div  className='col-span-1 grayscale hover:grayscale-0 '>
              
                <FadeInImage
                  src="/work-page-polykala-1.webp"
                  width={1200}
                  height={1800}
                  datacursor=""   
                  alt=""
                  />
             
              </div>

        </div>
 
      </main>
    
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  
      </footer>
    </div>

  )
}