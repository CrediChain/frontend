'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import WorldIDAuth from '@/app/components/WorldIdAuth';

const InstitutionAuthPage = () => {
    const router = useRouter();

    const handleAuthSuccess = () => {
        // Navigate to institution dashboard or perform other actions
        router.push('/institutions/dashboard');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Institution Authentication</h1>
            <WorldIDAuth onSuccess={handleAuthSuccess} />
        </div>
    );
};

export default InstitutionAuthPage;