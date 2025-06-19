import { expect } from 'chai';
import { ethers } from 'hardhat';

describe("Mappingcontract", function () {
  let contract : any;
  
 

  beforeEach(async function () {
    const StringUtils = await ethers.getContractFactory("Mappingcontract");
    contract = await StringUtils.deploy();
    await contract.waitForDeployment();
  });

  it("멥핑", async function () {
    await contract.setBalance("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 8000);
    const dfdf = await contract.getBalance();
    console.log(dfdf);
  })
});