import { workouts } from '../data/workouts-data.js';
import { t } from '../i18n.js';

let allWorkouts = [];
let currentFilters = {
    search: '',
    difficulty: 'all',
    type: 'all',
    equipment: 'all'
};

function createWorkoutCard(workout) {
    return `
        <a href="#workout/${workout.id}" class="card">
            <img src="${workout.image}" alt="${t(workout.titleKey)}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${t(workout.titleKey)}</h3>
                <div class="card-tags">
                    <span class="tag">${t(`difficulty_${workout.difficulty}`)}</span>
                    <span class="tag">${t(`type_${workout.type}`)}</span>
                    <span class="tag">${t(`equipment_${workout.equipment}`)}</span>
                </div>
            </div>
        </a>
    `;
}

function renderWorkouts(container, workoutsToRender) {
    if (workoutsToRender.length === 0) {
        container.innerHTML = `<p style="text-align: center;">${t('workouts_no_results')}</p>`;
        return;
    }
    container.innerHTML = workoutsToRender.map(createWorkoutCard).join('');
}

function applyFilters() {
    const workoutGrid = document.getElementById('workout-grid');
    
    let filteredWorkouts = allWorkouts.filter(workout => {
        const titleMatch = t(workout.titleKey).toLowerCase().includes(currentFilters.search.toLowerCase());
        const tagMatch = workout.tagKeys.some(tagKey => t(tagKey).toLowerCase().includes(currentFilters.search.toLowerCase()));
        const searchMatch = titleMatch || tagMatch;
        const difficultyMatch = currentFilters.difficulty === 'all' || workout.difficulty === currentFilters.difficulty;
        const typeMatch = currentFilters.type === 'all' || workout.type === currentFilters.type;
        const equipmentMatch = currentFilters.equipment === 'all' || workout.equipment === currentFilters.equipment;

        return searchMatch && difficultyMatch && typeMatch && equipmentMatch;
    });

    renderWorkouts(workoutGrid, filteredWorkouts);
}

function setupFilters() {
    document.getElementById('search-filter').addEventListener('input', e => {
        currentFilters.search = e.target.value;
        applyFilters();
    });
    document.getElementById('difficulty-filter').addEventListener('change', e => {
        currentFilters.difficulty = e.target.value;
        applyFilters();
    });
    document.getElementById('type-filter').addEventListener('change', e => {
        currentFilters.type = e.target.value;
        applyFilters();
    });
    document.getElementById('equipment-filter').addEventListener('change', e => {
        currentFilters.equipment = e.target.value;
        applyFilters();
    });
}

export function renderWorkoutsPage(element) {
    allWorkouts = [...workouts]; // Use the imported workouts data

    const uniqueTypes = ['all', ...new Set(allWorkouts.map(w => w.type))];
    const uniqueEquipment = ['all', ...new Set(allWorkouts.map(w => w.equipment))];

    element.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${t('workouts_title')}</h1>
            <p>${t('workouts_subtitle')}</p>
        </div>
        <div class="container">
            <div id="filters">
                <input type="text" id="search-filter" placeholder="${t('workouts_search_placeholder')}">
                <select id="difficulty-filter">
                    <option value="all">${t('workouts_filter_difficulty')}</option>
                    <option value="easy">${t('difficulty_easy')}</option>
                    <option value="medium">${t('difficulty_medium')}</option>
                    <option value="hard">${t('difficulty_hard')}</option>
                </select>
                <select id="type-filter">
                    <option value="all">${t('workouts_filter_type')}</option>
                    ${uniqueTypes.slice(1).map(type => `<option value="${type}">${t(`type_${type}`)}</option>`).join('')}
                </select>
                 <select id="equipment-filter">
                    <option value="all">${t('workouts_filter_equipment')}</option>
                    ${uniqueEquipment.slice(1).map(eq => `<option value="${eq}">${t(`equipment_${eq}`)}</option>`).join('')}
                </select>
            </div>
            <div id="workout-grid" class="grid">
                <!-- Workouts will be rendered here -->
            </div>
        </div>
    `;

    renderWorkouts(document.getElementById('workout-grid'), allWorkouts);
    setupFilters();
}