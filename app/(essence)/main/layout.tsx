import type { Metadata } from "next";
import "@/app/globals.css";
import { inter, sf, roboto } from "@/app/fonts/fonts";

import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";
import ContentSideBar from "@/components/shared/ContentSideBar";
import { ListFilter } from "lucide-react";

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
          <main className="flex flex-row">
            <LeftSidebar />

            <section className="flex flex-1 flex-col max-h-screen">
              <Topbar />
              <section className="flex flex-1 flex-row h-[80%]">
                <ContentSideBar />

                <section className="flex w-full rounded-xl flex-col px-4 items-center bg-light-1 max-md:pb-32">
                  <div className="flex justify-between w-full h-10 mt-4 rounded-lg px-2 items-center">
                    <p>welcome to essence.</p>{" "}
                    <div className="flex flex-row items-center justify-between rounded-lg border border-light-3">
                      <ListFilter className="h-8 w-8 mx-2 " />
                      <p className="flex w-full h-full text-base-medium">
                        Filters
                      </p>
                    </div>
                  </div>

                  <section className="main-container overflow-auto h-full">
                    <div className="w-full max-w-4xl h-full">{children}</div>
                  </section>
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
/** */
