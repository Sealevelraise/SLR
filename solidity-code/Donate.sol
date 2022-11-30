// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract Donate {
    //mapping if user has donated money
    mapping(address => uint) public userHasDonated;

    function donateEther(uint amount) public {
        //TODO hier muss der Bazahlvorgang noch erfolgen

        //mapping that this user has donated money to SLR
        userHasDonated[msg.sender] = 1;
    }
}
