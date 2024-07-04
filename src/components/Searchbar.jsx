import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Searchbar = () => {
  return (
    <div className='text-white bg-gray-2 p-5 w-fit absolute top-[50%] left-[50%]' style={{transform: 'translate(-50%, -50%)'}}>
      <div className="input-div">
        <input type="text" placeholder='Search...' className=' bg-gray-3 text-base py-2 px-3' />
        <div>
          USD 
        </div>  
      </div>

    </div>
  )
}

export default Searchbar