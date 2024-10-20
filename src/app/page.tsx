"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, Shield, Gift } from "lucide-react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation"; // Import useRouter for redirecting
import WorldIdAuth from "../app/components/WorldIdAuth";

const Home = () => {
  const { address, isConnected } = useAccount();
  const [isVerified, setIsVerified] = useState(false);
  const [triggerVerification, setTriggerVerification] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);

  const router = useRouter(); // Initialize useRouter

  const handleVerificationSuccess = () => {
    setIsVerified(true);
    if (userType === "student") {
      router.push("/student"); // Redirect to /student after verification
    } else if (userType === "institution") {
      router.push("/institution"); // Redirect to /institution after verification
    }
  };

  const handleConnectAndVerify = (type: string) => {
    if (!isConnected) {
      alert("Please connect your wallet first.");
      return;
    }
    setUserType(type); // Store the clicked user type
    setTriggerVerification(true); // Trigger World ID verification
  };

  useEffect(() => {
    if (isConnected && triggerVerification) {
      setTriggerVerification(true);
    }
  }, [isConnected, triggerVerification]);

  return (
    <div className="bg-background min-h-screen">
      <section className="hero-section">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-extrabold mb-6 animate-fadeIn">
            Verify Credentials and Unlock Exclusive Discounts with CrediChain
          </h1>
          <p className="text-3xl mb-8 animate-fadeIn">
            Secure, blockchain-based credential verification for students and
            institutions.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <button
              className="btn btn-primary animate-slideIn"
              onClick={() => handleConnectAndVerify("student")}
            >
              I'm a Student
            </button>
            <button
              className="btn btn-secondary animate-slideIn"
              onClick={() => handleConnectAndVerify("institution")}
            >
              I'm an Institution
            </button>
          </div>
        </div>
      </section>

      {triggerVerification && (
        <WorldIdAuth
          onSuccess={handleVerificationSuccess}
          triggerVerification={triggerVerification}
        />
      )}

      <section className="how-it-works-section">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">
            How CrediChain Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Verify Credentials",
                description:
                  "Institutions create soulbound NFTs for student credentials.",
                icon: Shield,
                color: "text-primary",
                bg: "bg-primary-100",
              },
              {
                title: "Offer Discounts",
                description:
                  "Institutions create discount offers for verified students.",
                icon: Gift,
                color: "text-secondary",
                bg: "bg-secondary-100",
              },
              {
                title: "Claim Discounts",
                description:
                  "Students apply for and receive exclusive discounts.",
                icon: Zap,
                color: "text-accent",
                bg: "bg-accent-100",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="card animate-fadeIn hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 ${step.bg}`}
                >
                  <step.icon className={`w-14 h-14 ${step.color}`} />
                </div>
                <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 animate-fadeIn">
            Ready to Get Started?
          </h2>
          <p className="text-2xl mb-12 animate-fadeIn">
            Join CrediChain today and start verifying credentials or claiming
            discounts.
          </p>
          <button className="btn btn-primary animate-slideIn inline-flex items-center">
            Sign Up Now <ArrowRight className="ml-4 w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
