import type { Metadata } from "next";
import "./globals.css";
import NavBar2 from "@/components/NavBar2";


export const metadata: Metadata = {
  title: "Lampman",
  description: "Seller of all things lamp",
};




export default function RootLayout({
  children,

}: {
  children: React.ReactNode


}) {
  return (
    <html lang="en">
      <body>
        <NavBar2 />
          {children}  
        
      </body>
    </html>
  );
}
