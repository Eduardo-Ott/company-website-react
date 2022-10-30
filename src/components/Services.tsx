import React from 'react'
import Laptop from '../assets/laptop.jpg'


const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="about_img" />
            <div className='flex flex-col justify-center '>
              <p className='text-[#00df9a] uppercase font-bold'>Development & RPA (Robotic process automation)</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Company Development</h1>
              <p className=''> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus eligendi repellendus quaerat odio id mollitia dolor at quam rerum.</p>
            </div>
        </div>
    </div>
  )
}

export default About