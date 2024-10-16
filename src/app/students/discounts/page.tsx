import React from "react";
import DiscountCard from "../../components/DiscountCard";

const DiscountsPage: React.FC = () => {
  const discounts = [
    {
      id: 1,
      title: "Student Software Bundle",
      description: "50% off on popular software suite",
      institution: "Tech University",
    },
    {
      id: 2,
      title: "Textbook Discount",
      description: "20% off on all textbooks",
      institution: "BookSmart College",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Available Discounts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {discounts.map((discount) => (
          <DiscountCard
            key={discount.id}
            title={discount.title}
            description={discount.description}
            institution={discount.institution}
            onApply={() => console.log(`Applied for discount: ${discount.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscountsPage;
