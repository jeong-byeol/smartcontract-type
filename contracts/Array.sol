// SPDX-License-Identifier: MIT 
// SPDX-License-Indentifier: MIT
pragma solidity ^0.8.0;

contract Arraycontract {
    string public name;
    uint256[] public number;
    uint256[] public number1 = [3, 5, 2];

    constructor (string memory _name) {
        name = _name;
    }

    function Arraypush (uint256 num) public returns (uint256[] memory) {
        number.push(num);
        return number;
    }

    function Arraypop () public returns (uint256[] memory){
        number1.pop();
        return number1;
    }

    function Arraylength () public view returns (uint256) {
        return number1.length;
    }

    function Arraydelete(uint256 index) public {
        require(index < number1.length, "index out of bounds");
        delete number1[index];
    }
}