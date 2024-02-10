
const checkEmailExistsQuery = "SELECT * FROM userdetails WHERE email = $1;";
const addEmailForVerificationQuery = "INSERT INTO userVerification (Email, OTP) VALUES ($1, $2) RETURNING *;";
const getDetailsForVerificationQuery = 'SELECT emailid, otp FROM userverification WHERE email = $1;';
const addEmailIfSuccessfulQuery = 'INSERT INTO userdetails (Email, Password) VALUES ($1, $2);';
const deleteEmailIfOTPUnsuccessfulQuery = 'DELETE FROM userverification WHERE email = $1;';
module.exports={
    checkEmailExistsQuery,
    addEmailForVerificationQuery,
    getDetailsForVerificationQuery,
    addEmailIfSuccessfulQuery,
    deleteEmailIfOTPUnsuccessfulQuery
}
