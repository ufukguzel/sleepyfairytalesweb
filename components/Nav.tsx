"use client";

import { useState, useEffect } from "react";
import { Download, Globe, Moon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function Nav() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: 'TR', label: 'Türkçe' },
    { code: 'EN', label: 'English' },
    { code: 'DE', label: 'Deutsch' },
    { code: 'ES', label: 'Español' }
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-[#0a051e]/80 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-magic-purple blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            <Moon className="w-8 h-8 text-magic-gold relative z-10 fill-magic-gold" />
          </div>
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-white">Cloudin</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/privacy-policy" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            {t.nav.privacy}
          </Link>
          <Link href="/terms-of-service" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            {t.nav.terms}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors text-sm flex items-center gap-2 text-gray-300"
              aria-label="Dil değiştir"
            >
              <Globe className="w-4 h-4 text-magic-cyan" />
              <span className="font-medium">{language}</span>
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-[#0a051e] border border-white/10 rounded-xl overflow-hidden shadow-xl z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors ${language === lang.code ? 'text-magic-purple font-bold' : 'text-gray-300'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://apps.apple.com/tr/app/cloudin/id6747094017"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 !py-2.5 !px-6"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm font-bold">{t.nav.download}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
