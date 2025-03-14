// export async function GET() {
//   return new Response("Hello World");
// }

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ msg: "Hello World",age:20 },{status:201});
}
