// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/// @title Donate Ether to SeaLevelRaise
/// @author Josua Benz
/// @notice With this contract, you donate money to SeaLevelRaise.
contract Donate {
    //mapping if user has donated money
    mapping(address => uint) public userHasDonated;

    /// @notice Donate Ether to SeaLevelRaise
    function donateEther() public payable{
        //donations of less than 1 finney will be rejected 
        if(msg.value < 1e15) {
            revert();
        }

        //mapping that this user has donated money to SLR
        userHasDonated[msg.sender] = 1;
    }
}
