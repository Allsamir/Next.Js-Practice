import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen text-center">
      <h1>This is login page</h1>
      {[1, 2, 3].map((img) => (
        <Image
          key={img}
          src={`/images/img${img}.jpg`}
          alt="Hello"
          height={500}
          width={500}
        />
      ))}
    </div>
  );
};

export default LoginPage;
