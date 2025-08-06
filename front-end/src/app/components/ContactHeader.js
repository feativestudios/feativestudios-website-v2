'use client'
import { useInView } from 'react-intersection-observer';

import CountUp from "react-countup";
import Button from "./Button";
const ContactHeader = () => {
    const {ref,inView}=useInView({
    triggerOnce: true, 
    threshold: 0.5,
  })

  
  return (
    <div className="flex flex-col w-full  lg:w-[28%]" ref={ref}>
        <div className='text-bitterSweet font-black text-[32px] leading-[46px] tracking-[4.6px]'>  {inView && <CountUp start={0} end={120} duration={2} className=""/>}+</div>
        <div className="font-bold text-[30px] tracking-[4.6px] leading-[37px]">Trusted partners</div>
        <div className="font-normal text-sm leading-[23px] tracking-[1.3px] mt-5">Be part of our immersive journey. Together, we transform your
boldest visions into captivating realities, reshaping the future of
immersive entertainment and leaving a lasting legacy for
generations to come.</div>
        {/* <div className='mt-7'>
            <Button>Book a call with us</Button>  
        </div> */}
    </div>
  )
};

export default ContactHeader
