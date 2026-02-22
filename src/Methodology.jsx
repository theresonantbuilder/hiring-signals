import React, { useState } from 'react';

const Methodology = () => {
  const [isEnterprise, setIsEnterprise] = useState(false);

  const content = {
    phase1: {
      title: "01 / The Diagnostic Audit",
      subtitle: "Powered by idig (Deep Inquiry Generator)",
      mid: "We find why your recruiters are overwhelmed and where your best candidates are dropping out of your funnel.",
      ent: "We perform a deep-tissue scan of systemic data latency and signal loss across global business units."
    },
    phase2: {
      title: "02 / Intelligence Synthesis",
      subtitle: "Architectural Design",
      mid: "We hand-pick 2–3 'all-star' tools that work together so you don't have to manage multiple logins or messy data.",
      ent: "We architect a multi-node intelligence stack that integrates seamlessly with your existing ERP and ATS infrastructure."
    },
    phase3: {
      title: "03 / Managed Activation",
      subtitle: "Agentic Implementation",
      mid: "I handle the heavy lifting of setup and training. You just start seeing better candidates in your inbox.",
      ent: "We lead the vendor management, data security compliance, and cross-departmental rollout for global teams."
    }
  };

  return (
    <section id="methodology" className="methodology-section">
      <div className="container">
        
        {/* The Scale Toggle */}
        <div className="scale-toggle-container">
          <p className="scale-label">SELECT YOUR SCALE</p>
          <div className="toggle-wrapper">
            <button 
              onClick={() => setIsEnterprise(false)}
              className={`toggle-btn ${!isEnterprise ? 'active' : ''}`}
            >
              Mid-Market
            </button>
            <button 
              onClick={() => setIsEnterprise(true)}
              className={`toggle-btn ${isEnterprise ? 'active' : ''}`}
            >
              Enterprise
            </button>
          </div>
        </div>

        {/* The Signal Path Phases */}
        <div className="phases-container">
          {/* Decorative Connector Line */}
          <div className="connector-line"></div>

          {[content.phase1, content.phase2, content.phase3].map((phase, index) => (
            <div key={index} className="phase-item">
              <div className="phase-number">
                {index + 1}
              </div>
              <div className="phase-content">
                <h3 className="phase-title">{phase.title}</h3>
                <p className="phase-subtitle">{phase.subtitle}</p>
                <p className="phase-description">
                  {isEnterprise ? phase.ent : phase.mid}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Note / Agentic Engineer Footer */}
        <div className="lab-note">
          <p className="lab-note-text">
            <span className="lab-dot">●</span> [AGENTIC_LOG]: Currently tuning discovery loops in the <strong>idig</strong> lab. 
            Methodology updated Feb 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;