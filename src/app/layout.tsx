import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "RemiChat",
  description:
    "RemiChat is a community driven platform which allows you to connect to people around the world. Its, safe, secure and open!",
  keywords: [
    "chat platform",
    "Omegle alternative",
    "EmeraldChat alternative",
    "Anonymous chat",
    "online chat",
    "community chat",
    "secure chat",
    "global chat",
    "connect with people",
    "safe chat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
