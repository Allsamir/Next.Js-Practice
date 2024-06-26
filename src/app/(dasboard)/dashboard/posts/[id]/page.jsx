import React from "react";

const fetchData = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  const data = await response.json();
  return data;
};
export const generateMetadata = async ({ params }) => {
  const data = await fetchData(params.id);
  return {
    title: {
      absolute: data.title,
    },
    description: data.body,
    keywords: ["Allsamir", "nextapp", ...data.body.split(" ")],
  };
};

const PostDetails = async ({ params }) => {
  const post = await fetchData(params.id);
  return (
    <div
      key={post.id}
      className="p-4 border border-solid border-black space-y-4 my-4"
    >
      <h2 className="text-2xl">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
