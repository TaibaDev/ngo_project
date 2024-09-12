import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <button
    onClick={onClick}
    className="bg-blue text-white px-6 text-lg py-2 rounded-md mt-2 
               transition-transform duration-300 ease-in-out transform hover:scale-110
               hover:bg-blue-600 active:scale-95"
>
    {children}
</button>

  )
}

export default Button