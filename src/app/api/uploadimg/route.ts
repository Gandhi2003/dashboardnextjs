import Product from "../../../modles/addimg";
import connect from "../../../dbConfig/dbConfig";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

connect();

// export async function POST(request: NextRequest) {
//   const data = await request.formData();
//   const file: File | null = data.get('file') as unknown as File;

//   if (!file) {
//     return NextResponse.json({ success: false, message: 'No file uploaded' });
//   }

//   const bytes = await file.arrayBuffer();
//   const buffer = Buffer.from(bytes);

//   const path = `src/app/api/upload/${file.name}`;

//   try {

//     await writeFile(path, buffer);
//     const product = new Product({imagePath:path });
//     const data = await product.save();

//     return NextResponse.json({
//       success: true,
//       message: 'File uploaded and data saved to MongoDB',
//       // savedUser,
//        data
//     });
//   } catch (error) {
//     return NextResponse.json({ success: false, message: error.message });
//   }
// }

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false, message: "No file uploaded" });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = file.name;
  const fileExtension = path.extname(fileName);
  const imageName = fileName.replace(fileExtension, "");
  const filePath = `src/app/Upload/${fileName}`;
  // const filePath = `src/app/Upload/${fileName}`;


  try {
    await writeFile(filePath, buffer);
    const product = new Product({
      imagePath: filePath,
      imageName: imageName,
    });
    const savedData = await product.save();

    return NextResponse.json({
      success: true,
      message: "File uploaded and data saved to MongoDB",
      data: savedData,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function GET(request: NextRequest) {
  try {
    const data = await Product.find({ _id: "656d83689816249b84c68297" });
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
