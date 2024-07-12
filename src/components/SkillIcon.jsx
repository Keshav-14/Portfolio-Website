import React from 'react'
import { FaJava } from 'react-icons/fa'
import Button from './Button'

const SkillIcon = ({icon, text}) => {
  return (
    <>
        <div className='group p-10 bg-gray-800 text-5xl rounded-full opacity-80
        hover:shadow-2xl hover:shadow-green-500 hover:-translate-y-2 transition delay-50'>
          {icon}
        </div>
    </>
  )
}

export default SkillIcon