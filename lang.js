const dictionary = {
    en: {
        "nav-home": "Home",
        "nav-events": "Events",
        "nav-about": "About us",
        "title-welcome": "Welcome to Bistrô",
        "title-artists": "Artists Bistrô believes in:",
        "footer-contacts": "Contacts:",
        "title-future-events": "Future Events",
        "title-bistro-lab": "Bistrô",
        "title-our-story": "Who are we and what do we do?",
        "text-story-p1": "Bistro Collective is a self-managed cooperative that combines creativity, production, and culture. We offer::",
        "text-story-bullet1": "• Production | Mix | Recordings",
        "text-story-bullet2": "• Music Videos & Photo Sessions",
        "text-story-bullet3": "• Live Events & Culture",
        "text-story-p3": "With Bistrô Lab we organize events and evenings, curating a selection of artists we believe in and creating real spaces for connection and experimentation.",
        "text-story-p2": "We operate between Romagna and Lombardia, building a network that connects territories, scenes, and people.",
        "text-story-p4": "We offer a recording and mixing room for an album or an EP, providing a complete service: posters, websites, logos, covers, photoshoots, and music videos, all in a single package, designed to develop an artistic project at 360°.",
        "Coming-soon": "Other things coming soon",
        "last-events": "Last events",
        "more-info": "More info here"
    },
    it: {
        "nav-home": "Home",
        "nav-events": "Eventi",
        "nav-about": "Chi siamo?",
        "title-welcome": "Benvenutə su Bistrô",
        "title-artists": "Gli artisti in cui Bistrô crede:",
        "footer-contacts": "Contatti:",
        "title-future-events": "Prossimi Eventi",
        "title-bistro-lab": "Bistrô",
        "title-our-story": "Chi siamo e cosa facciamo?",
        "text-story-p1": "Il collettivo Bistrô è una cooperativa autogestita che unisce creatività, produzione e cultura. Offriamo:",
        "text-story-bullet1": "• Produzione | Mix | Recordings",
        "text-story-bullet2": "• Music Videos & Photo Sessions",
        "text-story-bullet3": "• Live Events & Culture",
        "text-story-p3": "Con Bistrô Lab organizziamo eventi e serate, curando una selezione di artisti in cui crediamo e creando spazi reali di connessione e sperimentazione.",
        "text-story-p2": "Operiamo tra la Romagna e la Lombardia, costruendo una rete che collega territori, scene e persone.",
        "text-story-p4": "Mettiamo a disposizione una sala a Rimini per la registrazione e il mixing, per sviluppare un album o un EP, offrendo un servizio completo: locandine, sito, loghi, copertine, photoshoot, videoclip, registrazione e mixing, tutto in un unico pacchetto, pensato per sviluppare un progetto artistico a 360°.",
        "Coming-soon": "Altro in arrivo",
        "last-events": "Ultimi eventi",
        "more-info": "Più info qui"
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
