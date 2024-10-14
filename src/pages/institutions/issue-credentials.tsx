import React from "react";
import IssueCredentials from "../../app/components/IssueCredentials";

const IssueCredentialsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Issue Credentials to Studentes
      </h1>
      <h2>
        Your institution needs to be verified on the CrediChain platform as well
        as with world Id to issue credentials to students.
      </h2>
      <IssueCredentials />
    </div>
  );
};

export default IssueCredentialsPage;
