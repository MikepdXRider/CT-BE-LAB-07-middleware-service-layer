// import template ses-message
const sesMessageTemplateObj = require('../utils/aws-ses/ses-message-template.js');

// import sendEmail
const sendEmail = require('../utils/aws-ses/send-email.js');

// import ModelClass

// import SESClient class


module.exports = new class ServiceClass {
  static async createOrder() {
    // grab a copy of sesMessageTemplateObj

    // assign appropriate property values - just the message for now, we will use a test email as the recipient sense our app is not public.

    await sendEmail({ ...sesMessageTemplateObj }, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data);           // successful response
    });
    // does something cool with a third party API, or munges incoming data in an interesting way.
    // calls ModelClass(params) 
    // returns response from ModelClass.
    //   }
    //   static async getRan() {
    
    //   }
    //   static async getRanById(id) {
    
    //   }
    //   static async patchRan(id, param) {
    
    //   }
    //   static async deleteRan(id) {
    
    //   }
  }

};


