import { users } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, par) {
  const { userId } = await par.params;
  const user = users.filter((item) => item.id == userId);
  if (user.length === 0) {
    return NextResponse.json({ msg: "No data found" },{status:404});
  }
  return NextResponse.json(user);
}
