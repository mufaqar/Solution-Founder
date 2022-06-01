import Head from 'next/head';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';
import Mega_Menu from './mega-menu';
import { useState } from 'react';
import Company_Menu from './company-menu';
import Image from 'next/image';

export default function Header() {
  const [megaMenu, setMegaMenu] = useState(true);
  const [CompMegaMenu, setCompMegaMenu] = useState(true);
  const [ismobile, setisMobile] = useState(false);

  const HandleMegaMenu = () => {
    setMegaMenu(!megaMenu);
    setCompMegaMenu(true);
  };
  const HandleComp_MegaMenu = () => {
    setCompMegaMenu(!CompMegaMenu);
    setMegaMenu(true);
  };
  return (
    <>
      <Head>
        <title>Home - Solution Founder</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="PROFESSIONAL ENTERPRISE AND BUSINESS SOLUTIONS"
        />
        <link rel="canonical" href="http://solutionfounder.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Solution Founder" />
        <meta
          property="og:description"
          content="PROFESSIONAL ENTERPRISE AND BUSINESS SOLUTIONS"
        />
        <meta property="og:url" content="http://solutionfounder.com/" />
        <meta property="og:site_name" content="Solution Founder" />
        <meta
          property="article:modified_time"
          content="2022-03-10T07:09:44+00:00"
        />
        <meta
          property="og:image"
          content="http://solutionfounder.com/wp-content/uploads/2020/07/home-banner-img.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@odoo_solutions" />
        <link
          rel="icon"
          href="https://solutionfounder.com/wp-content/uploads/2020/07/SF-White-F.svg"
          sizes="32x32"
        />
      </Head>

      <header className="bg-[#133c6d] border-[#284D78] border-b fixed w-full z-50">
        <div className="bg-[#133c6d] flex flex-row items-center justify-between  p-6 max-w-[1200px] mx-auto">
          <div className="w-1/2 md:w-1/4">
            <Link href="/" passHref>
              <Image
                src="/images/SF-White.png"
                alt="SF-White.png"
                className="max-w-[80%] cursor-pointer"
                width={225}
                height={40}
              />
            </Link>
          </div>
          <div className={`fixed lg:w-auto md:block lg:relative bg-[#133C6D] lg:bg-transparent left-0 transition-all duration-300 right-0 lg:top-0 lg:right-0 ${ismobile ? 'top-[85px]' : '-top-full'}`}>
            <ul className="flex flex-col items-start justify-center bg-[#133C6D] pt-0 pb-10 space-x-12 space-y-6 lg:pb-0 lg:-mt-8 lg:items-baseline lg:flex-row">
              <li className="inline pl-12 mt-10 text-xl font-semibold text-white ml:mt-0 lg:text-base lg:pl-0">
                <Link href="/">Home</Link>
              </li>
              <li
                className="inline text-xl font-semibold text-white cursor-pointer lg:text-base"
                onClick={HandleMegaMenu}
              >
                <span className="flex items-center ">
                  Products
                  <span className="ml-1">
                    <AiOutlineDown />
                  </span>
                  <ul
                    className={`fixed z-20 w-full h-[500px] overflow-scroll lg:h-auto lg:overflow-hidden transition-all left-1/2 transform -translate-x-1/2 lg:-z-20 ${
                      megaMenu ? '-top-[110%]' : 'top-[86px]'
                    }`}
                  >
                    <Mega_Menu />
                    <div className='absolute bg-[#8DC63F] block lg:hidden top-4 right-4' onClick={()=>setMegaMenu(false)}>
                      <AiOutlineClose size={25}/>
                    </div>
                  </ul>
                </span>
              </li>
              <li className="inline text-xl font-semibold text-white lg:text-base">
                <Link href="/industries-solution">Industries Solution</Link>
              </li>
              <li className="inline text-xl font-semibold text-white lg:text-base">
                <Link href="/success-stories">Success Stories</Link>
              </li>
              <li className="inline text-xl font-semibold text-white lg:text-base">
                <Link href="/news-updates">News & Updates</Link>
              </li>
              <li
                className="inline text-xl font-semibold text-white cursor-pointer lg:text-base"
                onClick={HandleComp_MegaMenu}
              >
                <span className="relative flex items-center hover-trigger">
                  Company
                  <span className="ml-1">
                    <AiOutlineDown />
                  </span>
                  <ul
                    className={`absolute top-[57px] left-1/2 transform -translate-x-1/2 ${
                      CompMegaMenu ? 'hidden' : 'block'
                    }`}
                  >
                    <Company_Menu />
                  </ul>
                </span>
              </li>
            </ul>
          </div>
          <div className="items-center block w-auto md:hidden">
            <button className="px-2 py-2 bg-[#8DC63F] rounded-sm  shadow-md" onClick={()=> setisMobile(!ismobile)}>
            
            <svg
                className="text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              > 
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
