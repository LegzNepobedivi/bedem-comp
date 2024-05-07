import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import M_Navbar from "@/components/bedem/M_Navbar";
import M_Footer from "@/components/bedem/M_Footer";
//import "mapbox-gl/dist/mapbox-gl.css";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Bedem Nekretnine",
  description: "Bedem Nekretnine, agencija za prodaju nekretnina",
};

export default function RootLayout({ children }) {
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
