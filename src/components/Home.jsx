import React, { Suspense, useState } from "react";

export function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  const AdminData = React.lazy(() =>
    delay(1500).then(() =>
      import("../components/AdminData").then((module) => {
        return {
          default: module.default,
        };
      })
    )
  );

  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={() =>
          import("../sum").then((module) => alert(module.Sum(2, 8)))
        }
      >
        Add 2,9
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => setIsAdmin((prev) => !prev)}>AdminData</button>

      {isAdmin ? (
        <Suspense fallback={<h2>fetching.....</h2>}>
          <AdminData />
        </Suspense>
      ) : (
        <h2>NotLogged In</h2>
      )}
    </>
  );
}

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
