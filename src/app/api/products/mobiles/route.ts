import { NextRequest, NextResponse } from "next/server";
import Prodmoblile from "../../../../modles/card/cards";
import connect from "../../../../dbConfig/dbConfig";
import paymobile from "../../../../modles/payment/mobpaylist";
connect();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const rapay = formData.get("rapay");
    const pay = formData.get("pay");
    const newUser = new paymobile({
      rapay,
      pay,
    });
    const savedUser = await newUser.save();
    return NextResponse.json({
      message: "Payment Created successfully",
      success: true,
      data: savedUser,
    });
  } catch (error: any) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//get api
export async function GET(request: NextRequest) {
  try {
    const data = await Prodmoblile.find({});
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
