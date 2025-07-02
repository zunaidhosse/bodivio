import { programs } from '../data/programs-data.js';
import { workouts } from '../data/workouts-data.js';
import { t } from '../i18n.js';

let programProgress = {};

function loadProgress(programId) {
    const savedProgress = localStorage.getItem(`progress_${programId}`);
    programProgress = savedProgress ? JSON.parse(savedProgress) : {};
}

function saveProgress(programId) {
    localStorage.setItem(`progress_${programId}`, JSON.stringify(programProgress));
}

function handleCheckboxChange(e, programId) {
    const day = e.target.dataset.day;
    const card = e.target.closest('.day-card');
    if (e.target.checked) {
        programProgress[day] = true;
        card.classList.add('completed');
    } else {
        delete programProgress[day];
        card.classList.remove('completed');
    }
    saveProgress(programId);
    updateProgressBar(programId);
}

function createDayCard(dayInfo, programId) {
    const isRestDay = dayInfo.workoutId === 'rest';
    const workout = isRestDay ? null : workouts.find(w => w.id === dayInfo.workoutId);
    const isCompleted = programProgress[dayInfo.day];

    return `
        <div class="day-card ${isRestDay ? 'rest-day' : ''} ${isCompleted ? 'completed' : ''}">
            <div class="day-card-header">
                <span class="day-number">${t('program_day_card_day', {day: dayInfo.day})}</span>
                ${!isRestDay && workout ? `<span class="day-title">${t(workout.titleKey)}</span>` : ''}
            </div>
            <div class="day-card-content">
                ${isRestDay ? t('program_day_card_rest') : 
                    workout ? `<a href="#workout/${workout.id}">${t('program_day_card_view_workout')}</a>` : 
                    t('program_day_card_not_found')
                }
            </div>
            <div class="day-card-footer">
                <input type="checkbox" id="day-${dayInfo.day}" data-day="${dayInfo.day}" ${isCompleted ? 'checked' : ''}>
                <label for="day-${dayInfo.day}">${t('program_day_card_mark_complete')}</label>
            </div>
        </div>
    `;
}

function updateProgressBar(programId) {
    const program = programs.find(p => p.id === programId);
    if (!program) return;

    const totalDays = program.duration;
    const completedDays = Object.keys(programProgress).length;
    const progressPercentage = (completedDays / totalDays) * 100;

    const progressBarFill = document.querySelector('.progress-bar-fill');
    const progressText = document.querySelector('.progress-text');

    if (progressBarFill) {
        progressBarFill.style.width = `${progressPercentage}%`;
    }
    if (progressText) {
        progressText.textContent = t('program_progress_text', {completed: completedDays, total: totalDays});
    }
}

export function renderProgramDetailPage(element, id) {
    const program = programs.find(p => p.id === id);

    if (!program) {
        element.innerHTML = `<h1>${t('program_not_found')}</h1><a href="#programs">${t('program_back_link')}</a>`;
        return;
    }
    
    loadProgress(id);

    element.innerHTML = `
        <div class="container">
            <div class="workout-detail-container">
                <h1 class="workout-detail-title">${t(program.titleKey)}</h1>
                 <div class="workout-detail-info">
                    <div class="info-item">
                        <h4>${t('detail_goal')}</h4>
                        <p>${t(program.goalKey)}</p>
                    </div>
                    <div class="info-item">
                        <h4>${t('detail_difficulty')}</h4>
                        <p>${t(program.difficultyKey)}</p>
                    </div>
                    <div class="info-item">
                        <h4>${t('detail_duration')}</h4>
                        <p>${program.duration} ${t('detail_days')}</p>
                    </div>
                </div>
                <img src="${program.image}" alt="${t(program.titleKey)}" class="workout-detail-image">
                <div class="workout-instructions">
                    <h3>${t('program_overview')}</h3>
                    <p>${t(program.descriptionKey)}</p>
                </div>

                <div class="progress-section">
                    <h3>${t('program_progress_title')}</h3>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill"></div>
                    </div>
                    <p class="progress-text">${t('program_progress_text', {completed: 0, total: program.duration})}</p>
                </div>

                <div class="program-days">
                    ${program.days.map(dayInfo => createDayCard(dayInfo, program.id)).join('')}
                </div>

                 <div class="action-buttons">
                    <a href="#programs" class="btn">${t('program_back_link')}</a>
                </div>
            </div>
        </div>
    `;

    updateProgressBar(id);

    element.querySelectorAll('.day-card-footer input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => handleCheckboxChange(e, program.id));
    });
}