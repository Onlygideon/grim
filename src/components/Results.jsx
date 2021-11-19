import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'




export const Results = () => {
    const {results, isLoading, getResults, searchTerm} = useResultContext();

    const location = useLocation();

    useEffect(() => {
        if(searchTerm) {
            if(location.pathname === '/videos') {
                getResults(`/search/q=${searchTerm} videos`)
            }else {
                getResults(`${location.pathname}/q=${searchTerm}&num=40`)
            }
        }
    }, [searchTerm, location.pathname]);

    if(isLoading) return <Loading />


    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 lg:px-52 sm:px-44">
                   {results?.map(({ link, title, description }, index) => (
                    <div key={index} className="w-full">
                        <a href={link} target="_blank" rel="noreferrer">
                            <p className="text-sm">
                                {link.length > 30 ? link.substring(0, 30) : link}
                            </p>

                            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 mb-1">
                                {title}
                            </p>

                            <p className="text-md dark:text-gray-300 text-gray-600 mb-2">
                                {description.length > 120 ? description.substring(0, 120) :description}
                            </p>
                        </a>
                    </div>
                   ))}
                </div>
            );
        case '/images':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.map(({image, link: {href, title}}, index) => (
                        <a className="sm:p-3 p-5" href={href} target="_blank" key={index} rel="noreferrer">
                            <img src={image?.src} alt={title} loading="lazy"/>
                            
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            );
        case '/videos':
            return (
                <div className="flex flex-wrap w-2/4 h-2/4 md:w-4/5 md:h-4/5">
                    {results?.map((video, index) => (
                        <div key={index} className="p-2">
                            {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links[0].href} controls width="275px" height="200px"/>}
                        </div>
                    ))}
                </div>
            )
        case '/news':
            return (
                <div className="flex flex-wrap justify-between space-y-6 lg:px-52 sm:px-44 items-center">
                   {results?.map(({ links, id, source, title }) => (
                    <div key={id} className="w-full">
                        <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                            <p className="text-lg dark:text-blue-300 text-blue-700 sm:mb-1">
                                {title}
                            </p>
                        </a>   

                        <div className="flex gap-4">
                            <a href={source?.href} target="_blank" rel="noreferrer">
                                    {source?.href}
                            </a>
                        </div>
                    </div>
                   ))}
                </div>
            );
                    
            
        default:
            return 'Error!'
    }
}
