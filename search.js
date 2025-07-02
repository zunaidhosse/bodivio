import { workouts } from './data/workouts-data.js';
import { programs } from './data/programs-data.js';
import { challenges } from './data/challenges-data.js';
import { guides } from './data/guides-data.js';
import { t } from './i18n.js';

const allContent = [
    ...workouts.map(item => ({ ...item, type: 'workout', link: `#workout/${item.id}` })),
    ...programs.map(item => ({ ...item, type: 'program', link: `#program/${item.id}` })),
    ...challenges.map(item => ({ ...item, type: 'challenge', link: `#challenge/${item.id}` })),
    ...guides.map(item => ({ ...item, type: 'guide', link: `#guide/${item.id}` }))
];

function createSearchResult(item) {
    const typeText = t(`search_result_type_${item.type}`);
    const title = item.titleKey ? t(item.titleKey) : item.title;
    const descriptionKey = item.descriptionKey || item.summaryKey;
    const description = descriptionKey ? t(descriptionKey) : '';

    return `
        <a href="${item.link}" class="search-result-item">
            <img src="${item.image}" alt="${title}">
            <div class="search-result-info">
                <h4>${title}</h4>
                <p><strong>${typeText}</strong> - ${description.substring(0, 100)}...</p>
            </div>
        </a>
    `;
}

export function performSearch(query, container) {
    const lowerCaseQuery = query.toLowerCase();

    const results = allContent.map(item => {
        // Create a searchable text string for each item in the current language
        const title = item.titleKey ? t(item.titleKey) : item.title;
        const descriptionKey = item.descriptionKey || item.summaryKey;
        const description = descriptionKey ? t(descriptionKey) : '';
        
        let tags = [];
        if (item.tagKeys) {
            tags = item.tagKeys.map(tagKey => t(tagKey));
        }

        const searchableText = `${title} ${description} ${tags.join(' ')}`.toLowerCase();
        
        return { ...item, searchableText };

    }).filter(item => 
        item.searchableText.includes(lowerCaseQuery)
    ).slice(0, 10); // Limit to 10 results for performance

    if (results.length > 0) {
        container.innerHTML = results.map(createSearchResult).join('');
    } else {
        container.innerHTML = `<p style="color: white; text-align: center;">${t('search_no_results', { query })}</p>`;
    }
}