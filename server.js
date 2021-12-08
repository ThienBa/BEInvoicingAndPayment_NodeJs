const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const sgMail = require('@sendgrid/mail');
const { rootRouter } = require('./routers/rootRouters');
const port = process.env.PORT || 4000;

sgMail.setApiKey('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');

app.use(express.json());

const pathPublicDirectory = path.join(__dirname, './public');
app.use("/public", express.static(pathPublicDirectory));

app.use(cors());

app.use("/api/v1", rootRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});