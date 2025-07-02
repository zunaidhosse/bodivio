import { renderHomePage } from './pages/home.js';
import { renderWorkoutsPage } from './pages/workouts.js';
import { renderWorkoutDetailPage } from './pages/workout-detail.js';
import { renderProgramsPage } from './pages/programs.js';
import { renderProgramDetailPage } from './pages/program-detail.js';
import { renderChallengesPage } from './pages/challenges.js';
import { renderChallengeDetailPage } from './pages/challenge-detail.js';
import { renderNutritionPage } from './pages/nutrition.js';
import { renderMealPlanDetailPage } from './pages/meal-plan-detail.js';
import { renderRecipeDetailPage } from './pages/recipe-detail.js';
import { renderGuidesPage } from './pages/guides.js';
import { renderGuideDetailPage } from './pages/guide-detail.js';
import { renderAboutPage } from './pages/about.js';
import { renderContactPage } from './pages/contact.js';
import { performSearch } from './search.js';
import { setLanguage, t, getLanguage, onLanguageChange } from './i18n.js';

const appRoot = document.getElementById('app-root');
const navLinks = document.querySelectorAll('.nav-link');
const navLinksContainer = document.getElementById('nav-menu-main');
const footerContainer = document.getElementById('footer');

const routes = {
    '': renderHomePage,
    'home': renderHomePage,
    'workouts': renderWorkoutsPage,
    'workout': renderWorkoutDetailPage, // Expects an id, e.g., #workout/w01
    'programs': renderProgramsPage,
    'program': renderProgramDetailPage,
    'challenges': renderChallengesPage,
    'challenge': renderChallengeDetailPage,
    'nutrition': renderNutritionPage,
    'meal-plan': renderMealPlanDetailPage,
    'recipe': renderRecipeDetailPage,
    'guides': renderGuidesPage,
    'guide': renderGuideDetailPage,
    'about': renderAboutPage,
    'contact': renderContactPage,
};

function updateNavAndFooter() {
    // Update Nav
    const navItems = [
        { href: '#workouts', key: 'nav_workouts' },
        { href: '#programs', key: 'nav_programs' },
        { href: '#challenges', key: 'nav_challenges' },
        { href: '#nutrition', key: 'nav_nutrition' },
        { href: '#guides', key: 'nav_guides' },
        { href: '#about', key: 'nav_about' },
        { href: '#contact', key: 'nav_contact' },
    ];
    const currentPath = window.location.hash.slice(1).split('/')[0];
    navLinksContainer.innerHTML = navItems.map(item => `
        <li class="nav-item">
            <a href="${item.href}" class="nav-link ${item.href === `#${currentPath}` ? 'active' : ''}">${t(item.key)}</a>
        </li>
    `).join('');

    // Update Footer
    footerContainer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section about">
                <h1 class="logo-text"><span>Bodi</span>vio</h1>
                <p>${t('footer_about_text')}</p>
                <div class="contact">
                    <span><i class="fas fa-envelope"></i> &nbsp; contact@bodivio.apps</span>
                </div>
                <div class="socials">
                    <a href="https://facebook.com/Zunaid6472" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1h8V15H10V12h2V9.5C12,7.57,13.57,6,15.5,6H18v3h-2c-.55,0-1,.45-1,1V12h3l-.5,3H15v6h5a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3Z"></path></svg>
                    </a>
                     <a href="https://github.com/zunaid-b" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10,0,0,0,2,12c0,4.42,2.87,8.17,6.84,9.5.5.09.68-.22.68-.48s0-.85,0-1.65c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6,1,.07,1.53,1.03,1.53,1.03.89,1.53,2.34,1.09,2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95,0-1.1.39-1.99,1.03-2.69-.1-.25-.45-1.27.1-2.65,0,0,.84-.27,2.75,1.02.79-.22,1.65-.33,2.5-.33s1.71.11,2.5.33c1.91-1.29,2.75-1.02,2.75-1.02.55,1.38.2,2.4.1,2.65.64.7,1.03,1.59,1.03,2.69,0,3.85-2.34,4.7-4.57,4.95.36.31.68.92.68,1.85,0,1.34,0,2.42,0,2.75,0,.27.18.58.69.48A10,10,0,0,0,22,12,10,10,0,0,0,12,2Z"></path></svg>
                    </a>
                </div>
            </div>
            <div class="footer-section links">
                <h2>${t('footer_quick_links')}</h2>
                <br>
                <ul>
                    ${navItems.filter(i => i.key !== 'nav_contact').map(item => `<li><a href="${item.href}">${t(item.key)}</a></li>`).join('')}
                </ul>
            </div>
            <div class="footer-section contact-form">
                <h2>${t('footer_contact_us')}</h2>
                <br>
                <form id="footer-contact-form" action="#" method="post">
                    <input type="email" id="footer-contact-email" name="email" class="text-input contact-input" placeholder="${t('footer_form_email_placeholder')}">
                    <textarea rows="4" id="footer-contact-message" name="message" class="text-input contact-input" placeholder="${t('footer_form_message_placeholder')}"></textarea>
                    <button type="submit" class="btn btn-primary">${t('footer_form_send_button')}</button>
                </form>
            </div>
        </div>
        <div class="footer-bottom">${t('footer_copyright')}</div>
    `;
    setupFooterContactForm(); // Re-attach listener
}

function router() {
    const hash = window.location.hash.slice(1);
    const [path, id] = hash.split('/');
    const route = routes[path] || notFound;
    
    // Clear previous content
    appRoot.innerHTML = '';

    // Render new content
    route(appRoot, id);
    
    // Update active nav link and footer
    updateNavAndFooter();
    
    // Close mobile menu on navigation
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('active');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.remove('active');

    // Close search on navigation
    const searchOverlay = document.getElementById('search-overlay');
    searchOverlay.classList.remove('active');
}

function notFound(element) {
    element.innerHTML = `<h1>404 - ${t('page_not_found')}</h1>`;
}

// Language Switcher
function setupLanguageSwitcher() {
    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('active');
    });

    langMenu.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.closest('a[data-lang]');
        if (target) {
            const lang = target.getAttribute('data-lang');
            setLanguage(lang); // This is now async
            langMenu.classList.remove('active');
        }
    });

    document.addEventListener('click', () => {
        langMenu.classList.remove('active');
    });
}

// Dark Mode Toggle
function setupDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if ((savedTheme === 'dark') || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    toggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}

// Mobile Menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Search Overlay
function setupSearch() {
    const searchBtn = document.getElementById('search-btn');
    const closeSearchBtn = document.getElementById('close-search');
    const searchOverlay = document.getElementById('search-overlay');

    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
        }
    });
    closeSearchBtn.addEventListener('click', () => searchOverlay.classList.remove('active'));

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results');

    if (searchForm && searchInput && searchResultsContainer) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value;
            if (query.trim()) {
                performSearch(query, searchResultsContainer);
            }
        });
        
        searchInput.addEventListener('input', () => {
            const query = searchInput.value;
            if (query.trim().length > 2) {
                performSearch(query, searchResultsContainer);
            } else {
                searchResultsContainer.innerHTML = '';
            }
        });
    }

    // Set placeholder text
    const searchInputElem = document.getElementById('search-input');
    if (searchInputElem) {
        searchInputElem.placeholder = t('search_placeholder');
    }
}

// Footer Contact Form
function setupFooterContactForm() {
    const form = document.getElementById('footer-contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const userEmailInput = document.getElementById('footer-contact-email');
            const messageInput = document.getElementById('footer-contact-message');

            const userEmail = userEmailInput.value;
            const message = messageInput.value;

            const recipientEmail = 'gnsesports.com@gmail.com';
            const subject = t('footer_contact_subject');

            const body = `${t('footer_contact_body_from')} ${userEmail}\n\n${message}`;

            const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;

            // Clear the form after submission
            userEmailInput.value = '';
            messageInput.value = '';
        });
    }
}

// PWA Installation
let deferredPrompt;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    installBtn.hidden = false;

    installBtn.addEventListener('click', () => {
        // hide our user interface that shows our A2HS button
        installBtn.hidden = true;
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
}

function updateAriaLabels() {
    document.getElementById('lang-btn')?.setAttribute('aria-label', t('aria_choose_language'));
    document.getElementById('install-btn')?.setAttribute('aria-label', t('aria_install_app'));
    document.getElementById('search-btn')?.setAttribute('aria-label', t('aria_search'));
    document.getElementById('dark-mode-toggle')?.setAttribute('aria-label', t('aria_toggle_dark_mode'));
    document.querySelector('.hamburger')?.setAttribute('aria-label', t('aria_open_menu'));
}

// Initialize language from storage
const savedLang = localStorage.getItem('lang') || 'en';
setLanguage(savedLang);

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.location.hash = '#home';
    }
    router();
    setupDarkMode();
    setupMobileMenu();
    setupSearch();
    setupLanguageSwitcher();
    updateAriaLabels();
    registerServiceWorker();
});

onLanguageChange(() => {
    router();
    setupSearch(); // To update placeholder text
    updateAriaLabels();
});