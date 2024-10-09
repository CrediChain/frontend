'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import WorldIDAuth from '@/app/components/WorldIdAuth';

const StudentAuthPage = () => {
    const router = useRouter();

    const handleAuthSuccess = () => {
        // Navigate to student dashboard or perform other actions
        router.push('/students/dashboard');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Student Authentication</h1>
            <WorldIDAuth onSuccess={handleAuthSuccess} />
        </div>
    );
};

export default StudentAuthPage;