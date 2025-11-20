'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "How does the AI story generation work?",
        answer: "Our advanced AI analyzes your child's name, age, and interests to craft a unique, personalized story every time. It ensures the content is age-appropriate, engaging, and safe."
    },
    {
        question: "Is the app safe for children?",
        answer: "Absolutely! Safety is our top priority. The app is completely ad-free, and all AI-generated content is filtered to ensure it's suitable for children."
    },
    {
        question: "Can I save the stories?",
        answer: "Yes! You can save your favorite stories to your library and revisit them anytime. Premium users have unlimited storage for their magical collection."
    },
    {
        question: "What languages are supported?",
        answer: "Currently, Sleepy Fairytales supports English and 7 other languages, making it a great tool for language learning as well!"
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 relative">
            <div className="container max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
                    <p className="text-lg text-purple-200">
                        Everything you need to know about Sleepy Fairytales.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left text-white font-medium hover:bg-white/5 transition-colors"
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-purple-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-purple-400" />
                                )}
                            </button>

                            <div
                                className={`px-6 text-gray-300 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
