// Define translations object
const translations = {
    en: {
        // Navigation
        "nav.about": "About Us",
        "nav.solutions": "Solutions",
        "nav.services": "Services",
        "nav.testimonials": "Testimonials",
        "nav.partners": "Partners",
        "nav.contact": "Contact",

        // Hero Section
        "hero.title": "Innovative IT Solutions for Your Business",
        "hero.subtitle": "Transform your business with cutting-edge technology solutions",
        "hero.getStarted": "Get Started",
        "hero.learnMore": "Learn More",

        // About Section
        "about.title": "About Us",
        "about.subtitle": "We are a leading IT solutions provider dedicated to transforming businesses through innovative technology.",
        "about.description": "With over a decade of experience in the industry, we have helped numerous organizations achieve their digital transformation goals. Our team of experts combines technical expertise with business acumen to deliver solutions that drive growth and efficiency.",
        "about.feature1": "Expert Team",
        "about.feature2": "Quality Service",
        "about.feature3": "24/7 Support",
        "about.feature4": "Innovative Solutions",

        // Solutions Section
        "solutions.title": "Our Solutions",
        "solutions.subtitle": "Comprehensive IT solutions designed to meet your business needs and drive growth.",
        "solutions.dataCenter": "Data Center Solutions",
        "solutions.dataCenterDesc": "Complete data center infrastructure including server rooms, cooling systems, and power supply solutions",
        "solutions.cybersecurity": "Cybersecurity Solutions",
        "solutions.cybersecurityDesc": "Comprehensive corporate IT security solutions including network security and infrastructure protection",
        "solutions.network": "Network Solutions",
        "solutions.networkDesc": "Advanced network infrastructure and structured cabling systems for optimal connectivity",
        "solutions.security": "Security Infrastructure",
        "solutions.securityDesc": "Professional security camera systems and surveillance solutions for comprehensive monitoring",
        "solutions.software": "Software Solutions",
        "solutions.softwareDesc": "Custom application and software development for business process automation",
        "solutions.av": "Audio & Video Solutions",
        "solutions.avDesc": "Professional audio-visual systems and video conferencing solutions",

        // Services Section
        "services.title": "Our Services",
        "services.subtitle": "Professional IT services to help your business thrive in the digital age.",
        "services.integration": "System Integration",
        "services.integrationDesc": "End-to-end system integration services for seamless business process automation",
        "services.support": "IT Support",
        "services.supportDesc": "24/7 technical support and IT management systems implementation",
        "services.cloud": "Cloud Solutions",
        "services.cloudDesc": "Cloud technology implementation and management for modern businesses",

        // Testimonials Section
        "testimonials.title": "What Our Clients Say",
        "testimonials.subtitle": "Hear from our satisfied clients about their experience working with us.",
        "testimonials.testimonial1": "Working with this team has transformed our business operations. Their expertise in IT solutions is unmatched.",
        "testimonials.testimonial2": "The cybersecurity solutions provided have significantly improved our data protection. Highly recommended!",
        "testimonials.testimonial3": "Their digital transformation services helped us modernize our infrastructure and improve efficiency.",

        // Partners Section
        "partners.title": "Our Partners",
        "partners.subtitle": "Trusted by leading technology partners worldwide.",

        // Contact Section
        "contact.title": "Contact Us",
        "contact.subtitle": "Get in touch with us to discuss how we can help transform your business.",
        "contact.getInTouch": "Get in Touch",
        "contact.description": "We'd love to hear from you. Let's discuss how we can help transform your business.",
        "contact.emailUs": "Email Us",
        "contact.callUs": "Call Us",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.subject": "Subject",
        "contact.message": "Message",
        "contact.send": "Send Message",

        // Footer
        "footer.description": "Transforming businesses through innovative technology solutions.",
        "footer.copyright": "© 2024 IT Solutions. All rights reserved."
    },
    az: {
        // Navigation
        "nav.about": "Haqqımızda",
        "nav.solutions": "Həllər",
        "nav.services": "Xidmətlər",
        "nav.testimonials": "Rəylər",
        "nav.partners": "Tərəfdaşlar",
        "nav.contact": "Əlaqə",

        // Hero Section
        "hero.title": "Biznesiniz üçün İnnovativ IT Həllər",
        "hero.subtitle": "Biznesinizi müasir texnologiya həlləri ilə transformasiya edin",
        "hero.getStarted": "Başlayın",
        "hero.learnMore": "Ətraflı",

        // About Section
        "about.title": "Haqqımızda",
        "about.subtitle": "Biz innovativ texnologiyalar vasitəsilə biznesləri transformasiya etməyə həsr olunmuş aparıcı IT həllər təqdimatçısıyıq.",
        "about.description": "Sənayedə on illik təcrübə ilə biz çoxsaylı təşkilatların rəqəmsal transformasiya məqsədlərinə çatmasına kömək etmişik. Ekspert komandamız texniki bilik və biznes anlayışını birləşdirərək böyümə və səmərəliliyi təmin edən həllər təqdim edir.",
        "about.feature1": "Ekspert Komanda",
        "about.feature2": "Keyfiyyətli Xidmət",
        "about.feature3": "24/7 Dəstək",
        "about.feature4": "İnnovativ Həllər",

        // Solutions Section
        "solutions.title": "Həllərimiz",
        "solutions.subtitle": "Biznes ehtiyaclarınızı qarşılamaq və böyüməni təmin etmək üçün hərtərəfli IT həllər.",
        "solutions.dataCenter": "Data Mərkəzi Həlləri",
        "solutions.dataCenterDesc": "Server otaqları, soyutma sistemləri və enerji təchizatı həlləri daxil olmaqla tam data mərkəzi infrastrukturu",
        "solutions.cybersecurity": "Kibertəhlükəsizlik Həlləri",
        "solutions.cybersecurityDesc": "Şəbəkə təhlükəsizliyi və infrastruktur qorunması daxil olmaqla hərtərəfli korporativ IT təhlükəsizlik həlləri",
        "solutions.network": "Şəbəkə Həlləri",
        "solutions.networkDesc": "Optimal qoşulma üçün təkmilləşdirilmiş şəbəkə infrastrukturu və strukturlaşdırılmış kabel sistemləri",
        "solutions.security": "Təhlükəsizlik İnfrastrukturu",
        "solutions.securityDesc": "Hərtərəfli monitorinq üçün professional təhlükəsizlik kamera sistemləri və müşahidə həlləri",
        "solutions.software": "Proqram Təminatı Həlləri",
        "solutions.softwareDesc": "Biznes proseslərinin avtomatlaşdırılması üçün xüsusi tətbiqlər və proqram təminatı inkişafı",
        "solutions.av": "Audio & Video Həllər",
        "solutions.avDesc": "Professional audio-vizual sistemlər və video konfrans həlləri",

        // Services Section
        "services.title": "Xidmətlərimiz",
        "services.subtitle": "Rəqəmsal dövrdə biznesinizin inkişafına kömək edən professional IT xidmətləri.",
        "services.integration": "Sistem İnteqrasiyası",
        "services.integrationDesc": "Problemsiz biznes proseslərinin avtomatlaşdırılması üçün tam sistem inteqrasiya xidmətləri",
        "services.support": "IT Dəstək",
        "services.supportDesc": "24/7 texniki dəstək və IT idarəetmə sistemlərinin tətbiqi",
        "services.cloud": "Bulud Həlləri",
        "services.cloudDesc": "Müasir bizneslər üçün bulud texnologiyalarının tətbiqi və idarə edilməsi",

        // Testimonials Section
        "testimonials.title": "Müştərilərimizin Rəyləri",
        "testimonials.subtitle": "Bizimlə işləmə təcrübələrindən məmnun müştərilərimizdən eşidin.",
        "testimonials.testimonial1": "Bu komanda ilə işləmək biznes əməliyyatlarımızı transformasiya etdi. Onların IT həllər sahəsindəki təcrübəsi misilsizdir.",
        "testimonials.testimonial2": "Təqdim edilən kibertəhlükəsizlik həlləri məlumatlarımızın qorunmasını əhəmiyyətli dərəcədə yaxşılaşdırdı. Çox tövsiyə olunur!",
        "testimonials.testimonial3": "Onların rəqəmsal transformasiya xidmətləri infrastrukturumuzu modernləşdirməyə və səmərəliliyi artırmağa kömək etdi.",

        // Partners Section
        "partners.title": "Tərəfdaşlarımız",
        "partners.subtitle": "Dünya üzrə aparıcı texnologiya tərəfdaşları tərəfindən etibar edilir.",

        // Contact Section
        "contact.title": "Bizimlə Əlaqə",
        "contact.subtitle": "Biznesinizi transformasiya etməyə necə kömək edə biləcəyimizi müzakirə etmək üçün bizimlə əlaqə saxlayın.",
        "contact.getInTouch": "Əlaqə Saxlayın",
        "contact.description": "Sizdən eşitməyi sevinərdik. Biznesinizi transformasiya etməyə necə kömək edə biləcəyimizi müzakirə edək.",
        "contact.emailUs": "E-poçt Göndərin",
        "contact.callUs": "Zəng Edin",
        "contact.name": "Ad",
        "contact.email": "E-poçt",
        "contact.subject": "Mövzu",
        "contact.message": "Mesaj",
        "contact.send": "Mesaj Göndər",

        // Footer
        "footer.description": "İnnovativ texnologiya həlləri vasitəsilə biznesləri transformasiya edirik.",
        "footer.copyright": "© 2024 IT Solutions. Bütün hüquqlar qorunur."
    },
    ru: {
        // Navigation
        "nav.about": "О Нас",
        "nav.solutions": "Решения",
        "nav.services": "Услуги",
        "nav.testimonials": "Отзывы",
        "nav.partners": "Партнеры",
        "nav.contact": "Контакты",

        // Hero Section
        "hero.title": "Инновационные IT-решения для вашего бизнеса",
        "hero.subtitle": "Трансформируйте свой бизнес с помощью передовых технологических решений",
        "hero.getStarted": "Начать",
        "hero.learnMore": "Узнать больше",

        // About Section
        "about.title": "О Нас",
        "about.subtitle": "Мы являемся ведущим поставщиком IT-решений, посвященным трансформации бизнеса через инновационные технологии.",
        "about.description": "Имея более чем десятилетний опыт в отрасли, мы помогли многочисленным организациям достичь целей цифровой трансформации. Наша команда экспертов сочетает техническую экспертизу с бизнес-аналитикой для предоставления решений, которые способствуют росту и эффективности.",
        "about.feature1": "Команда Экспертов",
        "about.feature2": "Качественный Сервис",
        "about.feature3": "Поддержка 24/7",
        "about.feature4": "Инновационные Решения",

        // Solutions Section
        "solutions.title": "Наши Решения",
        "solutions.subtitle": "Комплексные IT-решения, разработанные для удовлетворения потребностей вашего бизнеса и стимулирования роста.",
        "solutions.dataCenter": "Решения для Центров Обработки Данных",
        "solutions.dataCenterDesc": "Полная инфраструктура центра обработки данных, включая серверные комнаты, системы охлаждения и решения по энергоснабжению",
        "solutions.cybersecurity": "Решения по Кибербезопасности",
        "solutions.cybersecurityDesc": "Комплексные корпоративные решения по IT-безопасности, включая сетевую безопасность и защиту инфраструктуры",
        "solutions.network": "Сетевые Решения",
        "solutions.networkDesc": "Передовая сетевая инфраструктура и структурированные кабельные системы для оптимальной связности",
        "solutions.security": "Инфраструктура Безопасности",
        "solutions.securityDesc": "Профессиональные системы видеонаблюдения и решения для комплексного мониторинга",
        "solutions.software": "Программные Решения",
        "solutions.softwareDesc": "Разработка пользовательских приложений и программного обеспечения для автоматизации бизнес-процессов",
        "solutions.av": "Аудио и Видео Решения",
        "solutions.avDesc": "Профессиональные аудиовизуальные системы и решения для видеоконференций",

        // Services Section
        "services.title": "Наши Услуги",
        "services.subtitle": "Профессиональные IT-услуги для развития вашего бизнеса в цифровую эпоху.",
        "services.integration": "Системная Интеграция",
        "services.integrationDesc": "Комплексные услуги системной интеграции для бесшовной автоматизации бизнес-процессов",
        "services.support": "IT-Поддержка",
        "services.supportDesc": "Круглосуточная техническая поддержка и внедрение систем IT-управления",
        "services.cloud": "Облачные Решения",
        "services.cloudDesc": "Внедрение и управление облачными технологиями для современного бизнеса",

        // Testimonials Section
        "testimonials.title": "Что Говорят Наши Клиенты",
        "testimonials.subtitle": "Узнайте от наших довольных клиентов об их опыте работы с нами.",
        "testimonials.testimonial1": "Работа с этой командой трансформировала наши бизнес-операции. Их опыт в IT-решениях не имеет себе равных.",
        "testimonials.testimonial2": "Предоставленные решения по кибербезопасности значительно улучшили защиту наших данных. Очень рекомендуем!",
        "testimonials.testimonial3": "Их услуги по цифровой трансформации помогли нам модернизировать нашу инфраструктуру и повысить эффективность.",

        // Partners Section
        "partners.title": "Наши Партнеры",
        "partners.subtitle": "Доверяют ведущие технологические партнеры по всему миру.",

        // Contact Section
        "contact.title": "Свяжитесь с Нами",
        "contact.subtitle": "Свяжитесь с нами, чтобы обсудить, как мы можем помочь трансформировать ваш бизнес.",
        "contact.getInTouch": "Связаться",
        "contact.description": "Мы будем рады услышать от вас. Давайте обсудим, как мы можем помочь трансформировать ваш бизнес.",
        "contact.emailUs": "Напишите Нам",
        "contact.callUs": "Позвоните Нам",
        "contact.name": "Имя",
        "contact.email": "Email",
        "contact.subject": "Тема",
        "contact.message": "Сообщение",
        "contact.send": "Отправить Сообщение",

        // Footer
        "footer.description": "Трансформируем бизнес через инновационные технологические решения.",
        "footer.copyright": "© 2024 IT Solutions. Все права защищены."
    }
}; 
// Language handling
let currentLang = 'en';

// Function to set language
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error('Language not found:', lang);
        return;
    }
    
    currentLang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update language selector text
    const languageDropdown = document.querySelector('#languageDropdown');
    if (languageDropdown) {
        languageDropdown.textContent = lang.toUpperCase();
    }

    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    // Check for stored language preference
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang && translations[storedLang]) {
        setLanguage(storedLang);
    }

    // Add click handlers for language selection
    document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            if (lang && translations[lang]) {
                setLanguage(lang);
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the form data to your server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert(currentLang === 'en' ? 'Message sent successfully!' : 
                  currentLang === 'az' ? 'Mesaj uğurla göndərildi!' : 
                  'Сообщение успешно отправлено!');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Add animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.solution-card, .service-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
}); 