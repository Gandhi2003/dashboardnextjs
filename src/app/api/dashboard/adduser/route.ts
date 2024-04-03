import { NextRequest, NextResponse } from "next/server";
import multer from "multer";
import Demo from "../../../../modles/demo";
import connect from "../../../../dbConfig/dbConfig";
import jwt from "jsonwebtoken";
import { getDataTokens } from "../../../../Token/getToken";

connect();
//POST Api route

export async function POST(request: NextRequest) {
  try {
    // const reqBody = await request.json();
    const formData = await request.formData();
    const username = formData.get("username");
    if (!username) {
      return NextResponse.json(
        {
          error: "No username provided",
        },
        { status: 400 }
      );
    }
    const user = await Demo.findOne({ username });
    if (user) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }
    const newUser = new Demo({ username });
    const data = await newUser.save();
    console.log(data);

    return NextResponse.json({
      message: "User Created successfully",
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.messge }, { status: 500 });
  }
}

//GET Api route

// export async function GET(request: NextRequest) {
//   try {
//     // const data = { message: 'Data from your API' };
//     const data = await Demo.find({ username: { $exists: true } });

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json({ error: "An error occurred" }, { status: 500 });
//   }
// }

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("Token");
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
      // const decoded =await getDataTokens(request);
      const decoded = await jwt.verify(token.value, process.env.TOKEN_SECRET!, {
        expiresIn:"2m",
      })
      console.log("msg",decoded)
      if (!decoded) {
        return NextResponse.json({ error: "Invalid  token" }, { status: 401 });
      }
      const data = await Demo.find({});
      return NextResponse.json(data);
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 401 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

//PUT Api route

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, updatedData } = reqBody;
    const user = await Demo.findOne({ username });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 404 }
      );
    }
    user.set(updatedData);
    const updatedUser = await user.save();
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

//DELETE Api route

export async function DELETE(request: NextRequest) {
  try {
    // const reqBody = await request.json();
    // const formData = await request.formData();
    // const username = formData.get('_id');

    // const { username } = reqBody;
    const deletedUser = await Demo.deleteOne({});
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

//Get Api route
// export async function GET(request: NextRequest) {
//   try {
//     const userId =await getDataTokens(request);
//     const user = await Demo.find({_id:userId });

//     return NextResponse.json({
//       message:"User fetched successfully",
//       data:user,
//     })
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "An error occurred" }, { status: 400 });
//   }
// }

// export async function GET(request: NextRequest) {
//   try {
//     const decoded =await getDataTokens(request);
//     // const decoded = await jwt.verify(token.value, process.env.TOKEN_SECRET);
//     if (!decoded === decoded) {
//       return NextResponse.json({ error: "Invalid  token" }, { status: 401 });
//     }
//     const data = await Demo.find({});
//     console.log(decoded);

//     return NextResponse.json(data);
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 401 });
//   }
// }
