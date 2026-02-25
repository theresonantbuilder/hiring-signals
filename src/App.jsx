import React, { useEffect, useRef } from "react";
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
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2.5 + 1;
        this.color = Math.random() > 0.6 ? "#10B981" : "#3B82F6";
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.strokeStyle = Math.random() > 0.7 ? "rgba(16,185,129,0.1)" : "rgba(59,130,246,0.1)";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => { p.update(); p.draw(); });
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();
    const handleResize = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        {/* Background Canvas: Fixed so it repeats unbroken behind all layers */}
        <canvas ref={canvasRef} className="background-canvas" />

        {/* Navigation */}
        <nav className="main-nav">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/directory">Provider Directory</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/advisors">About Paul</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Link to="/audit" className="nav-cta" style={{ textDecoration: 'none' }}>Hiring Signal Check</Link>
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
        
        {/* Final CTA (Global Footer) */}
        <div className="footer-cta">
            <h4 className="footer-title">Ready to isolate the signal?</h4>
            <Link to="/audit" className="footer-button" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Hiring Signal Check
            </Link>
        </div>
      </div>
    </Router>
  );
}
