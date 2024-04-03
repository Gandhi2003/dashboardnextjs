import { Twilio } from "twilio";
import { NextRequest, NextResponse } from "next/server";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const client = new Twilio(accountSid, authToken);
    const message = await client.messages.create({
      from: "whatsapp:+14155238886",
      body: `${name}`,
      // mediaUrl: ['https://demo.twilio.com/owl.png'],
      to: "whatsapp:+918870421839",
    });

    console.log("Message sent:", message);

    return NextResponse.json({
      message: "Send WhatsApp Successfully",
      success: true,
      data: {
        messageSid: message.sid,
      },
   
    });
 
  } catch (error: any) {
    return NextResponse.json({ error: error.messge }, { status: 500 });
  }
}
