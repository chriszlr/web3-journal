import React, { useState } from 'react'
import { ethers } from "ethers"



const NewEntry = ({ setNewEntryPopUp }) => {
  return (

        <div className='absolute bg-white p-6 rounded-xl'>
        <div className='flex items-center justify-between'>
            <h1 className='font-semibold text-xl'>New Entry:</h1>
            <button onClick={() => setNewEntryPopUp(false)}>X</button>
        </div>

            <div className='flex flex-col'>
                <label className='my-3'>Message:</label>
                <textarea className='bg-slate-100 text-black rounded-lg' cols="50" rows="10"></textarea>

                <div className='flex items-center justify-center'>
                    <button className='bg-blue-800 text-white p-4 rounded-full'>Submit</button>
                </div>
            </div>
        </div>
  )
}

export default NewEntry