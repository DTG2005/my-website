"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextUIThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  <NextUIProvider>
    <NextUIThemeProvider
      defaultTheme="system"
      attribute="class"
      themes={["light", "dark", "modern"]}
    >
      {children}
    </NextUIThemeProvider>
  </NextUIProvider>;
}
