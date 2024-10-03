import React from 'react';
import Card from './Card';
import Button from './Button';

interface DiscountCardProps {
    title: string;
    description: string;
    institution: string;
    onApply: () => void;
}

const DiscountCard: React.FC<DiscountCardProps> = ({ title, description, institution, onApply }) => {
    return (
        <Card title={title}>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-sm text-gray-500 mb-4">Offered by: {institution}</p>
            <Button onClick={onApply}>Apply</Button>
        </Card>
    );
};

export default DiscountCard;