import { mealPlans } from '../data/nutrition-data.js';
import { t } from '../i18n.js';

function createDayCard(dayInfo) {
    return `
        <div class="meal-day-card">
            <div class="day-card-header">
                <span class="day-number">${t('program_day_card_day', {day: dayInfo.day})}</span>
            </div>
            <div class="meal-day-content">
                <p><strong>${t('meal_plan_breakfast')}</strong> ${t(dayInfo.breakfastKey)}</p>
                <p><strong>${t('meal_plan_lunch')}</strong> ${t(dayInfo.lunchKey)}</p>
                <p><strong>${t('meal_plan_dinner')}</strong> ${t(dayInfo.dinnerKey)}</p>
            </div>
        </div>
    `;
}

export function renderMealPlanDetailPage(element, id) {
    const plan = mealPlans.find(p => p.id === id);

    if (!plan) {
        element.innerHTML = `<h1>${t('meal_plan_not_found')}</h1><a href="#nutrition">${t('meal_plan_back_link')}</a>`;
        return;
    }

    element.innerHTML = `
        <div class="container">
            <div class="workout-detail-container">
                <h1 class="workout-detail-title">${t(plan.titleKey)}</h1>
                 <div class="workout-detail-info">
                    <div class="info-item">
                        <h4>${t('detail_goal')}</h4>
                        <p>${t(plan.goalKey)}</p>
                    </div>
                </div>
                <img src="${plan.image}" alt="${t(plan.titleKey)}" class="workout-detail-image">
                <div class="workout-instructions">
                    <h3>${t('meal_plan_overview')}</h3>
                    <p>${t(plan.descriptionKey)}</p>
                    <p><strong>${t('meal_plan_disclaimer')}</strong></p>
                </div>

                <div class="program-days">
                    ${plan.dailyPlan.map(dayInfo => createDayCard(dayInfo)).join('')}
                </div>

                 <div class="action-buttons">
                    <button class="btn" onclick="alert('PDF download coming soon!')">${t('detail_download_pdf')}</button>
                    <a href="#nutrition" class="btn btn-secondary">${t('meal_plan_back_link')}</a>
                </div>
            </div>
        </div>
    `;
}

