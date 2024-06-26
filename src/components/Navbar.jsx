"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const handleClick = (pathName) => {
    router.push(`/${pathName}`);
  };
  if (pathName.includes("/dashboard")) {
    return <h1 className="text-center my-4">Dashboard Navbar</h1>;
  }
  return (
    <nav className="flex justify-between py-4 px-4">
      <h2 className="text-2xl">
        AL <span className="text-red-600">Samir</span>
      </h2>
      <ul className="flex justify-evenly gap-4 items-center">
        <li>
          <Link className={`${pathName === "/" && "text-red-600"}`} href={`/`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${pathName === "/about" && "text-red-600"}`}
            href={`/about`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`${pathName === "/meals" && "text-red-600"}`}
            href={`/meals`}
          >
            Meals
          </Link>
        </li>
        <li>
          <Link
            className={`${pathName === "/blogs" && "text-red-600"}`}
            href={`/blogs`}
          >
            Blogs
          </Link>
        </li>
        <li>
          {session ? (
            <button
              className="px-4 py-2 border border-solid border-black rounded-md"
              type="button"
              onClick={() => handleClick("api/auth/signin")}
            >
              Login
            </button>
          ) : (
            <button
              className="px-4 py-2 border border-solid border-black rounded-md"
              type="button"
              onClick={() => handleClick("api/auth/signin")}
            >
              Logout
            </button>
          )}
        </li>
        <li>
          <button
            className="px-4 py-2 border border-solid border-black rounded-md"
            type="button"
            onClick={() => handleClick("dashboard")}
          >
            Profile
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
