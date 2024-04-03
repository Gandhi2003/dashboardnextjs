import { NextRequest, NextResponse } from "next/server";

import User from "../../../../modles/userModles";
import connect from "../../../../dbConfig/dbConfig";
import bcryptjs from "bcryptjs";

connect();
// POST API
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const username = formData.get("username");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const password = formData.get("password");
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username,
      email,
      mobile,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    return NextResponse.json({
      message: "User Created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT API PASSWORD CHANGE
export async function PUT (request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      await User.updateOne( { email: email },
      {
        $set: {
          password: hashedPassword,
        },
      });
      return NextResponse.json({
        message: "Password changed successfully",
        password: password,
      });
  } catch (error: any) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// ra@gmail.com