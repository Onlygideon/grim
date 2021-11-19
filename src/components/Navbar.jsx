import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'
import Logo from '../assets/grim-reaper.png'
import Dark from '../assets/dark-mode.png'
import Light from '../assets/light-mode.png'



export const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <div className="p-5 pb-0 flex items-center sm:justify-between justify-center border-b border-gray-300 dark:border-gray-700 flex-wrap">
            <div className="flex justify-between items-center w-screen md:mb-0 mb-4">
                <Link to="/">
                    <p className=" flex items-center justify-center text-lg sm:text-2xl bg-green-300 font-bold text-white py-2 px-3 rounded-lg dark:bg-green-400 dark:text-gray-900">
                        Gri<span className="text-green-900 dark:text-green-100">m</span><img src={Logo} className="sm:h-8 h-6"/>
                    </p>
                </Link>

                <button type="button" onClick={() => setDarkMode(!darkMode)} className="animate-bounce dark:bg-gray-50 bg-gray-600 border rounded-full px-2 py-1 hover:shadow-lg">
                    {darkMode ? <img src={Light} className="sm:h-8 h-6 bg-white rounded-2xl"/> : <img src={Dark} className="sm:h-8 h-6 bg-white rounded-2xl"/>}
                </button>
            </div>

            <Search />
        </div>
    )
}
