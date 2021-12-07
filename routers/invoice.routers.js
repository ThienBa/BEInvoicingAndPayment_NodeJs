const express = require('express');
const { addInvoice, getDetailInvoice } = require('../controllers/invoice.controllers');
const invoiceRouter = express.Router();

invoiceRouter.get("/:id", getDetailInvoice);
invoiceRouter.post("/", addInvoice);

module.exports = {
    invoiceRouter
}
