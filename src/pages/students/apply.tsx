import React from 'react';
import Layout from '../../app/components/Layout';
import ApplicationForm from '../../app/components/ApplicationForm';

const ApplyPage: React.FC = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Apply for Discount</h1>
                <ApplicationForm />
            </div>
        </Layout>
    );
};

export default ApplyPage;