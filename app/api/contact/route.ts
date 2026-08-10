import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, phone, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Hi Beauty SPA" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `[New Inquiry] ${subject}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Booking Inquiry</title>
</head>
<body style="margin:0; padding:0; background-color:#f7f0eb; font-family: Georgia, 'Times New Roman', serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f0eb; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- TOP ORNAMENT -->
          <tr>
            <td align="center" style="padding-bottom: 24px;">
              <p style="margin:0; color:#b07a62; font-size:11px; letter-spacing:0.35em; text-transform:uppercase;">✦ &nbsp; Hi Beauty SPA &nbsp; ✦</p>
            </td>
          </tr>

          <!-- MAIN CARD -->
          <tr>
            <td style="background:#ffffff; border-radius:4px; overflow:hidden; box-shadow: 0 2px 24px rgba(58,31,20,0.08);">

              <!-- HEADER BAND -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#3a1f14; padding: 48px 48px 40px;">
                    <p style="margin:0 0 6px; color:#c9a07a; font-size:10px; letter-spacing:0.4em; text-transform:uppercase;">New Booking Inquiry</p>
                    <h1 style="margin:0; color:#fdf8f5; font-size:30px; font-weight:normal; letter-spacing:0.03em; line-height:1.2;">You have a new<br/><em>message from a client</em></h1>
                    <div style="margin-top:20px; width:48px; height:1px; background:#c9a07a;"></div>
                  </td>
                </tr>
              </table>

              <!-- BODY -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 40px 48px 0;">

                    <!-- SECTION LABEL -->
                    <p style="margin:0 0 20px; color:#b07a62; font-size:10px; letter-spacing:0.35em; text-transform:uppercase;">Client Details</p>

                    <!-- NAME ROW -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                      <tr>
                        <td width="100" style="padding:14px 16px; background:#fdf8f5; border-left:3px solid #a84f35; vertical-align:top;">
                          <p style="margin:0; color:#7a5548; font-size:9px; letter-spacing:0.3em; text-transform:uppercase;">Name</p>
                        </td>
                        <td style="padding:14px 20px; border-bottom:1px solid #f0e4db; vertical-align:top;">
                          <p style="margin:0; color:#3a1f14; font-size:16px;">${name}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- PHONE ROW -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                      <tr>
                        <td width="100" style="padding:14px 16px; background:#fdf8f5; border-left:3px solid #a84f35; vertical-align:top;">
                          <p style="margin:0; color:#7a5548; font-size:9px; letter-spacing:0.3em; text-transform:uppercase;">Phone</p>
                        </td>
                        <td style="padding:14px 20px; border-bottom:1px solid #f0e4db; vertical-align:top;">
                          <p style="margin:0; color:#3a1f14; font-size:16px;">${phone}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- SUBJECT ROW -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                      <tr>
                        <td width="100" style="padding:14px 16px; background:#fdf8f5; border-left:3px solid #a84f35; vertical-align:top;">
                          <p style="margin:0; color:#7a5548; font-size:9px; letter-spacing:0.3em; text-transform:uppercase;">Subject</p>
                        </td>
                        <td style="padding:14px 20px; border-bottom:1px solid #f0e4db; vertical-align:top;">
                          <p style="margin:0; color:#3a1f14; font-size:16px;">${subject}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- MESSAGE BLOCK -->
                    <p style="margin:28px 0 10px; color:#b07a62; font-size:10px; letter-spacing:0.35em; text-transform:uppercase;">Message</p>
                    <div style="background:#fdf8f5; border-left:3px solid #a84f35; padding:20px 24px; border-radius:0 4px 4px 0;">
                      <p style="margin:0; color:#3a1f14; font-size:15px; line-height:1.8; white-space:pre-wrap;">${message}</p>
                    </div>

                  </td>
                </tr>
              </table>

              <!-- CTA BAND -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 36px 48px;">
                    <p style="margin:0 0 16px; color:#7a5548; font-size:13px; line-height:1.6;">
                      Reply promptly to secure this booking. You can reach the client directly via phone or simply reply to this email.
                    </p>
                    <a href="tel:${phone}" style="display:inline-block; background:#a84f35; color:#ffffff; font-size:11px; letter-spacing:0.25em; text-transform:uppercase; text-decoration:none; padding:14px 32px; border-radius:2px;">
                      Call Client Now
                    </a>
                  </td>
                </tr>
              </table>

              <!-- FOOTER BAND -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#fdf8f5; border-top:1px solid #e4cfc4; padding:28px 48px; text-align:center;">
                    <p style="margin:0 0 4px; color:#a84f35; font-size:13px; letter-spacing:0.15em;">✦ Hi Beauty SPA ✦</p>
                    <p style="margin:0 0 2px; color:#b07a62; font-size:11px;">Antel Spa Residences, Makati &nbsp;·&nbsp; 0912 877 7453</p>
                    <p style="margin:12px 0 0; color:#c9b5ac; font-size:10px; letter-spacing:0.2em; text-transform:uppercase;">This message was sent via the contact form</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- BOTTOM ORNAMENT -->
          <tr>
            <td align="center" style="padding-top: 28px;">
              <p style="margin:0; color:#c9b5ac; font-size:10px; letter-spacing:0.2em;">Open Daily &nbsp;·&nbsp; 2:00 PM – 2:00 AM</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}