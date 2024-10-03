import React from 'react';
import Card from './Card';

const StudentDashboard: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="My Credentials">
                {/* List of student's credentials */}
                <p>List of student's credentials</p>
            </Card>
            <Card title="Applied Discounts">
                {/* List of discounts student has applied for */}
                <p>List of discounts student has applied for</p>
            </Card>
        </div>
    );
};

export default StudentDashboard;