import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Contact() {
  return (
    <div className='pb-10 '>
        <h1 className='text-2xl pl-6 mb-6 md:pl-15'>Contact Me</h1>
   <div className="contact-form text-center">
      <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="28bfeca3-c4f9-440b-b8b1-43170f36278a"></input><br />
      <input type="text" name='name' required placeholder='Enter Your Name' className='contact-input border-2 border-amber-50 rounded-3xl text-center mb-3 p-2 md:w-70' /><br />
      <input type="email" name='email' required placeholder='Enter Your E-mail' className='contact-input border-2 border-amber-50  rounded-3xl text-center mb-3 p-2 md:w-70' /><br />
      <textarea name="message" required placeholder='Convey the message' className='contact-input border-2 border-amber-50 text-center  rounded-3xl mb-3 p-5 md:w-70'></textarea><br />
      <button type='submit' className='submit-btn flex m-auto rounded-2xl p-3 bg-blue-500'>Submit<FaArrowRight className='arrowicon mt-1 ml-2' /></button>
      </form>
      </div>
    </div>
  )
}

export default Contact