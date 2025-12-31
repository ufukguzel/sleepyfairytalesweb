'use client';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function CookiePolicy() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#0a051e] text-white">
            <Nav />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-gradient">{t.legal.cookies.title}</h1>
                <div className="glass-card p-8 rounded-3xl space-y-6 text-gray-300 leading-relaxed">
                    <p>{t.legal.cookies.lastUpdated}: {new Date().toLocaleDateString()}</p>

                    {t.legal.cookies.sections.map((section, index) => (
                        <section key={index}>
                            <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                            <p>{section.content}</p>
                        </section>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
