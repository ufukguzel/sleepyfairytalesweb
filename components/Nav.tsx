"use client";

import { useState, useEffect } from "react";
import { Download, Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? "py-4 bg-[#0a051e]/80 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-magic-purple blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            <Image
              src="/logo.png"
              alt="Cloudin Logo"
              width={40}
              height={40}
              className="relative z-10 rounded-xl w-8 h-8 md:w-10 md:h-10"
            />
          </div>
          <div className="text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-white font-quicksand">Cloudin</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            {t.nav.home}
          </Link>
          <Link href="/privacy-policy" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            {t.nav.privacy}
          </Link>
          <Link href="/terms-of-service" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            {t.nav.terms}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full glass hover:bg-white/10 transition-colors text-xs md:text-sm flex items-center gap-2 text-gray-300"
              aria-label="Dil değiştir"
            >
              <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-magic-cyan" />
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
            className="btn-primary hidden sm:flex items-center gap-2 !py-2 !px-4 md:!py-2.5 md:!px-6"
          >
            <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-bold">{t.nav.download}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white glass rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a051e]/95 backdrop-blur-2xl border-b border-white/10 py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            className="text-lg font-medium text-gray-300 hover:text-white px-4 py-2 rounded-xl hover:bg-white/5 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/privacy-policy"
            className="text-lg font-medium text-gray-300 hover:text-white px-4 py-2 rounded-xl hover:bg-white/5 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.privacy}
          </Link>
          <Link
            href="/terms-of-service"
            className="text-lg font-medium text-gray-300 hover:text-white px-4 py-2 rounded-xl hover:bg-white/5 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.terms}
          </Link>
          <a
            href="https://apps.apple.com/tr/app/cloudin/id6747094017"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary sm:hidden flex items-center justify-center gap-2 !py-4"
          >
            <Download className="w-5 h-5" />
            <span className="font-bold">{t.nav.download}</span>
          </a>
        </div>
      )}
    </header>
  );
}
