const jwt = require('jsonwebtoken');
const {secret, expiresIn} = require('../config/jwt');
const {schoolDb} = require('../config/db');
const {RegistrationRequest, RegistrationRequestStatus} = require('../models/RegistrationRequest');
const {Account, AccountStatus} = require('../models/Account')
const User = require('../models/User');
const Teacher = require('../models/Teacher');
const Staff = require('../models/Staff');
const GovOfficial = require('../models/GovOfficial');

const signup = async (req, res) => {
    const {officialId, password, firstName, lastName, dateOfBirth, phone, email, role, roleDetail} = req.body;
    if(!officialId || !password || !firstName || !lastName || !dateOfBirth || !phone || !email || !role || !roleDetail) {
        return res.status(400).json({
            success: false,
            message: 'All credentials are required',
        
        });
    }

    if(password.length < 8) {
        return res.status(400).json({
            success: false,
            message: 'password must be at least 8 characters long'
        });
    }

    try {
        const registrationRequest = await RegistrationRequest.createRegistrationRequest(
            officialId, password, firstName, lastName, dateOfBirth, phone, email, role, roleDetail
        );

        const requestId = registrationRequest.insertId;

        const isVerified = await GovOfficial.verify(officialId, firstName, lastName, dateOfBirth, role);

        const newStatus = isVerified ? RegistrationRequestStatus.GOV_VERIFIED : RegistrationRequestStatus.GOV_REJECTED;

        await RegistrationRequest.updateStatus(requestId, newStatus);

        res.status(201).json({
            success: true,
            message: 'Registration request successfully added to database',
            insertId: registrationRequest.insertId
        });

    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const addUser = async(req, res) => {
    const { id } = req.body;
    if(!id) {
        return res.status(400).json({
            success: false,
            message: 'user id required'
        });
    }

    const connection = await schoolDb.getConnection();
    try {
        await connection.beginTransaction();

        const registrationRequest = await RegistrationRequest.getRegistrationRequest(id);

        const account = await Account.createAccount(
            registrationRequest.official_id, 
            registrationRequest.password, 
            registrationRequest.role,
            AccountStatus.ACTIVE,
            connection
        );

        const user = await User.createUser(
            account.insertId,
            registrationRequest.first_name,
            registrationRequest.last_name,
            registrationRequest.date_of_birth,
            registrationRequest.phone,
            registrationRequest.email,
            connection
        );

        await RegistrationRequest.updateStatus(
            registrationRequest.id,
            RegistrationRequestStatus.ACCEPTED,
            connection
        );

        if(registrationRequest.role === 'teacher') {
            await Teacher.createTeacher(
                user.insertId,
                registrationRequest.role_detail,
                connection
            );
        }else if(registrationRequest.role === 'staff') {
            await Staff.createStaff(
                user.insertId,
                registrationRequest.role_detail,
                connection
            );
        } else {
            await connection.rollback();
            return res.status(400).json({
                success: false,
                message: 'Invalid role'
            });
        }

        await connection.commit(); 

        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            insertId: user.insertId
        });

    } catch(error) {
        await connection.rollback();
        console.error('error creating a user', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    } finally {
        connection.release();
    }
}

const rejectUser = async (req, res) => {
    const { id } = req.body;
    if(!id) {
        return res.status(400).json({
            success: false,
            message: 'request id required'
        });
    }

    try {
        await RegistrationRequest.updateStatus(id, RegistrationRequestStatus.REJECTED);
        return res.status(200).json({
            success: true,
            message: 'User rejected successfully'
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: `Internal server error: ${error}`
        });
    }
}

const login = async (req, res) => {
    const {officialId, password} = req.body;
    if(!officialId || !password) {
        return res.status(400).json({
            success: false,
            message: 'Id and password are required'
        });
    }

    try {
        const account = await Account.authenticate(officialId, password);
        if(!account) {
            return res.status(401).json({
                success: false,
                message: 'Invalid ID or password'
            });
        } 
    
        const token = jwt.sign(
            { id: account.id, role: account.role},
            secret,
            { expiresIn }
        );

        res.status(200).json({
            success: true,
            token: token,
            role: account.role
        });

    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    signup,
    addUser,
    rejectUser,
    login
};

