const checkEmailExistsQuery = "SELECT * FROM userdetails WHERE email = $1;";
const addEmailForVerificationQuery = "INSERT INTO userverification (Email, OTP) VALUES ($1, $2) RETURNING *;";
const getDetailsForVerificationQuery = 'SELECT email, otp FROM userverification WHERE email = $1;';
const deleteEmailIfOTPUnsuccessfulQuery = 'DELETE FROM userverification WHERE email = $1;';
const changeEventsAttendedQuery = 'UPDATE userdetails SET events_attended = array_append(events_attended, $1) WHERE email = $2;';
const addBadgesQuery = 'UPDATE userdetails SET badges = array_append(badges, $1) WHERE email = $2;';
const changePointsQuery = 'UPDATE userdetails SET pointsnum = $1 WHERE email = $2;';
const changeEventsNumQuery = 'UPDATE userdetails SET eventsnum = $1 WHERE email = $2;';
const addEmailIfSuccessfulQuery = 'INSERT INTO userdetails (Email, Password) VALUES ($1, $2);';
const getUserByEmailQuery = "SELECT * FROM userdetails WHERE email = $1;";
const getAllUsersQuery = "SELECT email, password, phoneno, location, badgesnum, badges, pointsnum, events_attended, eventsnum FROM userdetails;";
const updateUserPasswordQuery = "UPDATE userdetails SET password = $1 WHERE email = $2;";
const updateUserPhoneNumberQuery = "UPDATE userdetails SET phoneno = $1 WHERE email = $2;";
const updateUserLocationQuery = "UPDATE userdetails SET location = $1 WHERE email = $2;";
const updateUserBadgesNumQuery = "UPDATE userdetails SET badgesnum = badgesnum + $1 WHERE email = $2;";
const updateUserPointsQuery = "UPDATE userdetails SET pointsnum = pointsnum + $1 WHERE email = $2;";
const updateUserEventsNumQuery = "UPDATE userdetails SET eventsnum = eventsnum + $1 WHERE email = $2;";
const deleteUserByEmailQuery = "DELETE FROM userdetails WHERE email = $1;";
const updateUserSkills="UPDATE userdetails SET skills = array_append(skills, $1) WHERE email = $2;";
const getSkillsByEmail ="SELECT skills FROM userdetails WHERE email = $1";
const getBadgesByEmail="SELECT badges FROM badges WHERE email = $1";
const getEventsAttended="SELECT badges FROM events_attended WHERE email = $1";
const getLBStats="SELECT (email,pointsnum) from userdetails WHERE email = $1;";
module.exports = {
    checkEmailExistsQuery,
    addEmailForVerificationQuery,
    getDetailsForVerificationQuery,
    deleteEmailIfOTPUnsuccessfulQuery,
    changeEventsAttendedQuery,
    addBadgesQuery,
    changePointsQuery,
    changeEventsNumQuery,
    addEmailIfSuccessfulQuery,
    getUserByEmailQuery,
    getAllUsersQuery,
    updateUserPasswordQuery,
    updateUserPhoneNumberQuery,
    updateUserLocationQuery,
    updateUserBadgesNumQuery,
    updateUserPointsQuery,
    updateUserEventsNumQuery,
    deleteUserByEmailQuery,
    updateUserSkills,
    getSkillsByEmail,
    getBadgesByEmail,
    getEventsAttended,
};
