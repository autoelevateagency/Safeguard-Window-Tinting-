import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";
import { en } from "@/data/dictionary/en";
import "./globals.css";
import "./safeguard.css";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): ReactElement => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
