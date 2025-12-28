import "./globals.css";
import Navbar from "../components/Navbar";


// You can add a font here if you want (like Inter or Roboto)
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sunny Filmzz | Wedding Photography",
  description: "Capture the best moments of your day with Sunny Filmzz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={inter.className}>
        {/* Navbar is placed here ONCE, so it appears on all pages */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}