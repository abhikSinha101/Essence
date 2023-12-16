import type { Metadata } from "next";
import "../globals.css";
import { sf, roboto } from "../fonts/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Essence",
  description: "A team work place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <section className="flex flex-col w-full">{children}</section>
        </body>
      </html>
    </ClerkProvider>
  );
}
