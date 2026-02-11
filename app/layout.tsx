import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Folio | Developer Portfolio",
  description: "A premium, content-focused developer portfolio built with Next.js and Tailwind CSS.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WelcomeScreen } from "@/components/animations/WelcomeScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <WelcomeScreen />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 px-4">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
