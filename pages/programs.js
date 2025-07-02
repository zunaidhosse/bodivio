import { programs } from '../data/programs-data.js';
import { t } from '../i18n.js';

function createProgramCard(program) {
    return `
        <a href="#program/${program.id}" class="card">
            <img src="${program.image}" alt="${t(program.titleKey)}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${t(program.titleKey)}</h3>
                <p class="card-description">${t(program.descriptionKey)}</p>
                <div class="card-tags">
                    <span class="tag">${t(program.difficultyKey)}</span>
                    <span class="tag">${t(program.goalKey)}</span>
                    <span class="tag">${program.duration} ${t('detail_days')}</span>
                </div>
            </div>
        </a>
    `;
}

export function renderProgramsPage(element) {
    element.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${t('programs_title')}</h1>
            <p>${t('programs_subtitle')}</p>
        </div>
        <div class="container">
            <div id="program-grid" class="grid">
                ${programs.map(createProgramCard).join('')}
            </div>
        </div>
    `;
}

