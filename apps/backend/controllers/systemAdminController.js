const {RegistrationRequest} = require('../models/RegistrationRequest');
const {schoolDb} = require('../config/db');
const bcrypt = require('bcrypt');
const {Account, AccountStatus} = require('../models/Account');
const User = require('../models/User');
const {Parent} = require('../models/Parent');
const {Child} = require('../models/Child');

const getRequestList = async (req, res) =>  {
    try {
        const registrationRequests = await RegistrationRequest.getRegistrationRequestList();
        res.status(200).json({
            success: true,
            message: 'List of available registration requests',
            requests: registrationRequests
        });
    } catch(error) {
        console.error('Database error', error);
        res.status(500).json({
            success: false,
            message: 'Failed to get the list of requests'
        });
    }
}

const getUserList = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.status(200).json({ success: true, users });
    } catch(error) {
        console.error('Database error', error);
        res.status(500).json({ success: false, message: 'Failed to get users' });
    }
}

const createChild = async (req, res) => {
    const {officialId, password, firstName, lastName, dateOfBirth, level, medicalCondition} = req.body;
    if(!officialId || !password || !firstName || !lastName || !dateOfBirth || !level || !medicalCondition) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    const connection = await schoolDb.getConnection();
    try {
        await connection.beginTransaction();

        const hashedPassword = await bcrypt.hash(password, 10);
        const account = await Account.createAccount(
            officialId,
            hashedPassword,
            'child',
            AccountStatus.ACTIVE,
            connection
        );

        const user = await User.createUser(
            account.insertId,
            firstName,
            lastName,
            dateOfBirth,
            null,
            null,
            connection
        );

        const child = await Child.createChild(
            user.insertId,
            level,
            medicalCondition,
            connection
        );

        await connection.commit();
        return res.status(201).json({
            success: true,
            insertId: child.insertId
        });
    } catch(error) {
        await connection.rollback();
        return res.status(500).json({
            success: false,
            message: error.message
        });
    } finally {
        connection.release();
    }
}

const createParent = async (req, res) => {
    const {officialId, password, firstName, lastName, dateOfBirth, wilaya, commune, childIds} = req.body;
    if(!officialId || !password || !firstName || !lastName || !dateOfBirth || !wilaya || !commune || !Array.isArray(childIds)) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    const connection = await schoolDb.getConnection();
    try {
        await connection.beginTransaction();

        const hashedPassword = await bcrypt.hash(password, 10);
        const account = await Account.createAccount(
            officialId,
            hashedPassword,
            'parent',
            AccountStatus.ACTIVE,
            connection
        );

        const user = await User.createUser(
            account.insertId,
            firstName,
            lastName,
            dateOfBirth,
            null,
            null,
            connection
        );

        const parent = await Parent.createParent(
            user.insertId,
            wilaya,
            commune,
            connection
        );

        for(const childId of childIds) {
            await Child.linkToParent(parent.insertId, childId, connection);
        }

        await connection.commit();
        return res.status(201).json({
            success: true,
            insertId: parent.insertId
        });
    } catch(error) {
        await connection.rollback();
        return res.status(500).json({
            success: false,
            message: error.message
        });
    } finally {
        connection.release();
    }
}

const getChildren = async (req, res) => {
    try {
        const [children] = await schoolDb.execute(
            `SELECT c.*, u.first_name, u.last_name, u.date_of_birth
             FROM children c
             JOIN users u ON c.user_id = u.id`
        );

        return res.status(200).json({
            success: true,
            children
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = { getRequestList, getUserList, createChild, createParent, getChildren };
