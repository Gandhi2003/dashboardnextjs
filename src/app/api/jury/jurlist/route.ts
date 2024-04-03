import { NextRequest, NextResponse } from "next/server";
import List from "../../../../modles/addjurys";
import connect from "../../../../dbConfig/dbConfig";
connect();
// export async function POST(request:NextRequest) {
//     try {
//         const reqBody = await request.json()
//         const { ftname, ltname,date,pin,states,coutry,email,mobile ,dist,cit} = reqBody
//         console.log(reqBody);
//         const user = await Jurylist.findOne({ email, mobile })
//         if (user) {
//             return NextResponse.json({
//                 error: "User already exists"
//             }, { status: 400 })
//         }
//         const newUser = new Jurylist({
//             ftname,
//             ltname,
//             date,
//             pin,
//             states,
//             coutry,
//             email,
//             mobile ,
//             dist,
//             cit
//         })
//         const savedUser = await newUser.save()
//         console.log(savedUser);
//         return NextResponse.json({
//             message: "Jury Created successfully",
//             success: true,
//             savedUser
//         })
//     } catch (error: any) {
//         return NextResponse.json({ error: error.messge }, { status: 500 })
//     }
// }

// export async function POST(request: NextRequest) {
//   try {
//     // const reqBody = await request.json();
//     const formData = await request.formData();
//     const firstname = formData.get("firstname");
//     // const lastname = formData.get("last_name");
//     const email = formData.get("eamil");
//     // const mobile = formData.get("mobile");
//     if (!firstname) {
//       return NextResponse.json(
//         {
//           error: "No username provided",
//         },
//         { status: 400 }
//       );
//     }
//     const user = await List.findOne({firstname });
//     if (user) {
//       return NextResponse.json(
//         {
//           error: "User already exists",
//         },
//         { status: 400 }
//       );
//     }
//     const newUser = new List({
//         // fristname,
//         // lastname,
//         email,
//         // mobile
//         firstname
//     });
//     const data = await newUser.save();
//     console.log(data);

//     return NextResponse.json({
//       message: "User Created successfully",
//       success: true,
//       data,
//     });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.messge }, { status: 500 });
//   }
// }

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const date = formData.get("date_birth");
    const country = formData.get("country");
    const state = formData.get("state");
    const districts = formData.get("districts");
    const city = formData.get("city");
    const pincode = formData.get("pincode");
    const existingUser = await List.findOne({ country });
    if (existingUser) {
      return NextResponse.json(
        {
          error: "jury already exists",
        },
        { status: 400 }
      );
    }

    const newUser = new List({
      firstname,
      lastname,
      email,
      mobile,
      country,
      state,
      districts,
      city,
      pincode,
      date,
    });
    const savedUser = await newUser.save();
    console.log("Saved User:", savedUser);

    return NextResponse.json({
      message: "jury Created successfully",
      success: true,
      data: savedUser,
    });
  } catch (error: any) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const data = await List.find({});
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const deletedUser = await List.deleteOne({});
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

//join qury

// export async function GET(request: NextRequest) {
//   try {
//     const data = await List.aggregate([
//       {
//         $lookup: {
//           from: "jurydetails",
//           localField: "juid",
//           foreignField: "juid",
//           as: "wer",
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           firstname: 1,
//           mobile: 1,
//           juid: 1,
//           catery: "$wer.catery",
//           name: "$wer.name",
//         },
//       },
//       { $unwind: "$catery" },
//       { $unwind: "$name" },
//     ]);
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "An error occurred" }, { status: 500 });
//   }
// }
