import { guides } from '../data/guides-data.js';
import { t } from '../i18n.js';

function createGuideCard(guide) {
    return `
        <a href="#guide/${guide.id}" class="card">
            <img src="${guide.image}" alt="${t(guide.titleKey)}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${t(guide.titleKey)}</h3>
                <p class="card-description">${t(guide.summaryKey)}</p>
                <div class="card-tags">
                    ${guide.tagKeys.map(tag => `<span class="tag">${t(tag)}</span>`).join('')}
                </div>
            </div>
        </a>
    `;
}

function renderGuides(container, guidesToRender) {
     if (guidesToRender.length === 0) {
        container.innerHTML = `<p style="text-align: center;">${t('guides_no_results')}</p>`;
        return;
    }
    container.innerHTML = guidesToRender.map(createGuideCard).join('');
}

function filterGuides(searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = guides.filter(guide => 
        t(guide.titleKey).toLowerCase().includes(lowerCaseSearchTerm) ||
        t(guide.summaryKey).toLowerCase().includes(lowerCaseSearchTerm) ||
        guide.tagKeys.some(tag => t(tag).toLowerCase().includes(lowerCaseSearchTerm))
    );
    renderGuides(document.getElementById('guides-grid'), filtered);
}

export function renderGuidesPage(element) {
    element.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${t('guides_title')}</h1>
            <p>${t('guides_subtitle')}</p>
        </div>
        <div class="container">
            <div id="filters">
                <input type="text" id="guides-search-filter" placeholder="${t('guides_search_placeholder')}">
            </div>
            <div id="guides-grid" class="grid">
                <!-- Guides will be rendered here -->
            </div>
        </div>
    `;

    renderGuides(document.getElementById('guides-grid'), guides);

    document.getElementById('guides-search-filter').addEventListener('input', (e) => {
        filterGuides(e.target.value);
    });
}

