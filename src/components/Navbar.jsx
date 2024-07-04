import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {

    const [isDark, setDark] = useState(true)

    const handleSetDark = () => {
        setDark(!isDark)
    }


  return (
    <div className='text-white w-10/12 mx-auto py-[2rem] flex justify-between'>
        <a href='/' className=' font-bold text-3xl'>CoinCheck</a>
        <div className=' cursor-pointer' onClick={() => {handleSetDark()}}>
            {!isDark ? <FontAwesomeIcon icon={faSun} size='lg' /> : <FontAwesomeIcon icon={faMoon} size="lg" />}
        </div>

    </div>
  )
}

export default Navbar