// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/// @title Donate Ether to SeaLevelRaise
/// @author Josua Benz
/// @notice With this contract, you donate money to SeaLevelRaise.
contract Donate {

   struct Donater{
    string mail;
    uint donatedAmount;
   }

    event DonaterAdded(string mail, uint donatedAmount);
    Donater[] private donaters;
    mapping (address => uint) public idToOwner;

    //mapping if user has donated money
    mapping(address => bool) public userHasDonated;

    /// @notice Donate Ether to SeaLevelRaise
    receive() external payable{
        //donations of less than 1 finney will be rejected 
        if(msg.value < 1e15) {
            revert();
        }

        //mapping that this user has donated money to SLR
        userHasDonated[msg.sender] = true;
    }


    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }


    /// @notice Update the amount when a Donater has donated. If the donater donated for the first time create new Donater to struct and add it to array.
    /// @param _mail Mail of the User
    /// @param _amount Amount the User has donated
    function updateDonatedAmount(string memory _mail, uint _amount) public{
        if(userHasDonated[msg.sender]){
            _createDonater(_amount);
            bytes memory tempEmptyStringTest = bytes(_mail); // Uses memory
            if(tempEmptyStringTest.length != 0) {
                _addMailToDonater(_mail);
            }
            emit DonaterAdded(_mail, _amount);
               
        }else {
            uint id = idToOwner[msg.sender];
            donaters[id].donatedAmount += _amount;
        }
    }

    /// @notice Create new Donater and add it to the array
    /// @param _amount Amount the User has donated
    function _createDonater(uint _amount) internal {
        donaters.push(Donater('', _amount));
        uint id = donaters.length -1;
        idToOwner[msg.sender] = id;
    }

    /// @notice Add Mail to a Donater if mail was set in frontend
    /// @param _mail Mail of the User
    function _addMailToDonater(string memory _mail) internal {
        uint id = idToOwner[msg.sender];
        donaters[id].mail = _mail;
    }

    /// @notice Get Details for a User that has donated 
    function getDonaterDetails() public view returns(Donater memory){
        if(userHasDonated[msg.sender]){
            uint id = idToOwner[msg.sender];
            return donaters[id];
        } else {
            revert('User has not donated');
        }
    }

}
