export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
})[character]!);

const invalidRequest = (message: string) => Response.json({ message }, { status: 400 });

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return invalidRequest("Please submit valid form data.");
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return invalidRequest("Please submit valid form data.");
  }
  const fields = body as Record<string, unknown>;
  const field = (name: string) => {
    const value = fields[name];
    return typeof value === "string" ? value.trim() : "";
  };
  const to = field("email");
  const firstName = field("firstname");
  const lastName = field("lastname");
  const phoneNumber = field("phone");
  const message = field("message");
  const isConsultation = fields.form === "consultation";
  const digits = phoneNumber.replace(/\D/g, "");
  if (!to || to.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to) ||
      !firstName || firstName.length > 100 || lastName.length > 100 ||
      phoneNumber.length > 30 || message.length > 2000 ||
      (fields.message !== undefined && typeof fields.message !== "string")) {
    return invalidRequest("Please provide valid contact details and a message of 2,000 characters or fewer.");
  }
  if (isConsultation && (!lastName || !/^\+?[\d\s().-]+$/.test(phoneNumber) ||
      !(/^\d{10}$/.test(digits) || /^1\d{10}$/.test(digits)))) {
    return invalidRequest("Please provide your last name and a valid 10-digit phone number.");
  }
  const firstname = escapeHtml(firstName);
  const lastname = escapeHtml(lastName);
  const phone = escapeHtml(phoneNumber);
  const contactEmail = escapeHtml(to);
  const messageHtml = message
    ? `<p>Goals, injury, or pain:<br>${escapeHtml(message).replace(/\r?\n/g, "<br>")}</p>`
    : "";
  const deal = fields.deal === true;
  const subject = "Welcome to OVERTIME Sports PT and Performance";
  const html = `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">

<head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <style>
        @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            mso-font-alt: 'Helvetica';
            src: url(https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2) format('woff2');
        }

        * {
            font-family: 'Inter', Helvetica;
        }
    </style>
    <style>
        @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            mso-font-alt: 'Helvetica';
            src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fjbvMwCp50PDca1ZL7.woff2) format('woff2');
        }

        * {
            font-family: 'Inter', Helvetica;
        }
    </style>
    <style>
        @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            mso-font-alt: 'Helvetica';
            src: url(https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fjbvMwCp50BTca1ZL7.woff2) format('woff2');
        }

        * {
            font-family: 'Inter', Helvetica;
        }
    </style>
</head>

<body style="margin:0;margin-left:12px;margin-right:12px">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation"
        style="max-width:37.5em;margin-left:auto;margin-right:auto;box-sizing:border-box;padding-top:1rem;padding-bottom:1rem;height:100vh">
        <tbody>
            <tr style="width:100%">
                <td>
                    <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation"
                        style="height:424px;margin-top:16px;margin-bottom:16px;border-radius:12px;background-color:#4d734f;background-image:url(&#x27;/static/my-image.png&#x27;);background-size:100% 100%"
                        width="100%">
                        <tbody>
                            <tr>
                                <td align="center" style="padding:40px;text-align:center">
                                    <p
                                        style="font-size:14px;line-height:24px;margin:0px;font-weight:600;color:rgb(229,231,235)">
                                        WELCOME TO</p>
                                    <h1 style="margin:0px;margin-top:4px;font-weight:700;color:rgb(255,255,255)">
                                        OVERTIME Sports PT and Performance</h1>
                                    <p
                                        style="font-size:16px;line-height:24px;margin:0px;margin-top:8px;color:rgb(255,255,255)">
                                        Hi ${firstname}! Thank you for your interest in OVERTIME. We will be in touch soon! <br> We Look forward to getting to know you better and discussing how our team can help you get back to doing the things you love.
                                    </p>
                                    <a href="https://overtimesportspt.com"
                                        style="line-height:100%;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;margin-top:24px;border-radius:8px;border-width:1px;border-style:solid;border-color:rgb(229,231,235);background-color:rgb(255,255,255);padding-left:40px;padding-right:40px;padding-top:12px;padding-bottom:12px;font-weight:600;color:rgb(17,24,39);padding:12px 40px 12px 40px"
                                        target="_blank">
                                        <span><!--[if mso]><i style="mso-font-width:500%;mso-text-raise:18" hidden>&#8202;&#8202;&#8202;&#8202;</i><![endif]--></span>
                                        <span
                                            style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px">Go
                                            To
                                            Site</span><span><!--[if mso]><i style="mso-font-width:500%" hidden>&#8202;&#8202;&#8202;&#8202;&#8203;</i><![endif]-->
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
  `

  if (deal) {
    var othtml = `
      <div style="margin-bottom: 32px">
            <p>New Consultation Request</p>
        </div>
        <!-- Main Content -->
        <div style="margin-bottom: 32px; color: #222">
        Someone has expressed interest on overtimesportspt.com <br>
        IMPORTANT: They should receive 40% off their initial evaluation.
        <p>Name: ${firstname} ${lastname}</p>
        <p>Email: ${contactEmail}<br>Phone Number: ${phone}</p>
        ${messageHtml}
        </div>
        <!-- Footer -->
        <div style="color: #5f5f5f">
            <p>overtimesports.com</p>
        </div>
      `
  } else {
    var othtml = `
      <div style="margin-bottom: 32px">
            <p>New Consultation Request</p>
        </div>
        <!-- Main Content -->
        <div style="margin-bottom: 32px; color: #222">
        Someone has expressed interest on overtimesportspt.com <br>
        <p>Name: ${firstname} ${lastname}</p>
        <p>Email: ${contactEmail}<br>Phone Number: ${phone}</p>
        ${messageHtml}
        </div>
        <!-- Footer -->
        <div style="color: #5f5f5f">
            <p>overtimesports.com</p>
        </div>
      `
  }
  try {
    const sendResend = await resend.emails.send({
      from: "no-reply@overtimesportspt.com",
      to,
      subject,
      html,
    });
    const sendNotif = await resend.emails.send({
      from: "new-consultation-request@overtimesportspt.com",
      to: "info@overtimesportspt.com",
      subject: "New Consultation Request",
      html: othtml,
    });

    if (sendResend.data && sendNotif.data) {
      return Response.json({ success: true, message: "Message successfully sent!" });
    }
    console.error("Consultation email delivery was not confirmed:", {
      confirmationAccepted: Boolean(sendResend.data),
      notificationAccepted: Boolean(sendNotif.data),
    });
    return Response.json(
      { message: "Your request could not be confirmed. Please try again or call (720) 771-9677." },
      { status: 500 },
    );
  } catch (error) {
    console.error("Consultation email delivery failed:", error instanceof Error ? error.name : "Unknown error");
    return Response.json(
      { message: "Your request could not be confirmed. Please try again or call (720) 771-9677." },
      { status: 500 },
    );
  }
};