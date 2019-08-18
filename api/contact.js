const app = require('express')();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

const template = require('./mail/template');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post(
  '*',
  [
    check('firstName').exists(),
    check('lastName').exists(),
    check('email').isEmail(),
    check('phoneNumber').exists(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const name = `${req.body.firstName} ${req.body.lastName}`;

    const data = {
      from: process.env.EMAIL_FROM || 'Divorce Negotiations <no-reply@divorcenegotiations.com.au>',
      to: process.env.EMAIL_TO,
      subject: `${name} has contacted via divorcenegotiations form.`,
      html: template({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        datetime: new Date(),
      }),
    };

    try {
      return mailgun.messages().send(data, (error) => {
        if (error) {
          return res.json({ result: 'error' });
        }

        return res.json({ result: 'success' });
      });
    } catch (error) {
      return res.json({ result: 'error' });
    }
  },
);

app.listen();

module.exports = app;
