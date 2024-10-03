'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold mb-6 animate-fadeIn">
            Verify Credentials and Unlock Exclusive Discounts with CrediChain
          </h1>
          <p className="text-3xl mb-8 animate-fadeIn">
            Secure, blockchain-based credential verification for students and institutions.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <Link href="/students">
              <button className="btn btn-primary animate-slideIn px-8 py-4 text-xl">
                I'm a Student
              </button>
            </Link>
            <Link href="/institutions">
              <button className="btn btn-secondary animate-slideIn px-8 py-4 text-xl">
                I'm an Institution
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">How CrediChain Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Verify Credentials",
                description: "Institutions create soulbound NFTs for student credentials.",
                color: "text-primary",
                bg: "bg-primary-100",
              },
              {
                title: "Offer Discounts",
                description: "Institutions create discount offers for verified students.",
                color: "text-secondary",
                bg: "bg-secondary-100",
              },
              {
                title: "Claim Discounts",
                description: "Students apply for and receive exclusive discounts.",
                color: "text-accent",
                bg: "bg-accent-100",
              },
            ].map((step, i) => (
              <div key={i} className="text-center card animate-fadeIn">
                <div
                  className={`rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 ${step.bg}`}
                >
                  <CheckCircle className={`w-14 h-14 ${step.color}`} />
                </div>
                <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 animate-fadeIn">Ready to Get Started?</h2>
          <p className="text-2xl mb-12 animate-fadeIn">
            Join CrediChain today and start verifying credentials or claiming discounts.
          </p>
          <Link href="/signup">
            <button className="btn btn-primary animate-slideIn inline-flex items-center px-8 py-4 text-xl">
              Sign Up Now <ArrowRight className="ml-4 w-6 h-6" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
