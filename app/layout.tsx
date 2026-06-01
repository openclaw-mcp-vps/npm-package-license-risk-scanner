import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NPM License Risk Scanner — Detect Risky Licenses in Dependencies",
  description: "Scan your package.json for GPL, AGPL, and copyleft licenses that could create legal issues for your company."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="631a0e24-e8a6-45e2-b75d-dda81fefc70e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
