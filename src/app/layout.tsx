
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import MainLayout from "@/components/layout/MainLayout";
import Gradient from "@/components/ui/Gradient";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio - Crafting Solutions with Code",
  description: "Discover my journey as a developer, showcasing innovative projects, technical expertise, and creative problem-solving. Built with Next.js for a seamless and modern experience.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">

      <meta name="keywords" content="Portfolio, Developer, Projects, Next.js, Web Development" />
      <meta name="author" content="Tichirra Achraf" />
      <meta property="og:title" content="Professional Portfolio" />
      <meta property="og:description" content="Explore my projects and expertise as a developer." />
      <meta property="og:url" content="https://your-portfolio-site.com" />

      <body className={`${poppins.variable} antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MainLayout>
            <Gradient />
            {children}
            <ModeToggle />
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
