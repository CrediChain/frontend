import React from 'react';
import Card from './Card';

const InstitutionDashboard: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="Active Discounts">
                {/* List of active discounts */}
                <p>List of active discounts</p>
            </Card>
            <Card title="Discount Applications">
                {/* List of pending applications */}
                <p>List of pending applications</p>
            </Card>
        </div>
    );
};

export default InstitutionDashboard;