"use client"

import React from 'react';
import Image from "next/image";
// import Link from "next/link";
import FadeInVideoFull from '../../components/utils/FadeInVideoFull';


export default function Page() {
  return (

      <div className="">
        <main className="main flex flex-col gap-8 row-start-2 items-center sm:items-start">
             <div className='flex justify-center content-center flex-col w-full bg-white pt-20'>
                <div className='grid grid-cols-12 gap-2 w-full md:grid-cols-12 lg:grid-cols-12  px-2.5  md:px-4'>

                {/* <div className='col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2 dark:text-neutral-50'>
                    <div className="pt-5 flex flex-col col-span-12 md:col-start-7 md:col-span-6">
                            <h2 className="text-xl pt-5 pb-2 lg:max-w-xl 2xl:max-w-2xl pb-2">MATA</h2>
                            <h3 className="ttext-base  pt-5 leading-[1.2] pb-2 max-w-4xl lg:max-w-xl">Mata is a content platform founded by one of Australia&lsquo;s leading harm reduction advocates. Its mission is to amplify unheard voices, sharing untold stories from those who often go unrecognised.</h3>
                            <h3 className="text-base leading-[1.2] pb-2 max-w-4xl lg:max-w-xl">The brief was to create a brand that puts these voices at the forefront, with a strong emphasis on imagery and content. The result is a uniquely designed website that gives each story its own space to be seen and heard, ensuring every perspective is presented with authenticity and impact.</h3>
                        </div>
                        <div className="pt-5 flex flex-col col-span-12 md:col-start-7 md:col-span-6">
                            <h3 className="text-sm pb-1">SCOPE</h3>
                            <h3 className="text-sm">Brand identity</h3>
                            <h3 className="text-sm">Creative direction</h3>
                            <h3 className="text-sm">Website design</h3>
                            <h3 className="text-sm">Website build</h3>
                        </div>
                        <div className="pt-5 flex flex-col col-span-12 md:col-start-7 md:col-span-6">
                            <h3 className="text-sm pb-1">CREDITS</h3>
                            <h3 className="text-sm">Photography - <Link target="_blank" href="https://www.amorelfilm.photos">Antonella Morelli</Link></h3>
                        </div>
                        <div className="pt-5 flex flex-col col-span-12 md:col-start-7 md:col-span-6 ">
                            <h3 className="text-sm pb-1"><Link target="_blank" href="https://thematacollective.com">thematacollective.com</Link></h3>
                        </div>
                </div> */}
                    {/* <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                        <Image
                            src="/byandlarge_mata_01.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A persons face in between a group of orange balloons"
                            />
                    </div> */}
                    <div className='col-span-12 md:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_mata_02.webp"
                            width={2400} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="Mata logo and black text on white background. The text says A gathering space for undiscovered voices and untold stories"
                            />
                    </div>
                    <div className='flex flex-wrap relative items-center justify-center col-span-12 md:col-span-12 md:col-start-1 lg:col-span-12  2xl:col-span-10 2xl:col-start-2'>
                    <FadeInVideoFull 
                        src="/byandlarge_mata_animated_poster_01.mp4"
                        width={500} height={500}
                    />
                </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_mata_03.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="An image of plants with orange flowers on a river bank with the sky reflecting in the water"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                        <Image
                            src="/byandlarge_mata_11.webp"
                            width={1200} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A close up on a person holding a book in their hands and reading"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_mata_07.webp"
                            width={2500} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A portrait of David Heiplpern, wearing a black tshirt infront of a white background"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-6 2xl:col-span-5'>
                    <FadeInVideoFull 
                        src="/byandlarge_mata_15.mp4"
                        width={500} height={500}
                    />
                    </div>
                    <div className='col-span-12 md:col-span-12 lg:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_mata_poster_3.webp"
                            width={2400} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="A Mata poster in a bus stop display"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-12 lg:col-span-12  2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_mata_12.webp"
                            width={2400} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="3 screenshots of the mata mobile website"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-12 lg:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_mata_13.webp"
                            width={2400} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="3 images of mata instagram stories with text and images"
                            />
                    </div>
                    <div className='col-span-12 md:col-span-12 lg:col-span-12 2xl:col-span-10 2xl:col-start-2'>
                        <Image
                            src="/byandlarge_mata_14.webp"
                            width={2400} // Aspect ratio width
                            height={1600} // Aspect ratio height
                            alt="3 images of mata instagram stories with text and images"
                            />
                    </div>
                </div>
            </div>

          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      
          </footer>
    </div>

  )
}
