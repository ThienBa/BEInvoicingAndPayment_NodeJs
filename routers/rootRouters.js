const express = require('express');
const { invoiceRouter } = require('./invoice.routers');
const { userRouter } = require('./user.routers');
const rootRouter = express.Router();

rootRouter.use("/users", userRouter);   
rootRouter.use("/invoices", invoiceRouter);   

module.exports = {
    rootRouter,
}