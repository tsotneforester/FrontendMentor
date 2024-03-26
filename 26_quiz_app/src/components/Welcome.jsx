import React from "react";

export default function Welcome({}) {
  return (
    <>
      <h1>Welcome to the</h1>
      <h1 className="bold">Frontend Quiz!</h1>
      <span
        style={{
          margin: "40px 0",
        }}>
        Pick a subject to get started.
      </span>
    </>
  );
}
