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

app.get('/send-email', (req, res) => {
    const { recipient, sender, topic, text } = req.query;
    const msg = {
        to: recipient,
        from: sender,
        subject: topic,
        text: text,
    }

    sgMail.send(msg)
        .then((msg) => console.log(text));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})