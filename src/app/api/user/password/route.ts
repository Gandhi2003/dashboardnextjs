import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import useropt from "../../../../modles/uesrotp";
import otpGenerator from "otp-generator";
import User from "../../../../modles/userModles";
import connect from "../../../../dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
const emails = process.env.SMTP_EMAIL;
const pass = process.env.SMTP_PASSWORD;
function generateOTP() {
  const otp = otpGenerator.generate(4, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  return otp;
}
connect();
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    if (!email) {
      return NextResponse.json(
        { error: "Email address is required" },
        { status: 400 }
      );
    }
    const OTP = generateOTP();
    const user = await User.findOne({ email });
    if (user) {
      const existingUser = await useropt.findOne({ email });
      const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
          user: emails,
          pass: pass,
        },
      });
      const html = `
  <div class="row">
  <div class="col-12">
  <h1 style="color:blue;  text-align: center;" >OTP: <span></span>${OTP}</h1>
  <p style="color:green;  text-align: center;">OTP Send Succesfully! </p>
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
        to: email,
        // to: "gandhi2003raja@gmail.com",
        subject: "OTP Verification",
        text: `YOUR OTP is Sent`,
        html: html,
        attachments: [
          {
            filename: "img1.jpg",
            path: "public/assets/images/img1.jpg",
            cid: "unique@openjavascript.info",
          },
        ],
      };
      const info = await transporter.sendMail(mailOptions);
      if (existingUser) {
        // Update existing OTP in the database
        await useropt.findByIdAndUpdate(existingUser._id, { otp: OTP });

        // Send response with updated OTP
        return NextResponse.json({
          message: "OTP updated successfully",
          otp: OTP,
          data: info,
        });
      } else {
        const newUserOpt = new useropt({ email, otp: OTP });
        const data = await newUserOpt.save();
        return NextResponse.json({
          message: "User Created successfully",
          success: true,
          data: info,
        });
      }
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.messge }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // const data = { message: 'Data from your API' };
    const data = await useropt.find({});

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
