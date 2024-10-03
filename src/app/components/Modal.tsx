import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                {children}
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;