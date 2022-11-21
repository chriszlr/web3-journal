import { Hero, Navbar } from "../components"
import { useState, useEffect } from "react"

export default function Home() {

  const [connected, setConnected] = useState(false)
  const [currentAccount, setCurrentAccount] = useState("")


  useEffect(() => {
    // cWallet()
  }, [])

  // connect wallet
  const cWallet = async () => {
    if(window.ethereum){
      try {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        setCurrentAccount(accounts[0])
        console.log("current account set to ", accounts[0])
        setConnected(true)
      } catch (error) {
        console.log(error)
      }
    }else{
      console.log("ethereum object not found")
    }
  }


  return (
    <div>
      {connected ? (
        <div>
          <Navbar connected={connected} currentAccount={currentAccount} />
          <Hero />
        </div>
      ) : (
        <div>
          <Navbar connected={connected} connectWallet={cWallet} />
        </div>
      )}
      
    </div>
  )
}
