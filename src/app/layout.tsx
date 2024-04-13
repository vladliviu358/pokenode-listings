import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/providers";
import Error from "@/components/error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pokemon Catalog",
  description: "The original Palworld",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ErrorBoundary errorComponent={Error}>
          <Providers>{children}</Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
