import React from 'react';
import Layout from '../../app/components/Layout';
import StudentDashboard from '../../app/components/StudentDashboard';

const StudentDashboardPage: React.FC = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
                <StudentDashboard />
            </div>
        </Layout>
    );
};

export default StudentDashboardPage;