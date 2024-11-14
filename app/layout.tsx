import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Lampman",
  description: "Seller of all things lamp",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
