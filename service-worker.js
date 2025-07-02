const CACHE_NAME = 'bodivio-cache-v2'; // Cache version updated
const urlsToCache = [
    '.',
    'index.html',
    
    // Scripts
    'app.js',
    'search.js',
    'data/challenges-data.js',
    'data/guides-data.js',
    'data/nutrition-data.js',
    'data/programs-data.js',
    'data/workouts-data.js',
    'data/translations/en.js', // Added new translation file
    'data/translations/en/ui.js',
    'data/translations/en/pages.js',
    'data/translations/en/data-keys.js',
    'data/translations/en/workouts-data.js',
    'data/translations/en/programs-data.js',
    'data/translations/en/challenges-data.js',
    'data/translations/en/content-data.js',
    'data/translations/en/guides-data.js',
    'data/translations/ar.js', // Added new translation file
    'data/translations/bn.js', // Added new translation file
    'data/translations/hi.js', // Added new translation file
    'data/translations/ur.js', // Added new translation file
    'pages/about.js',
    'pages/challenge-detail.js',
    'pages/challenges.js',
    'pages/contact.js',
    'pages/guide-detail.js',
    'pages/guides.js',
    'pages/home.js',
    'pages/meal-plan-detail.js',
    'pages/nutrition.js',
    'pages/program-detail.js',
    'pages/programs.js',
    'pages/recipe-detail.js',
    'pages/workout-detail.js',
    'pages/workouts.js',

    // Styles
    'styles/main.css',
    'styles/base.css',
    'styles/responsive.css',
    'styles/components/card.css',
    'styles/components/day-card.css',
    'styles/components/detail-page.css',
    'styles/components/footer.css',
    'styles/components/header.css',
    'styles/components/page.css',
    'styles/components/search.css',
    'styles/pages/about.css',
    'styles/pages/challenge-detail.css',
    'styles/pages/contact.css',
    'styles/pages/guides.css',
    'styles/pages/home.css',
    'styles/pages/nutrition.css',

    // Images
    'logo.png',
    'icon-192x192.png',
    'icon-512x512.png',
    'about_collage_1.png',
    'about_collage_2.png',
    'about_collage_3.png',
    'about_hero.png',
    'about_quote_bg.png',
    'abs_workout.png',
    'boxer_workout.png',
    'cardio_workout.png',
    'challenge_abs.png',
    'challenge_pushup.png',
    'express_hiit_workout.png',
    'foundation_workout.png',
    'gladiator_workout.png',
    'guide_getting_started.png',
    'guide_injury_prevention.png',
    'guide_warmup_cooldown.png',
    'guide_workout_types.png',
    'kettlebell_workout.png',
    'lower_body_workout.png',
    'meal_plan_balanced.png',
    'meal_plan_muscle_gain.png',
    'meal_plan_weight_loss.png',
    'program_foundry.png',
    'program_spartan.png',
    'recipe_chicken_broccoli.png',
    'recipe_protein_smoothie.png',
    'recipe_quinoa_salad.png',
    'recovery_stretch_workout.png',
    'upper_body_workout.png',

    // Fonts
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&family=Lato:wght@400;700&display=swap',
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2',
    'https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHvxk.woff2'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                
                // Not in cache - fetch from network
                return fetch(event.request).then(
                    (response) => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic' && response.type !== 'cors') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                // We only cache GET requests
                                if(event.request.method === 'GET') {
                                    cache.put(event.request, responseToCache);
                                }
                            });

                        return response;
                    }
                );
            })
    );
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});