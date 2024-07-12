import React from 'react'
import "./CursiveFont.css"
import Button from './Button.jsx'
import { GoDownload } from 'react-icons/go'

const Navigator = () => {
    const logo = "<me />"
    return (
        <>
            <nav className='mb-20 flex flex-wrap justify-between p-5 '>
                <div>
                    <h1 className='flex flex-shrink-0 items-center cursiveFont text-2xl lg:pl-28'>{logo}</h1>
                </div> 
                <div className='pr-10 lg:pr-28'>
                    {/* <button className='border-2 rounded-full border-green-500 cursiveFont text-2xl p-2'> me.getResume();</button> */}
                    <Button text={"Resume"} buttonHolder={<GoDownload />} linkAddress={"/"}/>
                </div>
            </nav>
        </>
    
    )
}

export default Navigator;