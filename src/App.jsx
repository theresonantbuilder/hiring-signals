import React, { useEffect, useRef } from "react";

/* ------------------------------------------------------------------
  Sub-Component: Friction Checkpoint
  (Tightened padding for better scroll flow)
  ------------------------------------------------------------------
*/
const FrictionCheckpoint = ({ question }) => (
  <div className="relative z-10 py-6 flex flex-col items-center justify-center">
    <div className="w-px h-8 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent mb-4"></div>
    <p className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.4em] mb-2">System Diagnostic</p>
    <h4 className="text-white/80 text-sm md:text-base italic font-light tracking-wide max-w-2xl text-center px-6 leading-relaxed">
      "{question}"
    </h4>
    <div className="w-px h-8 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent mt-4"></div>
  </div>
);

/*
  ------------------------------------------------------------------
  Layer Components (Restored Full Content & Tightened Padding)
  ------------------------------------------------------------------
*/

const SourcingLayer = () => (
  <section className="relative z-10 py-4 px-12 bg-black/40 backdrop-blur-sm border-b border-white/5">
    <div className="max-w-6xl mx-auto">
      <h3 className="text-blue-400 text-sm font-bold tracking-widest mb-6 uppercase">01 // The Sourcing Layer</h3>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="border border-red-500/50 p-8 rounded-xl bg-red-500/5 shadow-[0_0_30px_rgba(239,68,68,0.15)] md:scale-105 transition-all duration-300">
          <h4 className="text-white font-bold mb-4 uppercase tracking-tight">THE NOISE (Literal Search)</h4>
          <div className="space-y-3 font-mono text-xs text-gray-400">
            <div className="bg-white/10 border border-white/20 p-2 rounded text-white italic">Query: "Construction Project Manager"</div>
            <div className="text-white font-bold">! 4,281 broad matches found</div>
            <p className="italic border-l border-white/20 pl-4">"Includes Retail PMs, IT Consultants, and out-of-state applicants..."</p>
            <div className="pt-4 text-white font-bold uppercase tracking-widest">Time Loss: 12+ Management Hours</div>
          </div>
        </div>
        <div className="border border-emerald-500/50 p-8 rounded-xl bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.15)] md:scale-105 transition-all duration-300">
          <h4 className="text-white font-bold mb-4 uppercase tracking-tight">THE SIGNAL (Semantic Inference)</h4>
          <div className="space-y-3 font-mono text-xs text-gray-400">
            <div className="bg-white/10 border border-white/20 p-2 rounded text-white italic">Intent: "Licensed FL Leads / $10M+ Ops / Stable Tenure"</div>
            <div className="text-white font-bold">✓ 8 Work-Ready Candidates</div>
            <ul className="space-y-1">
              <li>• 100% Local (Verified)</li>
              <li>• Active Commercial Licenses</li>
              <li>• 4.2yr Avg. Tenure</li>
            </ul>
            <div className="pt-4 text-white font-bold uppercase tracking-widest">Selection Time: 15 Minutes</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NotificationLayer = () => (
  <section className="relative z-10 py-4 px-12 bg-black/40 backdrop-blur-sm border-b border-white/5">
    <div className="max-w-6xl mx-auto">
      <h3 className="text-blue-400 text-sm font-bold tracking-widest mb-6 uppercase">02 // The Notification Layer</h3>
      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        <div className="border border-red-500/50 p-8 rounded-xl bg-red-500/5 shadow-[0_0_30px_rgba(239,68,68,0.15)] md:scale-105 transition-all duration-300">
          <h4 className="text-white font-bold mb-4 uppercase tracking-tight">Inbox Stagnation</h4>
          <div className="space-y-4 font-mono text-xs text-gray-400">
            <div className="bg-white/10 border border-white/20 p-3 rounded-lg text-white italic">Email Alert: "New Applicant" - Sent to generic HR inbox.</div>
            <ul className="space-y-2">
              <li>• Data sits unread for 3+ days</li>
              <li>• Zero context on candidate urgency</li>
              <li>• 40% talent drop-out rate</li>
            </ul>
            <div className="pt-4 text-white font-bold uppercase tracking-tighter">Outcome: Lost Competitive Edge</div>
          </div>
        </div>
        <div className="border border-emerald-500/50 p-8 rounded-xl bg-emerald-500/5 shadow-[0_0_40px_rgba(16,185,129,0.2)] md:scale-105 transition-all duration-300">
          <h4 className="text-white font-bold mb-4 uppercase tracking-tight">Instant Signal Routing</h4>
          <div className="space-y-4 font-mono text-xs text-white text-gray-400">
            <div className="bg-white/10 border border-white/20 p-3 rounded-lg"><span className="font-bold underline">SLACK/SMS:</span> "Priority: J. Doe. 12yr Industrial Exp. Route to PM Lead."</div>
            <ul className="space-y-2">
              <li>• Real-time decision maker routing</li>
              <li>• Context-rich alerts & experience summaries</li>
              <li>• Immediate automated SMS engagement</li>
            </ul>
            <div className="pt-4 text-white font-bold uppercase tracking-tighter">Outcome: First-to-Market Speed</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VerificationLayer = () => (
  <section className="relative z-10 py-4 px-12 bg-black/40 backdrop-blur-sm border-b border-white/5">
    <div className="max-w-6xl mx-auto">
      <h3 className="text-blue-400 text-sm font-bold tracking-widest mb-6 uppercase">03 // The Verification Layer</h3>
      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        <div className="border border-red-500/50 p-8 rounded-xl bg-red-500/5 shadow-[0_0_30px_rgba(239,68,68,0.15)] md:scale-105 transition-all duration-300">
          <h4 className="text-white font-bold mb-4 uppercase tracking-tight">Administrative Debt</h4>
          <div className="space-y-4 font-mono text-xs text-gray-400">
            <div className="bg-white/10 border border-white/20 p-3 rounded-lg text-white italic">"Do you have your FL license? Please email a copy."</div>
            <ul className="space-y-2">
              <li>• Manual document back-and-forth</li>
              <li>• 48-hour qualification lag</li>
              <li>• High-cost managers performing data entry</li>
            </ul>
            <div className="pt-4 text-white font-bold uppercase tracking-tighter">Outcome: 65% Interview Waste</div>
          </div>
        </div>
        <div className="border border-emerald-500/50 p-8 rounded-xl bg-emerald-500/5 shadow-[0_0_40px_rgba(16,185,129,0.2)] md:scale-105 transition-all duration-300">
          <h4 className="text-white font-bold mb-4 uppercase tracking-tight">Agentic Verification</h4>
          <div className="space-y-4 font-mono text-xs text-white text-gray-400">
            <div className="bg-white/10 border border-white/20 p-3 rounded-lg text-white italic">"License #123456 Collected & Matched. Ready for hire."</div>
            <ul className="space-y-2">
              <li>• 24/7 Autonomous vetting</li>
              <li>• Verified Attestation: Visa & Location</li>
              <li>• Auto-scheduling for 100% qualified talent</li>
            </ul>
            <div className="pt-4 text-white font-bold uppercase tracking-tighter">Outcome: 100% Interview Utility</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EvaluationLayer = () => (
  <section className="relative z-10 py-4 px-12 bg-black/40 backdrop-blur-sm border-b border-white/5">
    <div className="max-w-6xl mx-auto">
      <h3 className="text-blue-400 text-sm font-bold tracking-widest mb-6 uppercase">04 // The Evaluation Layer</h3>
      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        <div className="border border-red-500/50 p-8 rounded-xl bg-red-500/5 shadow-[0_0_30px_rgba(239,68,68,0.15)] md:scale-105 transition-all duration-300">
          <h4 className="text-white font-bold mb-4 uppercase tracking-tight">Subjective "Vibe" Hiring</h4>
          <div className="space-y-4 font-mono text-xs text-gray-400">
            <div className="bg-white/10 border border-white/20 p-3 rounded-lg text-white italic">"He seemed like a good fit, but I can't recall his niche experience."</div>
            <ul className="space-y-2">
              <li>• Decisions based on fragmented memory</li>
              <li>• Zero objective data comparison</li>
              <li>• High bias, high variance outcomes</li>
            </ul>
            <div className="pt-4 text-white font-bold uppercase tracking-tighter">Outcome: "Gut-Feel" Risk</div>
          </div>
        </div>
        <div className="border border-emerald-500/50 p-8 rounded-xl bg-emerald-500/5 shadow-[0_0_40px_rgba(16,185,129,0.2)] md:scale-105 transition-all duration-300">
          <h4 className="text-white font-bold mb-4 uppercase tracking-tight">Evidence Extraction</h4>
          <div className="space-y-4 font-mono text-xs text-white text-gray-400">
            <div className="bg-white/10 border border-white/20 p-3 rounded-lg"><span className="font-bold underline decoration-emerald-500 text-white">SIGNAL:</span> "Proficient in FL Lien Law. Verified Multi-entity payroll."</div>
            <ul className="space-y-2">
              <li>• Transcription & semantic competency mapping</li>
              <li>• Searchable database of candidate answers</li>
              <li>• Objective scoring across the hiring team</li>
            </ul>
            <div className="pt-4 text-white font-bold uppercase tracking-tighter">Outcome: Hiring Certainty</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ComplianceLayer = () => (
  <section className="relative z-10 pt-4 pb-20 px-12 bg-black/40 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto">
      <h3 className="text-blue-400 text-sm font-bold tracking-widest mb-6 uppercase">05 // The Selection & Compliance Layer</h3>
      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        <div className="border border-red-500/50 p-8 rounded-xl bg-red-500/5 shadow-[0_0_30px_rgba(239,68,68,0.15)] md:scale-105 transition-all duration-300">
          <h4 className="text-white font-bold mb-4 uppercase tracking-tight">The Paperwork Chasm</h4>
          <div className="space-y-4 font-mono text-xs text-gray-400">
            <div className="bg-white/10 border border-white/20 p-3 rounded-lg text-white italic">"Offer letter sent... waiting on signature and I-9."</div>
            <ul className="space-y-2">
              <li>• Days lost in manual document tracking</li>
              <li>• High risk of 'Ghosting' before Day 1</li>
              <li>• Compliance gaps in high-regulation zones</li>
            </ul>
            <div className="pt-4 text-white font-bold uppercase tracking-tighter">Outcome: Final-Mile Attrition</div>
          </div>
        </div>
        <div className="border border-emerald-500/50 p-8 rounded-xl bg-emerald-500/5 shadow-[0_0_40px_rgba(16,185,129,0.2)] md:scale-105 transition-all duration-300">
          <h4 className="text-white font-bold mb-4 uppercase tracking-tight">Automated Closing</h4>
          <div className="space-y-4 font-mono text-xs text-white text-gray-400">
            <div className="bg-white/10 border border-white/20 p-3 rounded-lg text-white italic">"Offer Accepted. Compliance Verified. Day 1 Ready."</div>
            <ul className="space-y-2">
              <li>• Instant digital offer & I-9 workflows</li>
              <li>• Automated background & credentialing triggers</li>
              <li>• Continuous engagement to prevent drop-out</li>
            </ul>
            <div className="pt-4 text-white font-bold uppercase tracking-tighter">Outcome: 98% Activation Rate</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/*
  ------------------------------------------------------------------
  Main Demo Component
  ------------------------------------------------------------------
*/
export default function HiringSignalsDemo() {
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
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      {/* Background Canvas: Fixed so it repeats unbroken behind all layers */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-60" />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-12 py-6 text-sm font-medium bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="flex gap-10 text-blue-400">
          <a href="#" className="hover:text-blue-300 transition uppercase tracking-widest text-[10px]">Methodology</a>
          <a href="#" className="hover:text-blue-300 transition uppercase tracking-widest text-[10px]">Services</a>
          <a href="#" className="hover:text-blue-300 transition uppercase tracking-widest text-[10px]">Case Studies</a>
          <a href="#" className="hover:text-blue-300 transition uppercase tracking-widest text-[10px]">Advisors</a>
          <a href="#" className="hover:text-blue-300 transition uppercase tracking-widest text-[10px]">Contact</a>
        </div>
        <button className="border border-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600/10 transition text-[10px] uppercase tracking-widest font-bold">Request a Signal Audit</button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[85vh] px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          HIRING <span className="italic font-bold">SIGNALS</span><span className="text-blue-400">.ai</span>
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-blue-400 font-light">
          Advisory & Applied Hiring Intelligence
        </p>
        <div className="mt-12 max-w-3xl">
          <div className="inline-block border border-blue-500/30 px-6 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm">
            <h2 className="text-sm md:text-base font-medium tracking-wide text-blue-200 italic">
              "Hiring isn't a volume problem. It's a signal problem."
            </h2>
          </div>
          <p className="mt-8 text-lg text-gray-400 leading-relaxed font-light">
            In a world where AI allows thousands of applicants to look perfect on paper, your biggest risk isn't a lack of candidates—it's a system that can't tell the difference between <span className="text-white font-medium">"Paper-Perfect"</span> and <span className="text-blue-400 font-medium font-bold">"Work-Ready."</span>
          </p>
        </div>
      </div>

      {/* Layers & Checkpoints with Unbroken Background Flow */}
      <SourcingLayer />
      <FrictionCheckpoint question="Are your Project Managers spending 4 hours a week reviewing resumes that don't match their job site needs?" />
      
      <NotificationLayer />
      <FrictionCheckpoint question="Has a top-tier candidate ever signed with a competitor because your hiring manager didn't check their email in time?" />
      
      <VerificationLayer />
      <FrictionCheckpoint question="How many 'Qualified' interviews have you finished only to realize they didn't have the required licensing?" />
      
      <EvaluationLayer />
      <FrictionCheckpoint question="Can you search a database of exactly what every candidate said about their multi-entity payroll experience, or is it lost in notes?" />
      
      <ComplianceLayer />
      
      {/* Final CTA */}
      <div className="relative z-10 pt-12 pb-24 flex flex-col items-center border-t border-blue-500/10 bg-black/60">
          <h4 className="text-2xl font-light mb-8 text-gray-300 uppercase tracking-widest">Ready to isolate the signal?</h4>
          <button className="px-16 py-5 bg-blue-600 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] uppercase tracking-widest text-sm">
            Request a Signal Audit
          </button>
      </div>
    </div>
  );
}
