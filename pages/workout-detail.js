import { workouts } from '../data/workouts-data.js';
import { t } from '../i18n.js';

export function renderWorkoutDetailPage(element, id) {
    const workout = workouts.find(w => w.id === id);

    if (!workout) {
        element.innerHTML = `<h1>${t('workout_not_found')}</h1><a href="#workouts">${t('workout_back_link')}</a>`;
        return;
    }

    const relatedWorkouts = workouts.filter(
        w => w.id !== workout.id && w.type === workout.type
    ).slice(0, 3);

    element.innerHTML = `
        <div class="container">
            <div class="workout-detail-container">
                <h1 class="workout-detail-title">${t(workout.titleKey)}</h1>
                <div class="workout-detail-info">
                    <div class="info-item">
                        <h4>${t('detail_difficulty')}</h4>
                        <p>${t(`difficulty_${workout.difficulty}`)}</p>
                    </div>
                    <div class="info-item">
                        <h4>${t('detail_type')}</h4>
                        <p>${t(`type_${workout.type}`)}</p>
                    </div>
                    <div class="info-item">
                        <h4>${t('detail_equipment')}</h4>
                        <p>${t(`equipment_${workout.equipment}`)}</p>
                    </div>
                </div>
                <img src="${workout.image}" alt="${t(workout.titleKey)}" class="workout-detail-image">
                <div class="workout-instructions">
                    <h3>${t('workout_how_to')}</h3>
                    <p>${t(workout.descriptionKey)}</p>
                    <br>
                    ${t(workout.instructionsHTMLKey)}
                </div>
                <div class="action-buttons">
                    <button class="btn" onclick="alert('PDF download feature is coming soon!')">${t('detail_download_pdf')}</button>
                    <button class="btn btn-secondary" onclick="alert('\'Add to My Plan\' feature is coming soon!')">${t('detail_add_to_plan')}</button>
                </div>
            </div>
            
            <section class="section">
                <h2 class="section-title">${t('workout_related_workouts')}</h2>
                <div class="grid">
                    ${relatedWorkouts.map(w => `
                        <a href="#workout/${w.id}" class="card">
                            <img src="${w.image}" alt="${t(w.titleKey)}" class="card-image">
                            <div class="card-content">
                                <h3 class="card-title">${t(w.titleKey)}</h3>
                                <div class="card-tags">
                                    <span class="tag">${t(`difficulty_${w.difficulty}`)}</span>
                                    <span class="tag">${t(`type_${w.type}`)}</span>
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}