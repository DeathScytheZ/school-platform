const {Parent} = require('../models/Parent');
const Announcement = require('../models/Announcement');

const getParentDashboard = async (req, res) => {
    const {parentId} = req.params;
    if(!parentId) {
        return res.status(400).json({
            success: false,
            message: 'Parent id is required'
        });
    }

    try {
        const parent = await Parent.getParentByIdOrAccountId(parentId);
        if(!parent) {
            return res.status(404).json({
                success: false,
                message: 'Parent not found'
            });
        }

        const children = await Parent.getChildrenByParentId(parent.id);
        const performance = await Parent.getPerformanceByParentId(parent.id);
        const behavior = await Parent.getBehaviorByParentId(parent.id);

        return res.status(200).json({
            success: true,
            parentId: parent.id,
            children,
            performance,
            behavior
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.getGeneralAnnouncements();

        return res.status(200).json({
            success: true,
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
    getParentDashboard,
    getAnnouncements
};
