import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()
    console.log("Received form data:", { name, email, subject, message })

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email configuration:", {
        hasUser: !!process.env.EMAIL_USER,
        hasPass: !!process.env.EMAIL_PASS
      })
      return NextResponse.json(
        { error: "Email configuration is missing" },
        { status: 500 }
      )
    }

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify transporter configuration
    console.log("Verifying transporter configuration...")
    try {
      await transporter.verify()
      console.log("Transporter verification successful")
    } catch (error) {
      console.error("Transporter verification failed:", error)
      if (error instanceof Error) {
        return NextResponse.json(
          { error: `Email service configuration is invalid: ${error.message}` },
          { status: 500 }
        )
      }
      return NextResponse.json(
        { error: "Email service configuration is invalid" },
        { status: 500 }
      )
    }

    // Email content
    const mailOptions = {
      from: {
        name: `${name} via Contact Form`,
        address: process.env.EMAIL_USER!
      },
      to: "m.qasim077@gmail.com", // Your email where you want to receive the messages
      replyTo: email, // This allows you to reply directly to the person who filled the form
      subject: `New Contact Form Submission For agentcall.io: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from your website's contact form. You can reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        You can reply directly to this email to respond to ${name}.
      `,
      headers: {
        'X-Entity-Ref-ID': Date.now().toString(),
        'X-Auto-Response-Suppress': 'OOF, AutoReply'
      }
    }

    console.log("Attempting to send email with options:", {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      replyTo: mailOptions.replyTo
    })

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info)

    // Send auto-reply to the person who submitted the form
    const autoReplyOptions = {
      from: {
        name: "AgentCall.io",
        address: process.env.EMAIL_USER!
      },
      to: email,
      subject: "Thank you for contacting AgentCall.io",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for contacting us!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Best regards,<br>The AgentCall.io Team</p>
        </div>
      `
    }

    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Detailed error sending email:", error)
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      )
    }
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
} 