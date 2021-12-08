const { Invoice } = require("../models");

const addInvoice = async (req, res) => {
    const { user_id, itemName, rate, hours } = req.body;
    try {
        const newInvoice = await Invoice.create({ user_id, itemName, rate, hours });
        res.status(201).send(newInvoice);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getInvoiceItemByUserId = async (req, res) => {
    const { user_id } = req.params;
    try {
        const invoiceDetail = await Invoice.findAll({ where: { user_id } });
        res.status(200).send(invoiceDetail);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getInvoiceItemByUserId,
    addInvoice
}