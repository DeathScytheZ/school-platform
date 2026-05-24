const Announcement = require('../models/Announcement');

const createGeneralAnnouncement = async (req, res) => {
    const {title, subject, description, date} = req.body;
    if(!title || !description || !date) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    try {
        const announcement_id = await Announcement.createGeneralAnnouncement(
            title,
            subject,
            description,
            date
        );

        return res.status(201).json({
            success: true,
            announcement_id
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createSchoolAnnouncement = async (req, res) => {
    const {title, subject, description, date, staffId} = req.body;
    if(!title || !description || !date || !staffId) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    try {
        const announcement_id = await Announcement.createSchoolAnnouncement(
            title,
            subject,
            description,
            date,
            staffId
        );

        return res.status(201).json({
            success: true,
            announcement_id
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getAnnouncements = async (req, res) => {
    const role = req.user?.role || req.query.role || 'admin';

    try {
        const announcements = await Announcement.getAllAnnouncementsForRole(role);

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
    createGeneralAnnouncement,
    createSchoolAnnouncement,
    getAnnouncements
};
