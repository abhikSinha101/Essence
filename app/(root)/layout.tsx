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
          <section className="landing-page">
            <div className="w-full"> {children}</div>
          </section>
        </body>
      </html>
    </ClerkProvider>
  );
}
