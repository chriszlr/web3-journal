// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Journal{
    uint public _idEntry;
    address public ownerOfContract;


    address[] public creators;
    string[] public entries;
    
    struct Entry{
        address account;
        uint userId;
        string message;
    }

    event EntryCreated(
        address account,
        uint userId,
        string message
    );

    mapping(address => Entry) public addressToEntry;

    constructor(){
        ownerOfContract = msg.sender;
    }

    function inc() internal {
        _idEntry++;
    }

    function createEntry(string calldata _message) public {
        inc();

        uint currentId = _idEntry;

        Entry storage entry = addressToEntry[msg.sender];

        entry.account = msg.sender;
        entry.userId = currentId;
        entry.message = _message;

        creators.push(msg.sender);
        entries.push(_message);

        emit EntryCreated(msg.sender, currentId, _message);
    }

    function getCreatorData(address _address) public view returns (address, uint, string memory){
        Entry memory creatorData = addressToEntry[_address];

        return(
            creatorData.account,
            creatorData.userId,
            creatorData.message
        );
    }

    function getCreatorAddresses() public view returns(address[] memory){
        return creators;
    }

    function getAllEntries() public view returns(string[] memory){
        return entries;
    }
}