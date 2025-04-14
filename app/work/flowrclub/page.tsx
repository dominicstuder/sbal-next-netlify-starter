"use client"

import React from 'react';
import Image from "next/image";
// import { useEffect, useRef } from 'react';
// import FlowrclubVideo from '../components/flowrclubvideo';
import FlowrclubVideoTwo from '../../components/flowrclubvideotwo';
// import FlowrclubVideoThree from '../components/flowrclubvideothree';
import FadeInVideoFull from '../../components/utils/FadeInVideoFull';
import Link from "next/link";

export default function Page() {
  return (

      <div className="">

          <main className="main h-full flex flex-col">
          
            <div className='flex justify-center content-center flex-col w-full bg-white dark:bg-stone-950 z-20'>
            
            <div className='grid grid-cols-12 gap-1 pt-20 w-full md:grid-cols-12 lg:grid-cols-12 px-2.5 lg:px-4  lg:pt-60 md:pb-0'>
                      <div className=" flex flex-col  col-span-12 md:col-start-0 md:col-span-6 lg:col-span-5 dark:text-neutral-50 2xl:col-span-3">
                      <h3 className="text-sm leading-[1] lg:leading-[1.2] lg:max-w-5xl  lg:text-base bold uppercase ">Flowrclub </h3>
                      </div>
                      <div className=" flex flex-col col-span-10 md:col-start-0 md:col-span-6 lg:col-span-6 lg:col-start-7 dark:text-neutral-50 2xl:col-start-6 2xl:col-span-6">
                              <h3 className="text-sm  leading-[1.1]  md:text-base pb-2 lg:leading-[1.1] lg:max-w-5xl bold ">Flowrclub is a brand that crafts unique scents inspired by iconic cannabis strains, blending fragrance with the rituals and culture of smoking.
                              </h3>
                        </div>
                       <div className='col-span-12 h-[80vh] md:col-span-12 pb-20 relative md:h-screen'>
    
                                          <Image
                                                   src="/flowrclub_shoot_feature.webp"
                                                  fill
                                                  style={{objectFit: "cover"}}
                                                  loading="lazy"
                                                  quality={100}
                                                //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
    
                                                  alt="A person holding a phone hsowing the butterwood ranch homepage"
                                                  />
                            </div>
                      </div>
                    <div className='grid grid-cols-12 gap-1 w-full md:grid-cols-12 lg:grid-cols-12 px-2.5 lg:px-4 pt-5 pb-20'>
          
                      <div className=" flex flex-col col-span-10  md:col-span-5  lg:col-span-5 2xl:col-start-2 2xl:col-span-4 dark:text-neutral-50">
                        <h3 className="text-sm leading-[1.2] md:text-base  pb-2 lg:leading-[1.2] lg:max-w-5xl  bold">The brand identity was designed to be vibrant and immersive, capturing the essence of each scent through a bold, psychedelic aesthetic. Alongside the identity, we developed a distinctive packaging range and a dynamic website to bring Flowrclub to life, creating a sensory experience that extends beyond the product itself.</h3>
                    </div>
                    <div className="pt-5 text-xs md:pt-0 flex flex-col col-span-12 md:col-start-7 md:col-span-6 bold  dark:text-neutral-50">
                      <h3 className="pb-1">SCOPE</h3>
                      <h3 className="leading-[1.1]">Creative direction</h3>

                      <h3 className=" leading-[1.1]">Brand identity</h3>

                      <h3 className="leading-[1.1]">Art direction and photography</h3>
                      <h3 className="leading-[1.1]">Packaging design</h3>
                      <h3 className="leading-[1.1]">Website design</h3>
                      <h3 className="leading-[1.1]">Website development</h3>
                    </div>
      
                    <div className="pt-5 md:col-start-7 dark:text-neutral-50 bold ">
                    <h3 className="text-xs pb-1"><Link target="_blank" href="https://flowr.club">flowr.club</Link></h3>
                        </div>
               
    
                </div>
                </div>
                <div className='grid gap-2 w-full grid-cols-12 px-2.5 md:px-4'>
                    <div className='flex flex-wrap relative col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                  
                            <Image
                            src="/flwrclub-shoot-04.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            placeholder="blur"
                            blurDataURL="/"
                            loading="lazy"
                            quality={100}
                                alt=""
                                />
                       
                    </div>
                    <div className='flex flex-wrap relative col-span-12 md:col-span-6 2xl:col-span-4 2xl:col-span-5'>
                    
                            <Image
                            src="/flwrclub-shoot-05.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            placeholder="blur"
                            blurDataURL="/"
                            loading="lazy"
                            quality={100}
                                alt=""
                                />
                    
                    </div>
                    <div className='flex flex-wrap relative items-center justify-center col-span-12 md:col-span-12 md:col-start-1 lg:col-span-12  2xl:col-span-10 2xl:col-start-2'>
                    <FlowrclubVideoTwo 
                                src="/byandlarge_flowrclub_01.mp4"
                        />
                </div>
                <div className='flex flex-wrap relative col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
          
                        <Image
                        src="/byandlarge_flowrclub_02.webp"
                        width={2400} // Aspect ratio width
                        height={1600} // Aspect ratio height
                        placeholder="blur"
                        blurDataURL="/"
                        loading="lazy"
                        quality={100}
                            alt=""
                            />
                    
                </div>

                    <div className='flex flex-wrap relative col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2 '>
                       
                            <Image
                             src="/byandlarge_flowrclub_05.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            placeholder="blur"
                            blurDataURL="/"
                            loading="lazy"
                            quality={100}
                                alt=""
                                />
                       
                    </div>
                    <div className='flex flex-wrap relative col-span-12 md:col-span-6 2xl:col-span-4 2xl:col-span-5'>
                        <FadeInVideoFull 
                           src="/byandlarge_flowrclub_phone_animation_02.mp4"
                          width={500} height={500}
                        />
                    </div>
                    <div className='flex flex-wrap relative col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                             src="/flwrclub-shoot-06.webp"
                            width={3500} // Aspect ratio width
                            height={1900} // Aspect ratio height
                            placeholder="blur"
                            blurDataURL="/"
                            loading="lazy"
                            quality={100}
                                alt=""
                                />
                    </div>
                    {/* <div className='flex flex-wrap relative col-span-12 md:col-span-6  2xl:col-span-5 2xl:col-start-2'>
                      
                            <Image
                            src="/byandlarge_flowrclub_14.webp"
                            width={1200} // Aspect ratio width
                          height={1600} // Aspect ratio height
                          placeholder="blur"
                          blurDataURL="/"
                          loading="lazy"
                          quality={100}
                                alt=""
                                />
                       
                    </div>
   
                <div className='flex flex-wrap relative col-span-12 md:col-span-6 2xl:col-span-4 2xl:col-span-5 '>
             
                    <Image
                        src="/byandlarge_flowrclub_11.webp"
                        width={1200} // Aspect ratio width
                        height={1600} // Aspect ratio height
                        placeholder="blur"
                        blurDataURL="/"
                        loading="lazy"
                        quality={100}
                            alt=""
                            />
          
                </div> */}
                <div className='flex flex-wrap relative col-span-12 md:col-span-6 2xl:col-span-4 2xl:col-span-5 2xl:col-start-2'>
                
                        <Image
                            src="/byandlarge_flowrclub_12.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            placeholder="blur"
                            blurDataURL="/"
                            loading="lazy"
                            quality={100}
                            alt=""
                            />
                   
                </div>
                <div className='flex flex-wrap relative col-span-12 md:col-span-6 2xl:col-span-4 2xl:col-span-5'>
                        <FadeInVideoFull 
                           src="/byandlarge_flowrclub_phone_animation_01.mp4"
                          width={500} height={500}
                        />
                    </div>


                <div className='flex flex-wrap relative col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
           
                        <Image
                        src="/byandlarge_flowrclub_07.webp"
                        width={2400} // Aspect ratio width
                        height={1600} // Aspect ratio height
                        placeholder="blur"
                        blurDataURL="/"
                        loading="lazy"
                        quality={100}
                            alt=""
                            />
                   
                </div>
                    <div className='col-span-12 2xl:col-span-10 2xl:col-start-2'>
                     
                                <Image
                                src="/byandlarge_flowrclub_03.webp"
                                width={2400} // Aspect ratio width
                                height={1600} // Aspect ratio height
                                placeholder="blur"
                                blurDataURL="/"
                                loading="lazy"
                                quality={100}
                                alt=""
                                />
                    
                    </div>
                    <div className='col-span-12 2xl:col-span-10 2xl:col-start-2'>
                      
                                <Image
                                src="/byandlarge_flowrclub_04.webp"
                                width={2400} // Aspect ratio width
                                height={1600} // Aspect ratio height
                                placeholder="blur"
                                blurDataURL="/"
                                loading="lazy"
                                quality={100}
                                alt=""
                                />
                 
                    </div>
                    <div className='flex flex-wrap relative col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
               
                        <Image
                        src="/byandlarge_flowrclub_10.webp"
                        width={2400} // Aspect ratio width
                        height={1600} // Aspect ratio height
                        placeholder="blur"
                        blurDataURL="/"
                        loading="lazy"
                        quality={100}
                            alt=""
                            />
                   
                </div>
                <div className='flex flex-wrap relative col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                
                        <Image
                        src="/byandlarge_flowrclub_13.webp"
                        width={2400} // Aspect ratio width
                          height={1600} // Aspect ratio height
                          placeholder="blur"
                          blurDataURL="/"
                          loading="lazy"
                          quality={100}
                            alt=""
                            />
                 
                </div>
                <div  className='col-span-12 pt-40 '>
                    <div className='text-2xl md:text-4xl lg:text-8xl  bold text-center'>
                    <a href="/work" className="px-20 py-10 border border-inherit  dark:text-neutral-50">View all work </a>
                    </div>
                  </div>
                   
                </div>
            
           

          </main>

    </div>

  )
}
