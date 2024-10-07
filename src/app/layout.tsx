import type { Metadata } from "next";
import { headers } from 'next/headers';
import { type ReactNode } from 'react';
import { cookieToInitialState } from 'wagmi';
import localFont from "next/font/local";
import '@coinbase/onchainkit/styles.css';
import "./globals.css";

import { getConfig } from '../config';
import { Providers } from '../providers';
import Layout from "./components/Layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CrediChain",
  description: "Secure, blockchain-based credential verification for students and institutions",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get('cookie')
  );

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground`}>
        <Providers initialState={initialState}>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}