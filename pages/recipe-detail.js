import { recipes } from '../data/nutrition-data.js';
import { t } from '../i18n.js';

function createRecipeCard(recipe) {
    return `
        <a href="#recipe/${recipe.id}" class="card">
            <img src="${recipe.image}" alt="${t(recipe.titleKey)}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${t(recipe.titleKey)}</h3>
                <div class="card-tags">
                    ${recipe.tagKeys.map(tag => `<span class="tag">${t(tag)}</span>`).join('')}
                </div>
            </div>
        </a>
    `;
}


export function renderRecipeDetailPage(element, id) {
    const recipe = recipes.find(r => r.id === id);

    if (!recipe) {
        element.innerHTML = `<h1>${t('recipe_not_found')}</h1><a href="#nutrition">${t('recipe_back_link')}</a>`;
        return;
    }

    const relatedRecipes = recipes.filter(r => r.id !== id).slice(0, 3);

    element.innerHTML = `
        <div class="container">
            <div class="workout-detail-container article-container">
                <h1 class="workout-detail-title">${t(recipe.titleKey)}</h1>
                 <div class="workout-detail-info">
                    ${recipe.tagKeys.map(tag => `
                        <div class="info-item">
                            <p>${t(tag)}</p>
                        </div>
                    `).join('')}
                </div>
                <img src="${recipe.image}" alt="${t(recipe.titleKey)}" class="workout-detail-image">
                <div class="article-content">
                    <p><em>${t(recipe.descriptionKey)}</em></p>

                    <h3>${t('recipe_ingredients')}</h3>
                    <ul>
                        ${recipe.ingredientKeys.map(ingredientKey => `<li>${t(ingredientKey)}</li>`).join('')}
                    </ul>

                    <h3>${t('recipe_instructions')}</h3>
                    ${t(recipe.instructionsHTMLKey)}
                </div>
                <div class="action-buttons">
                    <a href="#nutrition" class="btn">${t('recipe_back_link')}</a>
                </div>
            </div>

            <section class="section">
                <h2 class="section-title">${t('recipe_more_recipes')}</h2>
                <div class="grid">
                    ${relatedRecipes.map(r => createRecipeCard(r)).join('')}
                </div>
            </section>
        </div>
    `;
}

