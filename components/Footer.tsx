import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/40">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">Sleepy Fairytales</h3>
                        <p className="text-gray-400 max-w-sm">
                            Making bedtime magical for children everywhere with AI-powered personalized stories.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 transition-colors text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-700 transition-colors text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                        <a href="mailto:support@sleepyfairytales.com" className="flex items-center gap-2 mt-4 text-gray-400 hover:text-white transition-colors">
                            <Mail className="w-4 h-4" />
                            support@sleepyfairytales.com
                        </a>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-white/5 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sleepy Fairytales. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
