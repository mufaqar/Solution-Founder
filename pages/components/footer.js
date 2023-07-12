import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillFunnelPlot } from 'react-icons/ai';
import { FaIndustry } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <section className="relative bg-right-top bg-no-repeat bg-cover bg-footerBg md:bg-center py-14">
        <figure className="absolute left-2">
          <Link passHref href="/career">
            <Image
              src="/images/footer-F.png"
              alt="footer-F.png"
              className="absolute top-[55px] left-0 object-cover "
              width={250}
              height={210}
            />
          </Link>
        </figure>
        <div className="max-w-[1200px] mx-auto py-10 md:px-6 px-3 flex items-center space-x-3">
          <div className="inline-flex items-center w-1/2 md:w-1/4">
            <Link passHref href="/">
              <Image
                src="/images/SF-White.svg"
                alt="Logo Solution Founder "
                className='cursor-pointer'
                width={800}
                height={130}
              />
            </Link>
            
          </div>
        
          <Link passHref href="/career" className="w-20 ml-2">
              <img
                src="/images/hirring.png"
                alt="Career"
                className=' cursor-pointer '               
              />
            </Link>
          </div>
      
        <div className="flex md:flex-row flex-col max-w-[1200px] md:space-y-0 space-y-8 mx-auto md:px-6 px-3">
          <div className="z-10 items-center w-full space-y-3 md:w-1/5">
            <h2 className="flex items-center text-lg font-bold text-white">
              <span className="text-[#8DC63F] text-2xl mr-1">
                <AiFillFunnelPlot />
              </span>
              Products
            </h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/product/transportation">
                  Transportation Solution
                </Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/product/inventory-warehouse-management">
                  Material Management
                </Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/product/financial-management">
                  Finance Management
                </Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link passHref href="/product/sales">
                  Customer Experience
                </Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link passHref href="/product/hrm-and-payroll">
                  Human Capital Management
                </Link>
              </li>
            </ul>
          </div>
          <div className="items-center w-full space-y-3 md:w-1/5">
            <h2 className="flex items-center text-lg font-bold text-white">
              <span className="text-[#8DC63F] text-2xl mr-1">
                <AiFillFunnelPlot />
              </span>
              Company
            </h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/company">About us</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/career">Career</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/success-stories">Success Stories</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/news-updates">News & Updates</Link>
              </li>
            </ul>
          </div>
          <div className="items-center w-full space-y-3 md:w-1/5">
            <h2 className="flex items-center text-lg font-bold text-white">
              <span className="text-[#8DC63F] text-2xl mr-1">
                <FaIndustry />
              </span>
              Industries Solution
            </h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/product/retail">Retail</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/product/manufacturing">Manufacturing</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/product/trading-distribution">
                  Trading Distribution
                </Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/product/custom-clearance-and-freight">
                  Freight Forwarding
                </Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/product/transportation">
                  Logistics & Transportation
                </Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link passHref href="/product/construction-and-contracting">
                  Construction & Real Estate
                </Link>
              </li>
            </ul>
          </div>
          <div className="items-center w-full space-y-3 md:w-1/5">
            <h2 className="text-lg font-bold text-white">Help and Support</h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link passHref href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="items-center w-full space-y-3 md:w-1/5">
            <h2 className="text-lg font-bold text-white">
              Solution Founder has set new standards in ERP industry
            </h2>
            <h2 className="text-lg font-bold text-white">Social</h2>
            <ul className="flex space-x-6">
              <li className="text-white hover:text-[#8DC63F] text-2xl font-semibold">
                <a
                  href="https://www.linkedin.com/company/solution-founder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-2xl font-semibold">
                <a
                  href="https://twitter.com/solutionfounder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#133C6D] border-t border-[#2F527C] py-5">
        <div className="flex md:flex-row flex-col items-center md:space-y-0 space-y-4 max-w-[1200px] mx-auto md:px-6 px-3">
          <div className="flex justify-center w-full md:w-1/2 md:justify-start">
            <p className="text-base font-semibold text-white">
              © Solution Founder 2020, All Rights Reserved
            </p>
          </div>
          <div className="flex justify-center w-full md:w-1/2 md:justify-end">
            <ul className="inline-flex space-x-5">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/terms-of-use">Terms Of Use</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
