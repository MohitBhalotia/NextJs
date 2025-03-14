import { users } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const id = req.url.split("user/")[1];

    const user = users.filter((item) => item.id.toString() === id);
    if (user.length === 0)
      return NextResponse.json({ msg: "Not found" }, { status: 404 });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ msg: "Error", error }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const id = req.url.split("user/")[1];
    const userIndex = users.findIndex((item) => item.id.toString() === id);
    if (userIndex === -1)
      return NextResponse.json({ msg: "Not found" }, { status: 404 });

    users.splice(userIndex, 1);
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ msg: "Error", error }, { status: 500 });
  }
};

export const PUT = async (req) => {
  try {
    const id = req.url.split("user/")[1];
    const { username } = await req.json();
    const user = users.find((user) => user.id.toString() === id);
    user.username = username;
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ msg: "Error", error }, { status: 500 });
  }
};
