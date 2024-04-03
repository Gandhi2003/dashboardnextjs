import { NextRequest, NextResponse } from "next/server";
import multer from "multer";
import addjurview from "../../../../modles/juryview";
import connect from "../../../../dbConfig/dbConfig";
import jwt from "jsonwebtoken";
connect();

// export async function GET(request: NextRequest) {
//     try {
//       const token = request.cookies.get("Token");
//       if (!token) {
//         return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//       }
//       try {
//         // const decoded =await getDataTokens(request);
//         const decoded = await jwt.verify(token.value, process.env.TOKEN_SECRET!, {
//           expiresIn:"2m",
//         })
//         console.log("msg",decoded)
//         if (!decoded) {
//           return NextResponse.json({ error: "Invalid  token" }, { status: 401 });
//         }
//         const vid = request.nextUrl.searchParams.get('vid');
//         if (!vid) {
//           return NextResponse.json({ error: 'No vid provided' }, { status: 400 });
//         }
//         const data = await addjurview.findOne({ vid })
//         return NextResponse.json(data);
//       } catch (err) {
//         return NextResponse.json({ error: err }, { status: 401 });
//       }
//     } catch (error) {
//       console.error(error);
//       return NextResponse.json({ error: "An error occurred" }, { status: 500 });
//     }
//   }
export async function GET(request: NextRequest,context: any) {
    try {
      const {params}=context;
      const {vid}=params; 
      const data = await addjurview.find({_id:vid});
      console.log(data);
      return NextResponse.json(data);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "id not found" }, { status: 500 });
    }
  }
  