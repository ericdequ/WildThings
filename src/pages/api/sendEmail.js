// /pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name,
      email,
      phone,
      eventDateLocation,
      venueName,
      floorSize,
      indoorOutdoor,
      existingFloor,
      wrapType,
      services,
      eventRole,
      referralSource,
      message,
    } = req.body;

    // Create a transporter object using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // app-specific password
      },
    });

    // Email template for the owner
    const ownerEmailContent = `
      New contact form submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Event Date and Location: ${eventDateLocation}
      Venue Name: ${venueName}
      Floor Size: ${floorSize}
      Indoor/Outdoor: ${indoorOutdoor}
      Existing Dance Floor: ${existingFloor}
      Wrap Type: ${wrapType}
      Services Needed: ${services}
      Event Role: ${eventRole}
      Referral Source: ${referralSource}
      Additional Message: ${message}
    `;

    // Email template for the customer
    const customerEmailContent = `
      Dear ${name},

      Thank you for your interest in our dance floor wrap services. We have received your request and will get back to you shortly.

      Here's a summary of your submission:
      Event Date and Location: ${eventDateLocation}
      Venue Name: ${venueName}
      Floor Size: ${floorSize}
      Wrap Type: ${wrapType}

      If you have any immediate questions, please don't hesitate to contact us.

      Best regards,
      Prestige Dance Floor Solutions Team
    `;

    try {
      // Send email to the owner
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        text: ownerEmailContent,
      });

      // Send confirmation email to the customer
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Thank You for Contacting Prestige Dance Floor Solutions",
        text: customerEmailContent,
      });

      // Respond with success
      res.status(200).json({ message: "Emails sent successfully!" });
    } catch (error) {
      // Error handling
      console.error(error);
      res.status(500).json({ message: "Failed to send emails", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
