const { Student } = require('../models/Student');

const studentList  = async(req, res) => {
    const {teacherId} = req.user;
    try{
        const list = await Student.getStudentList(teacherId);
        if(list.length === 0){
            return res.status(200).json({
                success: true,
                message: 'no students available',
                list: []
            });
        }
        res.status(200).json({
            success: true,
            message: 'list aquired successfully',
            list: list
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: 'error', error
        });
    }
}

module.exports = {
    studentList
}


