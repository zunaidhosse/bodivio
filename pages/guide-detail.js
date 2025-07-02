import { guides } from '../data/guides-data.js';
import { t } from '../i18n.js';

function createGuideCard(guide) {
    return `
        <a href="#guide/${guide.id}" class="card">
            <img src="${guide.image}" alt="${t(guide.titleKey)}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${t(guide.titleKey)}</h3>
                <div class="card-tags">
                    ${guide.tagKeys.map(tag => `<span class="tag">${t(tag)}</span>`).join('')}
                </div>
            </div>
        </a>
    `;
}

export function renderGuideDetailPage(element, id) {
    const guide = guides.find(g => g.id === id);

    if (!guide) {
        element.innerHTML = `<h1>${t('guide_not_found')}</h1><a href="#guides">${t('guide_back_link')}</a>`;
        return;
    }

    const relatedGuides = guides.filter(g => g.id !== id).slice(0, 3);

    element.innerHTML = `
        <div class="container">
            <div class="workout-detail-container article-container">
                <h1 class="workout-detail-title">${t(guide.titleKey)}</h1>
                <img src="${guide.image}" alt="${t(guide.titleKey)}" class="workout-detail-image">
                <div class="article-content">
                    ${t(guide.contentHTMLKey)}
                </div>
                <div class="action-buttons">
                    <a href="#guides" class="btn">${t('guide_back_link')}</a>
                </div>
            </div>

            <section class="section">
                <h2 class="section-title">${t('guide_more_guides')}</h2>
                <div class="grid">
                    ${relatedGuides.map(g => createGuideCard(g)).join('')}
                </div>
            </section>
        </div>
    `;
}