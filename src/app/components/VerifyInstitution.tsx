"use client";
import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import TransactionComponents from "./TransactionsComponent";
const VerifyInstitution: React.FC = () => {
  // const account = useAccount({
  //   config,
  // });
  // State to hold the form input value
  const [institutionName, setInstitutionName] = useState<string>("");
  //   console.log(address?.toString());
  // Handle input change event
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstitutionName(event.target.value);
  };

  // Handle button click event
  const handleVerifyClick = () => {
    // Handle contract function call
    // <VerifyInstitutionFunctionCall />;
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TransactionComponents />
      <Card title="Verify Institution">
        <form>
          <label htmlFor="institutionName">Institution Name:</label>
          <input
            type="text"
            id="institutionName"
            value={institutionName}
            onChange={handleInputChange}
            className="border rounded p-2"
            placeholder="Enter institution name"
          />
        </form>
        <Button onClick={handleVerifyClick}>Verify Institution</Button>;
      </Card>
    </div>
  );
};

export default VerifyInstitution;
