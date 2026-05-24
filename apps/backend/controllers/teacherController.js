const {schoolDb} = require('../config/db');
const {Performance} = require('../models/Performance');
const {Behavior} = require('../models/Behavior');
const {Grade} = require('../models/Grade');

const subjectToGradeType = (subject) => {
    const normalizedType = {
        'school-teacher': 'school',
        'sports-coach': 'sport'
    }[subject] || subject;

    return ['school', 'quran', 'sport'].includes(normalizedType) ? normalizedType : null;
};

const getTeacherByIdOrAccountId = async (id) => {
    const [rows] = await schoolDb.execute(
        `SELECT teachers.id,
                teachers.subject,
                CASE WHEN users.account_id = ? THEN 0 ELSE 1 END AS match_priority
         FROM teachers
         JOIN users ON teachers.user_id = users.id
         WHERE teachers.id = ? OR users.account_id = ?
         ORDER BY match_priority
         LIMIT 1`,
        [id, id, id]
    );
    return rows[0] || null;
};

const getTeacherOfSchoolForChild = async (teacherId, childId) => {
    const [rows] = await schoolDb.execute(
        `SELECT teacher_of_school.id
         FROM teacher_of_school
         JOIN teachers ON teacher_of_school.teacher_id = teachers.id
         JOIN users ON teachers.user_id = users.id
         JOIN children ON children.class_std_id = teacher_of_school.class_std_id
         WHERE children.id = ?
           AND (teacher_of_school.id = ? OR teachers.id = ? OR users.account_id = ?)
         ORDER BY
           CASE
             WHEN teacher_of_school.id = ? THEN 0
             WHEN teachers.id = ? THEN 1
             WHEN users.account_id = ? THEN 2
             ELSE 3
           END
         LIMIT 1`,
        [childId, teacherId, teacherId, teacherId, teacherId, teacherId, teacherId]
    );
    return rows[0] || null;
};

const setPerformance = async (req, res) => {
    const {teacherId, childId, remark} = req.body;
    if(!teacherId || !childId || !remark) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    try {
        const teacherOfSchool = await getTeacherOfSchoolForChild(teacherId, childId);
        if(!teacherOfSchool) {
            return res.status(404).json({
                success: false,
                message: 'Teacher is not assigned to this child class'
            });
        }

        await Performance.createOrUpdatePerformance(teacherOfSchool.id, childId, remark);
        return res.status(200).json({
            success: true,
            message: 'Performance updated successfully'
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const setBehavior = async (req, res) => {
    const {teacherId, childId, remark} = req.body;
    if(!teacherId || !childId || !remark) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    try {
        const teacherOfSchool = await getTeacherOfSchoolForChild(teacherId, childId);
        if(!teacherOfSchool) {
            return res.status(404).json({
                success: false,
                message: 'Teacher is not assigned to this child class'
            });
        }

        await Behavior.createOrUpdateBehavior(teacherOfSchool.id, childId, remark);
        return res.status(200).json({
            success: true,
            message: 'Behavior updated successfully'
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const addGrade = async (req, res) => {
    const {teacherId, childId, value} = req.body;
    if(!teacherId || !childId || value === undefined || value === null) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    const numericValue = Number(value);
    if(Number.isNaN(numericValue) || numericValue < 0 || numericValue > 20) {
        return res.status(400).json({
            success: false,
            message: 'Value must be a number between 0 and 20'
        });
    }

    try {
        const teacher = await getTeacherByIdOrAccountId(teacherId);
        if(!teacher) {
            return res.status(404).json({
                success: false,
                message: 'Teacher not found'
            });
        }

        const type = subjectToGradeType(teacher.subject);
        if(!type) {
            return res.status(400).json({
                success: false,
                message: 'Unable to determine grade type for this teacher'
            });
        }

        const date = new Date().toISOString().slice(0, 10);

        await Grade.createGrade(childId, teacher.id, numericValue, date, type);
        return res.status(201).json({
            success: true,
            message: 'Grade added successfully'
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getStudents = async (req, res) => {
    const {teacherId} = req.params;
    if(!teacherId) {
        return res.status(400).json({
            success: false,
            message: 'Teacher id is required'
        });
    }

    try {
        const teacher = await getTeacherByIdOrAccountId(teacherId);
        if(!teacher) {
            return res.status(404).json({
                success: false,
                message: 'Teacher not found'
            });
        }

        const [students] = await schoolDb.execute(
            `SELECT children.id, users.first_name, users.last_name
             FROM teacher_of_school
             JOIN class_school ON teacher_of_school.id = class_school.school_teacher_id
             JOIN children ON class_school.class_std_id = children.class_std_id
             JOIN users ON children.user_id = users.id
             WHERE teacher_of_school.teacher_id = ?`,
            [teacher.id]
        );

        return res.status(200).json({
            success: true,
            teacherId: teacher.id,
            students
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getPerformanceList = async (req, res) => {
    const {teacherId} = req.params;
    if(!teacherId) {
        return res.status(400).json({
            success: false,
            message: 'Teacher id is required'
        });
    }

    try {
        const teacher = await getTeacherByIdOrAccountId(teacherId);
        if(!teacher) {
            return res.status(404).json({
                success: false,
                message: 'Teacher not found'
            });
        }

        const performance = await Performance.getPerformanceByTeacher(teacher.id);
        return res.status(200).json({
            success: true,
            performance
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getBehaviorList = async (req, res) => {
    const {teacherId} = req.params;
    if(!teacherId) {
        return res.status(400).json({
            success: false,
            message: 'Teacher id is required'
        });
    }

    try {
        const teacher = await getTeacherByIdOrAccountId(teacherId);
        if(!teacher) {
            return res.status(404).json({
                success: false,
                message: 'Teacher not found'
            });
        }

        const behavior = await Behavior.getBehaviorByTeacher(teacher.id);
        return res.status(200).json({
            success: true,
            behavior
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getGradeList = async (req, res) => {
    const {teacherId} = req.params;
    if(!teacherId) {
        return res.status(400).json({
            success: false,
            message: 'Teacher id is required'
        });
    }

    try {
        const teacher = await getTeacherByIdOrAccountId(teacherId);
        if(!teacher) {
            return res.status(404).json({
                success: false,
                message: 'Teacher not found'
            });
        }

        const grades = await Grade.getGradesByTeacher(teacher.id);
        return res.status(200).json({
            success: true,
            grades
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    setPerformance,
    setBehavior,
    addGrade,
    getStudents,
    getPerformanceList,
    getBehaviorList,
    getGradeList
};
