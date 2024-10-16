import React from "react";
import InstitutionDashboard from "../../components/InstitutionDashboard";

const InstitutionDashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Institution Dashboard</h1>
      <InstitutionDashboard />
    </div>
  );
};

export default InstitutionDashboardPage;
