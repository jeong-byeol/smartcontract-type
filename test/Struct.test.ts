import { expect } from 'chai';
import { ethers } from 'hardhat';

describe("Structcontract", function () {
    let contract : any;

    beforeEach(async function () {
        const StructUtils = await ethers.getContractFactory("Structcontract");
        contract = await StructUtils.deploy();
        await contract.waitForDeployment();
    });

    it("스트럭트 테스트", async function () {
        await contract.setUser("jeng", 35, 4000);
        await contract.updatebalance(5000);
        const setuser2 = await contract.getUser();
        console.log(setuser2);
    });
});