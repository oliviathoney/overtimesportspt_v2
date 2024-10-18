import ejs from "ejs";
import fs from "fs";
import { createTransport, type Transporter } from "nodemailer";
import SendmailTransport from "nodemailer/lib/sendmail-transport";

type WelcomeEmailParams = { name: "welcome"; params: { name: string } };
type AppointmentEmailParams = { name: "appointment"; params: { name: string } };
type CustomEmailParams = { name: "custom"; params: { html: string } };
type ConsultConfirmParams = { name: "consult", params: {} };

type TemplateParams = WelcomeEmailParams | CustomEmailParams | ConsultConfirmParams | AppointmentEmailParams;

type SendEmailOptions = {
  /** Email address of the recipient */
  to: string;
  /** Subject line of the email */
  subject: string;
  /** Parameters to send to the template */
  template: TemplateParams;
};

export async function sendEmail(options: SendEmailOptions): Promise<Transporter> {
  const transporter = await getEmailTransporter();
  return new Promise(async (resolve, reject) => {
    // Build the email message
    let { to, subject, template } = options;
    // Parse email template
    let from = import.meta.env.SEND_EMAIL_FROM_NOREPLY;
    const html = await parseEmailTemplate(template.name, template.params);
    if(template.name === 'custom') {
      from = import.meta.env.SEND_EMAIL_FROM_NOTIF;
      to = import.meta.env.SEND_EMAIL_FROM_INFO;
    }
    const message = { to, subject, html, from };
    // Send the email
    transporter.sendMail(message, (err, info) => {
            // Log the error if one occurred
      if (err) {
        console.error(err);
        reject(err);
      }
      // Log the message ID and preview URL if available.
      console.log("Message sent:", info.messageId);
      resolve(info);
    });
  });
}

async function getEmailTransporter(): Promise<Transporter> {
  return new Promise((resolve, reject) => {
    if (!import.meta.env.RESEND_API_KEY) {
      throw new Error("Missing Resend configuration");
    }
    const transporter = createTransport({
      host: "smtp.resend.com",
      secure: true,
      port: 465,
      auth: { user: "resend", pass: import.meta.env.RESEND_API_KEY },
    });
    resolve(transporter);
  });
}

async function parseEmailTemplate(name: TemplateParams["name"], params: TemplateParams["params"]): Promise<string> {
  // Read the raw template file
  const rawTemplate = fs.readFileSync(`./src/utils/templates/${name}.ejs`, "utf8");
  // Run the template through EJS to replace variables with parameter values
  return ejs.render(rawTemplate, params);
}