import { NextRequest, NextResponse } from "next/server";
import User from "../../../../modles/userModles";
import connect from "../../../../dbConfig/dbConfig";


connect()

export async function GET(request: NextRequest) {

    try {
      
     // const data = { message: 'Data from your API' };
    const data = await User.find({'_id':"652b7f93862f5bc533f74581"});
    // const data = await User.find({username:{$exists:true}});

        return NextResponse.json(data);
    } catch (error) {
        console.error(error);

        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}

