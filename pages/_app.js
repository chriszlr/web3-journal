import '../styles/globals.css'
import { Navbar } from '../components'

const MyApp = ({ Component, pageProps }) =>  (
  <div className="bg-gray-700 h-screen">
    <Navbar />
    <Component {...pageProps} />
  </div>
)

export default MyApp
