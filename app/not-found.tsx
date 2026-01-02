'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Moon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
    const { language, t } = useLanguage();

    return (
        <div className="min-h-screen bg-[#0a051e] flex items-center justify-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magic-purple/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative inline-block mb-8">
                        <div className="absolute inset-0 bg-magic-purple blur-2xl opacity-40 animate-pulse" />
                        <Moon className="w-24 h-24 text-magic-gold relative z-10 fill-magic-gold mx-auto" />
                        <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-magic-gold animate-spin-slow" />
                    </div>

                    <h1 className="text-7xl md:text-9xl font-bold text-white mb-4 tracking-tighter">
                        404
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        {language === 'TR' ? 'Sayfa Bulunamadı' : 'Page Not Found'}
                    </h2>

                    <p className="text-gray-400 max-w-md mx-auto mb-12 text-lg leading-relaxed">
                        {language === 'TR'
                            ? 'Aradığınız masal henüz yazılmamış olabilir veya başka bir diyara taşınmış olabilir.'
                            : 'The story you are looking for might not have been written yet, or it has moved to another realm.'}
                    </p>

                    <Link
                        href="/"
                        className="btn-primary inline-flex items-center gap-2 !py-4 !px-10 text-lg font-bold"
                    >
                        {language === 'TR' ? 'Ana Sayfaya Dön' : 'Back to Home'}
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
