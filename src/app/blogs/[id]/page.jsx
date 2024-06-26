import React from "react";

const blogs = [
  {
    id: "1",
    title: "Introduction to JavaScript",
    description:
      "Learn the basics of JavaScript, a powerful and popular programming language used in web development.",
  },
  {
    id: "2",
    title: "Getting Started with React",
    description:
      "A beginner's guide to building user interfaces with React, a popular JavaScript library.",
  },
  {
    id: "3",
    title: "Understanding CSS Grid",
    description:
      "Master the CSS Grid layout system to create complex and responsive web designs with ease.",
  },
  {
    id: "4",
    title: "Responsive Web Design Principles",
    description:
      "Discover the key principles of responsive web design to create websites that look great on any device.",
  },
  {
    id: "5",
    title: "Building RESTful APIs with Node.js",
    description:
      "A step-by-step guide to building RESTful APIs using Node.js and Express.js.",
  },
  {
    id: "6",
    title: "Mastering Git and GitHub",
    description:
      "Learn how to use Git and GitHub for version control and collaboration in software development projects.",
  },
  {
    id: "7",
    title: "Introduction to TypeScript",
    description:
      "An overview of TypeScript, a superset of JavaScript that adds static types and other useful features.",
  },
  {
    id: "8",
    title: "Web Accessibility Best Practices",
    description:
      "Ensure your websites are accessible to all users by following these best practices for web accessibility.",
  },
  {
    id: "9",
    title: "SEO Basics for Beginners",
    description:
      "Understand the basics of Search Engine Optimization (SEO) to improve your website's visibility in search engines.",
  },
  {
    id: "10",
    title: "Introduction to Vue.js",
    description:
      "Get started with Vue.js, a progressive JavaScript framework for building user interfaces and single-page applications.",
  },
];

const BlogDetailsPage = ({ params }) => {
  const { title, description } = blogs.find((blog) => blog.id === params.id);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-4 border border-solid border-black space-y-4 my-4">
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
