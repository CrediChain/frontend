import { Hex } from "viem";
import CrediChainCoreAbi from "./CrediChainCoreAbi.json" assert { type: "json" };
const clickContractAddress: Hex = "0x67c97D1FB8184F038592b2109F854dfb09C77C75";

const clickContractAbi = [
  {
    type: "function",
    name: "click",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export const verifyInstitutionFunctionCall = [
  {
    address: clickContractAddress,
    abi: clickContractAbi,
    functionName: "click",
    args: [],
  },
];
