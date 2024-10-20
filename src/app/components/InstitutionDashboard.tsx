"use client";
import React, { useState } from "react";
import Card from "./Card";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { credichain } from "../../../contract-data/Utility";
import { useWriteContract } from "wagmi";
import { Ban } from "lucide-react";

const InstitutionDashboard: React.FC = () => {
  const { writeContract, isError, error } = useWriteContract();
  const [tokenId, setTokenId] = useState("");

  const { address } = useAccount();
  const { data: status } = useReadContract({
    ...credichain,
    functionName: "getIsInstitutuinVerified",
    args: [address],
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      writeContract({
        ...credichain,
        functionName: "revokeCredential",
        args: [tokenId],
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
    <div className="space-y-3">
      <p className="text-2xl font-bold">
        Institution Verification Status : {status?.toString()}{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Revoke Credentials">
          <Ban className="w-40 h-40" />
          {/* List of pending applications */}
          <p>Revoke a student's credential using token id.</p>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="flex flex-row justify-between space-x-2 ">
              <label
                htmlFor="addressTo"
                className=" text-sm font-medium text-gray-700 flex justify-center items-center "
              >
                TokenId:
              </label>

              <input
                type="text"
                id="addressTo"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="0x..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Revoke Credential
            </button>
          </form>
        </Card>
        <Card title="Active Discounts">
          {/* List of active discounts */}
          <p>List of active discounts</p>
        </Card>
      </div>
    </div>
  );
};

export default InstitutionDashboard;
