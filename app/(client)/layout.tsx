import type { Metadata } from "next";
import "@/app/globals.css";
import { inter, sf, roboto } from "@/app/fonts/fonts";

import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";
import ContentSideBar from "@/components/shared/ContentSideBar";

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
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="flex flex-1 flex-col max-h-screen">
              <Topbar />
              <section className="flex flex-1 flex-row h-[80%]">
                <section className="main-container overflow-auto">
                  <div className="w-full max-w-4xl">{children}</div>
                </section>
              </section>
            </section>

            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
