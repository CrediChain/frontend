'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Gift } from 'lucide-react';
import { useAccount } from 'wagmi';
import WorldIdAuth from '../app/components/WorldIdAuth';

const Home = () => {
  const { address, isConnected } = useAccount(); // Update this to use Coinbase OnchainKit if needed
  const [isVerified, setIsVerified] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  const handleConnectAndVerify = () => {
    if (!isConnected) {
      // Trigger Coinbase OnchainKit connection
      alert('Please connect your wallet first.');
      return;
    }
    setShowVerification(true);
  };

  useEffect(() => {
    if (isConnected && showVerification) {
      // This ensures that after the connection, the World ID verification opens.
      setShowVerification(true);
    }
  }, [isConnected, showVerification]);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-extrabold mb-6 animate-fadeIn">
            Verify Credentials and Unlock Exclusive Discounts with CrediChain
          </h1>
          <p className="text-3xl mb-8 animate-fadeIn">
            Secure, blockchain-based credential verification for students and institutions.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <button
              className="btn btn-primary animate-slideIn"
              onClick={handleConnectAndVerify}
            >
              I'm a Student
            </button>
            <button
              className="btn btn-secondary animate-slideIn"
              onClick={handleConnectAndVerify}
            >
              I'm an Institution
            </button>
          </div>
        </div>
      </section>

      {/* World ID Authentication Widget */}
      {showVerification && (
        <WorldIdAuth onSuccess={handleVerificationSuccess} />
      )}

      {/* Optionally, redirect user after successful verification */}
      {isVerified && (
        <div className="text-center mt-6">
          <p className="text-green-500">Verification successful!</p>
          <Link href="/dashboard">Go to your dashboard</Link>
        </div>
      )}

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">How CrediChain Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Verify Credentials",
                description: "Institutions create soulbound NFTs for student credentials.",
                icon: Shield,
                color: "text-primary",
                bg: "bg-primary-100",
              },
              {
                title: "Offer Discounts",
                description: "Institutions create discount offers for verified students.",
                icon: Gift,
                color: "text-secondary",
                bg: "bg-secondary-100",
              },
              {
                title: "Claim Discounts",
                description: "Students apply for and receive exclusive discounts.",
                icon: Zap,
                color: "text-accent",
                bg: "bg-accent-100",
              },
            ].map((step, i) => (
              <div key={i} className="card animate-fadeIn hover:scale-105 transition-transform duration-300">
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 animate-fadeIn">Ready to Get Started?</h2>
          <p className="text-2xl mb-12 animate-fadeIn">
            Join CrediChain today and start verifying credentials or claiming discounts.
          </p>
          <button
            className="btn btn-primary animate-slideIn inline-flex items-center"
          >
            Sign Up Now <ArrowRight className="ml-4 w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;