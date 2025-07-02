import { challenges } from '../data/challenges-data.js';
import { t } from '../i18n.js';

function createChallengeCard(challenge) {
    return `
        <a href="#challenge/${challenge.id}" class="card">
            <img src="${challenge.image}" alt="${t(challenge.titleKey)}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${t(challenge.titleKey)}</h3>
                <p class="card-description">${t(challenge.descriptionKey)}</p>
                <div class="card-tags">
                    <span class="tag">${t(challenge.difficultyKey)}</span>
                    <span class="tag">${t(challenge.goalKey)}</span>
                    <span class="tag">${challenge.duration} ${t('detail_days')}</span>
                </div>
            </div>
        </a>
    `;
}

export function renderChallengesPage(element) {
    element.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${t('challenges_title')}</h1>
            <p>${t('challenges_subtitle')}</p>
        </div>
        <div class="container">
            <div id="challenge-grid" class="grid">
                ${challenges.map(createChallengeCard).join('')}
            </div>
        </div>
    `;
}

