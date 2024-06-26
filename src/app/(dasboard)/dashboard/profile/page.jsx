import Link from "next/link";
import React from "react";
import { Oswald } from "next/font/google";
import { redirect } from "next/navigation";
const oswald = Oswald({ weight: ["200", "500"], subsets: ["latin"] });
const ProfilePage = () => {
  // redirect("/dashboard/posts"); // redirect to dashboard/posts
  return (
    <div
      className={`${oswald.className} flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <span>
        Profile Page{" "}
        <Link className="underline" href={`/`}>
          Home
        </Link>
      </span>
    </div>
  );
};

export default ProfilePage;
