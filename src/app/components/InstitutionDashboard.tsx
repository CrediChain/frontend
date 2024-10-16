"use client";
import React from "react";
import Card from "./Card";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { credichain } from "../../../contract-data/Utility";

const InstitutionDashboard: React.FC = () => {
  const { address } = useAccount();
  const { data: status } = useReadContract({
    ...credichain,
    functionName: "getIsInstitutuinVerified",
    args: [address],
  });
  return (
    <div className="space-y-3">
      <h1>Institution Verification Status : {status?.toString()} </h1>

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
    </div>
  );
};

export default InstitutionDashboard;
