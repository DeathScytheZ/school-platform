const {Child} = require('../models/Child');
const {Performance} = require('../models/Performance');
const {Behavior} = require('../models/Behavior');
const {Grade} = require('../models/Grade');
const Announcement = require('../models/Announcement');

const getChildDashboard = async (req, res) => {
    const {childId} = req.params;
    if(!childId) {
        return res.status(400).json({
            success: false,
            message: 'Child id is required'
        });
    }

    try {
        const child = await Child.getChildByIdOrAccountId(childId);
        if(!child) {
            return res.status(404).json({
                success: false,
                message: 'Child not found'
            });
        }

        const performance = await Performance.getPerformanceByChild(child.id);
        const behavior = await Behavior.getBehaviorByChild(child.id);
        const grades = await Grade.getGradesByChild(child.id);
        const announcements = await Announcement.getGeneralAnnouncements();

        return res.status(200).json({
            success: true,
            child,
            performance,
            behavior,
            grades,
            announcements
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getChildDashboard
};
