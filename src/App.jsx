import { useState } from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Quickcon from './component/Quickcon'


function App() {


  return (

    <div className='text-white bg-gray-950'>
      <Hero/>
      <Quickcon/>
      <Skills/>
      <Projects/>
      {/* <Contact/> */}
    </div>

  )
}

export default App
