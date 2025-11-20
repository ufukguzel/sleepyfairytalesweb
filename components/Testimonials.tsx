import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Güray",
        rating: 5,
        comment: "Çok güzel bir uygulama oldukça faydalı 🥰🥰",
        role: "Parent"
    },
    {
        name: "Zeynep A.",
        rating: 5,
        comment: "Masalları çok iyi okuyor kızımın İngilizcesine katkısı oldu.",
        role: "Mother"
    },
    {
        name: "Ahmet K.",
        rating: 5,
        comment: "Çok başarılı bir uygulama emeği geçenleri tebrik ediyorum!!!",
        role: "Father"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-black/20">
            <div className="container">
                <div className="text-center mb-16">
                    <div className="flex justify-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Loved by Families</h2>
                    <p className="text-lg text-purple-200">
                        Rated 5.0 out of 5 on the App Store
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="glass p-8 rounded-2xl relative"
                        >
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-2xl">
                                "
                            </div>
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{review.comment}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center font-bold text-white">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{review.name}</h4>
                                    <span className="text-sm text-purple-300">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
