import Link from "next/link";
import React from "react";
export const metadata = {
  title: "About",
  description: "About Allsamir",
};

const fetchTime = async () => {
  try {
    const res = await fetch(`http://localhost:3000/time`, {
      next: { revalidate: 10 },
    });
    const data = await res.json();
    return data.time;
  } catch (error) {
    console.error(error);
  }
};

const Aboutpage = async () => {
  const time = await fetchTime();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>
        This is About Page{" "}
        <Link href={`/about/skills`} className="underline">
          Skills
        </Link>
        <br />
        Time: {time}
      </span>
    </div>
  );
};

export default Aboutpage;
