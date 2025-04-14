"use client"

import React from 'react';
import Image from "next/image";
import FadeInVideoFull from '../../components/utils/FadeInVideoFull';
// import Link from "next/link";

export default function Page() {
  return (

      <div className="">
        <main className="flex">

<div className='flex justify-center content-center flex-col w-full bg-white dark:bg-stone-950 z-20'>

<div className='grid grid-cols-12 gap-1 pt-20 w-full md:grid-cols-12 lg:grid-cols-12  px-2.5 lg:px-4  lg:pt-60 md:pb-0'>
                   <div className=" flex flex-col  col-span-12 md:col-start-0 md:col-span-6 lg:col-span-5 dark:text-neutral-50 2xl:col-span-3">
                      <h3 className="text-sm leading-[1] lg:leading-[1.2] lg:max-w-5xl  lg:text-base bold uppercase ">Prescription Skin </h3>
                      </div>
                      <div className=" flex flex-col col-span-10 md:col-start-0 md:col-span-6 lg:col-span-6 lg:col-start-7 dark:text-neutral-50 2xl:col-start-6 2xl:col-span-6">
                              <h3 className="text-xs  leading-[1.1]  md:text-base  pb-2 lg:leading-[1.1] lg:max-w-5xl bold ">A function first, uniquely formulted skincare brand.


                              </h3>
                        </div>
                   <div className='col-span-12 h-[80vh] md:col-span-12 pb-20 relative md:h-screen'>

                                      <Image
                                              src="/byandlarge_prescriptionskin_feature.webp"
                                              fill
                                              style={{objectFit: "cover"}}
                                              loading="lazy"
                                              quality={100}
                                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"

                                              alt="A person holding a phone hsowing the butterwood ranch homepage"
                                              />
                              </div>
                        </div>
                        <div className='grid grid-cols-12 gap-1 w-full md:grid-cols-12 lg:grid-cols-12  px-2.5 lg:px-4  pt-5 pb-20'>                  
                        <div className=" flex flex-col col-span-12  md:col-span-5  lg:col-span-5 2xl:col-start-2 2xl:col-span-4 dark:text-neutral-50">
                        <h3 className="text-xs leading-[1.2] pb-2 md:text-base lg:leading-[1.2] lg:max-w-5xl lg:text-base bold">The brief was to create a high-performing Shopify store that allows customers to subscribe to their personalized products while strengthening the brand. Alongside the website, the brand identity was refined, with updated packaging design and art direction. </h3>
                        <h3 className="text-xs leading-[1.2] pb-2 md:text-base lg:leading-[1.2] lg:max-w-5xl  lg:text-base bold">The result is a nuanced and highly functional online experience—one that mirrors the innovation and uniqueness of the products themselves.</h3>
                      </div>
                     
                    <div className="pt-5 md:pt-0 flex flex-col col-span-12 md:col-start-7 md:col-span-6 bold  dark:text-neutral-50 text-xs">
                      <h3 className="text-xs pb-1">SCOPE</h3>
                      <h3 className="leading-[1.1]">Creative direction</h3>

                      <h3 className="leading-[1.1]">Website design</h3>
                      <h3 className="leading-[1.1]">Shopify build</h3>
                      <h3 className="">Art direction and photography</h3>
                    </div>
      
                    <div className="pt-5 col-span-12  md:col-start-7 dark:text-neutral-50 bold ">
                    <h3 className="text-xs pb-1">Website launching soon</h3>
                        </div>
                    </div>
                        <div className='grid grid-cols-12 pt-20 gap-8 w-full md:grid-cols-12 lg:grid-cols-12  px-2.5  md:gap-2 md:px-4'>

                <div className='col-span-12 md:col-span-6  lg:col-start-1 2xl:col-span-5 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_prescriptionskin_02.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A close up of a persons skin with freckles"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5 '>
                        <Image
                            src="/byandlarge_prescriptionskin_03.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="Black text on a off white backgrund that says, everyone's skin is unique, your skincare should be too"
                            />
                    </div>
                    <div className='flex flex-wrap relative col-span-12 items-center justify-center md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                            <FadeInVideoFull 
                                src="/byandlarge_prescriptionskin_animation_1.mp4"
                                width={500} height={500}
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-start-2 2xl:col-span-5'>
                        <Image
                            src="/byandlarge_prescriptionskin_04.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A close up of skin"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                        <Image
                            src="/byandlarge_prescriptionskin_05.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A close up of the prescription skin bottle design"
                            />
                    </div>
                    <div className='flex flex-wrap relative col-span-12 items-center justify-center md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                            <FadeInVideoFull 
                                src="/byandlarge_prescriptionskin_animation_2.mp4"
                                width={500} height={500}
                            />
                    </div>
                    <div className='col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_prescriptionskin_06.webp"
                            width={2400} // Aspect ratio width
                            height={1600} // Aspect ratio height
                         
                            alt="The design of the landing section of the prescription skin site, showing some text and product imagery"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_prescriptionskin_07.webp"
                            width={2400} // Aspect ratio width
                                height={1600} // Aspect ratio height
                            alt="A screen shot showing part of the home page of the prescription skin site"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_prescriptionskin_08.webp"
                            width={2400} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A screen shot showing part of the ingredients page of the prescription skin site"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_prescriptionskin_09.webp"
                            width={2400} // Aspect ratio width
                                height={1600} // Aspect ratio height
                            alt="A screen shot showing part of the conditions page of the prescription skin site"
                            />
                    </div>
                    
                </div>
                <div  className='col-span-12 pt-40 '>
                <div className='text-2xl md:text-4xl lg:text-8xl bold text-center'>
                <a href="/work" className="px-20 py-10 border border-inherit  dark:text-neutral-50">View all work </a>
                </div>
              </div>
            </div>

          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      
          </footer>
    </div>

  )
}
