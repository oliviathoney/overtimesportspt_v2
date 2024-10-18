import type { APIRoute } from "astro";
import { sendEmail } from "../../utils/emails";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  // Get the form data submitted by the user on the home page
  const formData = await request.formData();
  const to = formData.get("email") as string | null;
  const name = formData.get("name") as string | null;
  const phone = formData.get("phone") as string | null;
  const about = formData.get("about") as string | null;
  const subject = "OVERTIME Sports PT and Performance - Appointment Request"
  const html = `
    <div style="margin-bottom: 32px">
        <p>New Appointment Request</p>
    </div>
    <!-- Main Content -->
    <div style="margin-bottom: 32px; color: #222">
    <p>${name} has requested an appointment on overtimesportspt.com <br><br>Email: ${to}<br>Phone Number: ${phone}<br>Comments: ${about}</p>
    </div>
    <!-- Footer -->
    <div style="color: #5f5f5f">
        <p>overtimesports.com</p>
    </div>
  `
  // Throw an error if we're missing any of the needed fields.
  if (!to || !name) {
    throw new Error("Missing required fields");
  }

  // Try to send the email using a `sendEmail` function we'll create next. Throw
  // an error if it fails.
  try {
        await sendEmail({ to, subject, template: { name: "appointment", params: { name: name } } });
  } catch (error) {
    throw new Error("Failed to send email");
  }
  try {
    await sendEmail({ to, subject: "New Appointment Request", template: { name: "custom", params: { html: html } } });
  } catch (error) {
    throw new Error("Failed to send internal email");
  }
  // Redirect the user to a success page after the email is sent.
  return redirect("/resources");
};