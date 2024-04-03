import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Emailcontact from "../../../nodemailer/nodemailer";

const email = process.env.SMTP_EMAIL;
const pass = process.env.SMTP_PASSWORD;
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("firstname");
    const emails = formData.get("email");
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: pass,
      },
    });
    const html = `

<div class="row">
<div class="col-12">
<h1 style="color:blue;  text-align: center;" >Welcome To <span>${name}</span></h1>
<p style="color:green;  text-align: center;">Succesfully Registrations ! </p>
<div class="img-cotantent">
<img  src="cid:unique@openjavascript.info"  style="with:50; height:50;" alt="-images known"> 
<a hrf="youtub">Youtub</a>
</div> 
<br>

</div>

</div>`;
    // Email options
    const mailOptions = {
      from: email,
      to: emails,
      // to: "gandhi2003raja@gmail.com",
      subject: name,
      text: "This is a test string",
      html: html,
      attachments: [
        {
          filename: "img1.jpg",
          path: "public/assets/images/img1.jpg",
          cid: "unique@openjavascript.info",
        },
      ],
    };
    // Send mail
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Send Email Successfully",
      success: true,
      data: info,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.messge }, { status: 500 });
  }
}
