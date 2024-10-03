import React from 'react';
import Layout from '../../app/components/Layout';

const InstitutionsHome: React.FC = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">For Institutions</h1>
                <p className="mb-4">Create and manage discount programs for verified students.</p>
                {/* Add more content about benefits for institutions */}
            </div>
        </Layout>
    );
};

export default InstitutionsHome;