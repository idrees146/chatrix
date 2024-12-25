import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {


    return (
        <div>

            <ul className='flex justify-center gap-4 bg-emerald-900 text-white p-3'>

                <Link to="/"> <li className='hover:bg-emerald-800 cursor-pointer p-2 rounded'>Home</li></Link>
                <Link to="/Chat"> <li className='hover:bg-emerald-800 cursor-pointer p-2 rounded'>Chat </li></Link>
                <Link to="/About"> <li className='hover:bg-emerald-800 cursor-pointer p-2 rounded'>About</li></Link>

            </ul>
        </div>
    )
}

export default Navbar