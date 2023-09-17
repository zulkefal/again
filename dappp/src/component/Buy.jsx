import { ethers } from 'hardhat';
import React from 'react'

const Buy = ({state}) => {

  const buyChai = async (e) => {
    e.preventDefault();
    const {contract} = state;
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;
    console.log(name,message,contract);

    const value = {value: ethers.parseEther("0.001")}
    const transaction = await contract.buyChai(name,message,value);
    await transaction.wait();
    console.log("Transaction COmpleted")

  }
  return (
    <div>
      <form onSubmit={buyChai}>
        <label htmlFor="">Name</label>
        <input type="text" id='name' placeholder='Enter Your Name' />
        <label htmlFor="">Message</label>
        <input type="text" id='message' placeholder='Enter Your Message' />
        <button type='submit'>Pay Now</button>
      </form>
    </div>
  )
}

export default Buy