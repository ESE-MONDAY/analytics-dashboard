import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/Aside";
import BottomNav from "./components/BottomNav";
const inter = Inter({ subsets: ["latin"] });
import Providers from "./providers";


export const metadata: Metadata = {
  title: "MegaMind Solutions",
  description: "A unique hackathon experience from Geepay",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
        <main className="flex flex-col sm:flex-row min-h-screen relative max-w-[1440px] mx-auto  w-full overflow-hidden bg-[#f5f5f5] dark:bg-[#181818]  ">
         <SideBar />
          <section className=" w-full">{children}</section>
          <BottomNav />
        </main>
        </Providers>
    
        
        </body>
    </html>
  );
}
