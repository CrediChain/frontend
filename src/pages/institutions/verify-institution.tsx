"use client";
import React from "react";
import VerifyInstitution from "../../app/components/VerifyInstitution";

const VerifyInstitutionOnCrediChain: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Verify Institution on The CrediChain Platform
      </h1>
      <VerifyInstitution />
    </div>
  );
};

export default VerifyInstitutionOnCrediChain;
