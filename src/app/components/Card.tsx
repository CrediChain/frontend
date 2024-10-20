import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-gray-500 shadow-md rounded-lg overflow-hidden w-full">
      <div className="px-6 py-4 flex flex-col h-full space-y-1">
        <section className="custom-bag text-white text-2xl font-bold text-center px-3 py-2 rounded-lg">
          {title}
        </section>
        <div className="flex-grow"></div>{" "}
        {/* This creates space between the heading and children */}
        <div className="flex flex-col space-y-3 bg-gray-200 px-4 py-2 rounded-lg justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
