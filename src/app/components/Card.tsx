import React, { ReactNode } from 'react';

interface CardProps {
    title: string;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                {children}
            </div>
        </div>
    );
};

export default Card;