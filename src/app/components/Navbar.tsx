'use client';

import React from 'react';
import Link from 'next/link';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import {
    ConnectWallet,
    Wallet,
    WalletDropdown,
    WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
    Address,
    Avatar,
    Name,
    Identity,
} from '@coinbase/onchainkit/identity';
import { color } from '@coinbase/onchainkit/theme';
import { base } from 'viem/chains';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link href="/" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-500 text-lg">CrediChain</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/institutions" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">For Institutions</Link>
                            <Link href="/students" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">For Students</Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        {/* Replace Log In / Sign Up buttons with ConnectWallet */}
                        <OnchainKitProvider apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY} chain={base}>
                            <Wallet>
                                <ConnectWallet>
                                    <Avatar className="h-6 w-6" />
                                    <Name />
                                </ConnectWallet>
                                <WalletDropdown>
                                    <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                                        <Avatar />
                                        <Name />
                                        <Address className={color.foregroundMuted} />
                                    </Identity>
                                    <WalletDropdownDisconnect />
                                </WalletDropdown>
                            </Wallet>
                        </OnchainKitProvider>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
