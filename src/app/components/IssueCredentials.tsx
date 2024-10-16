"use client";
import React, { useState } from "react";
import Card from "./Card";
import { useWriteContract } from "wagmi";
import { credichain } from "../../../contract-data/Utility";

const IssueCredentials: React.FC = () => {
  // State to store form inputs
  const [addressTo, setAddressTo] = useState("");
  const [uri, setUri] = useState("");

  const { writeContract, isError, error } = useWriteContract();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      writeContract({
        ...credichain,
        functionName: "issueCredential",
        args: [addressTo, uri],
      });

      if (!isError) {
        console.log("Verification successful");
      } else {
        console.error("Error verifying proof on-chain:", error);
      }
    } catch (error) {
      console.error("Error calling writeContract:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card title="Institution Credentials">
        <p>Issue a new credential</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            5
            <label
              htmlFor="addressTo"
              className="block text-sm font-medium text-gray-700"
            >
              Address to:
            </label>
            <input
              type="text"
              id="addressTo"
              value={addressTo}
              onChange={(e) => setAddressTo(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="0x..."
              required
            />
          </div>

          <div>
            <label
              htmlFor="uri"
              className="block text-sm font-medium text-gray-700"
            >
              URI:
            </label>
            <input
              type="text"
              id="uri"
              value={uri}
              onChange={(e) => setUri(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter URI"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Issue Credential
          </button>
        </form>

        {isError && (
          <p className="text-red-500 mt-2">Error: {error?.message}</p>
        )}
      </Card>
    </div>
  );
};

export default IssueCredentials;
