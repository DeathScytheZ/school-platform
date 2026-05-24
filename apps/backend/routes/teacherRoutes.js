const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/students/:teacherId', teacherController.getStudents);
router.get('/performance/:teacherId', teacherController.getPerformanceList);
router.get('/behavior/:teacherId', teacherController.getBehaviorList);
router.get('/grades/:teacherId', teacherController.getGradeList);
router.post('/performance', teacherController.setPerformance);
router.post('/behavior', teacherController.setBehavior);
router.post('/grade', teacherController.addGrade);

module.exports = router;
