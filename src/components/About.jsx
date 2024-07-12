import React from 'react'
import Profile from '../assets/Profile.jpeg'

const About = () => {
    return (
        <div className='mb-20 flex justify-center items-center flex-col'>
            <h1 className='text-4xl text-green-500'>About</h1>
            <div className='mt-20 flex justify-center items-center gap-24 flex-col lg:flex-row'>
                <div className='flex justify-center items-center 
                    overflow-hidden w-44 h-44 rounded-full 
                    shadow-2xl shadow-green-500 
                    lg:w-72 lg:h-72'>
                    <img src={Profile} alt="Keshava's Profile Picture" />
                </div>
                <div className='w-1/2'>
                    {/* about me */}
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aut voluptatum accusamus eligendi vero architecto quas suscipit quaerat officia 
                        sapiente, debitis consectetur quis? Neque, et impedit architecto qui at totam molestias?</p>
                </div>
            </div>
        </div>
    )
}

export default About