const checkEmailExistsQuery = "SELECT * FROM userdetails WHERE email = $1;";
const addEmailForVerificationQuery = "INSERT INTO organizerverification (Email, OTP) VALUES ($1, $2) RETURNING *;";
const getDetailsForVerificationQuery = 'SELECT email, otp FROM organizerverification WHERE email = $1;';
const deleteEmailIfOTPUnsuccessfulQuery = 'DELETE FROM organizerverification WHERE email = $1;';
const changeEventsQuery = 'UPDATE organizerdetails SET events = array_append(events, $1::json) WHERE email = $2;';
const getEventsQuery = 'SELECT events FROM organizerdetails WHERE email = $1;';
const deleteEventsQuery = 'UPDATE organizerdetails SET events = array_remove(events, $1) WHERE email = $2;';
module.exports = {
    checkEmailExistsQuery,
    addEmailForVerificationQuery,
    getDetailsForVerificationQuery,
    deleteEmailIfOTPUnsuccessfulQuery,
    changeEventsQuery,
    getEventsQuery,
    deleteEventsQuery,
}