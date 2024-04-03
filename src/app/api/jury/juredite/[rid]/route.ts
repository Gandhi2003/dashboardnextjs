import { NextRequest, NextResponse } from "next/server";
import multer from "multer";
import Edite from "../../../../../modles/eaditelist";
import connect from "../../../../../dbConfig/dbConfig";
import jwt from "jsonwebtoken";

connect();
//Get api
export async function GET(request: NextRequest, context: any) {
  try {
    const { params } = context;
    const { rid } = params;
    const data = await Edite.find({ juid: parseInt(rid) });
    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "No data found for provided juids" },
        { status: 404 }
      );
    }
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "id not found" }, { status: 500 });
  }
}

//Deleted api

export async function DELETE(request: NextRequest, context: any) {
  try {
    const { params } = context;
    const { rid } = params;
    const deletedUser = await Edite.deleteOne({ juid: parseInt(rid) });
    if (!deletedUser) {
      return NextResponse.json(
        {
          message: "User not found",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: "User Deleted successfully",
      success: true,
      data: deletedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.messge }, { status: 500 });
  }
}

//PUT Api route

export async function PUT(request: NextRequest, context: any) {
  try {
    const { params } = context;
    const { rid } = params;
    const formData = await request.formData();
    const firstname = formData.get("firstname");
    const age = formData.get("age");
    const Categry = formData.get("Categry");
    const UserID = formData.get("UserID");

    const user = await Edite.updateOne(
      { juid: parseInt(rid) },
      {
        $set: {
          UserID: UserID,
          firstname: firstname,
          age: age,
          Categry: Categry,
        },
      }
    );

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 404 }
      );
    }
    const updatedUser = await user
    console.log(updatedUser);
    return NextResponse.json({
      message: "User Updated successfully",
      success: true,
      updatedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.messge }, { status: 500 });
  }
}

//POST
// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.formData();
//     const firstname = formData.get("firstname");
//     const age = formData.get("age");
//     const Categry = formData.get("Categry");
//     const UserID = formData.get("UserID");

//     const newUser = new Edite({
//       firstname,
//       Categry,
//       UserID,
//       age,
//     });
//     const savedUser = await newUser.save();
//     console.log("Saved User:", savedUser);
//     return NextResponse.json({
//       message: "jury Created successfully",
//       success: true,
//       data: savedUser,
//     });
//   } catch (error: any) {
//     console.error("Error saving user:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
