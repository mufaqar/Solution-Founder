import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

import Link from 'next/link';

export default function IntrustedDepartment() {
  const Finance = '/images/Finance.svg';
  const HCM = '/images/HCM.svg';
  const Sales = '/images/sale.svg';
  const Inventory = '/images/Inventory.svg';
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
          {
            INTEGRATEDDEPARTMENTS.map((item, idx) => {
              return (
                <div className="flex flex-col w-full space-y-4 md:w-1/4 md:py-5" key={idx}>
                  <figure>
                    <Image
                      src={item.icon}
                      alt="Finance.png"
                      className="w-[17%]"
                      width={45}
                      height={45}
                    />
                  </figure>
                  <h3 className="text-[#302E2E] text-xl font-medium">{item.title}</h3>
                  <ul className="space-y-3">
                    {
                      item.features.map((feature, i) => (
                        <li key={i} className="text-[#585858] hover:text-[#8DC63F] text-[15px]] font-semibold flex items-center space-x-2">
                          <BsArrowRight />
                          <span>{feature}</span>
                        </li>
                      ))
                    }

                    <Link
                      href={item.link}
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
                  </ul>
                </div>
              )
            })
          }


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
  );
}



const INTEGRATEDDEPARTMENTS = [
  {
    icon: "/images/Finance.svg",
    title: "Finance",
    link: "/product/financial-management",
    features: [
      "Financial Global",
      "General Ledger",
      "Accounts Receivable",
      "Accounts Payable",
      "Bank Accounting"
    ]
  },
  {
    icon: '/images/HCM.svg',
    title: 'HCM',
    link: "/product/hrm-and-payroll",
    features: [
      "Core HR",
      "Payroll",
      "Employee Center",
      "Employee Self Service",
      "Government Relation"
    ]
  },
  {
    icon: '/images/sale.svg',
    title: 'Sales',
    link: "/product/sales",
    features: [
      "CRM",
      "Quotation Management",
      "Sales Forecasting",
      "Sales Orders",
      "Activity Dashboard"
    ]
  },
  {
    icon: '/images/Inventory.svg',
    title: 'Inventory',
    link: "/product/inventory-warehouse-management",
    features: [
      "Serial Numbers",
      "Lots Tracking",
      "Multi-Warehouse",
      "Perpetual Inventory",
      "Inventory Forecast"
    ]
  }
]
