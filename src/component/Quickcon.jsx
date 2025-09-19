import React, { useState } from 'react';
import { LuMessageCircleDashed } from "react-icons/lu"
import { FiPhoneCall } from "react-icons/fi"
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import {motion} from 'framer-motion'
function Quickcon() {

  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }
   function openWhatsApp() {
    const url = `https://wa.me/${6374874464}`
    window.open(url, "_blank"); // opens in new tab
  }
function makeCall() {
    window.location.href = `tel:${6374874464}`;
  }
  return (
    <div className="fixed bottom-4 right-4">
      <div className="flex flex-col items-end gap-2">
        {/* Message content */}
        {show && (
            <motion.div className='bg-gray-200 px-3 py-2 rounded-lg shadow'  initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut"}}>
          <FiPhoneCall  className='size-10 text-black mb-2' onClick={makeCall}/>
          <a href="https://www.instagram.com/_jeeva_madjack_?igsh=MTJ5dphMjL3Zjg0OQ" target='blank' > <FaInstagram  className='size-10 text-black mb-2'/></a>
          <FaWhatsapp className='size-10 text-black mb-2' onClick={openWhatsApp}/>
            </motion.div>
          
        )}

        {/* Floating button */}
        <button
          onClick={toggle}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <LuMessageCircleDashed size={30} />
        </button>
      </div>
    </div>
  );
}

export default Quickcon;
