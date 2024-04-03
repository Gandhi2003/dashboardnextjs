import { NextRequest, NextResponse } from "next/server";
import multer from "multer";
import connect from "../../../../dbConfig/dbConfig";
import Addjurylist from "../../../../modles/jury";
import jwt from "jsonwebtoken";

connect();

export async function GET(request: NextRequest) {
  try {
    // const token = request.headers.get("Authorization");
    // console.log(token);
    // if (!token) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }
    const tokens = await request.cookies.get("Token");
    console.log(tokens);
    const data = await Addjurylist.find({});
    // const data = await Addjurylist.find({ state:{$exists:true}});
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
