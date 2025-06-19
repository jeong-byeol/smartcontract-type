// SPDX-License-Identifier: MIT 
// SPDX-License-Indentifier: MIT
pragma solidity ^0.8.0;

contract Structcontract {
    struct User {
        string name;
        uint256 age;
        uint256 balance;
    }

    User public user;

    function setUser(string memory _name, uint256 _age, uint256 _balance) public { //이름, 나이, 값 저장
        user = User(_name, _age, _balance);
    }

    function updatebalance(uint256 _newbalance) public { // 값 수정
        user.balance = _newbalance;
    }

    function deleteUser() public { //struct 안의 전체 초기화
        delete user;
    }

    function deletebalance() public { //특정 변수만 초기화
        delete user.balance;
    }

    function getUser() public view returns (string memory, uint256, uint256) { //이름, 나이 ,값 조회
        return (user.name, user.age, user.balance);
    }

    
}

