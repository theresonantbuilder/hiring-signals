import React, { useState } from 'react';

const Methodology = () => {
  const [isEnterprise, setIsEnterprise] = useState(false);

  const content = {
    phase1: {
      title: "01 / The Diagnostic Audit",
      subtitle: "Signal Integrity & Baseline",
      description: "Before implementation, we must identify interference. We perform a high-resolution scan of your existing hiring funnel to locate where top-tier talent is being filtered out by legacy systems or inefficient workflows.",
      details: isEnterprise 
        ? ["Global Data Latency Mapping", "Cross-BU Process Friction Analysis", "Redundancy Identification"]
        : ["Recruiter Capacity Audit", "Candidate Drop-off Analysis", "Tech-Stack Yield Review"],
      outcome: "The Signal Integrity Report: A data-backed blueprint of your current hiring health."
    },
    phase2: {
      title: "02 / Intelligence Synthesis",
      subtitle: "Custom Stack Architecture",
      description: "We don't believe in 'all-in-one' solutions that do everything poorly. We architect a bespoke 'Intelligence Stack' by selecting specific partner modules—specialized AI nodes that solve your unique friction points.",
      details: isEnterprise 
        ? ["Multi-Node AI Integration", "ERP/ATS Synchronization", "Data Security & Compliance Mapping"]
        : ["Curated Tool Selection", "Workflow Automation Design", "Seamless Integration Planning"],
      outcome: "The Architectural Blueprint: A custom-tuned hiring ecosystem ready for activation."
    },
    phase3: {
      title: "03 / Managed Activation",
      subtitle: "Agentic Implementation & Tuning",
      description: "Implementation is where most projects fail. As your Lead Architect, I manage the activation of all partner technologies. We don't just 'plug it in'—we tune the signals to ensure the AI understands your specific culture and high-bar requirements.",
      details: isEnterprise 
        ? ["Global Rollout Oversight", "Vendor Accountability Management", "Executive Dashboarding"]
        : ["Turnkey Setup", "Team Training & Adoption", "Live Signal Calibration"],
      outcome: "Operational Intelligence: A fully autonomous, high-fidelity hiring engine."
    }
  };

  return (
    <section id="methodology" className="methodology-section" style={{ padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>The Signal Path</h2>
          <p style={{ fontSize: '1.2rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
            A systematic framework for transforming fragmented hiring data into surgical precision.
          </p>
        </div>

        {/* The Scale Toggle */}
        <div className="scale-toggle-container" style={{ textAlign: 'center', marginBottom: '25px' }}>
          <p className="scale-label" style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', color: '#64748B', marginBottom: '15px' }}>SELECT OPERATIONAL SCALE</p>
          <div className="toggle-wrapper" style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.05)', padding: '5px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <button 
              onClick={() => setIsEnterprise(false)}
              className={`toggle-btn ${!isEnterprise ? 'active' : ''}`}
              style={{ 
                padding: '12px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600',
                backgroundColor: !isEnterprise ? '#3B82F6' : 'transparent',
                color: !isEnterprise ? 'white' : '#64748B',
                transition: 'all 0.3s ease'
              }}
            >
              Mid-Market
            </button>
            <button 
              onClick={() => setIsEnterprise(true)}
              className={`toggle-btn ${isEnterprise ? 'active' : ''}`}
              style={{ 
                padding: '12px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600',
                backgroundColor: isEnterprise ? '#3B82F6' : 'transparent',
                color: isEnterprise ? 'white' : '#64748B',
                transition: 'all 0.3s ease'
              }}
            >
              Enterprise
            </button>
          </div>
        </div>

        {/* The Signal Path Phases */}
        <div className="phases-container" style={{ position: 'relative' }}>
          {[content.phase1, content.phase2, content.phase3].map((phase, index) => (
            <div key={index} className="phase-item" style={{ display: 'flex', gap: '40px', marginBottom: '100px', position: 'relative' }}>
              <div className="phase-number" style={{ 
                fontSize: '4rem', fontWeight: '900', color: 'rgba(255,255,255,0.9)', lineHeight: '1', minWidth: '80px'
              }}>
                0{index + 1}
              </div>
              
              <div className="phase-content">
                <p className="phase-subtitle" style={{ color: '#3B82F6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  {phase.subtitle}
                </p>
                <h3 className="phase-title" style={{ fontSize: '2rem', color: '#fff', marginBottom: '20px' }}>{phase.title}</h3>
                
                <p className="phase-description" style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: '1.7', marginBottom: '25px', maxWidth: '800px' }}>
                  {phase.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '10px', color: '#fff' }}>CORE FOCUS:</p>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#94A3B8', fontSize: '15px' }}>
                      {phase.details.map((item, i) => <li key={i} style={{ marginBottom: '5px' }}>{item}</li>)}
                    </ul>
                  </div>
                  <div style={{ borderLeft: '4px solid #3B82F6', padding: '20px', background: 'rgba(59, 130, 246, 0.05)' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '10px', color: '#fff' }}>KEY OUTCOME:</p>
                    <p style={{ margin: 0, color: '#94A3B8', fontSize: '15px', fontStyle: 'italic' }}>{phase.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Note Footer */}
        <div className="lab-note" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', marginTop: '40px' }}>
          <p className="lab-note-text" style={{ fontFamily: 'monospace', color: '#64748B', fontSize: '14px', textAlign: 'center' }}>
            <span className="lab-dot" style={{ color: '#3B82F6', marginRight: '8px' }}>●</span> 
            [SYSTEM_ARCHITECT_LOG]: Methodology calibrated for agentic orchestration. Last update: Feb 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;