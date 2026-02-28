import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

const Admin = lazy(() => import("./pages/Admin"));

const App = () => {
  return (
    <Router>
      <div className="app-shell">
        <header className="app-header">
          <Link to="/" className="brand">
            <img src="/assets/images/logo.svg" alt="Logo" className="header-logo" />
            <span>Client Project Portal</span>
          </Link>
          <nav className="nav-links">
            <Link to="/">
              <img src="/assets/icons/home.svg" alt="" className="nav-icon" />
              Home
            </Link>
            <Link to="/admin">Admin</Link>
          </nav>
        </header>

        <main className="app-main">
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Client Project Portal</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
