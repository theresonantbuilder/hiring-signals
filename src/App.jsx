import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import Methodology from "./Methodology";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
import Advisors from "./Advisors";
import Contact from "./Contact";
import SignalAudit from "./SignalAudit";

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        {/* Navigation */}
        <nav className="main-nav">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/directory">Provider Directory</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/advisors">About Paul</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Link to="/audit" className="nav-cta" style={{ textDecoration: 'none' }}>Signal Audit</Link>
        </nav>

        {/* Route Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/directory" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/advisors" element={<Advisors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/audit" element={<SignalAudit />} />
        </Routes>
      </div>
    </Router>
  );
}
