'use client';

import { Instagram, Twitter, Facebook, Mail, Moon } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-20 border-t border-white/5 bg-black/40 backdrop-blur-lg relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-magic-purple/10 rounded-full blur-[100px] -z-10" />

            <div className="container relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Moon className="w-6 h-6 text-magic-gold fill-magic-gold" />
                            <h3 className="text-2xl font-bold text-white">Cloudin</h3>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-magic-purple transition-all duration-300 text-white hover:scale-110 group">
                                <Instagram className="w-5 h-5 group-hover:animate-pulse" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-magic-blue transition-all duration-300 text-white hover:scale-110 group">
                                <Twitter className="w-5 h-5 group-hover:animate-pulse" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 transition-all duration-300 text-white hover:scale-110 group">
                                <Facebook className="w-5 h-5 group-hover:animate-pulse" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 text-lg">{t.footer.legal}</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="/privacy-policy" className="hover:text-magic-purple transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-magic-purple opacity-0 group-hover:opacity-100 transition-opacity" /> {t.footer.privacy}</a></li>
                            <li><a href="/terms-of-service" className="hover:text-magic-purple transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-magic-purple opacity-0 group-hover:opacity-100 transition-opacity" /> {t.footer.terms}</a></li>
                            <li><a href="/cookie-policy" className="hover:text-magic-purple transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-magic-purple opacity-0 group-hover:opacity-100 transition-opacity" /> {t.footer.cookies}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 text-lg">{t.footer.contact}</h4>
                        <a href="mailto:support@cloudin.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group p-4 glass rounded-xl border border-white/5 hover:border-magic-purple/30">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-magic-purple/20 transition-colors">
                                <Mail className="w-5 h-5 text-magic-purple" />
                            </div>
                            <span className="text-sm">support@cloudin.com</span>
                        </a>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-white/5 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Cloudin. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
}
