import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
//   const name = searchParams.get("name");
//   const age = searchParams.get("age");

const obj=Object.fromEntries(searchParams.entries())
console.log(obj);


//   return NextResponse.json({name,age});
return NextResponse.json(obj)
}
