import React from "react";

/* ------------------------------------------------------------------
  Sub-Component: Friction Checkpoint
  ------------------------------------------------------------------
*/
const FrictionCheckpoint = ({ question }) => (
  <div className="checkpoint-container">
    <div className="checkpoint-line"></div>
    <p className="checkpoint-label">System Diagnostic</p>
    <h4 className="checkpoint-question">
      "{question}"
    </h4>
    <div className="checkpoint-line"></div>
  </div>
);

/*
  ------------------------------------------------------------------
  Layer Components
  ------------------------------------------------------------------
*/

const SourcingLayer = () => (
  <section className="layer-section">
    <div className="container">
      <h3 className="layer-title">01 // The Sourcing Layer</h3>
      <div className="layer-grid">
        <div className="card card-noise">
          <h4 className="card-title">THE NOISE (Literal Search)</h4>
          <div className="card-content">
            <div className="code-block">Query: "Construction Project Manager"</div>
            <div className="highlight-text">! 4,281 broad matches found</div>
            <p className="quote-text">"Includes Retail PMs, IT Consultants, and out-of-state applicants..."</p>
            <div className="outcome-text">Time Loss: 12+ Management Hours</div>
          </div>
        </div>
        <div className="card card-signal">
          <h4 className="card-title">THE SIGNAL (Semantic Inference)</h4>
          <div className="card-content">
            <div className="code-block">Intent: "Licensed FL Leads / $10M+ Ops / Stable Tenure"</div>
            <div className="highlight-text">✓ 8 Work-Ready Candidates</div>
            <ul className="list-text">
              <li>• 100% Local (Verified)</li>
              <li>• Active Commercial Licenses</li>
              <li>• 4.2yr Avg. Tenure</li>
            </ul>
            <div className="outcome-text">Selection Time: 15 Minutes</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NotificationLayer = () => (
  <section className="layer-section">
    <div className="container">
      <h3 className="layer-title">02 // The Notification Layer</h3>
      <div className="layer-grid">
        <div className="card card-noise">
          <h4 className="card-title">Inbox Stagnation</h4>
          <div className="card-content">
            <div className="code-block">Email Alert: "New Applicant" - Sent to generic HR inbox.</div>
            <ul className="list-text">
              <li>• Data sits unread for 3+ days</li>
              <li>• Zero context on candidate urgency</li>
              <li>• 40% talent drop-out rate</li>
            </ul>
            <div className="outcome-text">Outcome: Lost Competitive Edge</div>
          </div>
        </div>
        <div className="card card-signal">
          <h4 className="card-title">Instant Signal Routing</h4>
          <div className="card-content">
            <div className="code-block"><span className="bold-underline">SLACK/SMS:</span> "Priority: J. Doe. 12yr Industrial Exp. Route to PM Lead."</div>
            <ul className="list-text">
              <li>• Real-time decision maker routing</li>
              <li>• Context-rich alerts & experience summaries</li>
              <li>• Immediate automated SMS engagement</li>
            </ul>
            <div className="outcome-text">Outcome: First-to-Market Speed</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VerificationLayer = () => (
  <section className="layer-section">
    <div className="container">
      <h3 className="layer-title">03 // The Verification Layer</h3>
      <div className="layer-grid">
        <div className="card card-noise">
          <h4 className="card-title">Administrative Debt</h4>
          <div className="card-content">
            <div className="code-block">"Do you have your FL license? Please email a copy."</div>
            <ul className="list-text">
              <li>• Manual document back-and-forth</li>
              <li>• 48-hour qualification lag</li>
              <li>• High-cost managers performing data entry</li>
            </ul>
            <div className="outcome-text">Outcome: 65% Interview Waste</div>
          </div>
        </div>
        <div className="card card-signal">
          <h4 className="card-title">Agentic Verification</h4>
          <div className="card-content">
            <div className="code-block">"License #123456 Collected & Matched. Ready for hire."</div>
            <ul className="list-text">
              <li>• 24/7 Autonomous vetting</li>
              <li>• Verified Attestation: Visa & Location</li>
              <li>• Auto-scheduling for 100% qualified talent</li>
            </ul>
            <div className="outcome-text">Outcome: 100% Interview Utility</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EvaluationLayer = () => (
  <section className="layer-section">
    <div className="container">
      <h3 className="layer-title">04 // The Evaluation Layer</h3>
      <div className="layer-grid">
        <div className="card card-noise">
          <h4 className="card-title">Subjective "Vibe" Hiring</h4>
          <div className="card-content">
            <div className="code-block">"He seemed like a good fit, but I can't recall his niche experience."</div>
            <ul className="list-text">
              <li>• Decisions based on fragmented memory</li>
              <li>• Zero objective data comparison</li>
              <li>• High bias, high variance outcomes</li>
            </ul>
            <div className="outcome-text">Outcome: "Gut-Feel" Risk</div>
          </div>
        </div>
        <div className="card card-signal">
          <h4 className="card-title">Evidence Extraction</h4>
          <div className="card-content">
            <div className="code-block"><span className="bold-underline signal-highlight">SIGNAL:</span> "Proficient in FL Lien Law. Verified Multi-entity payroll."</div>
            <ul className="list-text">
              <li>• Transcription & semantic competency mapping</li>
              <li>• Searchable database of candidate answers</li>
              <li>• Objective scoring across the hiring team</li>
            </ul>
            <div className="outcome-text">Outcome: Hiring Certainty</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ComplianceLayer = () => (
  <section className="layer-section last-layer">
    <div className="container">
      <h3 className="layer-title">05 // The Selection & Compliance Layer</h3>
      <div className="layer-grid">
        <div className="card card-noise">
          <h4 className="card-title">The Paperwork Chasm</h4>
          <div className="card-content">
            <div className="code-block">"Offer letter sent... waiting on signature and I-9."</div>
            <ul className="list-text">
              <li>• Days lost in manual document tracking</li>
              <li>• High risk of 'Ghosting' before Day 1</li>
              <li>• Compliance gaps in high-regulation zones</li>
            </ul>
            <div className="outcome-text">Outcome: Final-Mile Attrition</div>
          </div>
        </div>
        <div className="card card-signal">
          <h4 className="card-title">Automated Closing</h4>
          <div className="card-content">
            <div className="code-block">"Offer Accepted. Compliance Verified. Day 1 Ready."</div>
            <ul className="list-text">
              <li>• Instant digital offer & I-9 workflows</li>
              <li>• Automated background & credentialing triggers</li>
              <li>• Continuous engagement to prevent drop-out</li>
            </ul>
            <div className="outcome-text">Outcome: 98% Activation Rate</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          HIRING <span className="italic-bold">SIGNALS</span><span className="text-blue">.ai</span>
        </h1>
        <p className="hero-subtitle">
          Advisory & Applied Hiring Intelligence
        </p>
        <div className="hero-content">
          <div className="hero-badge">
            <h2 className="badge-text">
              "Hiring isn't a volume problem. It's a signal problem."
            </h2>
          </div>
          <p className="hero-description">
            In a world where AI allows thousands of applicants to look perfect on paper, your biggest risk isn't a lack of candidates—it's a system that can't tell the difference between <span className="text-white">"Paper-Perfect"</span> and <span className="text-blue bold">"Work-Ready."</span>
          </p>
        </div>
      </div>

      {/* Layers & Checkpoints */}
      <SourcingLayer />
      <FrictionCheckpoint question="Are your Project Managers spending 4 hours a week reviewing resumes that don't match their job site needs?" />
      
      <NotificationLayer />
      <FrictionCheckpoint question="Has a top-tier candidate ever signed with a competitor because your hiring manager didn't check their email in time?" />
      
      <VerificationLayer />
      <FrictionCheckpoint question="How many 'Qualified' interviews have you finished only to realize they didn't have the required licensing?" />
      
      <EvaluationLayer />
      <FrictionCheckpoint question="Can you search a database of exactly what every candidate said about their multi-entity payroll experience, or is it lost in notes?" />
      
      <ComplianceLayer />
    </>
  );
};

export default Home;