import Header from './coponents/header';
import Footer from './coponents/footer';
import Banner from './coponents/banner';
import Cardnew from './coponents/card-new';
import { BsArrowRight } from 'react-icons/bs';
import StoryBox from './coponents/story-box';

export default function Quality_Management() {
  return (
    <>
      <Header />

      <Banner
        heading="QUALITY MANAGEMENT"
        sub_heading="Define quality control plans to trigger quality checks at specific inventory operations (receiving and final inspection) or manufacturing operations (in-process inspection).

Set up in-process, final, and receiving inspections based on a quality control plan. Define quality control plans to trigger in-process, final, and receiving inspections.

Manage and track production part approval process (PPAP) submissions. Configure your statistical process control (SPC). Attach process failure mode and effects analysis (PFMEA) documents to routings."
        icon="quality-management.png"
      />

      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          FEATURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 max-w-[1200px] mx-auto mb-8">
          <Cardnew title="Sales and Customer Services" icon="sales.png" />
          <Cardnew title="Operations Planning" icon="sales.png" />
          <Cardnew title="Fleet Management" icon="sales.png" />
          <Cardnew title="Route Management" icon="sales.png" />
          <Cardnew title="Driver Employee Management" icon="sales.png" />
          <Cardnew title="3pl Management" icon="sales.png" />
          <Cardnew title="Documents Management" icon="sales.png" />
          <Cardnew
            title="Terminal And Storage Area Management 123"
            icon="sales.png"
          />
        </div>
      </section>

      <section className="bg-[#DCE6F9] relative py-28 px-7">
        <div className="custom-shape-divider-top-1652087344">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-5">
          INTEGRATED DEPARTMENTS
        </h2>
        <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-x-0 space-y-8 max-w-[1200px] mx-auto">
          <div className="md:w-1/4 w-full flex md:py-5 space-y-4 flex-col">
            <img
              src="/images/Finance.png"
              alt="Finance.png"
              className="w-[17%]"
            />
            <h3 className="text-[#302E2E] text-xl font-medium">Finance</h3>
            <ul className="space-y-3">
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Financial Global</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>General Ledger</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Accounts Receivable </span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Accounts Payable</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Bank Accounting</span>
              </li>
              <button className="main-button hover:bg-[#302E2E] items-center">
                LEARN MORE
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
            </ul>
          </div>
          <div className="md:w-1/4 w-full flex md:py-5 space-y-4 flex-col">
            <img
              src="/images/Finance.png"
              alt="Finance.png"
              className="w-[17%]"
            />
            <h3 className="text-[#302E2E] text-xl font-medium">HCM</h3>
            <ul className="space-y-3">
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Core HR</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Payroll</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Employee Center</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Employee Self Service</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Government Relation</span>
              </li>
              <button className="main-button hover:bg-[#302E2E] items-center">
                LEARN MORE
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
            </ul>
          </div>
          <div className="md:w-1/4 w-full flex md:py-5 space-y-4 flex-col">
            <img
              src="/images/Finance.png"
              alt="Finance.png"
              className="w-[17%]"
            />
            <h3 className="text-[#302E2E] text-xl font-medium">Sales</h3>
            <ul className="space-y-3">
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>CRM</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Quotation Management</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Sales Forecasting </span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Sales Orders</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Activity Dashboard</span>
              </li>
              <button className="main-button hover:bg-[#302E2E] items-center">
                LEARN MORE
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
            </ul>
          </div>
          <div className="md:w-1/4 w-full flex md:py-5 space-y-4 flex-col">
            <img
              src="/images/Finance.png"
              alt="Finance.png"
              className="w-[17%]"
            />
            <h3 className="text-[#302E2E] text-xl font-medium">Inventory</h3>
            <ul className="space-y-3">
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Serial Numbers</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Lots Tracking</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Multi-Warehouse </span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Perpetual Inventory</span>
              </li>
              <li className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                <BsArrowRight />
                <span>Inventory Forecast</span>
              </li>
              <button className="main-button hover:bg-[#302E2E] items-center">
                LEARN MORE
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
            </ul>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1651145428">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          OUR SUCCESS STORIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
          <StoryBox
            icon="Nawara-Transportation-dp.png"
            title="Nawara Transportation"
            description="Nawara is one of leading logistics company in Saudi Arabia with head..."
          />
          <StoryBox
            icon="HamatReady.png"
            title="Hamat Readymix"
            description="Hamat Readymix is Manufacturing company who manufacture different type of Readymix based on customer demand"
          />
          <StoryBox
            icon="Quality-Education-Holdings-dp.png"
            title="Quality Education Holdings"
            description="QEC was founded in the year 2001..."
          />
          <StoryBox
            icon="Unifood-dp.png"
            title="Unifood"
            description="Unifood (National Foodstuff Manufacturing Company Limited)..."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
