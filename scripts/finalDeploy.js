const hre = require("hardhat");

async function main() {
    const [owner, from1, from2, from3] = await hre.ethers.getSigners();
    const dapp = await hre.ethers.getContractFactory("dapp");
    const contract = await dapp.deploy(); //instance of contract
  
    await contract.waitForDeployment();
  
    console.log("Address of contract:", await contract.getAddress());
}  
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

//0xbFba264a75Ca3F44b38df5fB8A97B1b8d0F3fA8A