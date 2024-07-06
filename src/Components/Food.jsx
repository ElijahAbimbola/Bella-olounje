import React from 'react'
import { OrangeButton, TransparentButton, TransparentOrangeButton } from '../Component/Button'
import phones from './images/downloads.png'

const Food = () => {
  return (
    <div>
        {/* desktop food */}
    <div className=' hidden md:block food bg-contain bg-no-repeat text-white text-center'>
        <p className='text-sm  font-bold pt-16'>Food app</p>
       <p className='text-lg font-Poppins font-bold pt-3 '>Why stay hungry when <br /> you can order form Bella Onojie</p>
       <p className=' text-sm font-normal pt-4 font-Montserrat'>Download the bella onoje’s food app now on</p>
       <div className='flex justify-center space-x-16 pt-12 pl-16 '>
        <div>
          < OrangeButton name={ 'Playstore' } type={'Button'}/>
         </div>
         <div>
            < TransparentButton name={'Appstore'} type={'Button'} />
         </div>
       </div>
       <div className='text-center pl-72 -mt-36 '>
        <img src={phones} alt="" />
       </div>
    </div>

    {/* mobile food */}
    <div>
        <div className='block md:hidden  w-full h-full text-center'>
        <p className='text-xsm  font-bold pt-16'>Food app</p>
       <p className='text-md font-Poppins font-bold pt-3 '>Why stay hungry <br />when  you can order <br /> form Bella Onojie</p>
       <p className=' text-xsm font-normal pt-4 font-Montserrat'>Download the bella onoje’s <br /> food app now on</p>
       <div className=' justify-center  pt-12  '>
        <div>
          < OrangeButton name={ 'Playstore' } type={'Button'}/>
         </div>
         <div className='pt-5'>
            < TransparentOrangeButton name={'Appstore'} type={'Button'} />
         </div>
       </div>
       <div className='text-center -mt-16 '>
        <img src={phones} alt="" />
       </div>
    </div>
    </div>
    </div> 
  )
}

export default Food