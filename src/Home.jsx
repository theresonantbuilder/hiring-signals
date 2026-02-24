import React from "react";

const phases = [
  {
    title: "Resume Noise Is Eating Your Team’s Time",
    subtitle: "Is this happening now?",
    description: "Your ops leaders are reviewing dozens of resumes that don’t match real job-site needs.",
    outcome: "Managers spend 15 minutes reviewing viable candidates — not 4 hours sorting noise."
  },
  {
    title: "Applicants Go Cold Because No One Responded Fast Enough",
    subtitle: "Is this happening now?",
    description: "Resumes hit a shared inbox. No urgency. No routing. Delays cost you talent.",
    outcome: "First-to-market speed without hiring a recruiting coordinator."
  },
  {
    title: "Qualification Happens Too Late",
    subtitle: "Is this happening now?",
    description: "Licensing, eligibility, or relocation issues show up after interviews.",
    outcome: "Only qualified candidates reach your hiring managers."
  },
  {
    title: "Hiring Decisions Are Based on Memory",
    subtitle: "Is this happening now?",
    description: "Notes live in email threads. Interview insights get lost.",
    outcome: "Objective comparison. Less bias. Higher certainty."
  },
  {
    title: "Offers Stall. Candidates Ghost.",
    subtitle: "Is this happening now?",
    description: "Manual paperwork. Delays between offer and Day 1.",
    outcome: "Higher activation rates and less last-minute attrition."
  }
];

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
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px 60px 20px' }}>
        <div className="phases-container">
          <div className="connector-line"></div>
          {phases.map((phase, index) => (
            <div key={index} className="phase-item">
              <div className="phase-number">0{index + 1}</div>
              <div className="phase-content">
                <p className="phase-subtitle" style={{ color: '#3B82F6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  {phase.subtitle}
                </p>
                <h3 className="phase-title" style={{ fontSize: '2rem', color: '#fff', marginBottom: '20px' }}>{phase.title}</h3>
                <p className="phase-description" style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: '1.7', marginBottom: '25px', maxWidth: '800px' }}>
                  {phase.description}
                </p>
                <div style={{ borderLeft: '4px solid #3B82F6', padding: '20px', background: 'rgba(59, 130, 246, 0.05)' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '10px', color: '#fff' }}>KEY OUTCOME:</p>
                  <p style={{ margin: 0, color: '#94A3B8', fontSize: '15px', fontStyle: 'italic' }}>{phase.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;