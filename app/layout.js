import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sunny Flimz | Photography & Videography",
  description:
    "Sunny Flimz captures cinematic wedding films, travel stories, drone shots, and creative photography with professional visual storytelling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
