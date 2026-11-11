
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Biruk Abera | Software Developer",
    template: "%s | Biruk Abera",
  },
  description:
    "Explore the portfolio of Biruk Abera, a software developer showcasing projects, technical skills, professional experience, and web development work.",
  authors: [{ name: "Biruk Abera" }],
  creator: "Biruk Abera",
  keywords: [
    "Biruk Abera",
    "Software Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
