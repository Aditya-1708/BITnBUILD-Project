const db = require('../db/db.js');
const queries = require('./queries');

const checkEmailExists = async (email) => {
    try {
        const result = await db.organizer.query(queries.checkEmailExistsQuery, [email]);
        return result.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const addEmailForVerification = async (email, otp) => {
    try {
        const result = await db.organizer.query(queries.addEmailForVerificationQuery, [email, otp]);
        return result.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getDetailsForVerification = async (email) => {
    try {
        const result = await db.organizer.query(queries.getDetailsForVerificationQuery, [email]);
        return result.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const deleteEmailIfOTPUnsuccessful = async (email) => {
    try {
        await db.organizer.query(queries.deleteEmailIfOTPUnsuccessfulQuery, [email]);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const changeEvents = async (email, event) => {
    try {
        await db.organizer.query(queries.changeEventsQuery, [JSON.stringify(event), email]);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getEvents = async (email) => {
    try {
        const result = await db.organizer.query(queries.getEventsQuery, [email]);
        return result.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const deleteEvents = async (email, event) => {
    try {
        await db.organizer.query(queries.deleteEventsQuery, [event, email]);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    checkEmailExists,
    addEmailForVerification,
    getDetailsForVerification,
    deleteEmailIfOTPUnsuccessful,
    changeEvents,
    getEvents,
    deleteEvents
};
