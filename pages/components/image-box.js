import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview' // use current active screen Area


export default function ImageBox(props) {
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring", delay:0.5, duration: 1, bounce: 0.3
        }
      })
    } else {
      animation.start({
        opacity: 0,
      })
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div className="flex flex-col items-center w-full px-6 space-y-4 justify-items-center py-11" animate={animation}>
        <Image
          src={props.icon}
          alt={props.title}
          className="w-[15%]"
          width={70}
          height={65}
        />
        <h3 className="text-[#302E2E] text-xl font-medium">{props.title}</h3>
        <p className="text-base font-medium text-center text-[#535353]">
          {props.description}
        </p>
      </motion.div>
    </div>
  );
}
