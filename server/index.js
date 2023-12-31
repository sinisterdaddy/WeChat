const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const twilio = require('twilio');

const authRoutes = require('./routes/auth.js');
const morgan = require('morgan');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

const twilioClient = twilio(accountSid, authToken);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'))
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/', (req, res) => {
    const { message, user: sender, type, members } = req.body;

    if (type === 'message.new') {
        members
            .filter((member) => member.user_id !== sender.id)
            .forEach(({ user }) => {
                if (!user.online) {
                    twilioClient.messages
                        .create({
                            body: `You have a new message from ${message.user.fullName} - ${message.text}`,
                            messagingServiceSid: messagingServiceSid,
                            to: user.phoneNumber,
                        })
                        .then(() => console.log('Message sent!'))
                        .catch((err) => console.error('Twilio error:', err));
                }
            });

        return res.status(200).send('Message sent!');
    }

    return res.status(200).send('Not a new message request');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
