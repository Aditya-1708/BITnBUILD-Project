const db = require('../db/db.js');
const queries = require('./queries');

const executeQuery = async (query, params) => {
    try {
        const results = await db.users.query(query, params);
        return results.rows;
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};

const checkEmailExists = async (email) => {
    try {
        return await executeQuery(queries.checkEmailExistsQuery, [email]);
    } catch (error) {
        console.error('Error checking email exists:', error);
        throw new Error('An error occurred while checking email existence');
    }
};

const addEmailForVerification = async (email, OTP) => {
    try {
        return await executeQuery(queries.addEmailForVerificationQuery, [email, OTP]);
    } catch (error) {
        console.error('Error adding email for verification:', error);
        throw new Error('An error occurred while adding email for verification');
    }
};

const getDetailsForVerification = async (email) => {
    try {
        return await executeQuery(queries.getDetailsForVerificationQuery, [email]);
    } catch (error) {
        console.error('Error getting details for verification:', error);
        throw new Error('An error occurred while getting details for verification');
    }
};

const addEmailIfSuccessful = async (email, password) => {
    try {
        const results = await executeQuery(queries.addEmailIfSuccessfulQuery, [email, password]);
        await deleteEmailIfOTPUnsuccessful(email);
        return results;
    } catch (error) {
        console.error('Error adding email if successful:', error);
        throw new Error('An error occurred while adding email if successful');
    }
};


const deleteEmailIfOTPUnsuccessful = async (email) => {
    try {
        return await executeQuery(queries.deleteEmailIfOTPUnsuccessfulQuery, [email]);
    } catch (error) {
        console.error('Error deleting email if OTP unsuccessful:', error);
        throw new Error('An error occurred while deleting email if OTP unsuccessful');
    }
};

const addPhoneNumber = async (phoneNumber, email) => {
    try {
        return await executeQuery(queries.addPhoneNumberQuery, [phoneNumber, email]);
    } catch (error) {
        console.error('Error adding phone number:', error);
        throw new Error('An error occurred while adding phone number');
    }
};

const addLocation = async (location, email) => {
    try {
        return await executeQuery(queries.addLocationQuery, [location, email]);
    } catch (error) {
        console.error('Error adding location:', error);
        throw new Error('An error occurred while adding location');
    }
};

const changeBadgesNum = async (badgesNum, email) => {
    try {
        return await executeQuery(queries.changeBadgesNumQuery, [badgesNum, email]);
    } catch (error) {
        console.error('Error changing badges number:', error);
        throw new Error('An error occurred while changing badges number');
    }
};

const addBadge = async (badge, email) => {
    try {
        return await executeQuery(queries.addBadgesQuery, [badge, email]);
    } catch (error) {
        console.error('Error adding badge:', error);
        throw new Error('An error occurred while adding badge');
    }
};

const changePoints = async (pointsNum, email) => {
    try {
        return await executeQuery(queries.changePointsQuery, [pointsNum, email]);
    } catch (error) {
        console.error('Error changing points:', error);
        throw new Error('An error occurred while changing points');
    }
};

const changeEventsAttended = async (event, email) => {
    try {
        return await executeQuery(queries.changeEventsAttendedQuery, [event, email]);
    } catch (error) {
        console.error('Error changing events attended:', error);
        throw new Error('An error occurred while changing events attended');
    }
};

const changeEventsNum = async (eventsNum, email) => {
    try {
        return await executeQuery(queries.changeEventsNumQuery, [eventsNum, email]);
    } catch (error) {
        console.error('Error changing events number:', error);

        throw new Error('An error occurred while changing events number');
    }
};
const deleteUserByEmail = async (email) => {
    try {
        return await executeQuery(queries.deleteUserByEmailQuery, [email]);
    } catch (error) {
        console.error('Error deleting user by email:', error);
        throw new Error('An error occurred while deleting user by email');
    }
};
const updateUserSkills = async (email) => {
    try {
        return await executeQuery(queries.updateUserSkills, [email]);
    } catch (error) {
        console.error('Error updating user skills by email:', error);
        throw new Error('An error occurred updating user skills by email');
    }
}
const getBadgesByEmail = async (email) => {
    try {
        return await executeQuery(queries.getBadgesByEmail, [email]);
    } catch (error) {
        console.error('Error getting user badges by email:', error);
        throw new Error('An error occurred getting user badges by email');
    }
}
const getEventsAttended = async (email) => {
    try {
        return await executeQuery(queries.getEventsAttended, [email]);
    } catch (error) {
        console.error('Error getting user eventsattended by email:', error);
        throw new Error('An error occurred eventsattended user skills by email');
    }
}
const getSkillsByEmail = async (email) => {
    try {
        return await executeQuery(queries.getSkillsByEmail, [email]);
    } catch (error) {
        console.error('Error getting user skills by email:', error);
        throw new Error('An error occurred getting user skills by email');
    }
}
module.exports = {
    checkEmailExists,
    addEmailForVerification,
    getDetailsForVerification,
    addEmailIfSuccessful,
    addPhoneNumber,
    addLocation,
    changeBadgesNum,
    addBadge,
    changePoints,
    changeEventsAttended,
    changeEventsNum,
    deleteEmailIfOTPUnsuccessful,
    deleteUserByEmail,
    updateUserSkills,
    getBadgesByEmail,
    getSkillsByEmail,
    getEventsAttended
};
