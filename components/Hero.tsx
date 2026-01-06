'use client';

import { motion } from 'framer-motion';
import { Download, Star, Sparkles, Cloud } from 'lucide-react';
import Image from 'next/image';

import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-magic-purple/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magic-blue/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-magic-purple/30 mx-auto lg:mx-0"
                        >
                            <Sparkles className="w-4 h-4 text-magic-gold animate-spin-slow" />
                            <span className="text-sm font-medium text-magic-purple">{t.hero.badge}</span>
                        </motion.div>

                        <h1 className="hero-title font-quicksand text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            {t.hero.title_start} <br className="hidden sm:block" />
                            <span className="text-gradient">{t.hero.title_highlight}</span> {t.hero.title_end}
                        </h1>

                        <p className="hero-description text-base sm:text-lg lg:text-xl mx-auto lg:mx-0">
                            {t.hero.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                            <a
                                href="https://apps.apple.com/tr/app/cloudin/id6747094017"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center justify-center gap-3 text-lg group"
                            >
                                <Download className="w-5 h-5 group-hover:animate-bounce" />
                                {t.hero.download}
                            </a>
                            <a
                                href="#how-it-works"
                                className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-all font-semibold flex items-center justify-center gap-2 text-white"
                            >
                                <span>{t.hero.howItWorks}</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-white/10 justify-center lg:justify-start">
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-magic-gold text-magic-gold" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400">{t.hero.rating}</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">10k+</h4>
                                <p className="text-sm text-gray-400">{t.hero.happyFamilies}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center items-center"
                    >
                        <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] mx-auto">
                            {/* Phone Mockup Frame */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[450px] sm:w-[280px] sm:h-[580px] bg-[#0a051e] rounded-[2.5rem] sm:rounded-[3rem] border-[6px] sm:border-[8px] border-slate-800 shadow-[0_0_50px_rgba(99,102,241,0.3)] overflow-hidden float-animation">
                                {/* Real App Screenshot */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/app_screen.png"
                                        alt="App Screen"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 sm:right-10 p-2 glass rounded-2xl"
                            >
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    className="rounded-lg shadow-lg sm:w-12 sm:h-12"
                                />
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-5 sm:bottom-20 left-0 p-3 sm:p-4 glass rounded-2xl"
                            >
                                <Cloud className="w-5 h-5 sm:w-8 sm:h-8 text-magic-cyan fill-magic-cyan/20" />
                            </motion.div>

                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-1/2 -right-5 sm:right-0 p-2 sm:p-3 glass rounded-full"
                            >
                                <Star className="w-4 h-4 sm:w-6 sm:h-6 text-magic-purple fill-magic-purple" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
