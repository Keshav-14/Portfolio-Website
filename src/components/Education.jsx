import React from 'react'
import EduCard from './EduCard'
import Image from '../assets/Mepco.png'

// Create a list for education and then use map function to add all the educations in teh site

const Education = () => {
    const cgpa = 7.87;
    return (
    <div className='mb-20 flex flex-col justify-center items-center gap-10 '>
        <h1 className='text-4xl'>Education</h1>
        <div >
            {/* Make it like a slider */}
            <EduCard education={"Bachelor's in Computer Science Engineering"} 
            from={2021} to={2025} 
            institution={"Mepco Schlenk Engineering College"}
            location={"Sivakasi, Tamilnadu"}
            score={cgpa} Image={Image}/>
        </div>
    </div>
)
}

export default Education