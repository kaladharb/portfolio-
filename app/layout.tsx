import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { metrophobic, jetbrainsMono, poppins } from "./font";
import { Navbar } from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTopBtn from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import { Cursor } from "@/components/ui/Cursor";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Kaladhar Bandari | Portfolio",
  description:
    "Computer Science student specializing in AI & Machine Learning. Full-Stack Developer and AI/ML Engineer.",
  keywords: [
    "Kaladhar Bandari",
    "Portfolio",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "VJIT",
  ],
  authors: [{ name: "Kaladhar Bandari" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>
        <Providers>
          {/* <CustomCursor /> */}
          <Cursor />
          <Preloader />
          <ScrollProgress />
          <Navbar />
          {children}
          <Toaster richColors position="bottom-right" />
          <ScrollToTopBtn />
        </Providers>
      </body>
    </html>
  );
}
