import React from 'react';
import Layout from '../../app/components/Layout';
import InstitutionDashboard from '../../app/components/InstitutionDashboard';

const InstitutionDashboardPage: React.FC = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Institution Dashboard</h1>
                <InstitutionDashboard />
            </div>
        </Layout>
    );
};

export default InstitutionDashboardPage;