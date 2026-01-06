'use client';

import { motion } from 'framer-motion';
import { UserPlus, Sparkles, Headset } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowItWorks() {
    const { t } = useLanguage();

    const icons = [
        <UserPlus className="w-8 h-8 text-magic-purple" />,
        <Sparkles className="w-8 h-8 text-magic-gold" />,
        <Headset className="w-8 h-8 text-magic-cyan" />
    ];

    return (
        <section id="how-it-works" className="py-32 relative overflow-hidden bg-slate-950/50">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magic-blue/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-magic-purple/5 rounded-full blur-[120px] -z-10" />

            <div className="container relative z-10 px-6 sm:px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        {t.howItWorks.title_start} <span className="text-gradient">{t.howItWorks.title_highlight}</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t.howItWorks.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
                    {/* Connecting lines for desktop */}
                    <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-magic-purple/20 via-magic-gold/20 to-magic-cyan/20 -z-10" />

                    {t.howItWorks.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group pt-10 sm:pt-12"
                        >
                            {/* Step Number */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-white/10 flex items-center justify-center text-magic-purple font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform bg-white/5">
                                {index + 1}
                            </div>

                            <div className="glass-card p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] text-center hover:bg-white/10 transition-all duration-500 border border-white/5 h-full">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 sm:mb-8 mx-auto group-hover:rotate-6 transition-transform duration-500 shadow-xl border border-white/10">
                                    {icons[index]}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-magic-purple transition-colors">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-base sm:text-lg">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
