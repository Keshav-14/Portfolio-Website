import React from 'react'
import Profile from '../assets/Profile.jpeg'
import Button from './Button'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'

const Home = () => {
    const greetings = "<hello />"
    const position = "Student"
    const clg = "@Mepco"
  return (
    <div className='flex flex-wrap justify-evenly items-center flex-col-reverse lg:flex-row p-10 gap-10 '> {/** whole container */}
        <div className='flex flex-shrink-0 justify-center items-center lg:items-start flex-col'>
            {/* Details */}
            <h3 className='text-2xl text-green-500 lg:text-4xl cursiveFont' >{greetings}</h3>
            <h1 className='mt-5 mb-5 text-4xl lg:text-6xl'>I'm Keshava</h1>
            <h2 className='text-2xl lg:text-3xl font-thin'>{position}<span className='text-green-500'>{clg}</span></h2>
            <div className='flex gap-10 mt-10'>
                <Button buttonHolder={<FaGithub />} linkAddress={"/"} text={"Github"}/>
                <Button buttonHolder={<FaInstagram />} linkAddress={"/"} text={"Instagram"}/>
                <Button buttonHolder={< CiLinkedin />} linkAddress={"/"} text={"LinkedIn"}/>
            </div>
        </div>

        <div className='flex justify-center items-center 
        overflow-hidden w-44 h-44 rounded-full 
        shadow-2xl shadow-green-500 
        transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300
        hover:-rotate-3
        lg:w-96 lg:h-96'>
          <img  src={Profile} alt="Keshava's Profile Picture" />
        </div>
    </div>
  )
}

export default Home