import type { Metadata } from "next";
import "./globals.css";
import M_Navbar from "@/components/bedem/M_Navbar";
import M_Footer from "@/components/bedem/M_Footer";
import { createClient } from "@/utils/supabase/server";

import { Playfair_Display, Poppins } from "next/font/google";

const canInitSupabaseClient = () => {
  // This function is just for the interactive tutorial.
  // Feel free to remove it once you have Supabase connected.
  try {
    createClient();
    return true;
  } catch (e) {
    console.error("Failed to initialize supabase", e);
    return false;
  }
};

export const metadata: Metadata = {
  title: "Bedem nekretnine",
  description: "Bedem nekretnine - agencija za nekretnine",
};

export const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    canInitSupabaseClient();
  } catch (e) {
    console.error("Failed to initialize supabase", e);
  }

  return (
    <html lang="en">
      <body className={playfairDisplay.className}>
        <M_Navbar />
        {children}
        <M_Footer />
      </body>
    </html>
  );
}
