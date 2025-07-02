import { workouts } from '../data/workouts-data.js';
import { programs } from '../data/programs-data.js';
import { t } from '../i18n.js';

function createWorkoutCard(workout) {
    return `
        <a href="#workout/${workout.id}" class="card">
            <img src="${workout.image}" alt="${t(workout.titleKey)}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${t(workout.titleKey)}</h3>
                <p class="card-description">${t(workout.descriptionKey).substring(0, 100)}...</p>
                <div class="card-tags">
                    ${workout.tagKeys.map(tagKey => `<span class="tag">${t(tagKey)}</span>`).join('')}
                </div>
            </div>
        </a>
    `;
}

function createProgramCard(program) {
    return `
        <a href="#program/${program.id}" class="card">
            <img src="${program.image}" alt="${t(program.titleKey)}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${t(program.titleKey)}</h3>
                <p class="card-description">${t(program.descriptionKey).substring(0, 100)}...</p>
                <div class="card-tags">
                    <span class="tag">${t(program.difficultyKey)}</span>
                    <span class="tag">${t(program.goalKey)}</span>
                    <span class="tag">${program.duration} ${t('detail_days')}</span>
                </div>
            </div>
        </a>
    `;
}

function getWorkoutOfTheDay() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const index = dayOfYear % workouts.length;
    return workouts[index];
}

export function renderHomePage(element) {
    const featuredWorkouts = workouts.slice(0, 3);
    const featuredPrograms = programs.slice(0, 3);
    const wod = getWorkoutOfTheDay();

    element.innerHTML = `
        <div class="hero">
            <h1>${t('home_hero_title')}</h1>
            <p>${t('home_hero_subtitle')}</p>
            <a href="#workouts" class="btn">${t('home_hero_cta')}</a>
        </div>
        
        <div class="container">
            <section class="section">
                <h2 class="section-title">${t('home_wod_title')}</h2>
                <div class="wod-card-wrapper">
                    <a href="#workout/${wod.id}" class="card card-horizontal">
                        <img src="${wod.image}" alt="${t(wod.titleKey)}" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">${t(wod.titleKey)}</h3>
                            <p class="card-description">${t(wod.descriptionKey)}</p>
                            <div class="card-tags">
                                <span class="tag">${t(`difficulty_${wod.difficulty}`)}</span>
                                <span class="tag">${t(`type_${wod.type}`)}</span>
                                <span class="tag">${t(`equipment_${wod.equipment}`)}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">${t('home_latest_workouts_title')}</h2>
                <div class="grid">
                    ${featuredWorkouts.map(createWorkoutCard).join('')}
                </div>
            </section>

            <section class="section" style="background: var(--light-gray); padding: 4rem 1rem; border-radius: 8px;">
                <h2 class="section-title">${t('home_challenge_title')}</h2>
                <p style="max-width: 600px; margin: 0 auto 2rem auto;">${t('home_challenge_subtitle')}</p>
                <a href="#challenges" class="btn btn-secondary">${t('home_challenge_cta')}</a>
            </section>

            <section class="section">
                <h2 class="section-title">${t('home_popular_programs_title')}</h2>
                 <p style="max-width: 600px; margin: 0 auto 2rem auto;">${t('home_popular_programs_subtitle')}</p>
                <div class="grid">
                    ${featuredPrograms.map(createProgramCard).join('')}
                </div>
                <div style="text-align: center; margin-top: 2rem;">
                    <a href="#programs" class="btn">${t('home_popular_programs_cta')}</a>
                </div>
            </section>
        </div>
    `;
}