import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>
        Dashboard Page{" "}
        <Link href={`/dashboard/profile`} className="underline">
          Profile
        </Link>{" "}
        <Link href={`/dashboard/update-profile`} className="underline">
          Update Profile
        </Link>
        {""}
        <Link href={`/dashboard/posts`} className="underline">
          Posts
        </Link>
      </span>
    </div>
  );
};

export default DashboardPage;
