import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="Single_alt" />
                <h2 className="text-2xl font-bold text-center py-8">Web Development </h2>
                <p className="text-center text-4xl font-bold">$ </p>
                <div className='text-center font-medium'>
                    <p className="py-2 border-b mx-8 mt-4"> 100 GB Storage </p>
                    <p className="py-2 border-b mx-8"> Responsive Design </p>
                    <p className="py-2 border-b mx-8">  Free Host</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> Make a Budget</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="Single_alt" />
                <h2 className="text-2xl font-bold text-center py-8"> Software Development </h2>
                <p className="text-center text-4xl font-bold">$</p>
                <div className='text-center font-medium'>
                    <p className="py-2 border-b mx-8 mt-4"> 500 GB Storage </p>
                    <p className="py-2 border-b mx-8"> Modern Design </p>
                    <p className="py-2 border-b mx-8"> CRUD </p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> Make a Budget</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="Single_alt" />
                <h2 className="text-2xl font-bold text-center py-8">Robotic Process Automation </h2>
                <p className="text-center text-4xl font-bold">$</p>
                <div className='text-center font-medium'>
                    <p className="py-2 border-b mx-8 mt-4">Web & Software Automation</p>
                    <p className="py-2 border-b mx-8"> Modern Grafic User Interface</p>
                    <p className="py-2 border-b mx-8"> Excel Integration </p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> Make a Budget</button>
            </div>
        </div>
    </div>
  )
}

export default Cards