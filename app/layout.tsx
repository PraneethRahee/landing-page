import type { Metadata } from "next";
import { Bricolage_Grotesque, Funnel_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const funnelSans = Funnel_Sans({
  variable: "--font-funnel",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Coco Studio",
  description: "Landscape consulting and design",
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${funnelSans.variable} h-full antialiased`}
    >
      <head>
        {/* Preload hero background — browser would otherwise discover it late via CSS */}
        <link
          rel="preload"
          as="image"
          href="/hero-bg.jpg"
          type="image/jpeg"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
