'use client';

import { motion } from 'framer-motion';
import { Download, Star, Sparkles, Moon, Cloud } from 'lucide-react';

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
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-magic-purple/30"
                        >
                            <Sparkles className="w-4 h-4 text-magic-gold animate-spin-slow" />
                            <span className="text-sm font-medium text-magic-purple">{t.hero.badge}</span>
                        </motion.div>

                        <h1 className="hero-title">
                            {t.hero.title_start} <br />
                            <span className="text-gradient">{t.hero.title_highlight}</span> {t.hero.title_end}
                        </h1>

                        <p className="hero-description">
                            {t.hero.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href="https://apps.apple.com/tr/app/cloudin/id6747094017"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center justify-center gap-3 text-lg group"
                            >
                                <Download className="w-5 h-5 group-hover:animate-bounce" />
                                {t.hero.download}
                            </a>
                            <button className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-all font-semibold flex items-center justify-center gap-2 text-white">
                                <span>{t.hero.howItWorks}</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-white/10">
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
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-[500px] h-[500px] mx-auto">
                            {/* Glowing Moon */}
                            <div className="absolute inset-0 bg-gradient-to-br from-magic-purple/20 to-magic-blue/20 rounded-full blur-3xl animate-pulse-slow" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-b from-slate-900 to-slate-950 rounded-[3rem] border-4 border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden float-animation">
                                {/* Phone Screen Mockup */}
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531685250784-75699ddc9afc?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                                <div className="relative z-10 text-center p-6">
                                    <div className="w-16 h-16 bg-magic-purple/20 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-md border border-white/10">
                                        <Sparkles className="w-8 h-8 text-magic-gold" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t.hero.mockupTitle}</h3>
                                    <div className="h-2 w-24 bg-white/20 rounded-full mx-auto mb-2" />
                                    <div className="h-2 w-16 bg-white/20 rounded-full mx-auto" />
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-10 p-4 glass rounded-2xl"
                            >
                                <Moon className="w-8 h-8 text-magic-gold fill-magic-gold" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-20 left-0 p-4 glass rounded-2xl"
                            >
                                <Cloud className="w-8 h-8 text-magic-cyan fill-magic-cyan/20" />
                            </motion.div>

                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-1/2 right-0 p-3 glass rounded-full"
                            >
                                <Star className="w-6 h-6 text-magic-purple fill-magic-purple" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
