const express = require('express');
const { sendEmail } = require('../controllers/sendEmail.controllers');
const sendEmailRouter = express.Router();

sendEmailRouter.post('/', sendEmail);

module.exports = {
    sendEmailRouter
}