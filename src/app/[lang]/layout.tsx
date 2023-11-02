import Footer from "@/components/Footer";
import LanguageProvider from "@/components/Language/LanguageProvider";
import Navbar from "@/components/Navbar/Navbar";
import ThemeProvider from "@/components/theme/ThemeProvider";
import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Amicale ESBS",
  description: "Site officiel de l'amicale ESBS",
  icons: [
    {
      url: "/icon?<generated>",
      type: "image/<generated>",
      sizes: "<generated>",
    },
  ],
};

export default function AppLayout({
  children,
  params,
}: PropsWithChildren<{ params: { lang: "fr" | "en" } }>) {
  if (params.lang !== "fr" && params.lang !== "en") {
    return redirect("/fr");
  }

  return (
    <html lang={params.lang} className="h-full">
      <body className={clsx("bg-app-gray h-full")}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col h-full">
              <Navbar />
              <div className="flex-1 m-auto px-12 py-36 sm:pt-52 lg:pt-36 w-full max-w-6xl flex flex-col gap-36">
                {children}
              </div>
              <Footer params={params} />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
