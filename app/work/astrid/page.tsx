"use client"

import React from 'react';
import Image from "next/image";
// import Bwr2Video from '../components/bwrvideo2';
// import  FadeInImage  from '../../components/utils/FadeInImage';

import Link from "next/link";
// import FadeInVideoFull from '../../components/utils/FadeInVideoFull';

export default function Page() {
  return (

      <div>
        <main className="flex">

            <div className='flex justify-center content-center flex-col w-full bg-white dark:bg-stone-950 z-20'>
  
            <div className='grid grid-cols-12 gap-1 pt-20 w-full md:grid-cols-12 lg:grid-cols-12  px-2.5 lg:px-4  lg:pt-60 md:pb-0'>
                   <div className=" flex flex-col  col-span-12 md:col-start-0 md:col-span-6 lg:col-span-5 dark:text-neutral-50 2xl:col-span-3">
                      <h3 className="text-sm leading-[1] lg:leading-[1.2] lg:max-w-5xl  lg:text-base bold uppercase ">Astrid </h3>
                      </div>
                      <div className=" flex flex-col col-span-10 md:col-start-0 md:col-span-6 lg:col-span-4 lg:col-start-7 dark:text-neutral-50 2xl:col-start-6 2xl:col-span-6">
                              <h3 className="text-sm  leading-[1.1]  md:text-base  md:leading-[1.1] pb-2 lg:leading-[1.1] lg:max-w-5xl bold ">Astrid is one of Australia&apos;s first and leading plant medicine dispensaries and clinics, dedicated to patient care.

                              </h3>
                        </div>
              <div className='col-span-12 h-[80vh] md:col-span-12 pb-20 relative md:h-screen pt-1'>
                            <Image
                            src="/astrid_feature_slider.webp"
                            fill
                            style={{objectFit: "cover"}}
                            loading="lazy"
                            quality={100}
                            sizes="(max-width: 768px) 80vh, (max-width: 1200px) 50vw, 1200px"

                            alt="A person holding a phone hsowing the butterwood ranch homepage"
                            />
                  </div>
                  </div>
                  <div className='grid grid-cols-12 gap-1 w-full md:grid-cols-12 lg:grid-cols-12  px-2.5 lg:px-4  pt-5 pb-20'>                  
                    <div className=" flex flex-col col-span-10  md:col-span-5  lg:col-span-5 2xl:col-start-2 2xl:col-span-4 dark:text-neutral-50">
                  <h3 className="text-sm leading-[1.2] pb-2 lg:leading-[1.2] lg:max-w-5xl lg:text-base bold">Since its inception in 2020, we&#39;ve collaborated with the Astrid founders to support their growth—from a single location with a small patient base to a multi-location practice with a thriving online community, continuously expanding into new areas of patient care.</h3>
                        <h3 className="text-sm leading-[1.2] pb-2 lg:leading-[1.2] lg:max-w-5xl  lg:text-base bold">Our work has spanned brand strategy, identity development, and the creation of both digital and physical assets, helping to shape and scale Astrid over the past five years.</h3>
                    </div>
                    <div className="pt-5 md:pt-0 flex flex-col col-span-12 md:col-start-7 md:col-span-6 bold  dark:text-neutral-50 text-xs ">
                      <h3 className="text-xs pb-1">SCOPE</h3>
                      <h3 className=" leading-[1.1]">Brand strategy</h3>
                      <h3 className="leading-[1.1]">Brand identity</h3>
                      <h3 className="leading-[1.1]">Art direction</h3>
                      <h3 className="leading-[1.1]">Packaging design</h3>
                      <h3 className="leading-[1.1]">Website design</h3>
                      <h3 className="leading-[1.1]">Website development</h3>
                    </div>
                    <div className="pt-5 flex flex-col col-span-12 md:col-start-7 md:col-span-6 bold  dark:text-neutral-50 text-xs ">
                      <h3 className="text-xs pb-1">CREDITS</h3>
                      <h3 className="">Photography - <Link target="_blank" href="https://michaelpham.net/">Michael Pham</Link></h3>
                    </div>
                    <div className="pt-5 md:col-start-7 dark:text-neutral-50 bold ">
                        <h3 className="text-xs  pb-1"><Link target="_blank" href="https://astrid.health">astrid.health</Link></h3>
                        </div>
      
                </div>
                <div className='grid grid-cols-12 gap-2 w-full md:grid-cols-12 lg:grid-cols-12  px-1 md:px-4 pt-20'>
                   <div className='col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                      <Image
                          src="/byandlarge_astrid_02.webp"
                          width={1200} // Aspect ratio width
                          height={1600} // Aspect ratio height
                          alt=" image of the wooden shelves inside astrid dispensary Melbourne"
                          />
                  </div>
                      <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                        <Image
                            src="/byandlarge_astrid_03-1.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="Green text on a light green background that say, An exception to every rule, naturally"
                            />
                    </div>

                  <div className='flex flex-wrap col-span-12 md:col-span-6 lg:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                      <Image
                          src="/byandlarge_astrid_03.webp"
                          width={1200} // Aspect ratio width
                          height={1600} // Aspect ratio height
                          alt="An image of the outside of astrid dispensary in Melbourne with people walking past"
                          />
                      </div>
                      <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                        <Image
                            src="/byandlarge_astrid_04.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A close up of astrid branded packaging"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_astrid_05.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A phone with the atrid webiste home paghe on a green textile background"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                        <Image
                            src="/byandlarge_astrid_07.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A customer holding and astrid bag with a small green leaf printed on it"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_astrid_08.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="An astrid staff member wearing an astrid branded white tshirt"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5 '>
                        <Image
                            src="/byandlarge_astrid_09.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A close up of a astrid branded paper bag being held outside astrid dispensary in Melbourne"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_astrid_10.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A close up image of astrid branded tubes"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5 '>
                        <Image
                            src="/byandlarge_astrid_11.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="2 astrid staff members standing in the astrid dispenary Melbourne"
                            />
                    </div> 
                    <div className='col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_astrid_12.webp"
                            width={2400} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="Two screenshots of the astrid mobile website on a black background"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_astrid_13.webp"
                            width={2400} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="Two screenshots of the astrid clinic mobile website on a black background"
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
