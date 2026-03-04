"use client";

import { Header } from "@/components/header";
import React from "react";

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <div className="flex flex-col items-start justify-between">
        <Header />
        <main className="flex flex-col items-start justify-start flex-1 w-full">
          {children}
        </main>
      </div>
    </React.Fragment>
  );
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutContent>{children}</LayoutContent>;
}
