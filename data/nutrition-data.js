export const mealPlans = [
    {
        id: 'mp01',
        titleKey: 'mp01_title',
        descriptionKey: 'mp01_desc',
        goalKey: 'goal_weight_loss',
        image: 'meal_plan_weight_loss.png',
        dailyPlan: [
            { day: 1, breakfastKey: 'mp01_d1_breakfast', lunchKey: 'mp01_d1_lunch', dinnerKey: 'mp01_d1_dinner' },
            { day: 2, breakfastKey: 'mp01_d2_breakfast', lunchKey: 'mp01_d2_lunch', dinnerKey: 'mp01_d2_dinner' },
            { day: 3, breakfastKey: 'mp01_d3_breakfast', lunchKey: 'mp01_d3_lunch', dinnerKey: 'mp01_d3_dinner' },
            { day: 4, breakfastKey: 'mp01_d4_breakfast', lunchKey: 'mp01_d4_lunch', dinnerKey: 'mp01_d4_dinner' },
            { day: 5, breakfastKey: 'mp01_d5_breakfast', lunchKey: 'mp01_d5_lunch', dinnerKey: 'mp01_d5_dinner' },
            { day: 6, breakfastKey: 'mp01_d6_breakfast', lunchKey: 'mp01_d6_lunch', dinnerKey: 'mp01_d6_dinner' },
            { day: 7, breakfastKey: 'mp01_d7_breakfast', lunchKey: 'mp01_d7_lunch', dinnerKey: 'mp01_d7_dinner' },
        ]
    },
    {
        id: 'mp02',
        titleKey: 'mp02_title',
        descriptionKey: 'mp02_desc',
        goalKey: 'goal_muscle_gain',
        image: 'meal_plan_muscle_gain.png',
        dailyPlan: [
            { day: 1, breakfastKey: 'mp02_d1_breakfast', lunchKey: 'mp02_d1_lunch', dinnerKey: 'mp02_d1_dinner' },
            { day: 2, breakfastKey: 'mp02_d2_breakfast', lunchKey: 'mp02_d2_lunch', dinnerKey: 'mp02_d2_dinner' },
            { day: 3, breakfastKey: 'mp02_d3_breakfast', lunchKey: 'mp02_d3_lunch', dinnerKey: 'mp02_d3_dinner' },
            { day: 4, breakfastKey: 'mp02_d4_breakfast', lunchKey: 'mp02_d4_lunch', dinnerKey: 'mp02_d4_dinner' },
            { day: 5, breakfastKey: 'mp02_d5_breakfast', lunchKey: 'mp02_d5_lunch', dinnerKey: 'mp02_d5_dinner' },
            { day: 6, breakfastKey: 'mp02_d6_breakfast', lunchKey: 'mp02_d6_lunch', dinnerKey: 'mp02_d6_dinner' },
            { day: 7, breakfastKey: 'mp02_d7_breakfast', lunchKey: 'mp02_d7_lunch', dinnerKey: 'mp02_d7_dinner' },
        ]
    },
    {
        id: 'mp03',
        titleKey: 'mp03_title',
        descriptionKey: 'mp03_desc',
        goalKey: 'goal_balanced_diet',
        image: 'meal_plan_balanced.png',
        dailyPlan: [
            { day: 1, breakfastKey: 'mp03_d1_breakfast', lunchKey: 'mp03_d1_lunch', dinnerKey: 'mp03_d1_dinner' },
            { day: 2, breakfastKey: 'mp03_d2_breakfast', lunchKey: 'mp03_d2_lunch', dinnerKey: 'mp03_d2_dinner' },
            { day: 3, breakfastKey: 'mp03_d3_breakfast', lunchKey: 'mp03_d3_lunch', dinnerKey: 'mp03_d3_dinner' },
            { day: 4, breakfastKey: 'mp03_d4_breakfast', lunchKey: 'mp03_d4_lunch', dinnerKey: 'mp03_d4_dinner' },
            { day: 5, breakfastKey: 'mp03_d5_breakfast', lunchKey: 'mp03_d5_lunch', dinnerKey: 'mp03_d5_dinner' },
            { day: 6, breakfastKey: 'mp03_d6_breakfast', lunchKey: 'mp03_d6_lunch', dinnerKey: 'mp03_d6_dinner' },
            { day: 7, breakfastKey: 'mp03_d7_breakfast', lunchKey: 'mp03_d7_lunch', dinnerKey: 'mp03_d7_dinner' },
        ]
    }
];

export const recipes = [
    {
        id: 'r01',
        titleKey: 'r01_title',
        descriptionKey: 'r01_desc',
        image: 'recipe_chicken_broccoli.png',
        tagKeys: ['tag_high_protein', 'tag_dinner', 'tag_easy'],
        ingredientKeys: [
            'r01_ing1', 'r01_ing2', 'r01_ing3', 'r01_ing4', 'r01_ing5', 'r01_ing6', 'r01_ing7'
        ],
        instructionsHTMLKey: 'r01_instructions'
    },
    {
        id: 'r02',
        titleKey: 'r02_title',
        descriptionKey: 'r02_desc',
        image: 'recipe_quinoa_salad.png',
        tagKeys: ['tag_vegan', 'tag_lunch', 'tag_quick'],
        ingredientKeys: [
            'r02_ing1', 'r02_ing2', 'r02_ing3', 'r02_ing4', 'r02_ing5', 'r02_ing6', 'r02_ing7', 'r02_ing8'
        ],
        instructionsHTMLKey: 'r02_instructions'
    },
    {
        id: 'r03',
        titleKey: 'r03_title',
        descriptionKey: 'r03_desc',
        image: 'recipe_protein_smoothie.png',
        tagKeys: ['tag_breakfast', 'tag_post_workout', 'tag_drink'],
        ingredientKeys: [
            'r03_ing1', 'r03_ing2', 'r03_ing3', 'r03_ing4', 'r03_ing5', 'r03_ing6', 'r03_ing7'
        ],
        instructionsHTMLKey: 'r03_instructions'
    }
];

export const nutritionTips = [
    {
        titleKey: 'tip1_title',
        contentKey: 'tip1_content'
    },
    {
        titleKey: 'tip2_title',
        contentKey: 'tip2_content'
    },
    {
        titleKey: 'tip3_title',
        contentKey: 'tip3_content'
    },
    {
        titleKey: 'tip4_title',
        contentKey: 'tip4_content'
    },
    {
        titleKey: 'tip5_title',
        contentKey: 'tip5_content'
    }
];

export const faqs = [
    {
        questionKey: 'faq1_question',
        answerKey: 'faq1_answer'
    },
    {
        questionKey: 'faq2_question',
        answerKey: 'faq2_answer'
    },
    {
        questionKey: 'faq3_question',
        answerKey: 'faq3_answer'
    },
    {
        questionKey: 'faq4_question',
        answerKey: 'faq4_answer'
    }
];