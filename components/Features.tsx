'use client';

import { Sparkles, Shield, BookOpen, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/lib/LanguageContext';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Features() {
    const { t } = useLanguage();

    const features = [
        {
            icon: <Sparkles className="w-8 h-8 text-magic-gold" />,
            title: t.features.items[0].title,
            description: t.features.items[0].description
        },
        {
            icon: <Wand2 className="w-8 h-8 text-magic-purple" />,
            title: t.features.items[1].title,
            description: t.features.items[1].description
        },
        {
            icon: <BookOpen className="w-8 h-8 text-magic-cyan" />,
            title: t.features.items[2].title,
            description: t.features.items[2].description
        },
        {
            icon: <Shield className="w-8 h-8 text-green-400" />,
            title: t.features.items[3].title,
            description: t.features.items[3].description
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-magic-purple/10 rounded-full blur-[120px] -z-10" />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        {t.features.title_start} <span className="text-gradient">{t.features.title_highlight}</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t.features.description}
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="glass-card p-8 rounded-3xl group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-magic-purple/20 border border-white/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-magic-purple transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
