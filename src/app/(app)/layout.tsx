import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my personal portfolio",
};

const inter = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: ["serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary`}>{children}</body>
    </html>
  );
}
