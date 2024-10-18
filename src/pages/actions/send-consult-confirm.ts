import type { APIRoute } from "astro";
import { sendEmail } from "../../utils/emails";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  // Get the form data submitted by the user on the home page
  const formData = await request.formData();
  const to = formData.get("recipient_email") as string | null;
  const phone = formData.get("recipient_phone") as string | null;
  const subject = "Welcome to OVERTIME Sports PT and Performance"

  const html = `
    <div style="margin-bottom: 32px">
        <p>New Consultation Request</p>
    </div>
    <!-- Main Content -->
    <div style="margin-bottom: 32px; color: #222">
    Someone has requested a consultation on overtimesportspt.com <br>
    <p>Email: ${to}<br>Phone Number: ${phone}</p>
    </div>
    <!-- Footer -->
    <div style="color: #5f5f5f">
        <p>overtimesports.com</p>
    </div>
  `

  // Throw an error if we're missing any of the needed fields.
  if (!to) {
    throw new Error("Missing required fields");
  }

  // Try to send the email using a `sendEmail` function we'll create next. Throw
  // an error if it fails.
  try {
    await sendEmail({ to, subject, template: { name: "consult", params: { } } });
  } catch (error) {
    throw new Error("Failed to send client email");
  }

  try {
    await sendEmail({ to, subject: "New Consultation Request", template: { name: "custom", params: { html: html } } });
  } catch (error) {
    throw new Error("Failed to send internal email");
  }

  // Redirect the user to a success page after the email is sent.
  return redirect("/");
};