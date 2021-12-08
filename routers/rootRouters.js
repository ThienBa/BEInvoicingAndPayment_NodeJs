const express = require('express');
const { invoiceRouter } = require('./invoice.routers');
const { sendEmailRouter } = require('./sendEmail.routers');
const { sendSMSRouter } = require('./sendSMS.routers');
const { userRouter } = require('./user.routers');
const rootRouter = express.Router();

rootRouter.use("/users", userRouter);   
rootRouter.use("/invoices", invoiceRouter);   
rootRouter.use("/send_mails", sendEmailRouter);   
rootRouter.use("/send_sms", sendSMSRouter);   

module.exports = {
    rootRouter,
}