import React from 'react'


const EduCard = ({Image, education , from, to, institution, location, score}) => {
  return (
    <div className='pt-10 flex justify-center items-center flex-col lg:flex-row gap-10'>
        <div className='w-72 h-72 rounded-full overflow-hidden 
            shadow-xl shadow-green-500'>
            <img className="w-full h-full"  src={Image} alt="Mepco Schlenk Engineering College" />
        </div>
        <div className='flex flex-col justify-center items-center lg:items-start gap-3 pl-10 pr-10'>
                <p className='font-semibold lg:text-2xl'>{education}</p>
                <p className='lg:text-2xl text-gray-600'>{from + " "}<span>-</span>{" " + to}</p>
                <p className='font-semibold lg:text-2xl'>{institution}</p>
                <p className='lg:text-2xl text-gray-600'>{location}</p>
            <p className='text-xl'>Score<span>{ " : " + score }</span></p>
        </div>
    </div>
)
}

export default EduCard