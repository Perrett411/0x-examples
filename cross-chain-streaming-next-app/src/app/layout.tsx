import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "0x Cross-Chain Streaming Quote Example",
  description:
    "Next.js example demonstrating real-time cross-chain quote streaming with Server-Sent Events (SSE)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
