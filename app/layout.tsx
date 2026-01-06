import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Cloudin - AI-Powered Sleep Fairytales | Yapay Zeka Destekli Masal Uygulaması",
  description: "Create magical, personalized, and AI-powered sleep fairytales for your child. Çocuğunuz için kişiselleştirilmiş, eğitici ve yapay zeka destekli uyku masalları oluşturun.",
  keywords: [
    "sleep story", "ai story", "fairytales", "child sleep", "cloudin", "masal", "uyku masalı",
    "yapay zeka masal", "masal uygulaması", "çocuk masalları", "kişiselleştirilmiş masal",
    "ai story generator", "bedtime stories", "personalized bed time stories"
  ],
  authors: [{ name: "Cloudin Team" }],
  alternates: {
    canonical: "https://cloudin.app",
    languages: {
      "en-US": "https://cloudin.app/en",
      "tr-TR": "https://cloudin.app/tr",
    },
  },
  openGraph: {
    title: "Cloudin - AI-Powered Sleep Fairytales",
    description: "Create magical, personalized, and AI-powered sleep fairytales for your child.",
    url: "https://cloudin.app",
    siteName: "Cloudin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloudin - AI-Powered Sleep Fairytales",
    description: "Create magical, personalized, and AI-powered sleep fairytales for your child.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}

