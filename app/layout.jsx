import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Buycar - Especialistas en gestión de Ventas, Consignación y Compra de vehículos.",
  description:
    "Especialistas en gestión de Ventas, Consignación y Compra de vehículos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
