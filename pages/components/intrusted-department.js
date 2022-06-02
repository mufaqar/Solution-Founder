import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image'
import Finance from '../../public/images/Finance.svg'
import HCM from '../../public/images/HCM.svg'
import Sales from '../../public/images/sale.svg'
import Inventory from '../../public/images/Inventory.svg'
import Link from 'next/link'

export default function IntrustedDepartment() {
  return (
    <>
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

          <div className="flex flex-col w-full space-y-4 md:w-1/4 md:py-5">
            <figure>
              <Image
                src={Finance}
                alt="Finance.png"
                className="w-[17%]"
                width={45}
                height={45}

              />
            </figure>
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
              <Link href="/product/financial-management" className="items-center main-button">
                <a className='bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white'>
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
            </ul>
          </div>
          <div className="flex flex-col w-full space-y-4 md:w-1/4 md:py-5">
            <figure>
              <Image
                src={HCM}
                alt="HCM"
                className="w-[17%]"
                width={45}
                height={45}

              />
            </figure>
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
              <Link href="/product/hrm-and-payroll" className="items-center main-button">
                <a className='bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white'>
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
            </ul>
          </div>
          <div className="flex flex-col w-full space-y-4 md:w-1/4 md:py-5">
            <figure>
              <Image
                src={Sales}
                alt="Sales"
                className="w-[17%]"
                width={45}
                height={45}

              />
            </figure>
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
              <Link href="/product/sales" className="items-center main-button">
                <a className='bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white'>
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
            </ul>
          </div>
          <div className="flex flex-col w-full space-y-4 md:w-1/4 md:py-5">
            <figure>
              <Image
                src={Inventory}
                alt="Inventry"
                className="w-[17%]"
                width={45}
                height={45}

              />
            </figure>
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
              <Link href="/product/inventory-warehouse-management" className="items-center main-button">
                <a className='bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white'>
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
    </>
  )
}
