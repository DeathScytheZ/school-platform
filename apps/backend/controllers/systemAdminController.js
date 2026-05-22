const {RegistrationRequest} = require('../models/RegistrationRequest');
const User = require('../models/User');

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

module.exports = { getRequestList, getUserList };
