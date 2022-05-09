import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillFunnelPlot } from 'react-icons/ai';
import { FaIndustry } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <section className="bg-footerBg relative bg-cover md:bg-center bg-right-top bg-no-repeat py-14">
        <img
          src="/images/footer-F.png"
          alt="footer-F.png"
          className="absolute top-[55px] left-0 object-cover"
        />
        <div className="max-w-[1200px] mx-auto py-10 md:px-6 px-3">
          <div className="inline-flex md:w-1/4 items-center">
            <a href="#" className="max-w-[80%]">
              <img src="/images/SF-White.png" alt="SF-White.png" />
            </a>
            <a href="#" className="w-full ml-2">
              <img src="/images/hirring.png" alt="hirring.png" />
            </a>
          </div>
        </div>
        <div className="flex md:flex-row flex-col max-w-[1200px] md:space-y-0 space-y-8 mx-auto md:px-6 px-3">
          <div className="md:w-1/5 w-full items-center space-y-3 z-10">
            <h2 className="text-white text-lg font-bold flex items-center">
              <span className="text-[#8DC63F] text-2xl mr-1">
                <AiFillFunnelPlot />
              </span>{' '}
              Products
            </h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="transportation">ERP Solutions</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="inventory-warehouse-management">Material Management</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="financial-management">Finance Management</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="sales">Customer Experience</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="hrm-and-payroll">Human Capital Management</a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5 w-full items-center space-y-3">
            <h2 className="text-white text-lg font-bold flex items-center">
              <span className="text-[#8DC63F] text-2xl mr-1">
                <AiFillFunnelPlot />
              </span>{' '}
              Company
            </h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="about-us">About us</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="career">Career</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="success-stories">Success Stories</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="news-updates">News & Updates</a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5 w-full items-center space-y-3">
            <h2 className="text-white text-lg font-bold flex items-center">
              <span className="text-[#8DC63F] text-2xl mr-1">
                <FaIndustry />
              </span>{' '}
              Industries Solution
            </h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="retail">Retail</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="manufacturing">Manufacturing</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="trading-distribution">Trading Distribution</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="custom-clearance-and-freight-forwarding">
                  Freight Forwarding
                </a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="transportation">Logistics & Transportation</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="construction-and-contracting">
                  Construction & Real Estate
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5 w-full items-center space-y-3">
            <h2 className="text-white text-lg font-bold">Help and Support</h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5 w-full items-center space-y-3">
            <h2 className="text-white text-lg font-bold">
              Solution Founder has set new standards in ERP industry
            </h2>
            <h2 className="text-white text-lg font-bold">Social</h2>
            <ul className="flex space-x-6">
              <li className="text-white hover:text-[#8DC63F] text-2xl font-semibold">
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-2xl font-semibold">
                <a href="#">
                  <BsTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#133C6D] border-t border-[#2F527C] py-5">
        <div className="flex md:flex-row flex-col items-center md:space-y-0 space-y-4 max-w-[1200px] mx-auto md:px-6 px-3">
          <div className="md:w-1/2 w-full flex md:justify-start justify-center">
            <p className="text-white text-base font-semibold">
              © Solution Founder 2020, All Rights Reserved
            </p>
          </div>
          <div className="md:w-1/2 w-full flex md:justify-end justify-center">
            <ul className="inline-flex space-x-5">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="privacy-policy">Privacy Policy</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="terms-of-use">Terms Of Use</a>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <a href="cookie-policy">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
