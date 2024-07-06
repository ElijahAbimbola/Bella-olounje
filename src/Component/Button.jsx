import React from 'react'

export const OrangeButton = ({name, onclick, loading, type}) => {
  return (
        <button className='rounded-full border bg-lightorange text-while border-lightorange  w-60 h-16 text-sm font-Poppins font-semibold 'onClick={onclick} type={type}>
        {name}
        </button>

  )
}

export const TransparentButton = ({name, onclick, loading, type}) => {
  return (
        <button className='border rounded-full w-60 h-16 font-Poppins text-sm font-semibold'onClick={onclick} type={type}>
        {name}
        </button>

  )
}

export const TransparentOrangeButton = ({name, onclick, loading, type}) => {
  return (
        <button className='border rounded-full border-lightorange text-lightorange w-60 h-16 font-Poppins text-sm font-semibold'onClick={onclick} type={type}>
        {name}
        </button>

  )
}
