"use client";

import React from "react";
import Card from "../components/Card";
import { BadgePercent, University, LayoutDashboard } from "lucide-react";
import Button from "../components/Button";
import { useRouter } from "next/navigation"; // Use next/navigation for client-side routing in app directory

const InstitutionsHome: React.FC = () => {
  const router = useRouter(); // Initialize the router

  const onDiscounts = () => {
    router.push("/institutions/create-discount");
  };

  const onIssue = () => {
    router.push("/institutions/issue-credentials");
  };

  const onDashboard = () => {
    router.push("/institutions/dashboard");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">For Institutions</h1>
      <p className="mb-4">
        Create and manage discount programs for verified students.
      </p>
      <div className="flex flex-row gap-6 ">
        <Card title="Create Discount">
          <BadgePercent className="w-40 h-40 " />
          <p>Create discounts for verified students.</p>
          <Button onClick={onDiscounts}>Create Discounts</Button>
        </Card>
        <Card title="Issue Credentials">
          <University className="w-40 h-40 " />
          <p>Issue credentials to students.</p>
          <Button onClick={onIssue}>Issue Credentials</Button>
        </Card>

        <Card title="Institution Dashboard">
          <LayoutDashboard className="w-40 h-40 " />
          <p>View and manage institutional data.</p>
          <Button onClick={onDashboard}>Institutional Dashboard</Button>
        </Card>
      </div>
    </div>
  );
};

export default InstitutionsHome;
