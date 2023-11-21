import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar"; // Import your LeftSidebar component
import RightSidebar from "@/components/shared//RightSidebar"; // Import your RightSidebar component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <LeftSidebar />
      <div className="w-full max-w-4xl">{children}</div>
      <RightSidebar />
    </div>
  );
}
