// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDT is ERC20 {
    constructor() ERC20("USDT", "Tether") {
    }


    function mint(uint256 amount) public {
    _mint(msg.sender, amount);

    }
}
