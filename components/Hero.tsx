import { Download, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]"></div>
                <div className="stars absolute inset-0"></div>
            </div>

            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium text-purple-200 border border-purple-500/30">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span>#1 AI Story App for Kids</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-200 drop-shadow-lg">
                        Sleepy Fairytales
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Every child is the hero of their own story! Create personalized, magical bedtime tales powered by AI that nurture imagination and dreams.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="https://apps.apple.com/tr/app/sleepy-fairytales/id6747094017"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary flex items-center justify-center gap-3 group"
                        >
                            <Download className="w-5 h-5 group-hover:animate-bounce" />
                            <span>Download on App Store</span>
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0f0c29] flex items-center justify-center text-xs">
                                    User
                                </div>
                            ))}
                        </div>
                        <p>Loved by 1000+ parents</p>
                    </div>
                </div>

                <div className="relative z-10 flex justify-center">
                    <div className="relative w-[300px] md:w-[320px] h-auto bg-black rounded-[40px] border-[8px] border-gray-800 shadow-2xl animate-float overflow-hidden">
                        {/* Phone Screen Content */}
                        <div className="relative h-full w-full bg-gray-900">
                            <Image
                                src="/app-screenshot.png"
                                alt="Sleepy Fairytales App Interface"
                                width={320}
                                height={650}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>

                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                    </div>

                    {/* Decorative Elements behind phone */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    );
}
