import React from 'react'
import { FaReact } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import AOS from 'aos'
import 'aos/dist/aos.css';
function Projects() {
     AOS.init()
  return (
  
   <div  >
    <h1 className='text-3xl mb-3 pl-6 md:pl-15'>Projects</h1>
     <div className='pl-8 pr-10 mb-3 '  data-aos='fade-up-right' data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
         <div className='flex justify-between md:justify-around '  >
         <div>
         <img src="/img/coffeeman.png" alt="" className='size-30 mt-5' />
        </div>
        <div>
        <h2 className='text-center mb-5 text-2xl'>Coffeeman</h2>
        <div className='grid grid-cols-3 gap-4 mb-5'>
            <FaReact size={'40px'}/>
            <SiMongodb size={'40px'}/>
            <SiExpress size={'40px'}/>
        </div>
        <div className='flex justify-around'>
            <button className='p-2 border-2' data-aos="zoom-in-up"><a href="https://github.com/jeeva-codes/Coffeman">Demo</a></button>  
          <button className='p-2 border-2' data-aos="zoom-in-up"><a href="https://github.com/jeeva-codes/Coffeman">Code</a></button>  
        </div>     
        </div>
    </div>
        <p className='mt-5 md:w-150 m-auto'>Developed Coffeeman, a responsive e-commerce web application showcasing coffee, tea, and cool drink products using React.js and Tailwind CSS.Implemented user authentication (register & login) with Express.js and MongoDB Atlas, ensuring secure data handling.</p>
    </div>

     <div className='pl-8 pr-10 mb-3' data-aos='fade-up-left' data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
         <div className='flex justify-between  md:justify-around'>
         <div>
         <img src="/img/logo.png" alt="" className='size-30 mt-5' />
        </div>
        <div>
        <h2 className='text-center mb-5 text-2xl'>Suvai Express</h2>
        <div className='grid grid-cols-3 gap-4 mb-5'>
            <FaReact size={'40px'}/>
            <RiTailwindCssFill size={'40px'}/>
        </div>
        <div className='flex justify-around'>
            <button className='p-2 border-2' data-aos="zoom-in-up"><a href="https://github.com/jeeva-codes/Coffeman">Demo</a></button>  
          <button className='p-2 border-2' data-aos="zoom-in-up"><a href="https://github.com/jeeva-codes/Coffeman">Code</a></button>  
        </div>     
        </div>
    </div>
        <p className='mt-5 md:w-150 m-auto'>I developed a mobile-responsive food ordering web application centered around traditional Tamil cuisine. The app features seamless navigation between menu, cart, and checkout pages using React Router DOM. I efficiently managed the global cart state by leveraging the useReducer and useContext hooks, ensuring smooth state transitions across components.</p>
    </div>

     <div className='pl-8 pr-10 mb-3' data-aos='fade-up' data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
         <div className='flex justify-between  md:justify-around'>
         <div>
         <img src="/img/animelist.png" alt="" className='size-30 mt-5' />
        </div>
        <div>
        <h2 className='text-center mb-5 text-2xl'>Anime list</h2>
        <div className='grid grid-cols-3 gap-4 mb-5'>
            <FaReact size={'40px'}/>
        </div>
        <div className='flex justify-around'>
            <button className='p-2 border-2' data-aos="zoom-in-up"><a href="https://github.com/jeeva-codes/Coffeman">Demo</a></button>  
          <button className='p-2 border-2' data-aos="zoom-in-up"><a href="https://github.com/jeeva-codes/Coffeman">Code</a></button>  
        </div>     
        </div>
    </div>
        <p className='mt-5 md:w-150 m-auto'>I developed a professional-grade anime list project that leverages an API for dynamic data retrieval, incorporates responsive design principles for an optimal user experience, expertly handles user input, and utilizes React Router DOM for efficient navigation and routing.</p>
    </div>
   </div>
  )
}

export default Projects