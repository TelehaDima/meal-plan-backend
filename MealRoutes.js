const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal, editMeals } = require('./MealController');

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/deleteMeal', deleteMeal);
router.put('/editMeals', editMeals);


module.exports = router;