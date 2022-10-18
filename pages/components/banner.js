import Image from 'next/image';
import { useState } from 'react';
import Form from '../form/form';
import { AiOutlineClose } from "react-icons/ai";
import { motion } from 'framer-motion';


export default function Banner(props) {

  const [formPopup, setFormPopup] = useState(false);
  if (typeof window !== 'undefined') {
    formPopup ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll'
  }

  const FormClose=(props)=>{
    // setFormPopup(props)
  }

  return (
    <>
      <section className="bg-bottom bg-cover bg-page-banner">
        <div className="flex md:flex-row flex-col items-center max-w-[1200px] mx-auto md:space-x-16 md:px-6 px-3 py-32">
          <div className="items-center w-full space-y-5 md:w-1/2 md:pr-16">
            <motion.h2 className="text-white uppercase font-bold md:text-[40px] md:leading-[55px] text-3xl"
              initial={{ opacity: 0, x: "-50vw" }}
              animate={{
                opacity: 1, x: 0,
                transition: {
                  delay: 0.3,
                }
              }}
            >
              {props.heading}
            </motion.h2>
            <motion.p className="sub-title" initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.3,
                }
              }}>{props.sub_heading}</motion.p>
            {props.bannerURL ? (
              ''
            ) : (
              <motion.button className="main-button hover:bg-[#302E2E] items-center" onClick={() => setFormPopup(!formPopup)}
                whileHover={{ boxShadow: "0px 0px 8px rgb(255,255,255)", scale:1.1 }}
              >
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
              </motion.button>
            )}
          </div>
          <div className="items-baseline w-full md:w-1/2">
              <motion.figure initial={{ opacity: 0.5, scale: 0.6 }} animate={{ opacity: 1, scale: 1, transition:{ duration: .5 } }}>
              <Image
                src={props.bannerURL ? props.bannerURL : `/images/${props.icon}`}
                alt={props.heading}
                className="p-6 pb-0"
                width={540}
                height={456}
              />
              </motion.figure>
          </div>
        </div>

      </section>
      {
        formPopup && 
        <div className='fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80' >
          <motion.div initial={{ opacity: 0, y: '-20vh' }} animate={{ type:'spring', opacity:1, y:'50vh' }}>
            <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
              <Form formClose={FormClose}/>
              <div className='fixed inline-block cursor-pointer right-1 top-1 close bg-opacity-80' onClick={() => setFormPopup(false)} >
                <AiOutlineClose size={20} />
              </div>
            </div>
          </motion.div>
        </div>
      }
    </>
  );
}
