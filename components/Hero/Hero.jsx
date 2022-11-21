import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-white text-2xl font-bold'>Your Journal:</h1>

      <div className='border-2 rounded-lg border-slate-600 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-5 px-10'>

        <div className='p-3'>
          <h2>Entry: at</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ab ad quidem, corporis saepe obcaecati, voluptas atque fugit quisquam ut quibusdam aut!</p>
        </div>

      </div>
      
    </div>
  )
}

export default Hero