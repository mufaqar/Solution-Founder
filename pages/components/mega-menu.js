import Link from "next/link";
import Image from "next/image";
import {
  hrmAndPayroll,
  transportation,
  retail,
  manufacturing,
  constructionAndcontracting,
  tradingDistribution,
  customClearanceAndFreightForwarding,
  financialManagement,
  financialPlanning,
  recruitment,
  appraisals,
  sales,
  crm,
  inventoryWarehouseManagement,
  qualityManagement,
  purchaseManagement,
  hospitalManagement,
} from "../../public/megaMenuLinks";


export default function Mega_Menu() {
  return (
    <div className="flex flex-wrap w-full lg:w-[1190px] mx-auto bg-white shadow-lg z-0">
      <div className="lg:w-[78%] w-full grid gap-5 p-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <div className="items-center w-full space-y-3">
            <Image
              src="/images/products.png"
              alt="products.png"
              width={40}
              height={40}
            />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              ERP Solutions
            </h2>
            <ol className="space-y-2 list-disc list-inside whitespace-nowrap">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={transportation}>Transportation</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={retail}>Retail</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={manufacturing}>Manufacturing</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={constructionAndcontracting}>
                  Construction And Contracting
                </Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={tradingDistribution}>Trading Distribution</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={hospitalManagement}>Hospital Management</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={customClearanceAndFreightForwarding}>
                  Custom Clearance And Freight
                </Link>
              </li>
            </ol>
          </div>
          <div className="items-center w-full space-y-3">
            <Image
              src="/images/products.png"
              alt="products.png"
              width={40}
              height={40}
            />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              Human Capital Managment Solution
            </h2>
            <ol className="space-y-2 list-disc list-inside">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={hrmAndPayroll}>Hrm And Payroll</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={recruitment}>Recruitment</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={appraisals}>APPRAISALS</Link>
              </li>
            </ol>
          </div>
          <div className="items-center w-full space-y-3">
            <Image
              src="/images/products.png"
              alt="products.png"
              width={40}
              height={40}
            />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              Material Management Solution
            </h2>
            <ol className="space-y-2 list-disc list-inside">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={inventoryWarehouseManagement}>
                  Inventory & Warehouse Management System
                </Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={qualityManagement}>Quality Management</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={purchaseManagement}>Purchase Management​</Link>
              </li>
            </ol>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <div className="items-center w-full space-y-3">
            <Image
              src="/images/products.png"
              alt="products.png"
              width={40}
              height={40}
            />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              Finance Management Solution
            </h2>
            <ol className="space-y-2 list-disc list-inside">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={financialManagement}>Financial Management</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={financialPlanning}>Financial Planning</Link>
              </li>
            </ol>
          </div>
          <div className="items-center w-full space-y-3">
            <Image
              src="/images/products.png"
              alt="products.png"
              width={40}
              height={40}
            />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              Customer Experience Solution
            </h2>
            <ol className="space-y-2 list-disc list-inside">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={sales}>Sales</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href={crm}>crm</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>



      <div className="w-[22%] py-12 px-5 bg-megaBg bg-cover bg-center items-center lg:flex hidden flex-wrap justify-center">
        <div className="grid items-center w-full gap-5 p-2 ">
          <h2 className="flex items-center text-base font-bold text-white">
            WE ARE THE INFORMATION TECHNOLOGY COMPANY
          </h2>
          <p className="text-base text-white">
            Increase business ability get profitable growth, enterprise, and
            business solutions.
          </p>
        </div>
        <a
          href="#"
          className="bg-[#8DC63F] hover:bg-[#302E2E] text-white md:py-2 py-2 md:px-9 px-2 text-sm font-bold rounded"
        >
          Get in Touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-4 h-4 ml-5"
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
      </div>
    </div>
  );
}
