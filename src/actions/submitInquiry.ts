"use server";

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateEmailHtml(data: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const date = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "long",
  });

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #050505;
            color: #ffffff;
            margin: 0;
            padding: 40px 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #0A0A0A;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            overflow: hidden;
          }
          .header {
            background-color: #00E573;
            padding: 30px 40px;
            text-align: center;
          }
          .header h1 {
            color: #000000;
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          .content {
            padding: 40px;
          }
          .field {
            margin-bottom: 24px;
          }
          .label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #888888;
            margin-bottom: 8px;
            display: block;
          }
          .value {
            font-size: 16px;
            color: #ffffff;
            margin: 0;
            line-height: 1.5;
            background: rgba(255, 255, 255, 0.03);
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          .footer {
            padding: 20px 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            text-align: center;
          }
          .footer p {
            color: #666666;
            font-size: 12px;
            margin: 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Project Inquiry</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name</span>
              <p class="value">${data.name}</p>
            </div>
            
            <div class="field">
              <span class="label">Email Address</span>
              <p class="value"><a href="mailto:${data.email}" style="color: #00E573; text-decoration: none;">${data.email}</a></p>
            </div>

            ${data.phone ? `
            <div class="field">
              <span class="label">Phone Number</span>
              <p class="value">${data.phone}</p>
            </div>
            ` : ''}

            ${data.company ? `
            <div class="field">
              <span class="label">Company</span>
              <p class="value">${data.company}</p>
            </div>
            ` : ''}

            <div class="field">
              <span class="label">Project Details</span>
              <p class="value" style="white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
          <div class="footer">
            <p>Received on ${date}</p>
            <p style="margin-top: 8px; color: #444;">VyntCore Internal System</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function submitInquiryAction(formData: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
}) {
  try {
    // 1. Insert into Supabase
    const { error: dbError } = await supabase.from("inquiries").insert([
      {
        name: formData.name,
        company: formData.company || null,
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message,
        status: "new",
      },
    ]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return { success: false, error: "Failed to submit inquiry. Please try again." };
    }

    // 2. Send Email via Resend
    try {
      await resend.emails.send({
        from: "VyntCore <onboarding@resend.dev>", // Using Resend test domain
        to: "hello@vyntcore.com",
        subject: `New Inquiry from ${formData.name}`,
        html: generateEmailHtml(formData),
      });
    } catch (emailError) {
      // We don't want to fail the user's submission if the email fails, 
      // since the data is safely in Supabase. We just log it.
      console.error("Resend email error:", emailError);
    }
    
// 3. Trigger n8n Lead Response System
try {
  await fetch("https://telling-cached-oral-blond.trycloudflare.com/webhook/vyntcore-lead-response", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }),
  });
} catch (n8nError) {
  console.error("n8n webhook error:", n8nError);
}

    return { success: true };
  } catch (err) {
    console.error("Action error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}
