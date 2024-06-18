import { Inter } from "next/font/google";

import "./globals.css";
import RecipesProvider from "@/contexts/RecipesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Context Next ft. Contentful CMS",
  description: "Example of how using context in Next.js ft Contentful CMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RecipesProvider>
        <body className={inter.className}>{children}</body>
      </RecipesProvider>
    </html>
  );
}
