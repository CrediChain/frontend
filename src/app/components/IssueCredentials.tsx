import React from "react";
import Card from "./Card";

const IssueCredentials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card title="Student Credentials">
        {/* List of student's credentials */}
        <p>List of student's credentials</p>
      </Card>
      <Card title="Institution Credentials">
        {/* List of institution's credentials */}
        <p>List of institution's credentials</p>
      </Card>
    </div>
  );
};

export default IssueCredentials;
