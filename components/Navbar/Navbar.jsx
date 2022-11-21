import Image from 'next/image'
import React from 'react'


const Navbar = () => {
  return (
    <div>
        <nav className='container mx-auto flex justify-between items-center'>
            <div className='flex justify-between items-center space-x-4'>
                <h1 className='text-2xl text-white font-bold'>Web3 Journal</h1>
                <Image className='' src={"/speech-bubble-white.png"} alt={"Logo"} width={30} height={30} />
            </div>

            <div>
                <h2>Address: <span>0xddfb6393b36rb</span></h2>
            </div>
        </nav>
    </div>
  )
}

export default Navbar