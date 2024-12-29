import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the JSON body
    const { name, email, subject, message } = body;

    console.log("Body parsed:", body);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.user, // Ensure these are defined in .env.local
        pass: process.env.pass,
      },
    });

    const mail = await transporter.sendMail({
      from: process.env.user,
      to: process.env.user,
      replyTo: email,
      subject: `${subject}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent:", mail);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
