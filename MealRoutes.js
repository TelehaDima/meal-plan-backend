const { Router } = require('express');
const { getMeal, saveMeals, deletedMeals, editMeals } = require('./MealController');

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.delete('/deletedMeals', deletedMeals);
router.put('/editMeals', editMeals);


module.exports = router;