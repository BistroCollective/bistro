const dictionary = {
    en: {
        "nav-home": "Home",
        "nav-events": "Events",
        "nav-about": "About us",
        "title-welcome": "Welcome to Bistro",
        "title-artists": "Artists Bistro believes in:",
        "footer-contacts": "Contacts:",
        "title-future-events": "Future Events",
        "title-bistro-lab": "Bistro",
        "title-our-story": "Who are we and what do we do?",
        "text-story-p1": "Bistro Collective is a self-managed cooperative that combines creativity, production, and culture.",
        "text-story-bullet1": "• Production | Mix | Recordings",
        "text-story-bullet2": "• Music Videos & Photo Sessions",
        "text-story-bullet3": "• Live Events & Culture",
        "text-story-p2": "With Bistro Lab we organize events and evenings, curating a selection of artists we believe in and creating real spaces for connection and experimentation.",
        "text-story-p3": "We operate between Romagna and Lombardia, building a network that connects territories, scenes, and people.",
        "text-story-p4": "We offer a recording and mixing room, providing a complete service: posters, websites, logos, covers, photoshoots, and music videos, all in a single package, designed to develop an artistic project at 360°.",
        "Coming-soon": "Other things coming soon..."
    },
    it: {
        "nav-home": "Home",
        "nav-events": "Eventi",
        "nav-about": "Chi siamo?",
        "title-welcome": "Benvenutə su Bistro",
        "title-artists": "Gli artisti in cui Bistro crede:",
        "footer-contacts": "Contatti:",
        "title-future-events": "Prossimi Eventi",
        "title-bistro-lab": "Bistro",
        "title-our-story": "Chi siamo e cosa facciamo?",
        "text-story-p1": "Collettivo bistro è una cooperativa autogestita che unisce creatività, produzione e cultura.",
        "text-story-bullet1": "• Produzione | Mix | Recordings",
        "text-story-bullet2": "• Music Videos & Photo Sessions",
        "text-story-bullet3": "• Live Events & Culture",
        "text-story-p2": "Con Bistro Lab organizziamo eventi e serate, curando una selezione di artisti in cui crediamo e creando spazi reali di connessione e sperimentazione.",
        "text-story-p3": "Operiamo tra la Romagna e la Lombardia, costruendo una rete che collega territori, scene e persone.",
        "text-story-p4": "Mettiamo a disposizione una sala per registrazione e mixing, offrendo un servizio completo: locandine, sito, loghi, copertine, photoshoot e videoclip, tutto in un unico pacchetto, pensato per sviluppare un progetto artistico a 360°.",
        "Coming-soon": "Altro in arrivo..."
    }
};

let currentLang = localStorage.getItem('lang') || 'it';

function toggleLang() {
    currentLang = currentLang === 'en' ? 'it' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLang();
}

function applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[currentLang] && dictionary[currentLang][key]) {
            el.textContent = dictionary[currentLang][key];
        }
    });

    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        btn.textContent = currentLang === 'en' ? 'IT' : 'EN';
    });
}

document.addEventListener('DOMContentLoaded', applyLang);
