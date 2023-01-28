var express = require('express');
var router = express.Router();

// importation du controller
const workout = require('../controllers/workout')


router.post('/', workout.addWorkout);
router.get('/', workout.getWorkout);
router.get('/:id', workout.getOneWorkout);
router.delete('/:id', workout.deleteWork);
router.put('/:id', workout.updateWorkout);

module.exports = router;