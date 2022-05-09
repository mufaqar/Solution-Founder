import Banner from "./coponents/banner";
import Cardnew from "./coponents/card-new";
import Footer from "./coponents/footer";
import Header from "./coponents/header";
import StoryBox from "./coponents/story-box";
import Team from "./coponents/team";

export default function About_us() {
    return (
        <>

            <Header />

            <Banner heading="SOLUTION FOUNDER BUILD YOUR IDEAS" sub_heading="For Those Who Shape The World We Are The Information Technology Company"
                icon="company-banner-img.png" />

            <section className="py-14">
                <div className="md:w-[930px] mx-auto p-3 mb-8">
                    <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">ABOUT US</h2>
                    <p className="text-base tracking-normal font-medium text-[#535353] text-center leading-6">Solution Founder has an extensive experience that was acquired through many years of engagement in the industry. We are among the contributors who shape tomorrow’s technology standards on global stage. From our head office in Jeddah ~ Saudi Arabia, and branch offices in Pakistan & India, the dedicated team of experienced Information Technology professionals provide our services to an extensive portfolio of corporate, public sector as well as non-profit organization clients throughout the globe. We have a recognized ability to deliver services and solutions, tailored to fit the unique needs of each organization according to its size and area of activity.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1200px] mx-auto mb-8 px-7">
                    <Cardnew icon="ibm-dark.png" />
                    <Cardnew icon="odoo (1).png" />
                    <Cardnew icon="micro-dark.png" />
                </div>
            </section>

            <section className="bg-cta-banner relative bg-cover bg-center bg-no-repeat py-14">
                <img src="/images/f-large.png" alt="f-large.png" className="absolute top-[120px] left-0" />
                <div className="flex md:flex-row flex-col items-center max-w-[1200px] mx-auto md:px-6 px-3 py-28">
                    <div className="md:w-1/2 w-full items-center space-y-6">
                        <h2 className="md:text-4xl text-3xl leading-8 font-bold text-white">Our Mission</h2>
                        <p className="text-base tracking-normal font-medium text-white">Our mission is to provide the best technology solution that will <br></br>contribute in our customer’s success and growth.</p>
                        <h2 className="md:text-4xl text-3xl leading-8 font-bold text-white">Our Vision</h2>
                        <p className="text-base tracking-normal font-medium text-white">To be the right technology enabler for world.</p>
                        <button className="main-button hover:bg-[#302E2E] items-center">Lets Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="md:w-1/2 w-full">

                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1651145428">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            <section className="py-14 px-7 bg-[#eff1f4] ">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">OUR TEAM</h2>
                    <ul id="tabs" className="md:inline-flex md:space-x-5 md:space-y-0 space-x-0 space-y-5">
                        <li>
                            <a href="#first" id="default-tab">
                                <div className="w-full flex items-center justify-items-center py-3 px-6 rounded-md shadow-sh bg-white">
                                    <img src="/images/setting.png" alt="setting.png" className="md:w-[25%] w-[10%]" />
                                    <h3 className="text-sm ml-2">All</h3>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#second">
                                <div className="w-full flex items-center justify-items-center py-3 px-6 rounded-md shadow-sh bg-white">
                                    <img src="/images/setting.png" alt="setting.png" className="md:w-[25%] w-[10%]" />
                                    <h3 className="text-sm ml-2"> Management Team</h3>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#third">
                                <div className="w-full flex items-center justify-items-center py-3 px-6 rounded-md shadow-sh bg-white">
                                    <img src="/images/setting.png" alt="setting.png" className="md:w-[25%] w-[10%]" />
                                    <h3 className="text-sm ml-2"> Functional Team</h3>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#fourth">
                                <div className="w-full flex items-center justify-items-center py-3 px-6 rounded-md shadow-sh bg-white">
                                    <img src="/images/setting.png" alt="setting.png" className="md:w-[25%] w-[10%]" />
                                    <h3 className="text-sm ml-2"> Technical Team</h3>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#fifth">
                                <div className="w-full flex items-center justify-items-center py-3 px-6 rounded-md shadow-sh bg-white">
                                    <img src="/images/setting.png" alt="setting.png" className="md:w-[25%] w-[10%]" />
                                    <h3 className="text-sm ml-2">Board of Directors</h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div id="tab-contents">
                        <div id="first" className="border-t border-black pt-14">
                            <div className="grid md:grid-cols-4 gap-5">
                                <Team name="Muhammad Tahir​" designation="Chief Technology Officer" icon="m-tahir.png" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Bassam-Al-Shimrani.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Waqas-Hameed.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="James.jpg" />
                                <Team name="Muhammad Tahir​" designation="Chief Technology Officer" icon="m-tahir.png" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Bassam-Al-Shimrani.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Waqas-Hameed.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="James.jpg" />
                            </div>
                        </div>
                        <div id="second" className="hidden">
                            <div className="grid md:grid-cols-4 gap-5">
                                <Team name="Muhammad Tahir​" designation="Chief Technology Officer" icon="m-tahir.png" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Bassam-Al-Shimrani.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Waqas-Hameed.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="James.jpg" />
                                <Team name="Muhammad Tahir​" designation="Chief Technology Officer" icon="m-tahir.png" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Bassam-Al-Shimrani.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Waqas-Hameed.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="James.jpg" />
                            </div>
                        </div>
                        <div id="third" className="hidden">
                            <div className="grid md:grid-cols-4 gap-5">
                                <Team name="Muhammad Tahir​" designation="Chief Technology Officer" icon="m-tahir.png" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Bassam-Al-Shimrani.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Waqas-Hameed.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="James.jpg" />
                                <Team name="Muhammad Tahir​" designation="Chief Technology Officer" icon="m-tahir.png" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Bassam-Al-Shimrani.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Waqas-Hameed.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="James.jpg" />
                            </div>
                        </div>
                        <div id="fourth" className="hidden">
                            <div className="grid md:grid-cols-4 gap-5">
                                <Team name="Muhammad Tahir​" designation="Chief Technology Officer" icon="m-tahir.png" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Bassam-Al-Shimrani.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Waqas-Hameed.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="James.jpg" />
                                <Team name="Muhammad Tahir​" designation="Chief Technology Officer" icon="m-tahir.png" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Bassam-Al-Shimrani.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Waqas-Hameed.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="James.jpg" />
                            </div>
                        </div>
                        <div id="fifth" className="hidden">
                            <div className="grid md:grid-cols-4 gap-5">
                                <Team name="Muhammad Tahir​" designation="Chief Technology Officer" icon="m-tahir.png" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Bassam-Al-Shimrani.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Waqas-Hameed.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="James.jpg" />
                                <Team name="Muhammad Tahir​" designation="Chief Technology Officer" icon="m-tahir.png" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Bassam-Al-Shimrani.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="Waqas-Hameed.jpg" />
                                <Team name="Bassam Alshamrani​" designation="CEO & HCM specialist" icon="James.jpg" />
                            </div>
                        </div>
                    </div>
                </div>

                
            </section>

            <section className="py-28 px-7 bg-[#eff1f4]">
                <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">OUR SUCCESS STORIES</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
                    <StoryBox icon="Nawara-Transportation-dp.png" title="Nawara Transportation" description="Nawara is one of leading logistics company in Saudi Arabia with head..." />
                    <StoryBox icon="HamatReady.png" title="Hamat Readymix" description="Hamat Readymix is Manufacturing company who manufacture different type of Readymix based on customer demand" />
                    <StoryBox icon="Quality-Education-Holdings-dp.png" title="Quality Education Holdings" description="QEC was founded in the year 2001..." />
                    <StoryBox icon="Unifood-dp.png" title="Unifood" description="Unifood (National Foodstuff Manufacturing Company Limited)..." />
                </div>
                
            </section>

            <Footer />

        </>
    )
}
