const {schoolDb} = require('../config/db');

class Announcement {
    static async createGeneralAnnouncement(title, subject, description, date, connection = schoolDb) {
        const [announcement] = await connection.execute(
            `INSERT INTO announcements(title, subject, description, date)
             VALUES(?, ?, ?, ?)`,
            [title, subject, description, date]);
        const announcement_id = announcement.insertId;

        await connection.execute(
            `INSERT INTO general_announcements(announcement_id)
             VALUES(?)`,
            [announcement_id]);

        return announcement_id;
    }

    static async createSchoolAnnouncement(title, subject, description, date, staff_id, connection = schoolDb) {
        const [announcement] = await connection.execute(
            `INSERT INTO announcements(title, subject, description, date)
             VALUES(?, ?, ?, ?)`,
            [title, subject, description, date]);
        const announcement_id = announcement.insertId;

        await connection.execute(
            `INSERT INTO school_announcements(announcement_id, staff_id)
             VALUES(?, ?)`,
            [announcement_id, staff_id]);

        return announcement_id;
    }

    static async getGeneralAnnouncements() {
        const [rows] = await schoolDb.execute(
            `SELECT announcements.id, title, subject, description, date
             FROM announcements
             JOIN general_announcements ON announcements.id = general_announcements.announcement_id`
        );
        return rows;
    }

    static async getSchoolAnnouncements() {
        const [rows] = await schoolDb.execute(
            `SELECT announcements.id, title, subject, description, date
             FROM announcements
             JOIN school_announcements ON announcements.id = school_announcements.announcement_id`
        );
        return rows;
    }

    static async getAllAnnouncementsForRole(role) {
        if(role === 'teacher' || role === 'staff') {
            const [rows] = await schoolDb.execute(
                `SELECT announcements.id, title, subject, description, date
                 FROM announcements
                 JOIN general_announcements ON announcements.id = general_announcements.announcement_id
                 UNION
                 SELECT announcements.id, title, subject, description, date
                 FROM announcements
                 JOIN school_announcements ON announcements.id = school_announcements.announcement_id
                 ORDER BY date DESC`
            );
            return rows;
        }

        if(role === 'admin' || role === 'parent' || role === 'child') {
            const [rows] = await schoolDb.execute(
                `SELECT announcements.id, title, subject, description, date
                 FROM announcements
                 JOIN general_announcements ON announcements.id = general_announcements.announcement_id
                 ORDER BY date DESC`
            );
            return rows;
        }

        return [];
    }
}

module.exports = Announcement;
