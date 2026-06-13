import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepana-portfolio.vercel.app"),

  title: "Deepana Balmoor | Java Backend Engineer",

  description:
    "Backend Engineer specializing in Distributed Systems, Spring Boot, Kafka, Docker, and Enterprise Integrations.",

  icons: {
    icon: "/icons/project-icon.jpg",
  },

  openGraph: {
    title: "Deepana Balmoor | Java Backend Engineer",

    description:
      "Backend Engineer specializing in Distributed Systems and Enterprise Integrations.",

    images: ["/images/deepana.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}