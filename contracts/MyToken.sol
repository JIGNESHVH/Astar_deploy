// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;
import"@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20{
    
    ERC20 public tokenaddress;

    struct TransferDetails{
          address userAddress;
          uint256 amount;
    }
   
   mapping (address => TransferDetails) public details;
  
    address Admin = msg.sender;
    constructor() ERC20("USDT","Tether"){
    }

    modifier  onlyOwner(){
        require(msg.sender == Admin,"Only Token Deployer can Send  Token");
        _;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(to != address(0), "Invalid address");
        _mint(to, amount);
    }  


    function TransferToken(address to , uint256 amount) public {
        require(to != address(0),"invalid Address");
        tokenaddress.transfer(to, amount);
        details[to] = TransferDetails(to,amount);
    }

    function getMintToken() public  view returns (uint256){ 
      return tokenaddress.totalSupply();
    }




}
