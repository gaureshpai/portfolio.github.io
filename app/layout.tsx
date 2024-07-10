import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import Player from '@/components/Player';
import { AudioProvider } from "@/content/AudioContext";
import '@/public/styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hearease",
  description: "Miniproject website by Harshita Dhanya and team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mainbody">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content">
            <AudioProvider>
              <div className="children">
                {children}
              </div>
              <Player/>
            </AudioProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
