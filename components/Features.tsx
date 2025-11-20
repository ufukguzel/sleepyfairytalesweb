import { Sparkles, Shield, BookOpen, Wand2 } from 'lucide-react';

const features = [
    {
        icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
        title: "Personalized Stories",
        description: "Your child becomes the main character! We weave their name, age, and interests into every magical tale."
    },
    {
        icon: <Wand2 className="w-8 h-8 text-purple-400" />,
        title: "AI-Powered Magic",
        description: "Unique stories every time. Our advanced AI ensures no two bedtime adventures are ever the same."
    },
    {
        icon: <BookOpen className="w-8 h-8 text-blue-400" />,
        title: "Educational Content",
        description: "Stories crafted with child development experts to nurture imagination, vocabulary, and emotional growth."
    },
    {
        icon: <Shield className="w-8 h-8 text-green-400" />,
        title: "Safe & Ad-Free",
        description: "A secure environment for your little ones. No ads, just pure storytelling magic."
    }
];

export default function Features() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Why Parents Love Us</h2>
                    <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                        Discover the magic that makes Sleepy Fairytales the perfect bedtime companion.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
