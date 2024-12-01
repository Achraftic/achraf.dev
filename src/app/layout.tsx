import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Modern Next.js App",
  description: "A modern layout using Next.js with custom fonts and gradient backgrounds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${poppins.variable} antialiased bg-gradient-to-tr min-h-screen text-sm`}
      >



        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        
        <div
          className="md:w-[20rem] md:h-[20rem] w-[15rem] h-[15rem] rounded-full fixed -z-50 
          bg-primary  bg-opacity-50 dark:bg-opacity-20 
          left-[-5rem] bottom-[-5rem] blur-[60px]"
        ></div>
          {children}

          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
