import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/Header";



export const metadata: Metadata = {
  title: "Eventer web",
  description: "Evetner web with next js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
      <Header/>
        {children}
      </body>
    </html>
  );
}
