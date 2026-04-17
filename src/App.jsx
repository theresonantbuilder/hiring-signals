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
          <Link to="/" style={{ textDecoration: 'none', flexShrink: 0, lineHeight: 1 }}>
            <span style={{ fontSize: '1.45rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#0F172A' }}>
              HIRING <span style={{ fontStyle: 'italic' }}>SIGNALS</span><span style={{ color: '#4F46E5' }}>.ai</span>
            </span>
          </Link>
          <div className="nav-links" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <Link to="/">Home</Link>
            <Link to="/advisors">About Paul</Link>
            <Link to="/contact">Contact</Link>
          </div>
          {/* Spacer to balance the logo on the right */}
          <div style={{ width: '36px', flexShrink: 0 }} />
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
