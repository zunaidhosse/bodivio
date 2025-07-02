import { t } from '../i18n.js';

export function renderAboutPage(element) {
    element.innerHTML = `
        <div class="about-page">
            <section class="about-hero">
                <div class="about-hero-content">
                    <h1>${t('about_hero_title')}</h1>
                    <p>${t('about_hero_subtitle')}</p>
                </div>
            </section>

            <section class="about-intro container">
                <h2 class="section-title">${t('about_section1_title')}</h2>
                <p class="section-subtitle">${t('about_section1_subtitle')}</p>
            </section>

            <section class="section features-section">
                <div class="container">
                    <h2 class="section-title">${t('about_section2_title')}</h2>
                    <div class="features-grid">
                        <div class="feature-item"><h3>${t('about_feature1_title')}</h3><p>${t('about_feature1_text')}</p></div>
                        <div class="feature-item"><h3>${t('about_feature2_title')}</h3><p>${t('about_feature2_text')}</p></div>
                        <div class="feature-item"><h3>${t('about_feature3_title')}</h3><p>${t('about_feature3_text')}</p></div>
                        <div class="feature-item"><h3>${t('about_feature4_title')}</h3><p>${t('about_feature4_text')}</p></div>
                        <div class="feature-item"><h3>${t('about_feature5_title')}</h3><p>${t('about_feature5_text')}</p></div>
                        <div class="feature-item"><h3>${t('about_feature6_title')}</h3><p>${t('about_feature6_text')}</p></div>
                    </div>
                </div>
            </section>
            
            <section class="section community-section container">
                 <h2 class="section-title">${t('about_mission_title')}</h2>
                 <p class="section-subtitle">${t('about_mission_subtitle')}</p>
                 
                 <h3 class="community-title">${t('about_community_title')}</h3>
                 <div class="collage-grid">
                    <img src="about_collage_1.png" alt="A woman jogging outdoors">
                    <img src="about_collage_2.png" alt="A man stretching indoors">
                    <img src="about_collage_3.png" alt="An older person lifting light weights">
                 </div>
            </section>

            <section class="quote-section">
                <div class="quote-content">
                    <p>${t('about_quote_pretext')}</p>
                    <blockquote>${t('about_quote_text')}</blockquote>
                </div>
            </section>
            
            <section class="section features-section founder-section">
                <div class="container">
                    <h2 class="section-title">${t('about_founder_title')}</h2>
                    <p class="section-subtitle">${t('about_founder_subtitle')}</p>
                    <div class="collage-grid">
                        <img src="about_collage_4.jpg" alt="Portrait of a team member" class="portrait">
                        <img src="about_collage_5.jpg" alt="Portrait of a team member" class="portrait">
                        <img src="about_collage_6.jpg" alt="Portrait of a team member" class="portrait">
                    </div>
                </div>
            </section>
            
            <section class="section container outro-section">
                <h2 class="section-title">${t('about_outro_title')}</h2>
                <p class="section-subtitle">${t('about_outro_subtitle')}</p>
                 <a href="#workouts" class="btn">${t('about_outro_cta')}</a>
            </section>
        </div>
    `;
}

