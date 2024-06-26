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
export async function DELETE(request, { params }) {
  const comment = comments.filter((c) => c.id !== parseInt(params.id));
  return NextResponse.json({ comment });
}

export async function PATCH(request, { params }) {
  const id = parseInt(params.id);
  const updatedComment = await request.json();
  const comment = comments.find((c) => c.id === id);
  comment.comment = updatedComment.comment || "Default";
  comments.push(comment);
  return NextResponse.json({ comments });
}
