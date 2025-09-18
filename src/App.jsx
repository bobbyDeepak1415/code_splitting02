import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Home = React.lazy(() =>
  import("./components/Home").then((module) => {
    return {
      default: module.Home,
    };
  })
);

const About = React.lazy(() =>
  import("./components/About").then((module) => {
    return {
      default: module.default,
    };
  })
);
const Store = React.lazy(() =>
  import("./components/Store").then((module) => {
    return {
      default: module.Store,
    };
  })
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/store" element={<Store />}></Route>
      </Route>
    </Routes>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </nav>
      <Outlet />
    </>
  );
}
