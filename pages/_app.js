import '../styles/globals.css'
import { Navbar } from '../components'
import { useState } from 'react'


const MyApp = ({ Component, pageProps }) =>  (
  
  <div className="bg-gray-700 h-screen">
    {/* <Navbar /> */}
    {/* navbar gets instead displayed in index.js because of "Connected" State and prop for connect btn ion <Navbar /> */}
    <Component {...pageProps} />
  </div>
)

export default MyApp
