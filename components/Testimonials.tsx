'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/lib/LanguageContext';

export default function Testimonials() {
    const { t } = useLanguage();

    const reviews = [
        {
            name: t.testimonials.reviews[0].name,
            rating: 5,
            comment: t.testimonials.reviews[0].comment,
            role: t.testimonials.reviews[0].role
        },
        {
            name: t.testimonials.reviews[1].name,
            rating: 5,
            comment: t.testimonials.reviews[1].comment,
            role: t.testimonials.reviews[1].role
        },
        {
            name: t.testimonials.reviews[2].name,
            rating: 5,
            comment: t.testimonials.reviews[2].comment,
            role: t.testimonials.reviews[2].role
        }
    ];

    return (
        <section className="py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-magic-purple/5 to-transparent" />

            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="flex justify-center gap-2 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <motion.div
                                key={star}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: star * 0.1 }}
                            >
                                <Star className="w-6 h-6 text-magic-gold fill-magic-gold drop-shadow-lg" />
                            </motion.div>
                        ))}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">{t.testimonials.title_start} <span className="text-gradient-gold">{t.testimonials.title_highlight}</span></h2>
                    <p className="text-xl text-gray-300 font-medium">
                        {t.testimonials.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="glass-card p-10 rounded-3xl relative group"
                        >
                            <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-magic-purple to-magic-blue rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                                <Quote className="w-6 h-6 text-white fill-white" />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-magic-gold fill-magic-gold" />
                                ))}
                            </div>

                            <p className="text-lg text-gray-200 mb-8 italic leading-relaxed">"{review.comment}"</p>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-magic-purple to-magic-blue flex items-center justify-center font-bold text-white text-lg shadow-inner">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">{review.name}</h4>
                                    <span className="text-sm text-magic-cyan font-medium">{review.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
