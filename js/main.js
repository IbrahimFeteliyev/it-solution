// Language translations
const translations = {
    en: {
        'hero.title': 'Innovative IT Solutions for Your Business',
        'hero.subtitle': 'Transform your business with cutting-edge technology solutions',
        'solutions.title': 'Our Solutions',
        'solutions.bi': 'BI & Analytics',
        'solutions.bi-desc': 'Transform your data into actionable insights',
        'solutions.cybersecurity': 'Cybersecurity',
        'solutions.cybersecurity-desc': 'Protect your digital assets',
        'solutions.collaboration': 'Collaboration',
        'solutions.collaboration-desc': 'Enhance team productivity',
        'services.title': 'Our Services',
        'services.software': 'Software Development',
        'services.software-desc': 'Custom software solutions for your business',
        'services.consulting': 'Consulting Services',
        'services.consulting-desc': 'Expert guidance for your IT needs',
        'services.digital': 'Digital Transformation',
        'services.digital-desc': 'Modernize your business processes',
        'partners.title': 'Our Partners',
        'contact.title': 'Contact Us',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.subject': 'Subject',
        'contact.message': 'Message',
        'contact.submit': 'Send Message'
    },
    az: {
        'hero.title': 'Biznesiniz üçün İnnovativ İT Həlləri',
        'hero.subtitle': 'Müasir texnologiya həlləri ilə biznesinizi transformasiya edin',
        'solutions.title': 'Həllərimiz',
        'solutions.bi': 'BI & Analitika',
        'solutions.bi-desc': 'Məlumatlarınızı faydalı məlumatlara çevirin',
        'solutions.cybersecurity': 'Kibertəhlükəsizlik',
        'solutions.cybersecurity-desc': 'Rəqəmsal aktivlərinizi qoruyun',
        'solutions.collaboration': 'Əməkdaşlıq',
        'solutions.collaboration-desc': 'Komanda məhsuldarlığını artırın',
        'services.title': 'Xidmətlərimiz',
        'services.software': 'Proqram Təminatı İnkişafı',
        'services.software-desc': 'Biznesiniz üçün xüsusi proqram həlləri',
        'services.consulting': 'Konsaltinq Xidmətləri',
        'services.consulting-desc': 'İT ehtiyaclarınız üçün ekspert rəhbərliyi',
        'services.digital': 'Rəqəmsal Transformasiya',
        'services.digital-desc': 'Biznes proseslərinizi modernləşdirin',
        'partners.title': 'Tərəfdaşlarımız',
        'contact.title': 'Bizimlə Əlaqə',
        'contact.name': 'Ad',
        'contact.email': 'E-poçt',
        'contact.subject': 'Mövzu',
        'contact.message': 'Mesaj',
        'contact.submit': 'Mesaj Göndər'
    },
    ru: {
        'hero.title': 'Инновационные ИТ-решения для вашего бизнеса',
        'hero.subtitle': 'Трансформируйте свой бизнес с помощью передовых технологических решений',
        'solutions.title': 'Наши Решения',
        'solutions.bi': 'BI & Аналитика',
        'solutions.bi-desc': 'Превратите ваши данные в полезную информацию',
        'solutions.cybersecurity': 'Кибербезопасность',
        'solutions.cybersecurity-desc': 'Защитите ваши цифровые активы',
        'solutions.collaboration': 'Сотрудничество',
        'solutions.collaboration-desc': 'Повысьте продуктивность команды',
        'services.title': 'Наши Услуги',
        'services.software': 'Разработка ПО',
        'services.software-desc': 'Индивидуальные программные решения для вашего бизнеса',
        'services.consulting': 'Консалтинговые Услуги',
        'services.consulting-desc': 'Экспертное руководство для ваших ИТ-потребностей',
        'services.digital': 'Цифровая Трансформация',
        'services.digital-desc': 'Модернизируйте ваши бизнес-процессы',
        'partners.title': 'Наши Партнеры',
        'contact.title': 'Свяжитесь с Нами',
        'contact.name': 'Имя',
        'contact.email': 'Эл. почта',
        'contact.subject': 'Тема',
        'contact.message': 'Сообщение',
        'contact.submit': 'Отправить Сообщение'
    }
};

// Current language
let currentLang = 'en';

// Function to change language
function changeLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update language selector text
    document.querySelector('#languageDropdown').innerHTML = `<i class="fas fa-globe"></i> ${lang.toUpperCase()}`;
    
    // Save language preference
    localStorage.setItem('preferred-lang', lang);
}

// Initialize language from localStorage or default to English
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    changeLang(savedLang);
    
    // Add click event listeners to language selector
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            changeLang(lang);
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
            // Add your form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
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