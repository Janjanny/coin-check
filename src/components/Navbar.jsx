import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {

    const [isDark, setDark] = useState(true)


  return (
    <div className='text-white w-10/12 mx-auto py-[2rem] flex justify-between'>
        <a href='/' className=' font-bold text-3xl'>CoinCheck</a>
        <div className=' cursor-pointer'><FontAwesomeIcon icon={faSun} size='lg' /></div>

    </div>
  )
}

export default Navbar