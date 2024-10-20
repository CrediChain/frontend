"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useReadContract, useAccount } from "wagmi";
import { credichain } from "../../../contract-data/Utility";
import { School } from "lucide-react";

interface NFT {
  tokenId: bigint; // Assuming tokenId is of type bigint
  ownerAddress: string;
  tokenURI: string;
}

const StudentDashboard: React.FC = () => {
  const [tokenId, setTokenId] = useState("");
  const [issuer, setIssuer] = useState("");
  const { address } = useAccount();

  const { data: NFTs }: { data: NFT[] | undefined } = useReadContract({
    ...credichain,
    functionName: "getStudentCredentials",
    args: [address],
  });
  const { data: issuerAdd }: any = useReadContract({
    ...credichain,
    functionName: "getCredentialIssuer",
    args: [tokenId],
  });

  useEffect(() => {
    if (NFTs && NFTs.length > 0) {
      console.log(NFTs[0].tokenURI);
    }
  }, [NFTs]);

  if (!NFTs || NFTs.length === 0) {
    return <p>No credentials found for this student.</p>;
  }

  const handleIssuerCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setIssuer(issuerAdd.toString());
  };

  return (
    <div className="space-y-8">
      <form className="space-y-4" onSubmit={handleIssuerCheck}>
        <h2 className="text-xl font-bold">Check Credential Issuer</h2>
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
        <div className="mt-4  bg-gray-100 rounded-md">
          <p className="text-gray-800 ">
            Credential Issuer: <p className="font-bold text-xl">{issuer}</p>
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {NFTs.map((nft, index) => (
          <Card key={index} title={`Credential #${index + 1}`}>
            <School className="w-40 h-40 my-4" />
            <p className="flex w-full justify-between">
              <p> Token Id:</p>
              <p className="font-bold text-lg">{nft.tokenId.toString()}</p>
            </p>
            <p className="flex w-full justify-between">
              {" "}
              Owner Address:
              <p className="font-semibold ">{nft.ownerAddress}</p>
            </p>
            <p className="flex w-full justify-between">
              Token URI:<p className="font-bold text-lg">{nft.tokenURI}</p>
            </p>
          </Card>
        ))}
        <Card title="Applied Discounts">
          <p></p>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
