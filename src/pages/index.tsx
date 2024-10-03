import React from 'react';
import Layout from '../app/components/Layout';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <Layout>
            <div className="bg-gray-100 min-h-screen">
                <main className="max-w-4xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Verify and Get Discounts with CrediChain
                    </h1>
                    <p className="mt-5 text-xl text-gray-500">
                        Secure, blockchain-based credential verification for students and institutions.
                    </p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link href="/students" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                                I'm a Student
                            </Link>
                        </div>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                            <Link href="/institutions" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                I'm an Institution
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

export default Home;