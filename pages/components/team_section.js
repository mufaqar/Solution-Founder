import Image from 'next/image';
import Link from 'next/link'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview' // use current active screen Area



export default function TeamSection() {

  const [ref, inView] = useInView();
  const animation = useAnimation();
  const ImageScale = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x:0,
      })
      ImageScale.start({
        opacity: 1,
        scale:1,
        trasition:{
          delay: 2
        }
      })
      
    } else {
      animation.start({
        opacity: 0,
        x: '-50vw'
      })
      ImageScale.start({
        opacity:0.5,
        scale: 0.6
      })
    }
  }, [inView]);


  return (
    <>
      <section className="" > 
        <div className="flex md:flex-row flex-col items-center max-w-[1200px] mx-auto md:space-x-16 space-x-0 md:space-y-0 space-y-10 md:px-6 px-3 py-16">
          <div ref={ref}  className="items-center w-full space-y-5 md:w-1/2">
            <motion.h2  className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] mb-8" animate={animation}>
              MEET OUR EXCEPTIONALLY TALENTED TEAM
            </motion.h2>
            <p className="text-lg font-medium text-[#302E2E]">
              Our team draws on board vast industry experience to make best
              outcomes for our clients
            </p>
            <Link href="/company/#team" className="items-center main-button">
              <motion.a className='border-[1px] border-[rgb(19,60,109)] hover:bg-[rgb(19,60,109)] hover:text-white px-5 font-bold inline-block py-4 rounded-md text-[rgb(19,60,109)]'
              whileHover={{ boxShadow: "0px 0px 8px rgb(19,60,109)", scale:1.1 }}
              >
                Meat The Team
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
              </motion.a>
            </Link>
          </div>
          <div className="items-baseline w-full md:w-1/2">
            <motion.figure animate={ImageScale}>
            <Image
              src="/images/team-section.png"
              alt="team-section.png"
              className="md:float-right"
              width={500}
              height={470}
            />
            </motion.figure>
          </div>
        </div>
      </section>
    </>
  );
}
