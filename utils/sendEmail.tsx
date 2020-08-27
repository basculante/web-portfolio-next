const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const emailRecepient = "wantechjoh@gmail.com";
const singleSenderEmail = "basculantetank@gmail.com";

const sendEmail = async ({ name, email, message }) => {
  const msg = {
    to: emailRecepient,
    from: singleSenderEmail,
    subject: `${name} - Portfolio Contact Me`,
    text: message,
    html: `<div>${message}</div><div>Sender Email: ${email}</div>`,
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

export { sendEmail };
