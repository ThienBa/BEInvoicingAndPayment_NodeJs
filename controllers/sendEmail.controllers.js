const sgMail = require('@sendgrid/mail');

const sendEmail = (req, res) => {
    const { recipient, subject, html } = req.body;
    const message = {
        to: recipient,
        from: {
            name: "Huynh Thien Ba",
            email: "huynhthienba4@gmail.com"
        },
        subject: subject,
        html: html
    }

    sgMail.send(message)
        .then((message) => res.status(200).send({ content: "Send mail successfully!", message: message }))
        .catch(err => res.status(500).send(err));
}

module.exports = {
    sendEmail
}