import { NextRequest, NextResponse } from "next/server";
import Demo from "../../../../modles/demo";
import connect from "../../../../dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest,context: any) {
  try {
    const {params}=context;
    const {pid}=params; 
    const data = await Demo.find({_id:pid});
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "id not found" }, { status: 500 });
  }
}
