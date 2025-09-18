import React from "react";

export function Home() {
  return (
    <>
      <h2>Home</h2>
      <button
        onClick={() =>
          import("../sum").then((module) => alert(module.Sum(2, 9)))
        }
      >
        Add 2,9
      </button>
      <div></div>
    </>
  );
}
