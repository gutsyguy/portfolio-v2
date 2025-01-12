import type { Metadata } from "next";
import { useState } from "react";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";

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
  title: "Yalamber",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300`}
        suppressHydrationWarning
      >
        <div className="bg-navbar px-[15rem]">
          <Navbar />
        </div>
        <div
          className="bg-top bg-cover px-0 "
          style={{
            backgroundImage: "url('/vvvortex.svg')",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
          }}
        >
          <div className="px[15rem]">{children}</div>
        </div>
      </body>
    </html>
  );
}
