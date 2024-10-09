'use client';

import { useEffect, useState } from 'react';
import { cookieToInitialState } from 'wagmi';
import { Providers } from '../../../providers';
import { getConfig } from '../../../config';

export function DynamicProviders({ children }: { children: React.ReactNode }) {
    const [initialState, setInitialState] = useState<any>(null);

    useEffect(() => {
        // Access cookies on the client side, e.g., via `document.cookie`
        const cookie = document.cookie;
        const config = getConfig();
        const state = cookieToInitialState(config, cookie);
        setInitialState(state);
    }, []);

    if (!initialState) return null; // Optionally, return a loading state

    return <Providers initialState={initialState}>{children}</Providers>;
}
