import type { Metadata } from "next";
import {  Urbanist} from "next/font/google";
import "./globals.css";


const urbanistSans = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "LIVA_TEST-Técnico",
  description: "developed by github:ViniciusLima93",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${urbanistSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
