import React from 'react';
import paulPhoto from './assets/PaulDuplantis profile pic  Sept 2023.jpg';

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
    <section id="advisors" className="advisors-section" style={{ padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* SECTION 1: LEAD SYSTEMS ARCHITECT - STYLISH WRAP */}
        <div className="architect-card" style={{ 
          backgroundColor: '#1E293B', 
          borderRadius: '24px', 
          padding: '40px', 
          color: 'white', 
          marginBottom: '60px',
          overflow: 'hidden', // Clears the float
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
        }}>
          
          {/* Floating Image Wrapper */}
          <div style={{ 
            float: 'left',
            marginRight: '40px',
            marginBottom: '20px',
            width: '256px', // Reduced by 20%
            position: 'relative'
          }}>
            <div style={{ 
              borderRadius: '16px', 
              overflow: 'hidden',
              border: '3px solid #3B82F6',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <img 
                src={paulPhoto} 
                alt="Paul Duplantis" 
                style={{ width: '100%', display: 'block' }} 
              />
            </div>
            <div style={{ 
              position: 'absolute', 
              bottom: '15px', 
              right: '-10px', 
              backgroundColor: '#3B82F6', 
              padding: '8px 16px', 
              borderRadius: '6px',
              fontSize: '11px', 
              fontWeight: 'bold', 
              letterSpacing: '1px'
            }}>
              LEAD ARCHITECT
            </div>
          </div>

          {/* Wrapped Text Content */}
          <div className="architect-info">
            <h2 style={{ fontSize: '2.4rem', marginBottom: '4px' }}>Paul Duplantis</h2>
            <p style={{ 
              color: '#3B82F6', 
              fontSize: '1.1rem', 
              fontWeight: '600', 
              marginBottom: '20px', 
              textTransform: 'uppercase', 
              letterSpacing: '1px' 
            }}>
              Lead Systems Architect & Agentic Engineer
            </p>
            
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#CBD5E1', marginBottom: '1.5rem' }}>
              <strong>The Journey:</strong> With a career spanning two decades across business consultancy, strategic marketing, and technical talent acquisition, I have operated at the intersection of organizational growth and human capital. My journey has been defined by a singular observation: the exchange between talent and opportunity is fundamentally stalled by systemic noise.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#CBD5E1', marginBottom: '1.5rem' }}>
              <strong>The Window of Opportunity:</strong> I recognize a unique moment to leverage <strong>Agentic Engineering</strong> to fix the "black hole" of traditional hiring. My mission is to restore health to the hiring exchange—engineering systems where candidates are seen for their true potential and hiring teams can act with absolute data-confidence.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#CBD5E1' }}>
              <strong>The Commitment:</strong> I don't just recommend tools; I architect the logic that allows them to communicate. As your Lead Advisor, I act as the primary conductor—ensuring your hiring stack is tuned to a single, high-fidelity signal that favors both the talent and the team.
            </p>
          </div>
        </div>

        {/* SECTION 2: THE LAB (idig) */}
        <div className="lab-section" style={{ 
          textAlign: 'center', 
          padding: '40px', 
          borderRadius: '20px', 
          border: '1px solid #E2E8F0', 
          marginBottom: '60px', 
          backgroundColor: '#F8FAFC' 
        }}>
          <p style={{ color: '#3B82F6', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '2px', marginBottom: '10px' }}>
            Research & Development
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#1E293B', marginBottom: '20px' }}>iDIG: Deep Inquiry Generator</h3>
          <div style={{ textAlign: 'left', maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', color: '#475569', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>iDIG</strong> is my ongoing research and development lab—a proving ground where I experiment with signal conditioning, agentic discovery loops, and applied signaling theory. It’s where I test how language, structure, and context shape discovery.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Through HiringSignals, I partner with select advisory firms and technology providers to implement these solutions inside client organizations. My role is not to resell tools, but to ensure they are deployed with architectural clarity—so signal is strengthened rather than distorted.
            </p>
            <p style={{ borderTop: '1px solid #E2E8F0', paddingTop: '20px', fontSize: '0.95rem', color: '#64748B' }}>
              <strong>iDIG remains a private R&D environment. HiringSignals is where those insights are applied.</strong>
            </p>
          </div>
        </div>

        {/* SECTION 3: PARTNER NETWORK */}
        <div className="network-section">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#1E293B', marginBottom: '10px' }}>The Partner Network</h3>
            <p style={{ color: '#64748B' }}>Specialized Intelligence Nodes curated for high-performance ecosystems.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {partnerSlots.map(partner => (
              <div key={partner.id} style={{ 
                padding: '25px', borderRadius: '12px', border: '1px solid #E2E8F0', 
                backgroundColor: '#fff'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#F1F5F9', border: '1px solid #E2E8F0' }}></div>
                  <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#94A3B8', border: '1px solid #E2E8F0', padding: '2px 6px', borderRadius: '4px' }}>
                    {partner.status}
                  </span>
                </div>
                <h4 style={{ margin: '0 0 4px 0', color: '#1E293B' }}>{partner.name}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#3B82F6', fontWeight: '600' }}>{partner.specialty}</p>
                <p style={{ marginTop: '12px', fontSize: '12px', color: '#94A3B8', fontStyle: 'italic' }}>
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