export default function TabsSection() {
  return (
    <>
      <section className="py-12 px-7">
        <div className="max-w-[1200px] mx-auto">
          <ul
            id="tabs"
            className="md:inline-flex md:space-x-4 md:space-y-0 space-x-0 space-y-4"
          >
            <li>
              <a href="#first" id="default-tab">
                <div className="w-full relative flex items-center justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">
                    Logistics & Transportation
                  </h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#second">
                <div className="w-full relative flex items-center justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#third">
                <div className="w-full relative flex items-center justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#fourth">
                <div className="w-full relative flex items-center justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#fifth">
                <div className="w-full relative flex items-center justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#sixth">
                <div className="w-full relative flex items-center justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
                  <img
                    src="/images/F.png"
                    alt="F.png"
                    className="absolute top-0 left-0 rounded-md"
                  />
                  <img
                    src="/images/setting.png"
                    alt="setting.png"
                    className="w-[32%] h-[48%] mb-4"
                  />
                  <h3 className="text-sm text-center">Project Initiation</h3>
                </div>
              </a>
            </li>
          </ul>

          <div id="tab-contents">
            <div id="first" className="border-t border-black">
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  Simplifying transportation operations with real-time processes
                  Meet new technology requirements and changing customer needs
                  by streamlining processes and using analytics for real-time
                  Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="second" className="hidden">
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  2 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="third" className="hidden">
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  3 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="fourth" className="hidden">
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  4 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="fifth" className="hidden">
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  5 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="sixth" className="hidden">
              <div className="flex md:flex-row flex-col pt-5 md:space-y-0 space-y-2 items-center">
                <p className="text-lg font-medium text-[#585858] md:w-4/5 w-full md:text-left text-center">
                  6 Simplifying transportation operations with real-time
                  processes Meet new technology requirements and changing
                  customer needs by streamlining processes and using analytics
                  for real-time Insights linked to your financial results.
                </p>
                <div className="md:w-1/5 w-full flex md:justify-end justify-center">
                  <button className="main-button hover:bg-[#302E2E] items-center ">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
