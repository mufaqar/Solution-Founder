import Image from 'next/image';
export default function Banner(props) {
  return (
    <>
      <section className="bg-bottom bg-cover bg-page-banner">
        <div className="flex md:flex-row flex-col items-center max-w-[1200px] mx-auto md:space-x-16 md:px-6 px-3 py-32">
          <div className="items-center w-full space-y-5 md:w-1/2 md:pr-16">
            <h2 className="text-white uppercase font-bold md:text-[40px] md:leading-[55px] text-3xl">
              {props.heading}
            </h2>
            <p className="sub-title">{props.sub_heading}</p>
            {props.bannerURL ? (
              ''
            ) : (
              <button className="main-button hover:bg-[#302E2E] items-center">
                Get in Touch
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
              </button>
            )}
          </div>
          <div className="items-baseline w-full md:w-1/2">
            <Image
              src={props.bannerURL ? props.bannerURL : `/images/${props.icon}`}
              alt={props.icon}
              className="p-6 pb-0"
              width={540}
              height={456}
            />
          </div>
        </div>
      </section>
    </>
  );
}
