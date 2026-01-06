import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Cloudin - AI Sleep Fairytales',
        short_name: 'Cloudin',
        description: 'Create magical, personalized, and AI-powered sleep fairytales for your child. Yapay zeka destekli masal uygulaması.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a051e',
        theme_color: '#6366f1',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
