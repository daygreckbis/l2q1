import type { Metadata } from "next";
import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const inter = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcoPower Drive",
  description: "EcoPower Drive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-full'>
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar/>
          <div className="flex-grow flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}