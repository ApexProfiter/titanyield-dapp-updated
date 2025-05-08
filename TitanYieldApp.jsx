import { useEffect, useState } from "react";
import { ethers } from "ethers";

const contractAddress = "0x5CbF5F72D812d95c6745e80299F4e85b01626793";
const contractABI = [
  "function deposit(address referrer) payable",
  "function withdraw(uint256 amount)",
  "function reinvest()",
  "function setWithdrawalAddress(address _to)",
  "function getUserInfo(address _user) view returns (uint256, uint256, uint256, uint256, address, uint256)",
  "function referralRewards(address _user) view returns (uint256)"
];

// (content shortened for space; full code is being written here)
