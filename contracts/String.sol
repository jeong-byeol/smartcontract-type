// SPDX-License-Identifier: MIT 
// SPDX-License-Indentifier: MIT
pragma solidity ^0.8.0;

contract StringContract {
    string public storedString;

    constructor(string memory initial) {
        storedString = initial;
    }

    function getLength(string memory str) public pure returns (uint) {
        return bytes(str).length;
    }

    function concat(string memory a, string memory b) public pure returns (string memory) {
        return string(abi.encodePacked(a, b));
    }

    function toBytes(string memory str) public pure returns (bytes memory) {
        return bytes(str);
    }

    function toString(bytes memory data) public pure returns (string memory) {
        return string(data);
    }

    function setStoredString(string memory newStr) public {
        storedString = newStr;
    }
}
