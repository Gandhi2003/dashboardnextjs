import { NextRequest, NextResponse } from "next/server";
import Demo from "../../../../modles/demo";
import connect from "../../../../dbConfig/dbConfig";


connect()

export async function GET(request: NextRequest) {

    try {
      
     // const data = { message: 'Data from your API' };
    const data = await Demo.find({"_id":"64e722e0e54f3dab9dc28f70"});

        return NextResponse.json(data);
    } catch (error) {
        console.error(error);

        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}