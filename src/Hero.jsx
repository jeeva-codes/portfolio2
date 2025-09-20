import { motion } from "framer-motion";
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import AOS from 'aos'
import 'aos/dist/aos.css'
function Hero() {
    AOS.init()
  return (
    <div className='text-center pt-15 mb-15'>
       <motion.p initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" ,delay:'1'}}>Hi i'm Jeeva 🖐</motion.p> 
       <motion.h1 initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }} className="text-2xl">React Developer</motion.h1>
      <div className="mt-5 mb-5">
        <img src="/img/js_5968292.png" alt="" className="size-40 m-auto rounded-full" />
      </div>
      <p className="w-80 m-auto mb-8 text-1xl">A passionate React developer eager to create engaging web experiences</p>
        <div className="flex justify-center">
            <div className="flex gap-3 mt-2" data-aos="fade-up"  data-aos-delay="40"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
        <a href="https://www.linkedin.com/in/jeeva-m-b9b373334" target="blank"><FaLinkedin className="size-8" /></a>
                <a href="https://github.com/jeeva-codes" target="blank"> <FaGithub className="size-8"/></a>
            </div>
            <a href="/Jeeva-Reactdev-Resume.pdf" download>
                 <button className="p-2 text-1xl font-semibold text-black rounded-3xl bg-green-400  ml-3" data-aos="fade-up"  data-aos-delay="150"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Download Resume</button>
            </a>
           
        </div>
    </div>
  )
}

export default Hero