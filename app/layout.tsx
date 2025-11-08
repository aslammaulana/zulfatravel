import type { Metadata } from "next";
import { Inter, Noto_Sans, Teko } from "next/font/google";
import "./globals.css";

const inter = Inter ({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aslam Travel",
  description: "Website resmi Aslam Travel Umrah dan Haji",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${teko.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
