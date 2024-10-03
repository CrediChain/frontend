import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
    const baseClasses = 'px-4 py-2 rounded font-semibold';
    const variantClasses = {
        primary: 'bg-green-500 text-white hover:bg-green-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;