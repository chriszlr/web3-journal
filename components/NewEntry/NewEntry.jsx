import React, { useState } from 'react'
import { ethers } from "ethers"
import { JournalAddress } from '../../config/constants'
import { JournalABI } from '../../config/constants'



const NewEntry = ({ setNewEntryPopUp }) => {

    const [message, setMessage] = useState("")

    const getMsg = () => {
        console.log(message)
    }


    const createEntry = async (message) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const JournalContract = new ethers.Contract(JournalAddress, JournalABI, signer)

        const tx = await JournalContract.createEntry(message)
    }

  return (

        <div className='absolute bg-white p-6 rounded-xl'>
        <div className='flex items-center justify-between'>
            <h1 className='font-semibold text-xl'>New Entry:</h1>
            <button onClick={() => setNewEntryPopUp(false)}>X</button>
        </div>

            <div className='flex flex-col'>
                <label className='my-3'>Message:</label>
                <textarea
                className='bg-slate-100 text-black rounded-lg'
                cols="50" rows="10"
                onChange={(e) => setMessage(e.target.value)}
                
                >{message}
                </textarea>

                <button onClick={() => getMsg()}>log msg</button>

                <div className='flex items-center justify-center'>
                    <button className='bg-blue-800 text-white p-4 rounded-full' onClick={() => createEntry(message)}>Submit</button>
                </div>
            </div>
        </div>
  )
}

export default NewEntry