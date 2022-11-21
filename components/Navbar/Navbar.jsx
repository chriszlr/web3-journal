import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import truncateEthAddress from 'truncate-eth-address'



const Navbar = ({ connected, connectWallet, currentAccount }) => {

  

  return (
    <div>
        <nav className='container mx-auto flex justify-between items-center p-5'>
            <div className='flex justify-between items-center space-x-4'>
                <h1 className='text-2xl text-white font-bold'>Web3 Journal</h1>
                <Image className='' src={"/speech-bubble-white.png"} alt={"Logo"} width={30} height={30} />
            </div>

            {connected ? (
              <div className='text-white rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <h2>Acc: <span className='text-gray-800'>{truncateEthAddress(currentAccount)}</span></h2>
              </div>
            ): (
              <div onClick={connectWallet} className='text-white rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'>
                <h2>Connect Wallet</h2>
              </div>
            )}
        </nav>
    </div>
  )
}

export default Navbar