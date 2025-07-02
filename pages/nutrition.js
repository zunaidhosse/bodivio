import { mealPlans, recipes, nutritionTips, faqs } from '../data/nutrition-data.js';
import { t } from '../i18n.js';

function createMealPlanCard(plan) {
    return `
        <a href="#meal-plan/${plan.id}" class="card">
            <img src="${plan.image}" alt="${t(plan.titleKey)}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${t(plan.titleKey)}</h3>
                <p class="card-description">${t(plan.descriptionKey)}</p>
                <div class="card-tags">
                    <span class="tag">${t(plan.goalKey)}</span>
                </div>
            </div>
        </a>
    `;
}

function createRecipeCard(recipe) {
    return `
        <a href="#recipe/${recipe.id}" class="card">
            <img src="${recipe.image}" alt="${t(recipe.titleKey)}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${t(recipe.titleKey)}</h3>
                <p class="card-description">${t(recipe.descriptionKey)}</p>
                 <div class="card-tags">
                    ${recipe.tagKeys.map(tag => `<span class="tag">${t(tag)}</span>`).join('')}
                </div>
            </div>
        </a>
    `;
}

function createTipCard(tip) {
    return `
        <div class="tip-card">
            <h4>${t(tip.titleKey)}</h4>
            <p>${t(tip.contentKey)}</p>
        </div>
    `;
}

function createFaqItem(faq) {
    return `
        <details class="faq-item">
            <summary class="faq-question">${t(faq.questionKey)}</summary>
            <div class="faq-answer">
                <p>${t(faq.answerKey)}</p>
            </div>
        </details>
    `;
}

export function renderNutritionPage(element) {
    element.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${t('nutrition_title')}</h1>
            <p>${t('nutrition_subtitle')}</p>
        </div>
        <div class="container">
            <section class="section">
                <h2 class="section-title">${t('nutrition_meal_plans_title')}</h2>
                <p class="section-subtitle">${t('nutrition_meal_plans_subtitle')}</p>
                <div id="meal-plan-grid" class="grid">
                    ${mealPlans.map(createMealPlanCard).join('')}
                </div>
            </section>

            <section class="section section-alt">
                <h2 class="section-title">${t('nutrition_recipes_title')}</h2>
                <p class="section-subtitle">${t('nutrition_recipes_subtitle')}</p>
                <div id="recipe-grid" class="grid">
                    ${recipes.map(createRecipeCard).join('')}
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">${t('nutrition_tips_title')}</h2>
                <p class="section-subtitle">${t('nutrition_tips_subtitle')}</p>
                <div class="grid-col-2">
                    ${nutritionTips.map(createTipCard).join('')}
                </div>
            </section>
            
            <section class="section section-alt">
                <h2 class="section-title">${t('nutrition_faq_title')}</h2>
                <p class="section-subtitle">${t('nutrition_faq_subtitle')}</p>
                <div class="faq-container">
                    ${faqs.map(createFaqItem).join('')}
                </div>
            </section>
        </div>
    `;
}

