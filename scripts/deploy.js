const hre = require("hardhat");

async function main() {
  
  const Journal = await hre.ethers.getContractFactory("Journal");
  const journal = await Journal.deploy();

  await journal.deployed();

  console.log("Deployed Web3 Journal Contract at: ", journal.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
