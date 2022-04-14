const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const Collection = await ethers.getContractFactory("Collection");
  const collection = await Collection.deploy("QuocCollection", "QCL");
  await collection.deployed();

  console.log("Collection contract address : ", collection.address);

  await collection.mint(
    "https://ipfs.io/ipfs/QmUB97wReT8GG5Micgeqr2jusfhiS8cKoh2HpiAk99RsWq"
  );

  console.log("Mint NFT successfully !");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
