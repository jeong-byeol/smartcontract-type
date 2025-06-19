// SPDX-License-Identifier: MIT 
// SPDX-License-Indentifier: MIT
pragma solidity ^0.8.0;

contract Mappingcontract {
    mapping(address => uint256) public balance;

    function setBalance(address user, uint256 amount) public {
        balance[user] = amount;
    }

    function getBalance(address user) public view returns (uint256) {
        return balance[user];
    }
}