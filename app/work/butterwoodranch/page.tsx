"use client"

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import FadeInVideoFull from '../../components/utils/FadeInVideoFull';

export default function Page() {
  return (

      <div>
       <main className="main h-full flex flex-col">
               

                 <div className='flex justify-center content-center flex-col w-full bg-white dark:bg-stone-950 z-20'>
                 
                   <div className='grid grid-cols-12 gap-1 pt-20 w-full md:grid-cols-12 lg:grid-cols-12 px-2.5 lg:px-4 lg:pt-60 md:pb-0'>
                   <div className=" flex flex-col  col-span-12 md:col-start-0 md:col-span-6 lg:col-span-5 dark:text-neutral-50 2xl:col-span-3">
                      <h3 className="text-sm leading-[1] lg:leading-[1.2] lg:max-w-5xl  lg:text-base bold uppercase ">Butterwood Ranch </h3>
                      </div>
                      <div className=" flex flex-col col-span-10 md:col-start-0 md:col-span-6 lg:col-span-3 lg:col-start-7 dark:text-neutral-50 2xl:col-start-6 2xl:col-span-6">
                              <h3 className="text-sm  leading-[1.1]  md:text-base  pb-2 lg:leading-[1.1] lg:max-w-5xl bold ">Butterwood Ranch is a farm stay, shop, and soon-to-be cafe in the Northern Rivers of NSW.</h3>
                              </div>
                   <div className='col-span-12 h-[80vh] md:col-span-12 pb-20 relative md:h-screen'>

                                      <Image
                                              src="/bwr_feature_slider3.webp"
                                              fill
                                              style={{objectFit: "cover"}}
                                              loading="lazy"
                                              quality={100}
                                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"

                                              alt="A person holding a phone hsowing the butterwood ranch homepage"
                                              />
                              </div>
                        </div>
                       <div className='grid grid-cols-12 gap-1 w-full md:grid-cols-12 lg:grid-cols-12 px-2.5 lg:px-4 pt-5 pb-20  dark:text-neutral-50'>
                          {/* <div className=" flex flex-col col-span-12 md:col-start-0 md:col-span-6 lg:col-span-4 dark:text-neutral-50 2xl:col-start-2 2xl:col-span-3">
                              <h3 className="text-xl  leading-[1.1]  pb-2 lg:leading-[1.1] lg:max-w-5xl  lg:text-xl bold ">Butterwood Ranch is a farm stay, shop, and soon-to-be cafe in the Northern Rivers of NSW.</h3>
                              </div> */}
                        <div className=" flex flex-col text-sm md:text-base col-span-10 md:col-start-0 md:col-span-5 lg:col-span-5 lg:col-start-1 2xl:col-span-4 2xl:col-start-2 bold">   
                          <h3 className="leading-[1.2] pb-2 lg:max-w-xl 2xl:max-w-2xl ">The online shop was created to showcase and sell the products made on the farm while building the Butterwood Ranch brand. The brand identity was designed by Ro and Co, with creative direction led by Olivia Drake—one half of Butterwood Ranch—ensuring a seamless translation into the digital space. Imagery by Claudia Smith added a depth of feeling and a unique voice to the site.</h3>
                          <h3 className="leading-[1.2] pb-2 lg:max-w-xl 2xl:max-w-2xl ">Built on Shopify, the website is designed for speed, simplicity, and ease of use, providing a smooth shopping experience for Butterwood&lsquo;s customers.</h3>
                         </div>

                         <div className=" flex flex-col text-sm md:text-base col-span-12 md:col-start-0 md:col-span-6 lg:col-span-6 lg:col-start-7 2xl:col-start-7 2xl:col-span-4  dark:text-neutral-50">   

                          <div className=" pt-5 md:pt-0 lg:pt-0 leading-[1.1]">
                            <h3 className="text-xs pb-1 bold">SCOPE</h3>
                            <h3 className="text-xs leading-[1.1] bold">Website design</h3>
                            <h3 className="text-xs leading-[1.1] bold">Shopify build</h3>
                          </div>
                          <div className="pt-5 leading-[1.1]">
                            <h3 className="text-xs pb-1 bold">CREDITS</h3>
                            <h3 className="text-xs bold leading-[1.1]">Photography - <Link href="https://smithclaudia.com/">Claudia Smith</Link></h3>
                            <h3 className="text-xs bold leading-[1.1]">Branding - <Link href="https://www.roandcostudio.com/">ROANDCO</Link></h3>
                            <h3 className="text-xs bold leading-[1.1]">Creative direction - Olivia Drake</h3>
                          </div>
                          <div className="bold pt-5">
                  
                            <h3 className="text-xs"><Link target="_blank" href="https://butterwoodranch.com/">butterwoodranch.com</Link></h3>
                          </div>
                          </div>
                      </div>
      
          
          
           
                <div className='grid grid-cols-12 gap-8 w-full md:grid-cols-12 lg:grid-cols-12  px-2.5 md:gap-2 md:px-2.5'>
                   <div className='col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                      <Image
                          src="/byandlarge_butterwood_03.webp"
                          width={1200} // Aspect ratio width
                          height={1600} // Aspect ratio height
                          alt="An abstract image of blurry eggs by Claudia Smith"
                          />
                  </div>
                      <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                        <Image
                            src="/byandlarge_butterwood_02.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="Text and image on cream background showing  aproduct card"
                            />
                    </div>
                  <div className='flex flex-wrap col-span-12 md:col-span-12 lg:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                      <FadeInVideoFull 
                          src="/bwr_video_2.mp4"
                          width={500} height={500}
                        />
                  </div>
                  <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                    <FadeInVideoFull 
                          src="/bwr_video_1.mp4"
                           width={500} height={500}
                        />
                  </div>
                      <div className='col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_butterwood_01.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="Text and an image of two people walking down a farm road that shows how the about Butterwood ranch page looks"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                        <Image
                            src="/byandlarge_butterwood_homepage_09.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A close up of a plant and flower on a sky blue background Claudia Smith"
                            />
                    </div>
                      <div className='col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_butterwood_05.webp"
                            width={2400} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="3 screenshots of the butterwood ranch mobile site"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                      <Image
                          src="/byandlarge_butterwood_06.webp"
                          width={1200} // Aspect ratio width
                          height={1600} // Aspect ratio height
                          alt="An image of the butterwood ranch sign with trees in the background Claudia Smith"
                          />
                  </div>
                      <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                        <Image
                            src="/byandlarge_butterwood_07.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A blurry image of trees on the butterwood ranch by Claudia Smith"
                            />
                          </div>
                 <div className='col-span-12 md:col-span-12 lg:col-span-12 lg:col-start-1 2xl:col-span-10 2xl:col-start-2'>
                      <Image
                          src="/byandlarge_butterwood_08.webp"
                          width={2400} // Aspect ratio width
                          height={1600} // Aspect ratio height
                          alt="A screenshot of the home page of the butterwood ranch site"
                          />
                  </div>
                  <div  className='col-span-12 pt-40 '>
                    <div className='text-2xl md:text-4xl lg:text-8xl bold text-center'>
                    <a href="/work" className="px-20 py-10 border border-inherit  dark:text-neutral-50">View all work </a>
                    </div>
                  </div>
             </div>
            </div>
        </main>
    </div>

  )
}
