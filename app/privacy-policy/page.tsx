'use client';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPolicy() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#0a051e] text-white">
            <Nav />
            <div className="container mx-auto px-4 pt-32 pb-32 max-w-4xl relative z-10">
                <h1 className="text-4xl font-bold mb-8 text-gradient">{t.legal.privacy.title}</h1>
                <div className="glass-card p-8 rounded-3xl space-y-8 text-gray-300 leading-relaxed">
                    <div className="space-y-4">
                        <p className="text-sm text-gray-400 italic">{t.legal.privacy.lastUpdated}</p>
                        {t.legal.privacy.description && (
                            <p className="text-lg font-medium text-gray-200">{t.legal.privacy.description}</p>
                        )}
                    </div>

                    {t.legal.privacy.sections.map((section, index) => (
                        <section key={index} className="space-y-4">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-magic-purple pl-4">{section.title}</h2>
                            <p className="whitespace-pre-line">{section.content}</p>
                        </section>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
