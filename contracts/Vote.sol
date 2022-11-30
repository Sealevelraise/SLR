// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Donate.sol";
contract Vote {
    //mapping if a user has voted for a project, safed  on the blockchain
    mapping(address => uint) public userHasVoted;

    struct VoteForProject {
        address user;
        uint projectId;
    }
    //list with all the votes, safed  on the blockchain
    VoteForProject[] public votes;
    
    function voteForProject(uint _projectId) public {
        //the user is required to have donated and to not have voted already
        //require(userHasDonated[msg.sender] == 1);
        require(userHasVoted[msg.sender] != 1);

        //add this vote to the list of votes
        votes.push(VoteForProject(msg.sender, _projectId));

        //mapping, that this user has voted
        userHasVoted[msg.sender] = 1;
    }

    function getAmountOfVotes(uint _projectId) public view returns (uint) {
        //count the amount of votes for this project
        uint _votesForThisProject=0;
        for(uint i=0; i<votes.length; i++) {
            if(votes[i].projectId == _projectId) {
                _votesForThisProject++;
            }
        }
        return _votesForThisProject;
    }
}
