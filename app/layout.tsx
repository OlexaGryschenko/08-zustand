// app/layout.tsx

// "use client";

import "modern-normalize/modern-normalize.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Metadata } from 'next';

import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";


// <<<<<<<<<<<<<<<<<  metaData >>>>>>>>>>>>>

export const metadata: Metadata = {
  title: "NoteHub",
  description: "NoteHub for you",
  openGraph: {
      title: "NoteHub",
      description: "NoteHub for you",
      url: "https://notehub.com",
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/og-meta.jpg',
          width: 1200,
          height: 630,
          alt: "NoteHub",
        },
      ]},
  
  // title
  // description
  // url
  // images

};


//   commune style

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//  end commune style

export default function RootLayout({ children, modal, }: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />

          <main>
            {children}
            {modal}
          </main>

          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
