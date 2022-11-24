import React, { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { NewEntry } from "../index"
import { JournalAddress } from '../../config/constants'
import { JournalABI } from '../../config/constants'

const Hero = () => {

  const [NewEntryPopUp, setNewEntryPopUp] = useState(false)

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
  useEffect(() => {
    getEntries()
  }, [])
  

  const getEntries = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const JournalContract = new ethers.Contract(JournalAddress, JournalABI, signer)
<<<<<<< Updated upstream
    const linkSignerToContract = await JournalContract.connect(signer)

    const tx = await linkSignerToContract.getCreatorData(signer.getAddress())
    console.log(tx)
  }

>>>>>>> Stashed changes
=======

    const tx = await JournalContract.getCreatorData(signer)
    console.log(tx)
  }

>>>>>>> Stashed changes
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-white text-2xl font-bold'>Your Journal:</h1>
      <button className='bg-green-600 text-xl py-2 px-4 my-3 rounded-full text-white' onClick={() => setNewEntryPopUp(true)}>New Entry</button>

      {NewEntryPopUp && (
        <NewEntry setNewEntryPopUp={setNewEntryPopUp} />
      )}

      <div className='border-2 rounded-lg border-slate-600 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-5 px-10'>

        <div className='p-3'>
          <h2>Entry at:</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ab ad quidem, corporis saepe obcaecati, voluptas atque fugit quisquam ut quibusdam aut!</p>
        </div>

      </div>
    </div>
  )
}

export default Hero