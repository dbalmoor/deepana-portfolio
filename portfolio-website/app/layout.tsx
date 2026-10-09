
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const siteUrl = "https://deepana-portfolio.vercel.app";

const siteTitle = "Deepana Balmoor | Java Backend Engineer";

const siteDescription =
  "Java backend engineer with experience in enterprise integrations, REST APIs, Kafka, JMS, and production systems. Explore a Spring Boot distributed order management project featuring Saga orchestration, transactional outbox, idempotency, and failure recovery.";

const previewImage = "/images/portfolio-preview.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Deepana Balmoor",
  },

  description: siteDescription,

  keywords: [
    "Deepana Balmoor",
    "Java Backend Engineer",
    "Java Developer",
    "Spring Boot",
    "Backend Engineer",
    "REST APIs",
    "Apache Kafka",
    "Spring Kafka",
    "JMS",
    "Microservices",
    "PostgreSQL",
    "Distributed Systems",
    "Saga Pattern",
    "Transactional Outbox",
    "Testcontainers",
    "Docker",
    "OpenShift",
    "TIBCO BWCE",
  ],

  authors: [{ name: "Deepana Balmoor" }],
  creator: "Deepana Balmoor",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/icons/project-icon.jpg",
    shortcut: "/icons/project-icon.jpg",
    apple: "/icons/project-icon.jpg",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Deepana Balmoor Portfolio",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Deepana Balmoor Java Backend Engineer portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [previewImage],
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
