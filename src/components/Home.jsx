import React, { useState } from "react";
import { AdminData } from "./AdminData";

export function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={() =>
          import("../sum").then((module) => alert(module.default(2, 8)))
        }
      >
        Add 2,9
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => setIsAdmin((prev) => !prev)}>AdminData</button>

      {isAdmin ? <AdminData /> : <h2>NotLogged In</h2>}
    </>
  );
}
