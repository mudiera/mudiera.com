import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

export const metadata = {
  title: "Mudiera | Business Directory",
  description: "The London Edition - Muslim Women's Business Directory & Ecosystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
