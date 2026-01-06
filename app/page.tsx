import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import HowItWorks from "@/components/HowItWorks";
import { Analytics } from "@vercel/analytics/next"


export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Cloudin",
      "operatingSystem": "iOS",
      "applicationCategory": "EducationApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "10000"
      },
      "description": "Create magical, personalized, and AI-powered sleep fairytales for your child. Yapay zeka destekli kişiselleştirilmiş masallar."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Yapay zeka ile masal üretimi nasıl çalışıyor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gelişmiş yapay zekamız çocuğunuzun ismini, yaşını ve ilgi alanlarını analiz ederek her seferinde benzersiz ve kişiselleştirilmiş bir masal oluşturur. İçerik yaşa uygun ve güvenlidir."
          }
        },
        {
          "@type": "Question",
          "name": "Cloudin nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cloudin, çocuklarınız için yapay zeka destekli, kişiselleştirilmiş uyku masalları oluşturan sihirli bir uygulamadır."
          }
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
