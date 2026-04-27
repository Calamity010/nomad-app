import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const obviously = localFont({
  src: "../public/Fonts/Obviously-Narrow.otf",
  variable: "--font-obviously",
  display: "block",
});

const myriad = localFont({
  src: "../public/MyriadPro-Regular_0.otf",
  variable: "--font-myriad",
  display: "block",
});

export const metadata: Metadata = {
  title: "NoMAD | College of Creative Intelligence",
  description: "We cultivate fearless creative talent that transforms the way the world engages with brands, stories, and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${obviously.variable} ${myriad.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-obviously)]">{children}</body>
    </html>
  );
}
