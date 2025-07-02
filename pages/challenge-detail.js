import { challenges } from '../data/challenges-data.js';
import { t } from '../i18n.js';

let challengeProgress = {};

function loadProgress(challengeId) {
    const savedProgress = localStorage.getItem(`progress_${challengeId}`);
    challengeProgress = savedProgress ? JSON.parse(savedProgress) : {};
}

function saveProgress(challengeId) {
    localStorage.setItem(`progress_${challengeId}`, JSON.stringify(challengeProgress));
}

function handleCheckboxChange(e, challengeId) {
    const day = e.target.dataset.day;
    const card = e.target.closest('.day-card');
    if (e.target.checked) {
        challengeProgress[day] = true;
        card.classList.add('completed');
    } else {
        delete challengeProgress[day];
        card.classList.remove('completed');
    }
    saveProgress(challengeId);
    updateProgressBar(challengeId);
}

function createDayCard(dayInfo, challengeId) {
    const isRestDay = dayInfo.taskKey === 'rest';
    const isCompleted = challengeProgress[dayInfo.day];
    const taskText = isRestDay ? t('challenge_rest_day') : t(dayInfo.taskKey);

    return `
        <div class="day-card ${isRestDay ? 'rest-day' : ''} ${isCompleted ? 'completed' : ''}">
            <div class="day-card-header">
                <span class="day-number">${t('program_day_card_day', {day: dayInfo.day})}</span>
                <span class="day-title">${taskText}</span>
            </div>
            <div class="day-card-footer">
                <input type="checkbox" id="day-${dayInfo.day}" data-day="${dayInfo.day}" ${isCompleted ? 'checked' : ''}>
                <label for="day-${dayInfo.day}">${t('program_day_card_mark_complete')}</label>
            </div>
        </div>
    `;
}

function updateProgressBar(challengeId) {
    const challenge = challenges.find(c => c.id === challengeId);
    if (!challenge) return;

    const totalDays = challenge.duration;
    const completedDays = Object.keys(challengeProgress).length;
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

export function renderChallengeDetailPage(element, id) {
    const challenge = challenges.find(p => p.id === id);

    if (!challenge) {
        element.innerHTML = `<h1>${t('challenge_not_found')}</h1><a href="#challenges">${t('challenge_back_link')}</a>`;
        return;
    }
    
    loadProgress(id);

    element.innerHTML = `
        <div class="container">
            <div class="workout-detail-container">
                <h1 class="workout-detail-title">${t(challenge.titleKey)}</h1>
                 <div class="workout-detail-info">
                    <div class="info-item">
                        <h4>${t('detail_goal')}</h4>
                        <p>${t(challenge.goalKey)}</p>
                    </div>
                    <div class="info-item">
                        <h4>${t('detail_difficulty')}</h4>
                        <p>${t(challenge.difficultyKey)}</p>
                    </div>
                    <div class="info-item">
                        <h4>${t('detail_duration')}</h4>
                        <p>${challenge.duration} ${t('detail_days')}</p>
                    </div>
                </div>
                <img src="${challenge.image}" alt="${t(challenge.titleKey)}" class="workout-detail-image">
                <div class="workout-instructions">
                    <h3>${t('challenge_overview')}</h3>
                    <p>${t(challenge.descriptionKey)}</p>
                </div>

                <div class="progress-section">
                    <h3>${t('program_progress_title')}</h3>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill"></div>
                    </div>
                    <p class="progress-text">${t('program_progress_text', {completed: 0, total: challenge.duration})}</p>
                </div>

                <div class="program-days">
                    ${challenge.schedule.map(dayInfo => createDayCard(dayInfo, challenge.id)).join('')}
                </div>

                 <div class="action-buttons">
                    <a href="#challenges" class="btn">${t('challenge_back_link')}</a>
                </div>
            </div>
        </div>
    `;

    updateProgressBar(id);

    element.querySelectorAll('.day-card-footer input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => handleCheckboxChange(e, challenge.id));
    });
}