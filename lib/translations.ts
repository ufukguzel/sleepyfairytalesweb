export type Language = 'TR' | 'EN' | 'DE' | 'ES';

export const translations = {
    TR: {
        nav: {
            home: "Ana Sayfa",
            download: "Hemen İndir",
            privacy: "Gizlilik",
            terms: "Kullanım",
            cookies: "Çerezler"
        },
        hero: {
            badge: "Yapay Zeka Destekli Masal Uygulaması",
            title_start: "Uyku Saati Artık",
            title_highlight: "Sihirli",
            title_end: "Bir Macera",
            description: "Çocuğunuzun ismini, yaşını ve ilgi alanlarını kullanarak saniyeler içinde benzersiz, eğitici ve güvenli masallar oluşturun. Her gece yeni bir hayal dünyası.",
            download: "Hemen İndir",
            howItWorks: "Nasıl Çalışır?",
            rating: "4.9/5 Ortalama Puan",
            happyFamilies: "Mutlu Aile",
            mockupTitle: "Sihirli Masal",
        },
        howItWorks: {
            title_start: "Uygulama",
            title_highlight: "Nasıl Çalışır?",
            description: "Sadece 3 adımda çocuğunuza özel sihirli masallar oluşturun.",
            steps: [
                {
                    title: "Bilgileri Girin",
                    description: "Çocuğunuzun ismini, yaşını ve masalın temasını (örneğin: uzay, orman) seçin."
                },
                {
                    title: "Sihri Başlatın",
                    description: "Yapay zekamız, verdiğiniz bilgilerle eğitici ve güvenli bir masal oluşturur."
                },
                {
                    title: "Keyifle Dinleyin",
                    description: "Masalı sesli anlatımla dinleyin veya kendiniz okuyun. Favorilerinize kaydedin."
                }
            ]
        },
        features: {
            title_start: "Ebeveynler",
            title_highlight: "Neden Bizi Seviyor",
            description: "Cloudin'i uyku zamanı için ideal kılan özellikleri keşfedin.",
            items: [
                {
                    title: "Kişiselleştirilmiş Masallar",
                    description: "Çocuğunuz ana karakter olur! İsim, yaş ve ilgi alanlarına göre her masalı kişiselleştiririz."
                },
                {
                    title: "Yapay Zeka Destekli Sihir",
                    description: "Her seferinde benzersiz hikayeler. Gelişmiş yapay zekamız, aynı masalın tekrarını önler."
                },
                {
                    title: "Eğitici İçerik",
                    description: "Hayal gücünü, kelime dağarcığını ve duygusal gelişimi destekleyen hikayeler."
                },
                {
                    title: "Güvenli ve Reklamsız",
                    description: "Çocuklar için güvenli bir ortam. Reklam yok, sadece masalın tadı kalır."
                }
            ]
        },
        testimonials: {
            title_start: "Aileler Tarafından",
            title_highlight: "Seviliyor",
            subtitle: "App Store'da 5.0 üzerinden 5.0 puan",
            reviews: [
                {
                    name: "Güray",
                    comment: "Çok güzel bir uygulama oldukça faydalı 🥰🥰",
                    role: "Ebeveyn"
                },
                {
                    name: "Zeynep A.",
                    comment: "Masalları çok iyi okuyor kızımın İngilizcesine katkısı oldu.",
                    role: "Anne"
                },
                {
                    name: "Ahmet K.",
                    comment: "Çok başarılı bir uygulama emeği geçenleri tebrik ediyorum!!!",
                    role: "Baba"
                }
            ]
        },
        faq: {
            title_start: "Sıkça Sorulan",
            title_highlight: "Sorular",
            description: "Cloudin hakkında merak ettiğiniz her şey.",
            items: [
                {
                    question: "Yapay zeka ile masal üretimi nasıl çalışıyor?",
                    answer: "Gelişmiş yapay zekamız çocuğunuzun ismini, yaşını ve ilgi alanlarını analiz ederek her seferinde benzersiz ve kişiselleştirilmiş bir masal oluşturur. İçerik yaşa uygun ve güvenlidir."
                },
                {
                    question: "Uygulama çocuklar için güvenli mi?",
                    answer: "Kesinlikle! Güvenlik birinci önceliğimizdir. Uygulama reklamsızdır ve AI tarafından oluşturulan içerikler filtrelenir."
                },
                {
                    question: "Masalları kaydedebilir miyim?",
                    answer: "Evet! Favori masallarınızı kütüphanenize kaydedebilir ve dilediğiniz zaman yeniden dinleyebilirsiniz. Premium kullanıcılar sınırsız depolama alır."
                },
                {
                    question: "Hangi diller destekleniyor?",
                    answer: "Şu anda Cloudin İngilizce ve Türkçe dillerinde destek sunuyor; dil seçenekleri ve genişleme planları uygulama içinde listelenmiştir."
                }
            ]
        },
        footer: {
            description: "Yapay zeka destekli, kişiselleştirilmiş masallarla her geceyi sihirli bir maceraya dönüştürüyoruz. Çocuklarınızın hayal dünyasını güvenle genişletin.",
            legal: "Yasal",
            privacy: "Gizlilik Politikası",
            terms: "Hizmet Şartları",
            cookies: "Çerez Politikası",
            contact: "İletişim",
            rights: "Tüm hakları saklıdır."
        },
        legal: {
            privacy: {
                title: "Gizlilik Politikası",
                lastUpdated: "Son güncelleme: 12 Haziran 2025",
                description: "Sleepy Fairy Tales (\"biz\", \"bize\" veya \"bizim\") olarak, gizliliğinizi korumaya kararlıyız. Bu Gizlilik Politikası, uygulamamızı ve hizmetlerimizi (\"Hizmetler\") kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklamaktadır.",
                sections: [
                    { title: "1. Topladığımız Bilgiler", content: "Kullanıcı Tarafından Sağlanan Bilgiler\nHizmetlerimizi kullandığınızda, özellikle masal kişiselleştirme özellikleri için çocuğun adı, yaşı ve cinsiyeti gibi belirli kişisel bilgileri bize gönüllü olarak sağlayabilirsiniz. Ayrıca ebeveyn onayı ve iletişim için ebeveyn e-posta adresini de isteyebiliriz.\n\nSes Verisi (İsteğe Bağlı)\nSesli anlatım özelliğini kullanmayı seçerseniz, sesinizi kaydetmek için izninizi isteyebiliriz. Bu kayıtlar, yalnızca sizin tarafınızdan kullanılmak üzere güvenli bir şekilde saklanır ve asla izniniz olmadan paylaşılmaz.\n\nOtomatik Olarak Toplanan Bilgiler\nHizmetlerimizi iyileştirmek amacıyla, cihaz türü, işletim sistemi, IP adresi (anonimleştirilmiş), uygulama kullanım istatistikleri ve kilitlenme raporları gibi anonimleştirilmiş verileri otomatik olarak toplayabiliriz." },
                    { title: "2. Bilgilerin Kullanımı", content: "Topladığımız bilgileri şu amaçlarla kullanırız:\n* Hizmetlerimizi sunmak, sürdürmek ve kişiselleştirmek.\n* Uygulama deneyimini ve özelliklerini geliştirmek.\n* Teknik destek sağlamak ve sorularınıza yanıt vermek.\n* Güvenliği sağlamak, dolandırıcılığı önlemek.\n* Yasal yükümlülüklere uymak." },
                    { title: "3. Üçüncü Taraflarla Paylaşım", content: "Kişisel bilgilerinizi satmıyoruz veya kiralamıyoruz. Bilgilerinizi yalnızca aşağıdaki durumlarda paylaşabiliriz:\n* Hizmet Sağlayıcılar: Uygulamayı barındırma, analiz ve müşteri desteği gibi hizmetleri gerçekleştiren güvenilir üçüncü taraf şirketlerle, katı gizlilik yükümlülükleri altında.\n* Yasal Gereklilikler: Yasal bir zorunluluğa uymak veya haklarımızı korumak için gerekli olduğunda.\n* Açık Onayınızla: Bilgilerinizi paylaşmamız için bize özel izin verdiğiniz durumlarda." },
                    { title: "4. Veri Güvenliği ve Çocukların Gizliliği", content: "Verilerinizin güvenliğini ciddiye alıyoruz. Yetkisiz erişimi, ifşayı veya değişikliği önlemek için şifreleme ve erişim kontrolleri dahil olmak üzere endüstri standardı güvenlik önlemleri uyguluyoruz.\n\nHizmetlerimiz öncelikli olarak çocuklara yöneliktir ve Çocukların Çevrimiçi Gizliliğini Koruma Yasası (COPPA) gibi düzenlemelere uymaya kararlıyız. 13 yaşın altındaki çocuklardan kişisel bilgi toplamadan önce doğrulanabilir ebeveyn onayı alırız. Ebeveynler, çocuklarının bilgilerini inceleme, silme ve daha fazla toplanmasını reddetme hakkına sahiptir." },
                    { title: "5. Haklarınız ve Seçimleriniz", content: "Kişisel bilgilerinize erişme, bunları düzeltme veya silme hakkına sahipsiniz. Bu haklarınızı kullanmak için lütfen aşağıdaki iletişim bilgilerinden bize ulaşın." },
                    { title: "6. Politikadaki Değişiklikler", content: "Bu gizlilik politikasını zaman zaman güncellenebilir. Önemli değişiklikler hakkında uygulama içi bildirim veya e-posta yoluyla sizi bilgilendireceğiz. Güncellenmiş politikayı düzenli olarak gözden geçirmenizi öneririz." },
                    { title: "7. İletişim", content: "Bu Gizlilik Politikası ile ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen bize ulaşın:\nE-posta: info.sleepyfairytales@gmail.com" }
                ]
            },
            terms: {
                title: "Kullanım Koşulları (Terms of Use)",
                lastUpdated: "Son güncelleme: 23 Haziran 2025",
                description: "Bu Kullanım Koşulları, Sleepy Fairy Tales mobil uygulamasının (\"Uygulama\") kullanımını düzenlemektedir. Uygulamayı indirerek, kurarak veya kullanarak bu Koşulları kabul etmiş olursunuz. Bu Koşulları kabul etmiyorsanız, lütfen Uygulamayı kullanmayın.",
                sections: [
                    { title: "1. Hizmet Tanımı", content: "Sleepy Fairy Tales, yapay zeka destekli masallar oluşturan bir mobil uygulamaydır. Kullanıcılara sesli anlatımla desteklenen kişiselleştirilmiş masallar sunar." },
                    { title: "2. Kullanım Koşulları", content: "Uygulamayı yalnızca kişisel ve ticari olmayan amaçlarla kullanmayı kabul edersiniz. Hizmeti yasal olmayan, zarar verici, taciz edici veya uygunsuz şekilde kullanamazsınız." },
                    { title: "3. Abonelikler ve Ödemeler", content: "Uygulama içerisinde otomatik yenilenen abonelik seçenekleri sunulabilir. Şu bilgileri kabul edersiniz:\n\n* Abonelik Detayları:\n    * Aylık: 200 TL (yaklaşık $6.99 USD)\n    * Yıllık: 800 TL (yaklaşık $27.99 USD)\n* Abonelikler otomatik olarak yenilenir ve siz iptal edene kadar devam eder.\n* Otomatik yenileme, geçerli abonelik süresi sona ermeden en az 24 saat önce kapatılmazsa, bir sonraki dönem için ücret tahsil edilir.\n* Aboneliklerinizi App Store hesabı ayarlarından dilediğiniz zaman iptal edebilirsiniz." },
                    { title: "4. Gizlilik", content: "Verilerinizin toplanma, kullanılma ve paylaşılma şartları Gizlilik Politikamızda ayrıntılı olarak belirtilmiştir. Uygulamayı kullanarak Gizlilik Politikamızı da kabul etmiş olursunuz. Gizlilik Politikasına buradan erişin" },
                    { title: "5. İçerik Sahipliği ve Lisans", content: "Tüm içerikler (yazı, görsel, ses) Sleepy Fairy Tales'e aittir veya lisanslıdır. Bu içerikler izinsiz kopyalanamaz, dağıtılamaz veya kullanılamaz." },
                    { title: "6. Değişiklikler", content: "Bu Koşullar zaman zaman güncellenebilir. Önemli değişiklikler durumunda uygulama içi bildirim veya e-posta ile bilgilendirme yapılır. En güncel versiyon uygulama içinden her zaman erişilebilir." },
                    { title: "7. İzleme ve Takip", content: "Uygulama herhangi bir şekilde kullanıcı takibi yapmamaktadır. App Tracking Transparency çerçevesi dışında kullanıcı verileri reklam amacıyla paylaşılmaz veya dış kaynaklarla ilişkilenmez." },
                    { title: "8. Destek ve İletişim", content: "Sorularınız veya destek talepleriniz için bizimle aşağıdaki e-posta adresinden iletişime geçebilirsiniz:\nE-posta: info.sleepyfairytales@gmail.com" }
                ]
            },
            cookies: {
                title: "Çerez Politikası",
                lastUpdated: "Son Güncelleme",
                sections: [
                    { title: "1. Çerezler Nedir?", content: "Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Deneyiminizi iyileştirmek için kullanılırlar." },
                    { title: "2. Kullandığımız Çerezler", content: "Zorunlu çerezler sitenin çalışması için gereklidir. Analitik çerezler ziyaretçi davranışlarını anlamamıza yardımcı olur." },
                    { title: "3. Çerezleri Yönetme", content: "Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz." }
                ]
            }
        }
    },
    EN: {
        nav: {
            home: "Home",
            download: "Download Now",
            privacy: "Privacy",
            terms: "Terms",
            cookies: "Cookies"
        },
        hero: {
            badge: "AI Powered Story App",
            title_start: "Bedtime is Now a",
            title_highlight: "Magical",
            title_end: "Adventure",
            description: "Create unique, educational, and safe stories in seconds using your child's name, age, and interests. A new dream world every night.",
            download: "Download Now",
            howItWorks: "How it Works?",
            rating: "4.9/5 Average Rating",
            happyFamilies: "Happy Families",
            mockupTitle: "Magical Story",
        },
        howItWorks: {
            title_start: "How it",
            title_highlight: "Works?",
            description: "Create magical stories for your child in just 3 simple steps.",
            steps: [
                {
                    title: "Enter Details",
                    description: "Select your child's name, age, and the theme of the story (e.g., space, forest)."
                },
                {
                    title: "Start the Magic",
                    description: "Our AI creates an educational and safe story using the information you provide."
                },
                {
                    title: "Listen and Enjoy",
                    description: "Listen to the story with voice narration or read it yourself. Save to your favorites."
                }
            ]
        },
        features: {
            title_start: "Why Parents",
            title_highlight: "Love Us",
            description: "Discover the features that make Cloudin ideal for bedtime.",
            items: [
                {
                    title: "Personalized Stories",
                    description: "Your child becomes the main character! We personalize every story based on name, age, and interests."
                },
                {
                    title: "AI Powered Magic",
                    description: "Unique stories every time. Our advanced AI prevents repetition of the same story."
                },
                {
                    title: "Educational Content",
                    description: "Stories that support imagination, vocabulary, and emotional development."
                },
                {
                    title: "Safe & Ad-Free",
                    description: "A safe environment for children. No ads, just the taste of the story remains."
                }
            ]
        },
        testimonials: {
            title_start: "Loved by",
            title_highlight: "Families",
            subtitle: "Rated 5.0 out of 5 on the App Store",
            reviews: [
                {
                    name: "Güray",
                    comment: "A very beautiful application, quite useful 🥰🥰",
                    role: "Parent"
                },
                {
                    name: "Zeynep A.",
                    comment: "It reads stories very well, it contributed to my daughter's English.",
                    role: "Mother"
                },
                {
                    name: "Ahmet K.",
                    comment: "A very successful application, I congratulate those who contributed!!!",
                    role: "Father"
                }
            ]
        },
        faq: {
            title_start: "Frequently Asked",
            title_highlight: "Questions",
            description: "Everything you wonder about Cloudin.",
            items: [
                {
                    question: "How does AI story generation work?",
                    answer: "Our advanced AI analyzes your child's name, age, and interests to create a unique and personalized story every time. Content is age-appropriate and safe."
                },
                {
                    question: "Is the app safe for children?",
                    answer: "Absolutely! Safety is our number one priority. The app is ad-free and AI-generated content is filtered."
                },
                {
                    question: "Can I save the stories?",
                    answer: "Yes! You can save your favorite stories to your library and listen to them again whenever you want. Premium users get unlimited storage."
                },
                {
                    question: "Which languages are supported?",
                    answer: "Currently, Cloudin offers support in English and Turkish; language options and expansion plans are listed within the app."
                }
            ]
        },
        footer: {
            description: "We turn every night into a magical adventure with AI-supported, personalized stories. Safely expand your children's imagination.",
            legal: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            cookies: "Cookie Policy",
            contact: "Contact",
            rights: "All rights reserved."
        },
        legal: {
            privacy: {
                title: "Privacy Policy",
                lastUpdated: "Last Updated",
                description: "At Cloudin, we value your privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our app and website.",
                sections: [
                    { title: "1. Introduction", content: "At Cloudin, we value your privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our app and website." },
                    { title: "2. Data Collected", content: "To provide our service, we may collect child's name, age, interests, and app usage data." },
                    { title: "3. Data Security", content: "Your data is protected by industry-standard security measures. We never sell your personal data to third parties." },
                    { title: "4. Contact", content: "For questions about our privacy policy, you can reach us at support@cloudin.com." }
                ]
            },
            terms: {
                title: "Terms of Service",
                lastUpdated: "Last Updated",
                description: "By using the Cloudin app or website, you agree to these Terms of Service.",
                sections: [
                    { title: "1. Acceptance", content: "By using the Cloudin app or website, you agree to these Terms of Service." },
                    { title: "2. License", content: "Cloudin grants you a limited, revocable license to use the app for personal, non-commercial purposes." },
                    { title: "3. Subscriptions", content: "Some features may require a premium subscription. Subscription details and pricing are specified within the app." },
                    { title: "4. Disclaimer", content: "The app is provided 'as is'. Cloudin does not guarantee that the app will be uninterrupted or error-free." }
                ]
            },
            cookies: {
                title: "Cookie Policy",
                lastUpdated: "Last Updated",
                sections: [
                    { title: "1. What are Cookies?", content: "Cookies are small text files saved to your device when you visit our website. They are used to improve your experience." },
                    { title: "2. Cookies We Use", content: "Essential cookies are necessary for the site to function. Analytical cookies help us understand visitor behavior." },
                    { title: "3. Managing Cookies", content: "You can delete or block cookies at any time from your browser settings." }
                ]
            }
        }
    },
    DE: {
        nav: {
            home: "Startseite",
            download: "Jetzt Herunterladen",
            privacy: "Datenschutz",
            terms: "Nutzung",
            cookies: "Cookies"
        },
        hero: {
            badge: "KI-gestützte Geschichten-App",
            title_start: "Schlafenszeit ist jetzt ein",
            title_highlight: "Magisches",
            title_end: "Abenteuer",
            description: "Erstellen Sie in Sekundenschnelle einzigartige, lehrreiche und sichere Geschichten mit dem Namen, Alter und den Interessen Ihres Kindes. Jede Nacht eine neue Traumwelt.",
            download: "Jetzt Herunterladen",
            howItWorks: "Wie es funktioniert?",
            rating: "4.9/5 Durchschnittsbewertung",
            happyFamilies: "Glückliche Familien",
            mockupTitle: "Magische Geschichte",
        },
        howItWorks: {
            title_start: "Wie es",
            title_highlight: "funktioniert?",
            description: "Erstellen Sie magische Geschichten für Ihr Kind in nur 3 einfachen Schritten.",
            steps: [
                {
                    title: "Details eingeben",
                    description: "Wählen Sie Name, Alter und das Thema der Geschichte Ihres Kindes (z. B. Weltraum, Wald)."
                },
                {
                    title: "Starten Sie die Magie",
                    description: "Unsere KI erstellt eine lehrreiche und sichere Geschichte mit den von Ihnen bereitgestellten Informationen."
                },
                {
                    title: "Zuhören und genießen",
                    description: "Hören Sie sich die Geschichte mit Sprachausgabe an oder lesen Sie sie selbst. Speichern Sie sie in Ihren Favoriten."
                }
            ]
        },
        features: {
            title_start: "Warum Eltern",
            title_highlight: "Uns Lieben",
            description: "Entdecken Sie die Funktionen, die Cloudin ideal für die Schlafenszeit machen.",
            items: [
                {
                    title: "Personalisierte Geschichten",
                    description: "Ihr Kind wird zur Hauptfigur! Wir personalisieren jede Geschichte basierend auf Name, Alter und Interessen."
                },
                {
                    title: "KI-gestützte Magie",
                    description: "Jedes Mal einzigartige Geschichten. Unsere fortschrittliche KI verhindert die Wiederholung derselben Geschichte."
                },
                {
                    title: "Lehrreiche Inhalte",
                    description: "Geschichten, die Fantasie, Wortschatz und emotionale Entwicklung fördern."
                },
                {
                    title: "Sicher & Werbefrei",
                    description: "Eine sichere Umgebung für Kinder. Keine Werbung, nur der Genuss der Geschichte bleibt."
                }
            ]
        },
        testimonials: {
            title_start: "Geliebt von",
            title_highlight: "Familien",
            subtitle: "Bewertet mit 5.0 von 5 im App Store",
            reviews: [
                {
                    name: "Güray",
                    comment: "Eine sehr schöne Anwendung, ziemlich nützlich 🥰🥰",
                    role: "Elternteil"
                },
                {
                    name: "Zeynep A.",
                    comment: "Es liest Geschichten sehr gut vor, es hat zum Englisch meiner Tochter beigetragen.",
                    role: "Mutter"
                },
                {
                    name: "Ahmet K.",
                    comment: "Eine sehr erfolgreiche Anwendung, ich gratuliere den Beteiligten!!!",
                    role: "Vater"
                }
            ]
        },
        faq: {
            title_start: "Häufig Gestellte",
            title_highlight: "Fragen",
            description: "Alles, was Sie über Cloudin wissen möchten.",
            items: [
                {
                    question: "Wie funktioniert die KI-Geschichtenerstellung?",
                    answer: "Unsere fortschrittliche KI analysiert Name, Alter und Interessen Ihres Kindes, um jedes Mal eine einzigartige und personalisierte Geschichte zu erstellen. Der Inhalt ist altersgerecht und sicher."
                },
                {
                    question: "Ist die App sicher für Kinder?",
                    answer: "Absolut! Sicherheit ist unsere oberste Priorität. Die App ist werbefrei und KI-generierte Inhalte werden gefiltert."
                },
                {
                    question: "Kann ich die Geschichten speichern?",
                    answer: "Ja! Sie können Ihre Lieblingsgeschichten in Ihrer Bibliothek speichern und sie jederzeit wieder anhören. Premium-Benutzer erhalten unbegrenzten Speicherplatz."
                },
                {
                    question: "Welche Sprachen werden unterstützt?",
                    answer: "Derzeit bietet Cloudin Unterstützung in Englisch und Türkisch an; Sprachoptionen und Erweiterungspläne sind in der App aufgeführt."
                }
            ]
        },
        footer: {
            description: "Wir verwandeln jede Nacht in ein magisches Abenteuer mit KI-gestützten, personalisierten Geschichten. Erweitern Sie sicher die Fantasie Ihrer Kinder.",
            legal: "Rechtliches",
            privacy: "Datenschutzrichtlinie",
            terms: "Nutzungsbedingungen",
            cookies: "Cookie-Richtlinie",
            contact: "Kontakt",
            rights: "Alle Rechte vorbehalten."
        },
        legal: {
            privacy: {
                title: "Datenschutzrichtlinie",
                lastUpdated: "Zuletzt aktualisiert",
                description: "Bei Cloudin schätzen wir Ihre Privatsphäre. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Daten sammeln, verwenden und schützen.",
                sections: [
                    { title: "1. Einführung", content: "Bei Cloudin schätzen wir Ihre Privatsphäre. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Daten sammeln, verwenden und schützen." },
                    { title: "2. Gesammelte Daten", content: "Um unseren Service bereitzustellen, können wir Name, Alter, Interessen des Kindes und App-Nutzungsdaten sammeln." },
                    { title: "3. Datensicherheit", content: "Ihre Daten werden durch branchenübliche Sicherheitsmaßnahmen geschützt. Wir verkaufen Ihre persönlichen Daten niemals an Dritte." },
                    { title: "4. Contact", content: "Bei Fragen zu unserer Datenschutzrichtlinie erreichen Sie uns unter support@cloudin.com." }
                ]
            },
            terms: {
                title: "Nutzungsbedingungen",
                lastUpdated: "Zuletzt aktualisiert",
                description: "Durch die Nutzung der Cloudin-App oder -Website stimmen Sie diesen Nutzungsbedingungen zu.",
                sections: [
                    { title: "1. Akzeptanz", content: "Durch die Nutzung der Cloudin-App oder -Website stimmen Sie diesen Nutzungsbedingungen zu." },
                    { title: "2. Lizenz", content: "Cloudin gewährt Ihnen eine begrenzte, widerrufliche Lizenz zur Nutzung der App für persönliche, nicht kommerzielle Zwecke." },
                    { title: "3. Abonnements", content: "Einige Funktionen erfordern möglicherweise ein Premium-Abonnement. Details und Preise sind in der App angegeben." },
                    { title: "4. Haftungsausschluss", content: "Die App wird 'wie besehen' bereitgestellt. Cloudin garantiert nicht, dass die App unterbrechungsfrei oder fehlerfrei ist." }
                ]
            },
            cookies: {
                title: "Cookie-Richtlinie",
                lastUpdated: "Zuletzt aktualisiert",
                sections: [
                    { title: "1. Was sind Cookies?", content: "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen." },
                    { title: "2. Verwendete Cookies", content: "Notwendige Cookies sind für die Funktion der Website erforderlich. Analytische Cookies helfen uns, das Besucherverhalten zu verstehen." },
                    { title: "3. Cookies verwalten", content: "Sie können Cookies jederzeit über Ihre Browsereinstellungen löschen oder blockieren." }
                ]
            }
        }
    },
    ES: {
        nav: {
            home: "Inicio",
            download: "Descargar Ahora",
            privacy: "Privacidad",
            terms: "Términos",
            cookies: "Cookies"
        },
        hero: {
            badge: "App de Cuentos con IA",
            title_start: "La Hora de Dormir es una",
            title_highlight: "Aventura",
            title_end: "Mágica",
            description: "Crea cuentos únicos, educativos y seguros en segundos usando el nombre, edad e intereses de tu hijo. Un nuevo mundo de sueños cada noche.",
            download: "Descargar Ahora",
            howItWorks: "¿Cómo Funciona?",
            rating: "4.9/5 Calificación Promedio",
            happyFamilies: "Familias Felices",
            mockupTitle: "Cuento Mágico",
        },
        howItWorks: {
            title_start: "¿Cómo",
            title_highlight: "Funciona?",
            description: "Crea cuentos mágicos para tu hijo en solo 3 sencillos pasos.",
            steps: [
                {
                    title: "Ingresar Detalles",
                    description: "Selecciona el nombre, la edad y el tema del cuento de tu hijo (por ejemplo: espacio, bosque)."
                },
                {
                    title: "Inicia la Magia",
                    description: "Nuestra IA crea un cuento educativo y seguro utilizando la información que proporciones."
                },
                {
                    title: "Escucha ve Disfruta",
                    description: "Escucha el cuento con narración de voz o léelo tú mismo. Guárdalo en tus favoritos."
                }
            ]
        },
        features: {
            title_start: "Por Qué los Padres",
            title_highlight: "Nos Aman",
            description: "Descubre las características que hacen a Cloudin ideal para la hora de dormir.",
            items: [
                {
                    title: "Cuentos Personalizados",
                    description: "¡Tu hijo se convierte en el personaje principal! Personalizamos cada cuento basado en nombre, edad e intereses."
                },
                {
                    title: "Magia con IA",
                    description: "Cuentos únicos cada vez. Nuestra avanzada IA evita la repetición del mismo cuento."
                },
                {
                    title: "Contenido Educativo",
                    description: "Cuentos que apoyan la imaginación, el vocabulario y el desarrollo emocional."
                },
                {
                    title: "Seguro y Sin Anuncios",
                    description: "Un entorno seguro para los niños. Sin anuncios, solo queda el gusto del cuento."
                }
            ]
        },
        testimonials: {
            title_start: "Amado por",
            title_highlight: "Familias",
            subtitle: "Calificado 5.0 de 5 en la App Store",
            reviews: [
                {
                    name: "Güray",
                    comment: "Una aplicación muy hermosa, bastante útil 🥰🥰",
                    role: "Padre"
                },
                {
                    name: "Zeynep A.",
                    comment: "Lee cuentos muy bien, contribuyó al inglés de mi hija.",
                    role: "Madre"
                },
                {
                    name: "Ahmet K.",
                    comment: "Una aplicación muy exitosa, ¡felicito a los que contribuyeron!!!",
                    role: "Padre"
                }
            ]
        },
        faq: {
            title_start: "Preguntas",
            title_highlight: "Frecuentes",
            description: "Todo lo que te preguntas sobre Cloudin.",
            items: [
                {
                    question: "¿Cómo funciona la generación de cuentos con IA?",
                    answer: "Nuestra avanzada IA analiza el nombre, edad e intereses de tu hijo para crear un cuento único y personalizado cada vez. El contenido es apropiado para la edad y seguro."
                },
                {
                    question: "¿Es la aplicación segura para niños?",
                    answer: "¡Absolutamente! La seguridad es nuestra prioridad número uno. La aplicación no tiene anuncios y el contenido generado por IA se filtra."
                },
                {
                    question: "¿Puedo guardar los cuentos?",
                    answer: "¡Sí! Puedes guardar tus cuentos favoritos en tu biblioteca y escucharlos de nuevo cuando quieras. Los usuarios Premium obtienen almacenamiento ilimitado."
                },
                {
                    question: "¿Qué idiomas son compatibles?",
                    answer: "Actualmente, Cloudin ofrece soporte en inglés y turco; las opciones de idioma y los planes de expansión se enumeran dentro de la aplicación."
                }
            ]
        },
        footer: {
            description: "Convertimos cada noche en una aventura mágica con cuentos personalizados apoyados por IA. Expande la imaginación de tus hijos de forma segura.",
            legal: "Legal",
            privacy: "Política de Privacidad",
            terms: "Términos de Servicio",
            cookies: "Política de Cookies",
            contact: "Contacto",
            rights: "Todos los derechos reservados."
        },
        legal: {
            privacy: {
                title: "Política de Privacidad",
                lastUpdated: "Última Actualización",
                description: "En Cloudin valoramos tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tus datos.",
                sections: [
                    { title: "1. Introducción", content: "En Cloudin valoramos tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tus datos." },
                    { title: "2. Datos Recopilados", content: "Para proporcionar nuestro servicio, podemos recopilar el nombre, edad, intereses del niño y datos de uso de la aplicación." },
                    { title: "3. Seguridad de Datos", content: "Tus datos están protegidos por medidas de seguridad estándar de la industria. Nunca vendemos tus datos personales a terceros." },
                    { title: "4. Contacto", content: "Para preguntas sobre nuestra política de privacidad, puedes contactarnos en support@cloudin.com." }
                ]
            },
            terms: {
                title: "Términos de Servicio",
                lastUpdated: "Última Actualización",
                description: "Al usar la aplicación o el sitio web de Cloudin, aceptas estos Términos de Servicio.",
                sections: [
                    { title: "1. Aceptación", content: "Al usar la aplicación o el sitio web de Cloudin, aceptas estos Términos de Servicio." },
                    { title: "2. Licencia", content: "Cloudin te otorga una licencia limitada y revocable para usar la aplicación con fines personales y no comerciales." },
                    { title: "3. Suscripciones", content: "Algunas funciones pueden requerir una suscripción premium. Los detalles y precios se especifican dentro de la aplicación." },
                    { title: "4. Descargo de Responsabilidad", content: "La aplicación se proporciona 'tal cual'. Cloudin no garantiza que la aplicación sea ininterrumpida o libre de errores." }
                ]
            },
            cookies: {
                title: "Política de Cookies",
                lastUpdated: "Última Actualización",
                sections: [
                    { title: "1. ¿Qué son las Cookies?", content: "Las cookies son pequeños archivos de texto guardados en tu dispositivo cuando visitas nuestro sitio web." },
                    { title: "2. Cookies que Usamos", content: "Las cookies esenciales son necesarias para que el sitio funcione. Las cookies analíticas nos ayudan a entender el comportamiento del visitante." },
                    { title: "3. Gestionar Cookies", content: "Puedes eliminar o bloquear las cookies en cualquier momento desde la configuración de tu navegador." }
                ]
            }
        }
    }
};
