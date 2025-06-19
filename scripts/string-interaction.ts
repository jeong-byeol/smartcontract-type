import { ethers } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  
  const contractAddress = "0x690AB728Ff0D5ddA38e43298207DF5F18C1c95E9"; 

 
  const abi = [
    "function storedString() view returns (string)",
    "function getLength(string) pure returns (uint)",
    "function concat(string,string) pure returns (string)",
    "function toBytes(string) pure returns (bytes)",
    "function toString(bytes) pure returns (string)",
    "function setStoredString(string)"
  ];

 
  const provider = new ethers.JsonRpcProvider("https://rpc.cardona.zkevm-rpc.com");
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

  //Contract 인스턴스 연결
  const contract = new ethers.Contract(contractAddress, abi, signer);

  // 각 함수 실행
  console.log("기존 storedString:", await contract.storedString());

  console.log("getLength('Solidity') =", await contract.getLength("Solidity"));

  console.log("concat('hello', ' world') =", await contract.concat("hello", " world"));

  const toBytesResult = await contract.toBytes("blockchain");
  console.log("toBytes('blockchain') =", toBytesResult);

  const tx = await contract.setStoredString("New String from Script");
  await tx.wait();
  console.log("setStoredString 실행 완료");

  const updated = await contract.storedString();
  console.log("storedString =", updated);
}

main().catch((err) => {
  console.error("오류 발생:", err);
  process.exit(1);
});
