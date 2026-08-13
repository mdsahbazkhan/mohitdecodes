import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MohitDecodes - Master Modern Web Development",
  description:
    "MohitDecodes is your destination for learning modern web development with practical, project-based tutorials. Master React, Next.js, Node.js, and more.",
  keywords: [
    "MohitDecodes",
    "web development",
    "coding tutorials",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "programming",
    "learn to code",
    "developer education",
    "full stack development",
  ],
  authors: [{ name: "Mohit" }],
  icons: {
    icon: "/mohitdecode_logo.jpeg",
  },
  openGraph: {
    title: "MohitDecodes - Master Modern Web Development",
    description: "Learn modern web development with practical, project-based tutorials.",
    type: "website",
    url: "https://mohitdecodes.com",
    siteName: "MohitDecodes",
  },
  twitter: {
    card: "summary_large_image",
    title: "MohitDecodes - Master Modern Web Development",
    description: "Learn modern web development with practical, project-based tutorials.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="system" storageKey="mohitdecodes-ui-theme">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
