import { NextRequest, NextResponse } from "next/server";
import User from "../../../../modles/userModles";
import connect from "../../../../dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });
    response.cookies.set("Token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    response.cookies.set("Name", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    response.cookies.set("Role", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
}
}
