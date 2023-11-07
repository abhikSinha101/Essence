import type { Metadata } from "next";
import "../globals.css";
import { inter, sf, roboto } from "../fonts/fonts";

import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

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
          {/*<Topbar/>*/}
          <main>
            <LeftSidebar />

            <section className="main-container">
              <div className="w-full max-w-4xl"> {children}</div>
            </section>

            <RightSidebar />
          </main>

          {/**<Bottombar />
          <p>i will be super rich and everyone will bow on me</p>*/}
        </body>
      </html>
    </ClerkProvider>
  );
}
