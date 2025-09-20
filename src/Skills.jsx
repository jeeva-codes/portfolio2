import React from 'react'
import { motion } from 'framer-motion' 
import AOS from 'aos';
import 'aos/dist/aos.css'
function Skills() {
    AOS.init()
  return (
    <div className='pl-6 md:pl-15' >
        <h1 className='text-2xl mb-6'>Skill Set</h1>
        <div className='grid grid-cols-3 pr-5 pl-8 md:grid-cols-4' data-aos="fade-up">
            <div className='set mb-5'>
            <motion.img src="/img/html_1051277.png" alt="" className='size-10'  animate={{
        y: [0, -10, 0], // moves up and down
      }}
      transition={{
        duration: 3,    // time for one cycle
        repeat: Infinity, // loops forever
        ease: "easeInOut",
      }}/>
            <p >HTML</p>
        </div>
        <div className='set'>
            <motion.img src="/img/css-3_732190.png" alt="" className='size-10' animate={{
        y: [0, -10, 0], // moves up and down
      }}
      transition={{
        duration: 3,    // time for one cycle
        repeat: Infinity, // loops forever
        ease: "easeInOut",
      }} />
            <p >CSS</p>
        </div>
        <div className='set'>
            <motion.img src="/img/js_5968292.png" alt="" className='size-10' animate={{
        y: [0, -10, 0], // moves up and down
      }}
      transition={{
        duration: 3,    // time for one cycle
        repeat: Infinity, // loops forever
        ease: "easeInOut",
      }}/>
            <p >JavaScript</p>
        </div>
           <div className='set'>
            <motion.img src="/img/atom_15772797.png" alt="" className='size-10' animate={{
        y: [0, -10, 0], // moves up and down
      }}
      transition={{
        duration: 3,    // time for one cycle
        repeat: Infinity, // loops forever
        ease: "easeInOut",
      }} />
            <p >React js</p>
        </div>
        </div>
         <h1  className='text-2xl mb-6'>Dev Tools</h1>
        <div className='grid grid-cols-3 pr-5 pl-8' data-aos="fade-up">
            <div className='set mb-5'>
            <motion.img src="/img/Tailwind CSS.png" alt="" className='size-10' animate={{
        y: [0, -10, 0], // moves up and down
      }}
      transition={{
        duration: 3,    // time for one cycle
        repeat: Infinity, // loops forever
        ease: "easeInOut",
      }} />
            <p >Tailwind Css</p>
        </div>
        <div className='set'>
            <motion.img src="/img/GitHub.png" alt="" className='size-10 mr-3 bg-amber-50 rounded-2xl' animate={{
        y: [0, -10, 0], // moves up and down
      }}
      transition={{
        duration: 3,    // time for one cycle
        repeat: Infinity, // loops forever
        ease: "easeInOut",
      }}/>
            <p >Github</p>
        </div>
        </div>
        <h1  className='text-2xl mb-6'>Upcoming skills</h1>
        <div className='grid grid-cols-3 pr-5 pl-8' data-aos="fade-up">
            <div className='set mb-5'>
            <motion.img src="/img/Express.png" alt="" className='size-10 bg-amber-50 rounded-2xl p-1' animate={{
        y: [0, -10, 0], // moves up and down
      }}
      transition={{
        duration: 3,    // time for one cycle
        repeat: Infinity, // loops forever
        ease: "easeInOut",
      }} />
            <p >Express js</p>
        </div>
        <div className='set'>
            <motion.img src="/img/MongoDB.png" alt="" className='size-10' animate={{
        y: [0, -10, 0], // moves up and down
      }}
      transition={{
        duration: 3,    // time for one cycle
        repeat: Infinity, // loops forever
        ease: "easeInOut",
      }}/>
            <p >MongoDB</p>
        </div>
        </div>
    </div>
  )
}

export default Skills