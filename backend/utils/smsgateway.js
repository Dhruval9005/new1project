const { sms_gateway } = require("../config/keys");
const axios = require("axios");

/**
 * SEND OTP TO MOBILE NO
 *
 * @param {string} mobileNo - Phone number to which the SMS will be sent.
 * @param {string} massage -  SMS that will be sent.
 * @returns {Promise<object>} Returns a promise that resolves to an object containing the response data from the SMS gateway API.
 *                            Object contain ErrorCode, ErrorMessage, JobId, MessageData properties.
 */
const sendSMS = async (mobileNo, massage) => {
  const apikey = sms_gateway.api_key;
  const apisender = sms_gateway.api_sender;
  const msg = massage;
  const num = mobileNo;
  const encoded_msg = encodeURIComponent(msg);

  // Check if required parameters are present
  if (!apikey || !apisender || !msg || !num || !encoded_msg) {
    return {
      ErrorCode: "Url Error",
      ErrorMessage: "Error in required parameters in url of SMS gateway",
    };
  }

  const url = `https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=${apikey}&senderid=${apisender}&channel=2&DCS=0&flashsms=0&number=${num}&text=${encoded_msg}&route=1`;
  const { data } = await axios.get(url);
  return data;
};

module.exports = {
  sendSMS,
};
