import { expect } from 'chai';
import { ethers } from 'hardhat';

 
describe("Bytescontract", function () {
    let contract : any;

    beforeEach(async function () {
        const arrayutils = await ethers.getContractFactory("Bytescontract");
        contract = await arrayutils.deploy();
        await contract.waitForDeployment();
        
    });

    it("바이트", async function () {
       const length = await contract.getLength("abcde");
       const rel = ethers.encodeBytes32String(length);
        console.log(rel);
        const acces = await contract.bytesAccess("avcee", 2);
        const rell = ethers.encodeBytes32String(acces);
        console.log(rell);
    })
});