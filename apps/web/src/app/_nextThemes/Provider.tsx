"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

function NextThemesProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

export default NextThemesProvider;
