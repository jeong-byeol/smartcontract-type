import { expect } from 'chai';
import { ethers } from 'hardhat';

describe("StringContract", function () {
  let contract : any;

  beforeEach(async function () {
    const StringUtils = await ethers.getContractFactory("StringContract");
    contract = await StringUtils.deploy("hello, abc");
    await contract.waitForDeployment();
  });

  it("길이 잘 반환 됩니다.", async function () {
    const length = await contract.getLength("Solidity");
    expect(length).to.equal(8);
  });

  it("문자끼리 연결 된다.", async function () {
    const result = await contract.concat("Hello, ", "World!");
    expect(result).to.equal("Hello, World!");
  });



  it("String에서 Bytes로 변환된다.", async function () {
    const str = "block";
    const backToBytes = await contract.toBytes(str);
    const decoded = ethers.toUtf8String(backToBytes);
    expect(decoded).to.equal(str);
  });

  it("초깃값의 문자열이 바뀐다.", async function () {
    await contract.setStoredString("New value");
    const newStr = await contract.storedString();
    expect(newStr).to.equal("New value");
  });
});

