import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Role Activity Tracker",
  description: "Track member engagement by Discord roles. Analytics dashboard showing message frequency, voice time, and engagement by Discord roles."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4ed461b8-9fd9-42f5-a32e-56be73511e17"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
