import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
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
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-orange-300 dark:bg-black w-screen overflow-x-hidden`}
          suppressHydrationWarning
        >
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
