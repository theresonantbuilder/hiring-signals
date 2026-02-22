import React from 'react';

const Advisors = () => {
  const partnerSlots = [
    { id: 1, name: "Partner Node 01", specialty: "Sourcing Intelligence", status: "Vetting" },
    { id: 2, name: "Partner Node 02", specialty: "Selection Algorithms", status: "Vetting" },
    { id: 3, name: "Partner Node 03", specialty: "Workflow Automation", status: "Vetting" },
    { id: 4, name: "Partner Node 04", specialty: "Data Security", status: "Vetting" },
    { id: 5, name: "Partner Node 05", specialty: "Candidate Experience", status: "Vetting" },
    { id: 6, name: "Partner Node 06", specialty: "Predictive Analytics", status: "Vetting" },
  ];

  return (
    <section id="advisors" className="advisors-section">
      <div className="container">
        
        {/* SECTION 1: LEAD SYSTEMS ARCHITECT */}
        <div className="architect-card">
          <div className="architect-image-wrapper">
            <div className="architect-placeholder">
              {/* Placeholder text for photo */}
              <span className="placeholder-text">Architect Photo</span>
            </div>
            <div className="architect-badge">
              LEAD ARCHITECT
            </div>
          </div>

          <div className="architect-info">
            <h2 className="architect-name">Paul Duplantis</h2>
            <p className="architect-title">
              Lead Systems Architect & Agentic Engineer
            </p>
            <p className="architect-bio">
              With over two decades in technical talent acquisition and marketing, I bridge the gap between legacy recruiting and applied intelligence. I don't just recommend tools; I engineer the agentic workflows that allow them to communicate. 
            </p>
            <p className="architect-bio">
              As your lead advisor, I act as the primary conductor—ensuring every piece of your hiring stack is tuned to a single, high-fidelity signal.
            </p>
          </div>
        </div>

        {/* SECTION 2: THE LAB (idig) */}
        <div className="lab-section">
          <p className="lab-label">
            Research & Development
          </p>
          <h3 className="lab-title">iDIG: Deep Inquiry Generator</h3>
          <div className="lab-description" style={{ textAlign: 'left' }}>
            <p style={{ marginBottom: '1rem' }}>
              iDIG is my ongoing research and development lab — a proving ground where I experiment with signal conditioning, agentic discovery loops, and applied signaling theory.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              It’s where I test how language, structure, and context shape discovery — and how subtle shifts in signal can dramatically improve alignment across hiring, business development, and strategy workflows.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              The lessons learned in the lab sharpen how I evaluate tools, diagnose friction, and design clearer engagement systems.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Through HiringSignals, I partner with select advisory firms and technology providers to implement solutions inside client organizations. My role is not to resell tools, but to help ensure they are deployed with architectural clarity — so signal is strengthened rather than distorted.
            </p>
            <p>
              <strong>iDIG remains a private R&D environment.</strong><br />
              <strong>HiringSignals is where those insights are applied.</strong>
            </p>
          </div>
        </div>

        {/* SECTION 3: SUB-ADVISORY NETWORK (PARTNERS) */}
        <div className="network-section">
          <div className="network-header">
            <h3 className="network-title">The Partner Network</h3>
            <p className="network-subtitle">Specialized Intelligence Nodes curated for high-performance ecosystems.</p>
          </div>

          <div className="partners-grid">
            {partnerSlots.map(partner => (
              <div key={partner.id} className="partner-card">
                <div className="partner-header">
                  <div className="partner-icon"></div>
                  <span className="partner-status">{partner.status}</span>
                </div>
                <h4 className="partner-name">{partner.name}</h4>
                <p className="partner-specialty">{partner.specialty}</p>
                <p className="partner-desc">
                  A core component of the Hiring Signals integrated architecture.
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default Advisors;