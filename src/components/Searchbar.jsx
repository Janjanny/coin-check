import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'boxicons';



const Searchbar = () => {

  const [currency, setCurrency] = useState('USD')

  return (
    <div className="relative w-full h-full bg-black text-white">
      <div className="hero text-center w-3/4 mx-auto mt-[5rem]">
        <h1 className='tex'>CoinCheck</h1>
        <p>Welcome to CoinCheck, your ultimate destination for everything cryptocurrency. Explore the latest trends, insightful analysis, and expert advice on navigating the exciting world of digital currencies.</p>
      </div>
      <div className='text-white py-4 px-5 w-fit absolute top-[40%] left-[50%] rounded-xl border-gray-1 border z-[4]' style={{transform: 'translate(-50%, -50%)', background: 'linear-gradient(121deg, rgba(51,51,51,1) 0%, rgba(65,65,65,1) 100%)'}}>
      <div className="input-div flex items-center gap-4 h-[2.5rem]">
        <div className=' bg-gray-3 h-full w-[20rem] rounded-lg text-white justify-between flex items-center py-2 px-3'>
          <input type="text" placeholder='Search...' className=' bg-transparent text-base focus:outline-none' />
          <div className="icon cursor-pointer flex items-center justify-center"><box-icon name='search' color="#ffffff" ></box-icon></div>
        </div>

        <div className=' bg-gray-3 h-full flex flex-row items-center gap-1 justify-center rounded-md px-2 cursor-pointer'>
          {currency}
          <box-icon name='chevron-down' color="#ffffff" size="sm"></box-icon> 
        </div>  
      </div>

    </div>
    </div>
  )
}

export default Searchbar