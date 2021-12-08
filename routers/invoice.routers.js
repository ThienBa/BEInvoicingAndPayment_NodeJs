const express = require('express');
const { addInvoice, getInvoiceItemByUserId } = require('../controllers/invoice.controllers');
const invoiceRouter = express.Router();

invoiceRouter.get("/:user_id", getInvoiceItemByUserId);
invoiceRouter.post("/", addInvoice);

module.exports = {
    invoiceRouter
}
