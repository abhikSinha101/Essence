import type { Metadata } from "next";
import "../globals.css";
import { inter, sf, roboto } from "../fonts/fonts";
import { ClerkProvider } from "@clerk/nextjs";

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
        <body className={inter.className}>
          <section className=" flex flex-col w-full">{children}</section>
        </body>
      </html>
    </ClerkProvider>
  );
}
