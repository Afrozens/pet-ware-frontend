import { ReactNode } from "react";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import { siteConfig } from "@/core/side";
import { nexa } from '@/fonts';
import { Locale } from "@/models/locale";
import Provider from "@/components/Provider";
import "../../styles/globals.css";

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
    images: [
      {
        url: "/logotype.svg",
        alt: "Pata Mia - Plataforma de servicios para mascotas",
      },
    ],
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
    icon: "/logotype.svg",
    shortcut: "/logotype.svg",
    apple: "/logotype.svg",
  },
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`font-sans antialiased ${nexa.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Provider locale={locale as Locale}>
            {children}
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}