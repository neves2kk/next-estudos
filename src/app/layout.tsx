"use client"

import { FilterContextProvider } from "@/contexts/FilterContext";
import { Header } from "../components/Header";
import "./globals.css";
import {Saira} from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-saira",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={saira.className}
      >
        <QueryClientProvider client={queryClient}>
          <FilterContextProvider>
            <Header/>
            {children}
          </FilterContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
