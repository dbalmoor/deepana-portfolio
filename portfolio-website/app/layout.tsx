import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepana-portfolio.vercel.app"),

  title: {
    default: "Deepana Balmoor | Software Engineer | Java Backend | Distributed Systems",
    template: "%s | Deepana Balmoor",
  },

  description:
    "Software Engineer specializing in Java backend systems, distributed systems, enterprise integrations, OpenShift deployments, migration support, and telecom platform engineering.",

  keywords: [
    "Deepana Balmoor",
    "Software Engineer",
    "Java Backend Engineer",
    "Distributed Systems",
    "Spring Boot",
    "Microservices",
    "Apache Kafka",
    "Docker",
    "OpenShift",
    "PostgreSQL",
    "REST APIs",
    "Backend Developer",
    "System Design",
    "Enterprise Integration",
    "IOH",
    "Telecom",
    "Migration Support",
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

    title: "Deepana Balmoor | Software Engineer | Java Backend | Distributed Systems",

    description:
      "Software Engineer with enterprise telecom systems experience, backend integrations, migration support, distributed messaging, and OpenShift-based deployments.",

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

    title: "Deepana Balmoor | Software Engineer | Java Backend | Distributed Systems",

    description:
      "Software Engineer focused on enterprise integrations, telecom platforms, backend systems, and large-scale migration support.",

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