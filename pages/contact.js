import { t } from '../i18n.js';

export function renderContactPage(element) {
    element.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${t('contact_title')}</h1>
            <p>${t('contact_subtitle')}</p>
        </div>
        <div class="container">
            <div class="contact-grid">
                <div class="contact-card">
                    <div class="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48"><path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path></svg>
                    </div>
                    <h3>${t('contact_email_title')}</h3>
                    <p>gnsesports.com@gmail.com</p>
                    <a href="mailto:gnsesports.com@gmail.com" class="btn">${t('contact_email_button')}</a>
                    <small>${t('contact_email_text')}</small>
                </div>

                <div class="contact-card">
                    <div class="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.1-.99-.49-1.148-.545s-.272-.085-.385.084-.433.545-.534.654-.197.119-.366.043c-.16-.084-.71-.265-1.365-.845-.51-.465-.855-1.04-.963-1.207-.119-.161-.012-.246.07-.33.072-.072.16-.196.228-.296.072-.119.09-.196.14-.33s.011-.246-.03-.33c-.051-.072-.385-.911-.522-1.246s-.26-.28-.385-.287c-.11-.007-.246-.007-.385-.007a.73.73 0 0 0-.529.246c-.182.196-.693.676-.693 1.654 0 .977.71 1.916.81 2.049.09.119 1.392 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.11-.943s-.182-.119-.365-.22" />
                        </svg>
                    </div>
                    <h3>${t('contact_whatsapp_title')}</h3>
                    <p>+966 058 199 1368</p>
                    <a href="https://wa.me/9660581991368" target="_blank" rel="noopener noreferrer" class="btn">${t('contact_whatsapp_button')}</a>
                    <small>${t('contact_whatsapp_text')}</small>
                </div>
            </div>

            <section class="section section-alt">
                 <h2 class="section-title">${t('contact_follow_title')}</h2>
                 <p class="section-subtitle">${t('contact_follow_subtitle')}</p>
                <div class="social-links-container">
                    <a href="https://facebook.com/Zunaid6472" target="_blank" rel="noopener noreferrer" class="social-link">
                        ${t('contact_social_facebook')}
                    </a>
                    <div class="social-link disabled">
                        ${t('contact_social_instagram')}
                    </div>
                    <div class="social-link disabled">
                        ${t('contact_social_twitter')}
                    </div>
                </div>
            </section>

             <section class="section">
                <div class="container">
                    <h2 class="section-title">${t('contact_hours_title')}</h2>
                    <div class="support-hours-content">
                        <p><strong>${t('contact_hours_days')}</strong></p>
                        <p class="hours-time">${t('contact_hours_time')}</p>
                        <p>${t('contact_hours_zone')}</p>
                    </div>
                </div>
            </section>
        </div>
    `;
}