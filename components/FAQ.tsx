'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from '@/lib/LanguageContext';

export default function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: t.faq.items[0].question,
            answer: t.faq.items[0].answer
        },
        {
            question: t.faq.items[1].question,
            answer: t.faq.items[1].answer
        },
        {
            question: t.faq.items[2].question,
            answer: t.faq.items[2].answer
        },
        {
            question: t.faq.items[3].question,
            answer: t.faq.items[3].answer
        }
    ];

    return (
        <section className="py-32 relative">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6 glass">
                        <HelpCircle className="w-8 h-8 text-magic-purple" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">{t.faq.title_start} <span className="text-gradient">{t.faq.title_highlight}</span></h2>
                    <p className="text-xl text-gray-400">
                        {t.faq.description}
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/10 border-magic-purple/30' : 'hover:bg-white/5'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-8 text-left text-white font-medium transition-colors"
                            >
                                <span className="text-lg md:text-xl font-semibold">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-magic-purple shrink-0 ml-4" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-400 shrink-0 ml-4" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 text-gray-300 leading-relaxed text-lg border-t border-white/5 pt-6">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
