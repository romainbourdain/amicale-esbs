import type { Metadata } from "next";
import "@/styles/globals.css";
import React from "react";
import clsx from "clsx";
import ThemeProvider from "@/components/theme/ThemeProvider";
import Navbar from "@/components/Navigation/Navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Amicale ESBS",
  description: "Site officiel de l'amicale ESBS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <Head>
        <link
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={clsx("bg-app-gray h-full")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">
            <Navbar />
            <div className="flex-1 m-auto px-12 py-36 w-full max-w-6xl flex flex-col gap-36">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
