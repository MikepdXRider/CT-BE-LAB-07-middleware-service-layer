// import the SDK module/class
const AWS = require('aws-sdk');
// import sesMessageTemplate
const sesMessageTemplateObj = require('./ses-message-template.js');
// import ses-config
const sesConfigObj = require('./ses-config-template.js');

// export async sendEmail function
module.exports = async (content, userEmail) => {
  // copy sesmessagetemplate and assign message body data and reply to destination.
  const newSesMessageObj = { ...sesMessageTemplateObj };
  newSesMessageObj.Message.Body.Html.Data = content;
  newSesMessageObj.ReplyToAddresses = [userEmail];

  // creates a new instance of AWS, creating a client.
  // sets the sesConfigObj containing auth token header
  // calls sendEmail with the newSesMessageObj. 
  const sesResponse = await new AWS.SES(sesConfigObj).sendEmail(newSesMessageObj).promise();
  
  // return/console.log sesResponse
  console.log(sesResponse);
  return sesResponse;
};
