import { NextRequest, NextResponse } from "next/server";
import Demo from "../../../modles/demo";
import connect  from "../../../dbConfig/dbConfig";
connect();

export async function GET(request: NextRequest) {
  try {
    const data = await Demo.find({});
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
