import Image from 'next/image'
import React from 'react'


const Navbar = () => {
  return (
    <div>
        <nav className='container mx-auto flex justify-between items-center p-5'>
            <div className='flex justify-between items-center space-x-4'>
                <h1 className='text-2xl text-white font-bold'>Web3 Journal</h1>
                <Image className='' src={"/speech-bubble-white.png"} alt={"Logo"} width={30} height={30} />
            </div>

            <div className='text-white rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <h2>Address: <span className='text-gray-800'>0xddfb6393b36rb</span></h2>
            </div>
        </nav>
    </div>
  )
}

export default Navbar