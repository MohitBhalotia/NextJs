import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({msg:"Second"},{status:201})
}