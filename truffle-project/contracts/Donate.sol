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

    event DonaterAdded(uint id,string mail, uint donatedAmount);
    event DonationAdded(uint id,string mail, uint amount);
    
    Donater[] private donaters;
    mapping (address => uint) public idToOwner;

    //mapping if user has donated money
    mapping(address => uint) public userHasDonated;

    function getUserHasDonated(address _sender) external view returns (uint){
        return userHasDonated[_sender];
    }


    /// @notice Donate Ether to SeaLevelRaise
    function donateEther(string memory _mail, uint _amount) public payable{
        //donations of less than 1 finney will be rejected 
        if(msg.value < 1e15) {
            revert();
        }
        updateDonatedAmount(_mail, _amount);
    }

    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }

    /// @notice Update the amount when a Donater has donated. If the donater donated for the first time create new Donater and add it to array.
    /// @param _mail Mail of the User
    /// @param _amount Amount the User has donated
    function updateDonatedAmount(string memory _mail, uint _amount) internal{
        if(userHasDonated[msg.sender] == 0){
            _createDonater(_mail, _amount);
            //mapping that this user has donated money to SLR
            userHasDonated[msg.sender] = 1;
               
        }else {
            bytes memory tempEmptyStringTest = bytes(_mail);
            uint id= idToOwner[msg.sender];
            if(tempEmptyStringTest.length != 0) {
                _addMailToDonater(_mail);
            }
            donaters[id].donatedAmount += _amount;
            uint amount = donaters[id].donatedAmount;
            string memory currentMail = donaters[id].mail;
            emit DonationAdded(id, currentMail, amount);
        }
    }

    /// @notice Create new Donater and add it to the array
    /// @param _amount Amount the User has donated
    function _createDonater(string memory _mail, uint _amount) internal {
        bytes memory tempEmptyStringTest = bytes(_mail); 
            if(tempEmptyStringTest.length != 0) {
                donaters.push(Donater(_mail, _amount));
            }else{
                _mail = '';
                donaters.push(Donater(_mail, _amount));
            }
        uint id = donaters.length -1;
        idToOwner[msg.sender] = id;
        emit DonaterAdded( id, _mail, _amount);
    }

    /// @notice Add Mail to a Donater if mail was set in frontend
    /// @param _mail Mail of the User
    function _addMailToDonater(string memory _mail) internal {
        uint id= idToOwner[msg.sender];
        donaters[id].mail = _mail;
    }

    /// @notice Get Number of Donaters 
    function getNumberOfDonaters() public view returns(uint){
        uint numberOfUsers;
        for(uint i=0; i<donaters.length; i++) {
            numberOfUsers++;
        }
        return numberOfUsers;
    }

    /// @notice Get Details for a User that has donated 
    function getDonaterDetails() public view returns(Donater memory){
        if(userHasDonated[msg.sender] == 1){
            uint id = idToOwner[msg.sender];
            return donaters[id];
        } else {
            revert('User has not donated');
        }
    }

}
