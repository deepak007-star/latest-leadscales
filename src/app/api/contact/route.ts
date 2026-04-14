import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, businessType, message, source } = data;

    await transporter.sendMail({
      from: `"LeadScale Website" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `New Lead: ${name} — ${businessType || "N/A"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">New Lead from LeadScale Website</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Name</td>
              <td style="padding: 8px 12px; color: #1a1a1a;">${name}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 12px; color: #1a1a1a;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 8px 12px; color: #1a1a1a;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Industry</td>
              <td style="padding: 8px 12px; color: #1a1a1a;">${businessType || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Message</td>
              <td style="padding: 8px 12px; color: #1a1a1a;">${message || "No message provided"}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Source</td>
              <td style="padding: 8px 12px; color: #1a1a1a;">${source}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #888; font-size: 12px;">This lead was submitted via the LeadScale website.</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send lead email:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
