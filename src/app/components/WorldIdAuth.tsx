"use client";

import React, { useRef } from "react";
import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";
import { useWriteContract } from "wagmi";
import { decodeAbiParameters } from "viem";
import { identityManagerABI } from "../../../contract-data/identityManagerABI";

interface WorldIdAuthProps {
  onSuccess: () => void;
  triggerVerification: boolean;
}

const WorldIdAuth: React.FC<WorldIdAuthProps> = ({
  onSuccess,
  triggerVerification,
}) => {
  const contractAddress = "0xd68ca0714a711022B877C0c49C5baf1E5297cC79"; //Base Sepolia
  const { writeContract, isError, error } = useWriteContract();
  const widgetRef = useRef<any>(null);

  React.useEffect(() => {
    if (triggerVerification && widgetRef.current) {
      widgetRef.current();
    }
  }, [triggerVerification]);

  const handleVerify = async (result: ISuccessResult) => {
    const { merkle_root, nullifier_hash, proof } = result;

    // Unpack the proof
    const proofBytes = Buffer.from(proof, "hex");
    const unpackedProof = decodeAbiParameters(
      [{ type: "uint256[8]" }],
      proofBytes
    )[0];

    try {
      writeContract({
        address: contractAddress,
        abi: identityManagerABI,
        functionName: "verifyAndExecute",
        args: [merkle_root, nullifier_hash, unpackedProof],
      });

      if (!isError) {
        console.log("Verification successful");
        onSuccess();
      } else {
        console.error("Error verifying proof on-chain:", error);
      }
    } catch (error) {
      console.error("Error calling writeContract:", error);
    }
  };

  return (
    <IDKitWidget
      app_id="app_staging_9e74e697f8ab2acdd8192776b90c6902"
      action="verify-entity"
      signal="optional_signal"
      onSuccess={onSuccess}
      handleVerify={handleVerify}
      verification_level={VerificationLevel.Orb}
    >
      {({ open }) => {
        widgetRef.current = open; // Store the open function in the ref
        return <React.Fragment />; // or return <></>
      }}
    </IDKitWidget>
  );
};

export default WorldIdAuth;
