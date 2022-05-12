import Link from "next/link";
export default function Mega_Menu() {
  return (
    <div className="flex flex-wrap w-[1200px] mx-auto bg-white shadow-lg z-0">
      <div className="w-[78%] grid gap-5 p-10 pb-6">
        <div className="grid grid-cols-3 gap-7">
          <div className="w-full items-center space-y-3">
            <img src="/images/products.png" alt="products.png" />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              ERP Solutions
            </h2>
            <ol className="space-y-2 list-disc list-inside">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../transportation">Transportation</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../retail">Retail</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../manufacturing">Manufacturing</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../construction-and-contracting">
                  Construction And Contracting
                </Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../trading-distribution">Trading Distribution</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../hospital-management">Hospital Management</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../custom-clearance-and-freight-forwarding">
                  Custom Clearance And Freight
                </Link>
              </li>
            </ol>
          </div>
          <div className="w-full items-center space-y-3">
            <img src="/images/products.png" alt="products.png" />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              Human Capital Managment Solution
            </h2>
            <ol className="space-y-2 list-disc list-inside">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../hrm-and-payroll">Hrm And Payroll</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../recruitment">Recruitment</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../appraisals">APPRAISALS</Link>
              </li>
            </ol>
          </div>
          <div className="w-full items-center space-y-3">
            <img src="/images/products.png" alt="products.png" />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              Material Management Solution
            </h2>
            <ol className="space-y-2 list-disc list-inside">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../inventory-warehouse-management">
                  Inventory & Warehouse Management System
                </Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../quality-management">Quality Management</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../purchase-management">Purchase Management​</Link>
              </li>
            </ol>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="w-full items-center space-y-3">
            <img src="/images/products.png" alt="products.png" />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              Finance Management Solution
            </h2>
            <ol className="space-y-2 list-disc list-inside">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../financial-management">Financial Management</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../financial-planning">Financial Planning</Link>
              </li>
            </ol>
          </div>
          <div className="w-full items-center space-y-3">
            <img src="/images/products.png" alt="products.png" />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              Customer Experience Solution
            </h2>
            <ol className="space-y-2 list-disc list-inside">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../sales">Sales</Link>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <Link href="../crm">crm</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="w-[22%] py-12 px-5 bg-megaBg bg-cover bg-center items-center flex flex-wrap justify-center">
        <div className="w-full items-center p-2 grid gap-5 ">
          <h2 className="text-white text-base font-bold flex items-center">
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
