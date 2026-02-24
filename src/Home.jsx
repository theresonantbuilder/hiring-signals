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

// Shared style for layer cards to control transparency centrally
const layerCardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.07)',
  borderRadius: '24px',
  padding: '60px 40px',
  textAlign: 'center',
  border: '1px solid rgba(255, 255, 255, 0.25)'
};

const SourcingLayer = () => (
  <section className="layer-section">
    <div className="container">
      <div style={layerCardStyle}>
        <h3 className="layer-title" style={{ color: 'white', marginBottom: '40px' }}>01 — Resume Noise Is Eating Your Team’s Time</h3>
        <h4 style={{ color: '#3b82f6', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Is this happening now?</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px auto' }}>
          Your ops leaders are reviewing dozens of resumes that don’t match real job-site needs.
        </p>

        <h4 style={{ color: '#3b82f6', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>What is possible</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '15px', maxWidth: '800px', margin: '0 auto 15px auto' }}>
          Signal-based filtering that surfaces only work-ready candidates aligned to your actual operating environment.
        </p>
        <p style={{ color: 'white', fontStyle: 'italic', fontSize: '1.1rem', fontWeight: '600' }}>
          <span style={{ color: '#3b82f6' }}>Result:</span> Managers spend 15 minutes reviewing viable candidates — not 4 hours sorting noise.
        </p>
      </div>
    </div>
  </section>
);

const NotificationLayer = () => (
  <section className="layer-section">
    <div className="container">
      <div style={layerCardStyle}>
        <h3 className="layer-title" style={{ color: 'white', marginBottom: '40px' }}>02 — Applicants Go Cold Because No One Responded Fast Enough</h3>
        <h4 style={{ color: '#3b82f6', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>What’s happening now</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px auto' }}>
          Resumes hit a shared inbox. No urgency. No routing. Delays cost you talent.
        </p>

        <h4 style={{ color: '#3b82f6', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>What is possible</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '15px', maxWidth: '800px', margin: '0 auto 15px auto' }}>
          Priority routing + automated candidate engagement so decision-makers respond in hours, not days.
        </p>
        <p style={{ color: 'white', fontStyle: 'italic', fontSize: '1.1rem', fontWeight: '600' }}>
          <span style={{ color: '#3b82f6' }}>Result:</span> First-to-market speed without hiring a recruiting coordinator.
        </p>
      </div>
    </div>
  </section>
);

const VerificationLayer = () => (
  <section className="layer-section">
    <div className="container">
      <div style={layerCardStyle}>
        <h3 className="layer-title" style={{ color: 'white', marginBottom: '40px' }}>03 — Qualification Happens Too Late</h3>
        <h4 style={{ color: '#3b82f6', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>What’s happening now</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px auto' }}>
          Licensing, eligibility, or relocation issues show up after interviews.
        </p>

        <h4 style={{ color: '#3b82f6', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>What is possible</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '15px', maxWidth: '800px', margin: '0 auto 15px auto' }}>
          Automated pre-verification and structured qualification before time is invested.
        </p>
        <p style={{ color: 'white', fontStyle: 'italic', fontSize: '1.1rem', fontWeight: '600' }}>
          <span style={{ color: '#3b82f6' }}>Result:</span> Only qualified candidates reach your hiring managers.
        </p>
      </div>
    </div>
  </section>
);

const EvaluationLayer = () => (
  <section className="layer-section">
    <div className="container">
      <div style={layerCardStyle}>
        <h3 className="layer-title" style={{ color: 'white', marginBottom: '40px' }}>04 — Hiring Decisions Are Based on Memory</h3>
        <h4 style={{ color: '#3b82f6', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Is this happening now</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px auto' }}>
          Notes live in email threads. Interview insights get lost.
        </p>

        <h4 style={{ color: '#3b82f6', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>What is possible</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '15px', maxWidth: '800px', margin: '0 auto 15px auto' }}>
          Structured competency extraction and searchable candidate data across your team.
        </p>
        <p style={{ color: 'white', fontStyle: 'italic', fontSize: '1.1rem', fontWeight: '600' }}>
          <span style={{ color: '#3b82f6' }}>Result:</span> Objective comparison. Less bias. Higher certainty.
        </p>
      </div>
    </div>
  </section>
);

const ComplianceLayer = () => (
  <section className="layer-section last-layer">
    <div className="container">
      <div style={layerCardStyle}>
        <h3 className="layer-title" style={{ color: 'white', marginBottom: '40px' }}>05 — Offers Stall. Candidates Ghost.</h3>
        <h4 style={{ color: '#3b82f6', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>What’s happening now</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px auto' }}>
          Manual paperwork. Delays between offer and Day 1.
        </p>

        <h4 style={{ color: '#3b82f6', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>What is possible</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '15px', maxWidth: '800px', margin: '0 auto 15px auto' }}>
          Automated digital offers and compliance workflows.
        </p>
        <p style={{ color: 'white', fontStyle: 'italic', fontSize: '1.1rem', fontWeight: '600' }}>
          <span style={{ color: '#3b82f6' }}>Result:</span> Higher activation rates and less last-minute attrition.
        </p>
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
          Fractional Recruiter & Hiring Systems Advisor
        </p>
        <div className="hero-content">
          <div className="hero-badge">
            <h2 className="badge-text">
              "Hiring isn't a volume problem. It's a signal problem."
            </h2>
          </div>
          <p className="hero-description">
            Embedded recruiting support for growing teams — identifying hiring friction and introducing practical, modern tools where they create real lift. 
          </p>
          <div className="hero-badge" style={{ marginTop: '50px' }}>
            <h2 className="badge-text">
              “I partner with growing teams to strengthen their hiring — embedding where needed and/or implementing practical technology that improves clarity and outcomes." ~~ Paul Duplantis
            </h2>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="container" style={{ marginTop: '80px', marginBottom: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
          The 5 Hiring Leaks Costing Growing Companies Time & Money
        </h2>
      </div>

      {/* Layers & Checkpoints */}
      <SourcingLayer />
      <FrictionCheckpoint question="Diagnostic Question: Are your most expensive people spending time screening resumes?" />
      
      <NotificationLayer />
      <FrictionCheckpoint question="Diagnostic Question: Has a strong candidate ever signed elsewhere while your team was “too busy”?" />
      
      <VerificationLayer />
      <FrictionCheckpoint question="Diagnostic Question: How many interviews have ended with “Oh… they don’t have that requirement”?" />
      
      <EvaluationLayer />
      <FrictionCheckpoint question="Diagnostic Question: Can your team search what every candidate said about a specific skill?" />
      
      <ComplianceLayer />
      <FrictionCheckpoint question="Diagnostic Question: How many accepted offers didn’t make it to Day 1?" />
    </>
  );
};

export default Home;