// import './App.css'

import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Store } from "./components/Store";
import { About } from "./components/About";

function App() {
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

export default App;

function NavWrapper() {
  return (
    <>
      <nav style={{ fontSize: "2rem", gap: "20px",display:"flex" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </nav>
      <Outlet />
    </>
  );
}
