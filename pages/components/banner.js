import Image from 'next/image';
import { useState } from 'react';
import Form from '../form/form';
import { AiOutlineClose } from "react-icons/ai";

export default function Banner(props) {

  const [formPopup, setFormPopup] = useState(false);

  if (typeof window !== 'undefined') {
    formPopup ?  document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll'
  }
 
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
              <button className="main-button hover:bg-[#302E2E] items-center" onClick={()=>setFormPopup(!formPopup)}>
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
              alt={props.heading}
              className="p-6 pb-0"
              width={540}
              height={456}
            />
          </div>
        </div>
        
      </section>
      {
        formPopup && <div className='fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80'>
            <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
              <Form/>
            </div>
            <div className='fixed inline-block bg-white cursor-pointer right-6 top-6 close bg-opacity-80' onClick={()=>setFormPopup(false)} >
              <AiOutlineClose size={30}/>
            </div>
        </div>
      }
    </>
  );
}
