module.exports = {
  port: process.env.PORT || 5000,
  database_url: process.env.MONGO_URI,
  otp: {
    characters: process.env.OTP_CHARACTERS,
    validity: process.env.OTP_VALIDITY,
  },
  sms_gateway: {
    api_key: process.env.SMS_API,
    api_sender: process.env.SMS_SENDER,
  },
  secret_key: process.env.JWT_SECRET,
};
