import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepana-portfolio.vercel.app"),

  title: {
    default: "Deepana Balmoor | Java Backend Engineer",
    template: "%s | Deepana Balmoor",
  },

  description:
    "Java Backend Engineer specializing in Distributed Systems, Spring Boot, Kafka, Docker, OpenShift, and Enterprise Integrations.",

  keywords: [
    "Deepana Balmoor",
    "Java Backend Engineer",
    "Software Engineer",
    "Spring Boot",
    "Microservices",
    "Apache Kafka",
    "Distributed Systems",
    "Docker",
    "OpenShift",
    "PostgreSQL",
    "REST APIs",
    "Backend Developer",
    "Java Developer",
    "System Design",
    "Enterprise Integration",
  ],

  authors: [
    {
      name: "Deepana Balmoor",
    },
  ],

  creator: "Deepana Balmoor",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://deepana-portfolio.vercel.app",
  },

  icons: {
    icon: "/icons/project-icon.jpg",
    shortcut: "/icons/project-icon.jpg",
    apple: "/icons/project-icon.jpg",
  },

  openGraph: {
    type: "website",
    url: "https://deepana-portfolio.vercel.app",

    title: "Deepana Balmoor | Java Backend Engineer",

    description:
      "Java Backend Engineer specializing in Distributed Systems, Spring Boot, Kafka, Docker, OpenShift, and Enterprise Integrations.",

    siteName: "Deepana Portfolio",

    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Deepana Balmoor Portfolio",
      },
    ]
  },

  twitter: {
    card: "summary_large_image",

    title: "Deepana Balmoor | Java Backend Engineer",

    description:
      "Java Backend Engineer specializing in Distributed Systems and Enterprise Integrations.",

    images: ["/images/portfolio-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}