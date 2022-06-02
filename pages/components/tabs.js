import { useState } from 'react';
import Image from 'next/image';
import logistics from '../../public/images/logistics.svg';
import freight from '../../public/images/freight.svg';
import manufacturing from '../../public/images/manufacturing.svg';
import distribution from '../../public/images/distribution.svg';
import construction from '../../public/images/construction.svg';
import retail from '../../public/images/retail.svg';
import Link from 'next/link';

export default function TabsSection() {
  const [tab, setTab] = useState(1);

  return (
    <>
      <section className="py-12 px-7">
        <div className="max-w-[1200px] mx-auto">
          <ul
            id="tabs"
            className="justify-between space-x-0 space-y-4 md:inline-flex md:space-x-4 md:space-y-0"
          >
            <li className="min-w-[187px] m-0">
              <a onClick={() => setTab(1)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src={logistics}
                      alt="Logistics & Transportation"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">
                    Logistics & Transportation
                  </h3>
                </div>
              </a>
              <figure
                className={`w-full -mt-2 h-2 ${tab === 1 ? 'block' : 'hidden'}`}
              >
                <Image
                  src="/images/color-bar.jpg"
                  alt="bottom line"
                  width={185}
                  height={7}
                />
              </figure>
            </li>
            <li className="min-w-[187px] m-0">
              <a onClick={() => setTab(2)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src={freight}
                      alt="Freight Forwarding"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">Freight Forwarding</h3>
                </div>
              </a>
              <figure
                className={`w-full -mt-2 h-2 ${tab === 2 ? 'block' : 'hidden'}`}
              >
                <Image
                  src="/images/color-bar.jpg"
                  alt="bottom line"
                  width={185}
                  height={7}
                />
              </figure>
            </li>
            <li className="min-w-[187px] m-0">
              <a onClick={() => setTab(3)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src={manufacturing}
                      alt="setting.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">Manufacturing</h3>
                </div>
              </a>
              <figure
                className={`w-full -mt-2 h-2 ${tab === 3 ? 'block' : 'hidden'}`}
              >
                <Image
                  src="/images/color-bar.jpg"
                  alt="bottom line"
                  width={185}
                  height={7}
                />
              </figure>
            </li>
            <li className="min-w-[187px] m-0">
              <a onClick={() => setTab(4)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src={distribution}
                      alt="Distribution"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">Distribution</h3>
                </div>
              </a>
              <figure
                className={`w-full -mt-2 h-2 ${tab === 4 ? 'block' : 'hidden'}`}
              >
                <Image
                  src="/images/color-bar.jpg"
                  alt="bottom line"
                  width={185}
                  height={7}
                />
              </figure>
            </li>
            <li className="min-w-[187px] m-0">
              <a onClick={() => setTab(5)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image
                      src={construction}
                      alt="Construction & Real Estate"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-sm text-center">
                    Construction & Real Estate
                  </h3>
                </div>
              </a>
              <figure
                className={`w-full -mt-2 h-2 ${tab === 5 ? 'block' : 'hidden'}`}
              >
                <Image
                  src="/images/color-bar.jpg"
                  alt="bottom line"
                  width={185}
                  height={7}
                />
              </figure>
            </li>
            <li className="min-w-[187px] m-0">
              <a onClick={() => setTab(6)}>
                <div className="relative flex flex-col items-center w-full px-6 space-y-4 bg-white rounded-md cursor-pointer justify-items-center py-11 shadow-sh hover:shadow-shl">
                  <figure className="absolute top-0 left-0 rounded-md">
                    <Image
                      src="/images/F.png"
                      alt="F.png"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <figure>
                    <Image src={retail} alt="Retail" width={45} height={45} />
                  </figure>
                  <h3 className="text-sm text-center">Retail</h3>
                </div>
              </a>
              <figure
                className={`w-full -mt-2 h-2 ${tab === 6 ? 'block' : 'hidden'}`}
              >
                <Image
                  src="/images/color-bar.jpg"
                  alt="bottom line"
                  width={185}
                  height={7}
                />
              </figure>
            </li>
          </ul>

          <div id="tab-contents" className="mt-[10px]">
            <div
              id="first"
              className={`border-t border-black ${
                tab === 1 ? 'block' : 'hidden'
              }`}
            >
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  Simplifying transportation operations with real-time processes
                  Meet new technology requirements and changing customer needs
                  by streamlining processes and using analytics for real-time
                  Insights linked to your financial results.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <Link
                    href="/product/transportation"
                    className="items-center main-button"
                  >
                    <a className="bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white">
                      LEARN MORE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`border-t border-black ${
                tab === 2 ? 'block' : 'hidden'
              }`}
            >
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  Simplifying Freight operations with real-time processes Meet
                  new technology requirements and changing customer needs by
                  streamlining processes and using analytics for real-time
                  insight linked to your financial results.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <Link
                    href="/product/custom-clearance-and-freight"
                    className="items-center main-button"
                  >
                    <a className="bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white">
                      LEARN MORE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="third"
              className={`border-t border-black ${
                tab === 3 ? 'block' : 'hidden'
              }`}
            >
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  Solution Founder’s manufacturing software offers a complete
                  solution that benefits your entire organization. Greater
                  automation and investment driven by accelerated production
                  cycles, advances in technology, coupled with changing labor
                  demographics, are shaping this new business model.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <Link
                    href="/product/manufacturing"
                    className="items-center main-button"
                  >
                    <a className="bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white">
                      LEARN MORE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="fourth"
              className={`border-t border-black ${
                tab === 4 ? 'block' : 'hidden'
              }`}
            >
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  Enhance your wholesale distribution business with Solution
                  Founder’s integrated solution. With rapidly changing consumer
                  expectations, fierce competition, influence of advanced
                  analytics and Omni-commerce, there is a need for quick product
                  development and innovation for margin improvement to manage
                  value chain disruptions.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <Link
                    href="/product/trading-distribution"
                    className="items-center main-button"
                  >
                    <a className="bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white">
                      LEARN MORE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="fifth"
              className={`border-t border-black ${
                tab === 5 ? 'block' : 'hidden'
              }`}
            >
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  Solution Founder understands the complexities and challenges
                  involved in the real estate and construction business. We
                  offer the best processes and the most suitable methods to help
                  companies overcome challenges in the Construction and Real
                  Estate industry.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <Link
                    href="/product/construction-and-contracting"
                    className="items-center main-button"
                  >
                    <a className="bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white">
                      LEARN MORE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="sixth"
              className={`border-t border-black ${
                tab === 6 ? 'block' : 'hidden'
              }`}
            >
              <div className="flex flex-col items-center pt-5 space-y-2 md:flex-row md:space-y-0">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  Get Omnichannel Commerce Platform and transform your retail
                  business. If you are facing challenges with current system so
                  you are at the right place because we have experience
                  supporting businesses like yours.
                </p>
                <div className="flex justify-center w-full md:w-1/5 md:justify-end">
                  <Link
                    href="/product/retail"
                    className="items-center main-button"
                  >
                    <a className="bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white">
                      LEARN MORE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
