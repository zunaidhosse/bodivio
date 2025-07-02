let currentLang = 'en';
const translations = {}; // Cache for loaded languages
const listeners = [];

export function onLanguageChange(callback) {
    listeners.push(callback);
}

function notifyListeners() {
    listeners.forEach(listener => listener());
}

async function loadLanguage(lang) {
    if (translations[lang]) {
        // If it's already loaded but might be incomplete from a previous error
        if (Object.keys(translations[lang]).length > 0) {
            return;
        }
    }
    try {
        const module = await import(`./data/translations/${lang}.js`);
        translations[lang] = module[lang]; // e.g., module.en
    } catch (e) {
        console.error(`Could not load language: ${lang}`, e);
        // Fallback to English if the desired language fails to load
        if (lang !== 'en') {
            await loadLanguage('en');
        } else {
            // If English fails, we have a big problem.
            // Put a placeholder to avoid getting into a loop.
            translations['en'] = { 'error': 'Failed to load English translations.' };
        }
    }
}

export async function setLanguage(lang) {
    await loadLanguage(lang);
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    if (lang === 'ar' || lang === 'ur') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
    notifyListeners();
}

export function getLanguage() {
    return currentLang;
}

export function t(key, replacements = {}) {
    let translation = translations[currentLang]?.[key] || translations['en']?.[key] || key;
    
    for (const placeholder in replacements) {
        translation = translation.replace(`{${placeholder}}`, replacements[placeholder]);
    }

    return translation;
}