import React from 'react';
import { IDKitWidget } from '@worldcoin/idkit';
import { useAccount } from 'wagmi';

interface WorldIDAuthProps {
    onSuccess: () => void;
}

const WorldIDAuth: React.FC<WorldIDAuthProps> = ({ onSuccess }) => {
    const { address } = useAccount();

    return (
        <IDKitWidget
            app_id="app_staging_6c8d4488699bc14d8d580282ac02b9d5" // Replace with your actual World ID app ID
            action="testing-verification-action"
            signal={address}
            onSuccess={onSuccess}
        >
            {({ open }) => (
                <button
                    onClick={open}
                    className="btn btn-primary animate-slideIn inline-flex items-center"
                >
                    Verify with World ID
                </button>
            )}
        </IDKitWidget>
    );
};

export default WorldIDAuth;
