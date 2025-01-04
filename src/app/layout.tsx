import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import pk from "../../package.json";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "resume | noppawat.c live",
  description: "resume noppawat chochaipantawong",
  keywords: [
    "resume",
    "cv",
    "noppawat chochaipantawong",
    "gopgap",
    "software engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-app-verion={pk.version}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        content="resume_noppawat"
      >
        {children}
      </body>
    </html>
  );
}
