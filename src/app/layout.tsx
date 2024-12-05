
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import MainLayout from "@/components/layout/MainLayout";



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
        className={`${poppins.variable} antialiased `}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >


          <MainLayout>
            <div className=" w-[15rem] h-[15rem] rounded-full fixed  
          bg-primary    bg-opacity-30
          left-[-5rem] bottom-[-5rem] blur-[70px] -z-10"
            ></div>

            {children}

            <ModeToggle />
          </MainLayout>
        </ThemeProvider>

      </body>
    </html>
  );
}
