export default function Mega_Menu() {
  return (
    <div className="flex flex-wrap w-[1200px] mx-auto bg-white shadow-lg ">
      <div className="w-[78%] grid gap-5 p-10 pb-6">
        <div className="grid grid-cols-3 gap-7">
          <div className="w-full items-center space-y-3">
            <img src="/images/products.png" alt="products.png" />
            <h2 className="text-[#0261A3] text-base font-bold flex items-center">
              ERP Solutions
            </h2>
            <ol className="space-y-2 list-disc list-inside">
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../transportation">Transportation</a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../retail">Retail</a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../manufacturing">Manufacturing</a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../construction-and-contracting">
                  Construction And Contracting
                </a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../trading-distribution">Trading Distribution</a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../hospital-management">Hospital Management</a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../custom-clearance-and-freight-forwarding">
                  Custom Clearance And Freight
                </a>
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
                <a href="../hrm-and-payroll">Hrm And Payroll</a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../recruitment">Recruitment</a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../appraisals">APPRAISALS</a>
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
                <a href="../inventory-warehouse-management">
                  Inventory & Warehouse Management System
                </a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../quality-management">Quality Management</a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../purchase-management">Purchase Management​</a>
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
                <a href="../financial-management">Financial Management</a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../financial-planning">Financial Planning</a>
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
                <a href="../sales">Sales</a>
              </li>
              <li className="text-black hover:text-[#8DC63F] text-sm uppercase font-normal">
                <a href="../crm">crm</a>
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
