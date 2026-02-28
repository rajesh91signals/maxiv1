import type { Metadata } from "next";
import { Inter, Merriweather, Caveat, Just_Another_Hand } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const justAnotherHand = Just_Another_Hand({
  variable: "--font-just-another-hand",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UX FastTrack - Job Booster | Maximoat",
  description: "Maximize your design career with industry-grade mentorship. Join the elite club top brands hire from.",
  openGraph: {
    title: "UX FastTrack - Job Booster | Maximoat",
    description: "Maximize your design career with industry-grade mentorship.",
    images: ["/assets/og-image.png"], // Assume this will be created/copied
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} ${caveat.variable} ${justAnotherHand.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
