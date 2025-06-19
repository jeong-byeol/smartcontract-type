// SPDX-License-Identifier: MIT 
// SPDX-License-Indentifier: MIT
pragma solidity ^0.8.0;

contract Bytescontract {
    

    function getLength (bytes memory data) public pure returns (uint) {
        return data.length;
    }

    function bytesAccess (bytes memory data, uint256 index)public pure returns (bytes1) {
        require(index < data.length, "index out of bounds");
        return data[index];
    }
    
}