const {RegistrationRequest} = require('../models/RegistrationRequest');

const getUserList = async (req, res) =>  {
    try {
        const registrationRequests = await RegistrationRequest.getRegistrationRequestList();
        if(registrationRequests.length === 0) {
            return res.status(200).json({
                success: true,
                message: 'No requests available right now',
                requests: []
            });
        }
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

module.exports = getUserList;
