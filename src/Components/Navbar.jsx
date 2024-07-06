import React from 'react'
import logo from './images/logo.png'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    
    <div >
     <div className='md:flex md:justify-between '>   
     <div className='hidden md:block'>   
      <img src={logo} className='md:w-52 w-24 md:h-24 h-12 ' />
      </div>  
      <div>
      <ul className='hidden md:flex space-x-28 font-Montserrat text-xsm mt-12 md:justify-end '>
      <li className='text-lightorange'>Home </li>
         <li>Product </li>
            <li>Faq </li>
               <li>Contact </li>
        </ul>
      </div>
        </div>
         {/* mobile navbar */}
      <div className=' md:hidden flex justify-between'>
        <div>   
      <img src={logo} className='md:w-52 w-24 md:h-24 h-12 ' />
      </div> 
      <div>
      < FiMenu  className='mt-5'/>
      </div>
      </div>
    </div>

  )
}

export default Navbar