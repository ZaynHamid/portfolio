import { Inter } from "next/font/google";
import {AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export const metadata = {
  title: "Zayn | Backend Developer",
  description: "A backend developer specializing in Node.js, Flask, and API integrations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AppRouterCacheProvider>
        {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
