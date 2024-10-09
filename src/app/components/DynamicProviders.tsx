'use client';

import { useEffect, useState } from 'react';
import { cookieToInitialState } from 'wagmi';
import { Providers } from '../../../providers';
import { getConfig } from '../../../config';

export function DynamicProviders({ children }: { children: React.ReactNode }) {
    const [initialState, setInitialState] = useState<any>(undefined);

    useEffect(() => {
        const cookie = document.cookie;
        const config = getConfig();
        const state = cookieToInitialState(config, cookie);
        setInitialState(state);
    }, []);

    // Render children even if initialState is null
    return <Providers initialState={initialState}>{children}</Providers>;
}