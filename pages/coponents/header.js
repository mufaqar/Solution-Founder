import { AiOutlineDown } from 'react-icons/ai';
export default function Header() {
  return (
    <>
      <header className="bg-[#133c6d] border-[#284D78] border-b">
        <div className="flex flex-row items-center justify-between p-6 max-w-[1200px] mx-auto">
          <div className="md:w-1/4 w-1/2">
            <a href="/">
              <img
                src="/images/SF-White.png"
                alt="SF-White.png"
                className="max-w-[80%]"
              />
            </a>
          </div>
          <div className="w-auto md:block hidden">
            <ul className="flex justify-center space-x-12 items-center">
              <li className="inline text-white text-base font-semibold">
                <a href="/">Home</a>
              </li>
              <li className="inline text-white text-base font-semibold">
                <a href="coponents/mega-menu" className="flex items-center">
                  Products
                  <span className="ml-1">
                    <AiOutlineDown />
                  </span>
                </a>
              </li>
              <li className="inline text-white text-base font-semibold">
                <a href="industries">Industries Solution</a>
              </li>
              <li className="inline text-white text-base font-semibold">
                <a href="success-stories">Success Stories</a>
              </li>
              <li className="inline text-white text-base font-semibold">
                <a href="news-updates">News & Updates</a>
              </li>
              <li className="inline text-white text-base font-semibold">
                <a
                  href="coponents/company-menu"
                  className="flex items-center relative hover-trigger"
                >
                  Company{' '}
                  <span className="ml-1">
                    <AiOutlineDown />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto md:hidden block items-center">
            <button className="bg-white rounded-sm py-2 px-1 shadow-md">
              <svg
                className="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
