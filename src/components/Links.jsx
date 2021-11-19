import React from 'react'
import { NavLink } from 'react-router-dom'


const links = [
    {url: '/search', text: 'All'},
    {url: '/images', text: 'Images'},
    {url: '/videos', text: 'Videos'},
    {url: '/news', text: 'News'}
]


export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({ url, text }) => (
                <NavLink to={url} className="m-3 mb-0 text-black dark:text-white" activeClassName="text-green-700 dark:text-green-200 border-b-2 border-blue-700 pb-2">
                    {text}
                </NavLink>
            ))}
        </div>
    )
}
