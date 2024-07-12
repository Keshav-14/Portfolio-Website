import React from 'react'
import { FaAws, FaJava, FaReact, FaRedhat, FaWordpress } from 'react-icons/fa'
import SkillIcon from './SkillIcon'
import { SiMysql } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='flex justify-center items-center mb-20 flex-col'>
      <h1 className='text-4xl mb-10'>Skills</h1>
      <div className='flex justify-center gap-10'>
        <SkillIcon icon={<FaJava color='red'/>} />
        <SkillIcon icon={<SiMysql color='white'/>} />
        <SkillIcon icon={<FaReact color='skyblue'/>} />
        <SkillIcon icon={<FaAws color="orange"/>} />
        <SkillIcon icon={<FaWordpress color='white'/>} />
        <SkillIcon icon={<FaRedhat color='red' />} />
      </div>
    </div>
  )
}

export default Skills