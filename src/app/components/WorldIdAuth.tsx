'use client'

import React from 'react';
import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit';
import { useAccount, useWriteContract } from 'wagmi';
import { decodeAbiParameters } from 'viem';
import { identityManagerABI } from '../abi/identityManagerABI';

interface WorldIdAuthProps {
    onSuccess: () => void;
}

const WorldIdAuth: React.FC<WorldIdAuthProps> = ({ onSuccess }) => {
    const contractAddress = '0xd68ca0714a711022B877C0c49C5baf1E5297cC79'; //Base Sepolia

    const { writeContract, isError, error } = useWriteContract();

    const handleVerify = async (result: ISuccessResult) => {
        const { merkle_root, nullifier_hash, proof } = result;

        // Unpack the proof
        const proofBytes = Buffer.from(proof, 'hex');
        const unpackedProof = decodeAbiParameters([{ type: 'uint256[8]' }], proofBytes)[0];

        try {
            writeContract({
                address: contractAddress,
                abi: identityManagerABI,
                functionName: 'verifyAndExecute',
                args: [merkle_root, nullifier_hash, unpackedProof],
            });

            if (!isError) {
                console.log('Verification successful');
                onSuccess();
            } else {
                console.error('Error verifying proof on-chain:', error);
            }
        } catch (error) {
            console.error('Error calling writeContract:', error);
        }
    };

    return (
        <IDKitWidget
            app_id="app_staging_9e74e697f8ab2acdd8192776b90c6902" // Replace with your on-chain app ID
            action="verify-entity" // Replace with your action ID
            signal="optional_signal"
            onSuccess={onSuccess}
            handleVerify={handleVerify}
            verification_level={VerificationLevel.Orb}
        >
            {({ open }) => (
                <button
                    onClick={open}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Verify with World ID
                </button>
            )}
        </IDKitWidget>
    );
};

export default WorldIdAuth;