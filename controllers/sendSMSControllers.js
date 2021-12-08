const accountSid = 'AC9deba2a370e4578b85b2e73fd8a55353';
const authToken = 'da552c3e531eb36ef0255bc2a7661a08';
const client = require('twilio')(accountSid, authToken);

const sendSMS = (req, res) => {
    const { message, toNumber } = req.body;
    client.messages
        .create({
            body: message,
            messagingServiceSid: 'MG37d600cb5a6c19fc86f90af00439d119',
            to: `+84${parseInt(toNumber)}`
        })
        .then(message => res.status(200).send(message))
        .catch(err => res.status(500).send(err))
        .done();
}

module.exports = {
    sendSMS
}