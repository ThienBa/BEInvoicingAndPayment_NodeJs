const express = require('express');
const { sendSMS } = require('../controllers/sendSMSControllers');
const sendSMSRouter = express.Router();

sendSMSRouter.post("/", sendSMS);

module.exports = {
    sendSMSRouter
}
