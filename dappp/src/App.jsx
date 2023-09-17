
import './App.css'
import abi from "../../artifacts/contracts/dapp.sol/dapp.json"
import { useState,useEffect } from 'react'
import {ethers} from "ethers"
import Buy from './component/Buy'
function App() {
  const [state,setState]= useState({
    provider:null,
    signer:null,
    contract:null
  })
  useEffect(()=>{
    const connectWallet= async () =>{
      const contractAddress = "0xbFba264a75Ca3F44b38df5fB8A97B1b8d0F3fA8A";
      const contractAbi=abi.abi;
      try{
        const{ethereum} = window;

        if(ethereum)
        {
          const account = await ethereum.request({method:"eth_requestAccounts",})

        }
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress,contractAbi,signer);
        setState(provider,signer,contract);
      }
      catch (error){
        console.log(error);
      }
    };
    connectWallet();
  },[])
  console.log(state);
  return (
    <>
      <Buy state={state}/>
      <h1>Hey</h1>
    </>
  )
}

export default App


//0xbFba264a75Ca3F44b38df5fB8A97B1b8d0F3fA8A