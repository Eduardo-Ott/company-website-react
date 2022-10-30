import React from 'react'
import Typed from 'react-typed'
import {BsWhatsapp} from 'react-icons/bs'

const Hero = () => {
  return (
    <div>
       <div className="text-white"> 
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <p className='text-[#00df9a] text-3xl font-bold p-2 uppercase'>Growing with technology</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Company.</h1>
                <div>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold mb-5 '>Transparency, Customer focus and Integrity</p>
                    <Typed 
                           className='md:text-5xl sm:text-4xl text-3xl font-bold text-[#00df9a]  '
                           strings={['Company!']} 
                           typeSpeed={120} 
                           backSpeed={140} 
                           loop
                    /> 
                </div>
                <p className='md:text-xl text-xl font-bold text-gray-400 py-5' >Focused on best user experience and to increase the productivity of your business!</p>
                <a className='flex justify-between items-center bg-[#00df9a] w-[200px] rounded-md font-bold text-xl my-6 mx-auto py-3 text-black pl-9 pr-9' href='https://wa.me/addnumber'> <BsWhatsapp size={25} /> Whatsapp </a>
            </div>
       </div>
    </div>
  )
}

export default Hero;