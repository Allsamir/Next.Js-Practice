import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Dashboard Posts",
  description: "All the Posts that allsamir loves to share",
};

const fetchData = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const result = await data.json();
  return result;
};

const PostPage = async () => {
  const posts = await fetchData();
  return (
    <div className="min-h-screen text-center">
      <div className="grid grid-cols-3 gap-4">
        {posts.slice(0, 10).map((post) => (
          <div
            key={post.id}
            className="p-4 border border-solid border-black space-y-4 my-4"
          >
            <h2 className="text-2xl">{post.title}</h2>
            <p>{post.body}</p>
            <Link
              href={`/dashboard/posts/${post.id}`}
              className="px-4 py-2 border border-solid border-black rounded-md inline-block"
            >
              {" "}
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
