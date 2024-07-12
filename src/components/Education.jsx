import React from 'react'
import EduCard from './EduCard'
import Image from '../assets/Mepco.png'
import { IoIosArrowBack,IoIosArrowDown,IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'
import './CursiveFont.css'
// Create a list for education and then use map function to add all the educations in teh site

const Education = () => {
    const cgpa = 7.87;

    return (
    <div className='mb-20 flex flex-col justify-center items-center gap-20 '>
        <h1 className='text-4xl text-green-500'>Education</h1>
        <div className='flex justify-center items-center flex-col gap-20 lg:flex-row'>
            <IoIosArrowBack className='text-4xl hidden lg:block'/>
            <IoIosArrowUp className='text-4xl block lg:hidden'/>
            {/* Make it like a slider */}
            <EduCard education={"Bachelor's in Computer Science Engineering"} 
            from={2021} to={2025} 
            institution={"Mepco Schlenk Engineering College"}
            location={"Sivakasi, Tamilnadu"}
            score={cgpa} Image={Image}/>
            <IoIosArrowForward className='text-4xl hidden lg:block'/>
            <IoIosArrowDown className='text-4xl block lg:hidden'/>
        </div>
    </div>
)
}

export default Education