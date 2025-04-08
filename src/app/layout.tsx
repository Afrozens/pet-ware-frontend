import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../styles/globals.css";
import { siteConfig } from "@/core/side";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL as string),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "veterinarios a domicilio", 
    "cuidadores de mascotas",
    "guardería canina",
    "paseadores de perros",
    "servicios para mascotas",
    "veterinaria online",
    "citas veterinarias",
    "pago seguro mascotas",
    "pet sitting",
    "cuidado animal",
    "emergencias veterinarias",
    "adiestramiento canino",
    "peluquería mascotas",
    "hotel para perros",
    "grooming profesional",
    "seguro para mascotas",
    "veterinarios certificados",
    "cuidadores verificados",
    "app para dueños de mascotas"
  ],
  authors: [
    {
      name: "afrozens",
      url: "https://github.com/Afrozens",
    },
  ],
  creator: "afrozens",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     alt: "Pata Mia - Plataforma de servicios para mascotas",
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}