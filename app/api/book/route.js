import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "Wedding Booking <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: "📸 New Wedding Booking",
     html: `
  <div style="max-width:600px;margin:auto;font-family:Arial,Helvetica,sans-serif;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #eee">
    
    <!-- HEADER -->
    <div style="background:#F1C1AF;padding:20px;text-align:center">
      <h1 style="margin:0;color:#2C2C2C;font-size:24px">
        📸 New Wedding Booking
      </h1>
      <p style="margin:5px 0 0;color:#5A3E36;font-size:14px">
        Sunny Filmzz – Booking Details
      </p>
    </div>

    <!-- BODY -->
    <div style="padding:24px;color:#2C2C2C">
      
      <h2 style="margin-top:0;font-size:20px;border-bottom:1px solid #eee;padding-bottom:8px">
        Client Information
      </h2>

      <table style="width:100%;font-size:14px;line-height:1.8">
        <tr>
          <td><strong>Name:</strong></td>
          <td>${data.fullName}</td>
        </tr>
        <tr>
          <td><strong>Phone:</strong></td>
          <td>${data.phone}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${data.email}</td>
        </tr>
      </table>

      <h2 style="margin-top:24px;font-size:20px;border-bottom:1px solid #eee;padding-bottom:8px">
        Wedding Details
      </h2>

      <table style="width:100%;font-size:14px;line-height:1.8">
        <tr>
          <td><strong>Date:</strong></td>
          <td>${data.date}</td>
        </tr>
        <tr>
          <td><strong>Time:</strong></td>
          <td>${data.time}</td>
        </tr>
        <tr>
          <td><strong>Venue:</strong></td>
          <td>${data.venue}</td>
        </tr>
        <tr>
          <td><strong>Package:</strong></td>
          <td>${data.packageName}</td>
        </tr>
        <tr>
          <td><strong>Extras:</strong></td>
          <td>${data.extras}</td>
        </tr>
      </table>

      <h2 style="margin-top:24px;font-size:20px;border-bottom:1px solid #eee;padding-bottom:8px">
        Additional Notes
      </h2>

      <p style="background:#FFF4EF;padding:14px;border-radius:8px;font-size:14px">
        ${data.comments}
      </p>

    </div>

    <!-- FOOTER -->
    <div style="background:#FAFAFA;padding:16px;text-align:center;font-size:12px;color:#777">
      <p style="margin:0">
        📍 This booking was submitted via the Sunny Filmzz website.
      </p>
      <p style="margin:6px 0 0">
        © ${new Date().getFullYear()} Sunny Filmzz
      </p>
    </div>

  </div>
`,

    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}
