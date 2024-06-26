import { NextResponse } from "next/server";

const comments = [
  {
    id: 1,
    comment: "This is bad comment",
  },
  {
    id: 2,
    comment: "This is bad comment",
  },
  {
    id: 3,
    comment: "This is bad comment",
  },
];

export async function GET(request) {
  return NextResponse.json(
    { comments },
    {
      headers: { "Set-Cookie": "secret=Hello world" },
    },
  );
}

export async function POST(request) {
  const body = await request.json();
  console.log(body.comment);
  console.log(body);
  comments.push({
    id: comments.length + 1,
    comment: body.comment,
  });
  return NextResponse.json({ comments });
}
