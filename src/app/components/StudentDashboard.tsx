"use client";
import { useState } from "react";
import Card from "./Card";
import { useReadContract, useAccount } from "wagmi";
import { credichain } from "../../../contract-data/Utility";

const StudentDashboard: React.FC = () => {
  const [tokenId, setTokenId] = useState("");
  const [issuer, setIssuer] = useState("");
  const { address } = useAccount();
  const { data: NFTs }: any = useReadContract({
    ...credichain,
    functionName: "getStudentCredentials",
    args: [address],
  });

  return (
    <div className="space-y-3">
      <h2>Check Credential Issuer</h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="tokenId"
            className="block text-sm font-medium text-gray-700"
          >
            Token ID:
          </label>
          <input
            type="number"
            id="tokenId"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter Token ID"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Check Credential Issuer
        </button>
      </form>

      {issuer && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p className="text-gray-800">Credential Issuer: {issuer}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="My Credentials">
          {/* List of student's credentials */}
          <p>List of student's credentials</p>
          <p>{NFTs?.tokenId}</p>
          <p>{NFTs?.ownerAddress}</p>
          <p>{NFTs?.tokenURI}</p>
        </Card>
        <Card title="Applied Discounts">
          {/* List of discounts student has applied for */}
          <p>List of discounts student has applied for</p>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
