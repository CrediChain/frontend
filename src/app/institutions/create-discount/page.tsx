import React from "react";
import Button from "../../components/Button";

const CreateDiscount: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle discount creation
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Create New Discount</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Add form fields for discount creation */}
        <Button type="submit">Create Discount</Button>
      </form>
    </div>
  );
};

export default CreateDiscount;
