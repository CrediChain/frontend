import React from 'react';
import Layout from '../../app/components/Layout';

const StudentsHome: React.FC = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">For Students</h1>
                <p className="mb-4">Verify your credentials and access exclusive discounts.</p>
                {/* Add more content about benefits for students */}
            </div>
        </Layout>
    );
};

export default StudentsHome;