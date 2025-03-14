import { users } from "@/lib/db"
import { NextResponse } from "next/server"

export const GET=async(req,res)=>{
    try{
        return NextResponse.json(users)
    }
    catch(err){
        return NextResponse.json({msg:err},{status:500})
    }
}

export const POST=async(req,res)=>{
    const {username}=await req.json()
    console.log(username);

    try {
        const newData={username};
        newData.id=users.length+1;
        users.push(newData)
        return NextResponse.json(users)
    } catch (error) {
      return NextResponse.json({msg:'Error',err},{status:500})  
    }
    
}
