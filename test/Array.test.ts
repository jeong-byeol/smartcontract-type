import { expect } from 'chai';
import { ethers } from 'hardhat';

describe("Arraycontract", function () {
    let contract : any;

    beforeEach(async function () {
        const arrayutils = await ethers.getContractFactory("Arraycontract");
        contract = await arrayutils.deploy("hello, array");
        await contract.waitForDeployment();
        
    });

    it("배열에 요소 넣기", async function () {
        const push = await contract.Arraypush(46);
        console.log(push);
    });

    it("배열에 요소 pop하기", async function () {
        const pop = await contract.Arraypop();
       console.log(pop);
    });

    it("배열 길이 반환", async function () {
        const length = await contract.Arraylength();
        expect(length).to.equal(3);
    });

    it("배열 요소 제거", async function () {
        const delete1 = await contract.Arraydelete(1);
        console.log(delete1);
    });
});