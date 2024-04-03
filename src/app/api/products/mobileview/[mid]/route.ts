import { NextRequest, NextResponse } from "next/server";
import multer from "multer";
import mobileview from "../../../../../modles/card/mobiles/mobileview";
import connect from "../../../../../dbConfig/dbConfig";
connect();

export async function GET(request: NextRequest, context: any) {
  try {
    const { params } = context;
    const { mid } = params;
    const data = await mobileview.find({ pr_mobileid: parseInt(mid) });
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "id not found" }, { status: 500 });
  }
}
