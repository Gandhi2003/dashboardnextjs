import { NextRequest, NextResponse } from "next/server";
import User from "../../../../modles/userModles";
import connect from "../../../../dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
    }

    // Check if the password is valid
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.TOKEN_SECRET!, {
      expiresIn: "5m",
    });

    // Set cookies and send success response
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("Token", token, { httpOnly: true });
    response.cookies.set("Role", user._id, { httpOnly: true });
    response.cookies.set("Name", user.username, { httpOnly: true });
    return response;
  
  } catch (error: any) {
    console.error("Error logging in:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


export async function GET(request: NextRequest) {
  try {
    // const data = { message: 'Data from your API' };
    const data = await User.find({});

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}


//login

// email:wr@gmail.com
// password:gan2003