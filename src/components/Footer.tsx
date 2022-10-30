import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        
        <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Company.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores, sequi asperiores dolorem inventore temporibus dolor quaerat architecto eveniet laudantium!</p>
        
        
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30}/>
          <FaInstagram size={30}/>
          <FaGithubSquare size={30}/>
          <FaTwitterSquare size={30}/>
        </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className='font-medium text-gray-400 '>Contact </h6>
            <ul>
              <li className='py-3 text-sm'>Company@gmail.com</li>
              <li className='py-3 text-sm'>55 XX XXXXX-XXXX</li>
              <li className='py-3 text-sm'>Address 515</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400 '>Payment</h6>
            <ul>
              <li className='py-3 text-sm'>Credit Card</li>
              <li className='py-3 text-sm'>Debit Card</li>
              <li className='py-3 text-sm'>PIX</li>
              <li className='py-3 text-sm'>Ticket</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400 '>Get to Know Us</h6>
            <ul>
              <li className='py-3 text-sm'>Join Us!</li>
              <li className='py-3 text-sm'>Blog</li>
              <li className='py-3 text-sm'>About Company</li>
              <li className='py-3 text-sm'>Online Portfolio</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer 