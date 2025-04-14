import '../styles/globals.css';
import localFont from 'next/font/local'
import type { Metadata } from "next";
import clsx from 'clsx';
import Head from 'next/head';
import { Navbar } from './components/nav';
import { Footer } from './components/footer';
// import MobileDropdown from "./components/MobileDropdown";


export const metadata: Metadata = {
  title: "Studio By and Large",
  description: "Design, etc.",
};

const ABCMonumentGrotesk = localFont({
  src: [
    {
      path: './fonts/ABCMonumentGrotesk-Bold-Trial.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/ABCMonumentGrotesk-Regular-Trial.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: "--font-monument",
})

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html
      lang="en"
      className={
        clsx(
        'bg-white antialised subpixel-antialiased	dark:bg-stone-950'
      )}
  > 
  <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
      <body
        className={`${ABCMonumentGrotesk.className} ${ABCMonumentGrotesk.className} antialiased`}
      >
      <Navbar />
      {/* <MobileDropdown /> */}
        {children}
      <Footer />
      </body>
    </html>
  );
}
