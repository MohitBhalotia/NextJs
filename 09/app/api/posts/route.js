import { NextResponse } from "next/server";

const DATA_URL = "https://jsonplaceholder.typicode.com/posts";

const API_KEY = process.env.API_KEY;

export async function GET() {
  const res = await fetch(DATA_URL);
  const posts = await res.json();

  return NextResponse.json(posts);
}

export async function POST(req) {
  try {
    const { title, body, userId } = await req.json();
    const res = await fetch(DATA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // if api key is required ,ensure this header has correctly formatted 'Authorization'
      },
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
    });
    if (res.status === 201) {
      const newPost = await res.json();
      return NextResponse.json(newPost);
    } else {
      console.error("Post req is failed with status :", req.status);
      return NextResponse.error("Post request failed");
    }
  } catch (error) {
    console.error("Post request error:", err);
    return NextResponse.error("Post request failed");
  }
}

export async function PUT(req) {
  try {
    const { userId, id, title, body } = await req.json();
    const res = await fetch(`${DATA_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        body,
        userId,
      }),
    });

    if (res.status === 200) {
      const updatedPost = await res.json();
      return NextResponse.json(updatedPost);
    } else {
      return NextResponse.json("Put Request failed");
    }
  } catch (error) {
    console.error("Put request error:", err);
    return NextResponse.error("Put request failed");
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const res = await fetch(`${DATA_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return NextResponse.json({ msg: "Post Deleted" });
  } catch (error) {
    return NextResponse.error("Delete request failed");
  }
}
