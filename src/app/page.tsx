"use client";

import { Exo } from 'next/font/google'
import SiteNavbar from '@/components/pageLayout/SiteNavBar'
import Layout from '@/components/pageLayout/DefaultLayout';
import Link from 'next/link';
import { TbApiApp } from 'react-icons/tb';
import Head from 'next/head';
import FooterSite from '@/components/pageLayout/SiteFooter';


const exo = Exo({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
          <title>Apify-Web | Home</title>
          <meta name="description" content="Making digital experiences better for local businesses." />
          <link rel="icon" href="./favicon.ico" />
      </Head>
      <SiteNavbar className={exo.className}/>
      
      <main className={`w-full min-h-screen inline-block z-0 bg-light px-32 dark:bg-dark ${exo.className}`}>
        <Layout className={"pt-32 md:pt-16 sm:pt-8"}>
        <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className="w-1/2 md:w-full">
              <TbApiApp className='text-[180px] text-primary'/>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center pl-10">
              <h1 className='text-4xl font-bold'>APIFY</h1>
              <p className="my-4 font-medium md:text-sm xs:text-xs text-dark dark:text-light">
                Welcome to Apify, where we empower local businesses to enhance their digital presence through the power of artificial intelligence (AI). Our innovative platform is designed to automate and optimize digital marketing tasks, so you can focus on running your business. With Apify, you can gain valuable insights into your audience, improve your online reputation, and increase your visibility across multiple channels. Whether youre a small business owner or a marketing professional, our AI-powered solutions will help you stay ahead of the competition and achieve your goals. Discover the benefits of Apify today and take your digital presence to the next level!
              </p>
              <div className="flex items-center self-center mt-2 lg:self-center">
                <Link href={"/signup"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light">
                  Get Started
                </Link>
                <Link href={"/login"} className="ml-4 text-lg font-medium capitalize text-dark underline md:text-base dark:text-light underline-offset-2 hover:text-primary duration-75">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      <FooterSite />
    </>
  )
}
