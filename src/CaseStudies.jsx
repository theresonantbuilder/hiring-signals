import React from 'react';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        
        {/* Header */}
        <div className="case-studies-header">
          <h2 className="case-studies-title">Case Studies</h2>
          <p className="case-studies-subtitle">
            A deep-dive into the "Signal Failings" of modern hiring and the architectural shifts required to fix them.
          </p>
        </div>

        {/* ZONE 1: THE DISCOVERY GAP */}
        <div className="case-study-card">
          <div className="case-study-header">
            <span className="case-study-tag">Zone 01: Sourcing & Discovery</span>
            <h3 className="case-study-headline">
              Inference vs. Search: The Cybersecurity Architect Case
            </h3>
          </div>

          <div className="impact-grid">
            {/* The Old Way */}
            <div className="impact-card">
              <h4 className="impact-card-title" style={{ color: '#ef4444' }}>The Search Method (Keyword Logic)</h4>
              <p className="impact-text">
                A recruiter runs a Boolean search for <strong>"AWS" + "Zero Trust" + "Security."</strong> 
                The result is a list of candidates who have those words on their LinkedIn. 
              </p>
              <ul className="list-text mt-4">
                <li className="impact-text"><strong>The Failure:</strong> Returns "certified" candidates with zero practical experience.</li>
                <li className="impact-text"><strong>The Friction:</strong> Recruiter must manually screen 200 "paper-strong" candidates.</li>
                <li className="impact-text"><strong>The Noise:</strong> High-quality, non-obvious talent is buried.</li>
              </ul>
            </div>

            {/* The New Way */}
            <div className="impact-card" style={{ borderColor: 'var(--accent-blue)' }}>
              <h4 className="impact-card-title" style={{ color: 'var(--accent-blue)' }}>The Inference Method (Signaling Logic)</h4>
              <p className="impact-text">
                Our <strong>Agentic Discovery Loop</strong> infers alignment by analyzing the <em>architecture</em> of a career. It identifies "Ghost Signals"—patterns that indicate mastery.
              </p>
              <ul className="list-text mt-4">
                <li className="impact-text"><strong>The Win:</strong> Identifies an engineer who transitioned a legacy bank to the cloud (inferred expertise).</li>
                <li className="impact-text"><strong>The Efficiency:</strong> The "Top 5" are actual architectural matches, not keyword matches.</li>
                <li className="impact-text"><strong>The Signal:</strong> Finds the <em>intent</em> behind the experience.</li>
              </ul>
            </div>
          </div>

          {/* Why This Matters - Zone 1 */}
          <div style={{ marginTop: '40px' }}>
            <h5 className="impact-title">
              <span className="impact-line"></span>
              Why This Matters: Signal Integrity
            </h5>
            <div className="impact-grid">
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">For In-House Teams</h6>
                <p className="impact-text">
                  In-house teams are often treated as "order takers." By shifting to inference, you stop being a manual filter for noise and start providing high-fidelity talent that managers actually respect.
                </p>
              </div>
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">For Recruitment Agencies</h6>
                <p className="impact-text">
                  If you use the same search tools as your client, you are a commodity. Inference allows you to uncover the "hidden 2%" of the market, justifying premium fees through superior discovery logic.
                </p>
              </div>
            </div>
          </div>

          <div className="quote-box">
            <h5 style={{ color: 'var(--accent-blue)', marginBottom: '10px', fontWeight: 'bold', fontSize: '1.1rem' }}>Architect’s Insight: Vocabulary vs. Grammar</h5>
            <p className="quote-text-large">
              "Search finds the vocabulary, but Inference finds the grammar. By understanding the structural history of a career, we reduce recruiter burnout and increase the health of the exchange."
            </p>
          </div>
        </div>

        {/* ZONE 2: THE NOTIFICATION LAYER */}
        <div className="case-study-card">
          <div className="case-study-header">
            <span className="case-study-tag">Zone 02: Selection & Notification</span>
            <h3 className="case-study-headline">
              Static Scoring vs. Contextual Alerting: The Enterprise Sales Case
            </h3>
          </div>

          <div className="impact-grid">
            {/* The Old Way */}
            <div className="impact-card">
              <h4 className="impact-card-title" style={{ color: '#ef4444' }}>The Static Method (Binary Scoring)</h4>
              <p className="impact-text">
                An ATS assigns a candidate a score of <strong>85/100</strong> based on rigid criteria like years of experience or pre-set multiple-choice answers.
              </p>
              <ul className="list-text mt-4">
                <li className="impact-text"><strong>The Failure:</strong> A high score often masks a "culture-killer" or a lack of specific environment fit.</li>
                <li className="impact-text"><strong>The Friction:</strong> Hiring managers receive a generic alert with zero insight into <em>why</em> they should care.</li>
                <li className="impact-text"><strong>The Noise:</strong> High volume of "False Positives" leads to interview fatigue and wasted cycles.</li>
              </ul>
            </div>

            {/* The New Way */}
            <div className="impact-card" style={{ borderColor: 'var(--accent-blue)' }}>
              <h4 className="impact-card-title" style={{ color: 'var(--accent-blue)' }}>The Agentic Method (Contextual Signaling)</h4>
              <p className="impact-text">
                Our <strong>Notification Layer</strong> sends a multi-dimensional signal. It doesn't just score; it explains the alignment within your organization's specific context.
              </p>
              <ul className="list-text mt-4">
                <li className="impact-text"><strong>The Win:</strong> Alert highlights: "Candidate successfully navigated $1M+ deal cycles in your exact industry."</li>
                <li className="impact-text"><strong>The Efficiency:</strong> Managers receive a 'Contextual Digest' that frames the interview for them.</li>
                <li className="impact-text"><strong>The Signal:</strong> Highlights potential friction points early, allowing for targeted vetting.</li>
              </ul>
            </div>
          </div>

          {/* Why This Matters - Zone 2 */}
          <div style={{ marginTop: '40px' }}>
            <h5 className="impact-title">
              <span className="impact-line"></span>
              Why This Matters: The Speed of Trust
            </h5>
            <div className="impact-grid">
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">For In-House Teams</h6>
                <p className="impact-text">
                  Static scores create a credibility gap between recruiters and managers. Contextual alerting builds a shared language, ensuring that every interview is a high-value handshake, not a discovery mission.
                </p>
              </div>
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">For Recruitment Agencies</h6>
                <p className="impact-text">
                  Your notification is your product. Sending a resume with an "Architectural Proof of Alignment" makes you a risk-mitigation specialist, not just a resume flipper.
                </p>
              </div>
            </div>
          </div>

          <div className="quote-box">
            <h5 style={{ color: 'var(--accent-blue)', marginBottom: '10px', fontWeight: 'bold', fontSize: '1.1rem' }}>Architect’s Insight: High-Fidelity Handshakes</h5>
            <p className="quote-text-large">
              "Zone 2 is about solving 'Notification Fatigue.' By increasing the resolution of the alert to include intent and context, we eliminate the 'I'm not sure why I'm talking to this person' moment."
            </p>
          </div>
        </div>

        {/* ZONE 3: COMING SOON */}
        <div style={{ opacity: '0.5', textAlign: 'center', padding: '40px', border: '2px dashed var(--border-color)', borderRadius: '16px' }}>
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>Zone 03: The Engagement Layer (In Development)</p>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;