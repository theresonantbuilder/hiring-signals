import React from 'react';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        
        {/* Header */}
        <div className="case-studies-header">
          <h2 className="case-studies-title">Case Studies</h2>
          <p className="case-studies-subtitle">
            The 5-Layer Signal Architecture
          </p>
        </div>

        {/* LAYER 01 */}
        <div className="case-study-card">
          <div className="case-study-header">
            <span className="case-study-tag">LAYER 01: THE SOURCING LAYER</span>
            <h3 className="case-study-headline">
              Inference vs. Search: The Cybersecurity Architect Case
            </h3>
          </div>

          <div className="impact-grid">
            <div className="impact-card">
              <h4 className="impact-card-title text-red">Keyword Logic (The Vocabulary Gap)</h4>
              <p className="impact-text">
                Traditional search uses "Vocabulary." A recruiter runs a Boolean search for "AWS" + "Zero Trust." It returns 50,000 "certified" resumes with no proof of battle-scars. High-quality, non-obvious talent is buried under keyword-stuffed noise.
              </p>
            </div>

            <div className="impact-card border-blue">
              <h4 className="impact-card-title text-blue">Signaling Logic (The Grammar of Experience)</h4>
              <p className="impact-text">
                Our Agentic Discovery Loop infers alignment by analyzing the architecture of a career. It identifies "Ghost Signals"—patterns like a candidate who led a legacy bank migration—even if they didn't use the specific keywords.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h5 className="impact-title">
              <span className="impact-line"></span>
              Why It Matters: Signal Integrity
            </h5>
            <div className="impact-grid">
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">In-House</h6>
                <p className="impact-text">
                  You stop acting as a manual filter for noise and start providing talent that managers actually respect.
                </p>
              </div>
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">Agencies</h6>
                <p className="impact-text">
                  Uncover the "hidden 2%" of the market, justifying premium fees through superior discovery logic clients can't replicate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 02 */}
        <div className="case-study-card">
          <div className="case-study-header">
            <span className="case-study-tag">LAYER 02: THE NOTIFICATION LAYER</span>
            <h3 className="case-study-headline">
              Static Routing vs. Dynamic Alerting: Solving the Perishable Opportunity
            </h3>
          </div>

          <div className="impact-grid">
            <div className="impact-card">
              <h4 className="impact-card-title text-red">The Bottleneck (The Black Hole)</h4>
              <p className="impact-text">
                Signals are funneled into a centralized ATS. High-value triggers sit in a general queue for days awaiting manual review. By the time the right person sees the resume, the elite candidate is already in final rounds elsewhere.
              </p>
            </div>

            <div className="impact-card border-blue">
              <h4 className="impact-card-title text-blue">Intelligent Routing (Zero-Latency Logic)</h4>
              <p className="impact-text">
                The system calculates signal strength and immediately routes high-fidelity matches to the specific stakeholder who can act. Decision-makers receive a "Contextual Digest" on Slack or Teams the moment alignment is inferred.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h5 className="impact-title">
              <span className="impact-line"></span>
              Why It Matters: The Speed of Trust
            </h5>
            <div className="impact-grid">
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">In-House</h6>
                <p className="impact-text">
                  Eliminates the 3-day administrative lag, capturing talent while the signal is at its peak.
                </p>
              </div>
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">Agencies</h6>
                <p className="impact-text">
                  Your notification is your product. Sending a resume with an "Architectural Proof of Alignment" makes you a risk-mitigation specialist.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 03 */}
        <div className="case-study-card">
          <div className="case-study-header">
            <span className="case-study-tag">LAYER 03: THE VERIFICATION LAYER</span>
            <h3 className="case-study-headline">
              Self-Reported Claims vs. Behavioral Evidence: The FinTech Case
            </h3>
          </div>

          <div className="impact-grid">
            <div className="impact-card">
              <h4 className="impact-card-title text-red">The Trust Gap (The Paper-Strong Candidate)</h4>
              <p className="impact-text">
                Traditional hiring relies on the resume—a static, self-reported document. "Paper-strong" candidates often fail in technical environments because they've optimized their words for search, not for actual behavioral impact.
              </p>
            </div>

            <div className="impact-card border-blue">
              <h4 className="impact-card-title text-blue">Behavioral Proof Points (The Evidence Dossier)</h4>
              <p className="impact-text">
                Agentic workflows cross-reference resume claims against external behavioral evidence (technical contributions, project architecture, public mastery). We move the hiring team from "I hope they can do this" to "I know they have done this."
              </p>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h5 className="impact-title">
              <span className="impact-line"></span>
              Why It Matters: Protecting the Interview Loop
            </h5>
            <div className="impact-grid">
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">In-House</h6>
                <p className="impact-text">
                  Technical managers' time is your most expensive resource. Protecting their schedule from "Discovery Interviews" increases the ROI of every interview hour.
                </p>
              </div>
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">Agencies</h6>
                <p className="impact-text">
                  Presenting a dossier of evidence rather than just a resume makes your candidates impossible to ignore.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 04 */}
        <div className="case-study-card">
          <div className="case-study-header">
            <span className="case-study-tag">LAYER 04: THE EVALUATION LAYER</span>
            <h3 className="case-study-headline">
              Subjective "Vibe" vs. Structural Alignment: The Product Leadership Case
            </h3>
          </div>

          <div className="impact-grid">
            <div className="impact-card">
              <h4 className="impact-card-title text-red">Charisma Bias (The Information Asymmetry)</h4>
              <p className="impact-text">
                Interviews are often unscientific "vibe-checks." Charismatic candidates mask competency gaps, while highly competent but less "polished" talent is filtered out. The team likes the person, but doesn't know if they can solve the business logic.
              </p>
            </div>

            <div className="impact-card border-blue">
              <h4 className="impact-card-title text-blue">Objective Alignment Logic (The Signal Map)</h4>
              <p className="impact-text">
                We engineer a structured evaluation framework that maps candidate responses to the core architectural needs of the role. This removes bias and focuses on the "Logic of the Solve."
              </p>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h5 className="impact-title">
              <span className="impact-line"></span>
              Why It Matters: Eliminating the False Positive
            </h5>
            <div className="impact-grid">
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">In-House</h6>
                <p className="impact-text">
                  A bad hire at the leadership level costs 5x their salary. Objective evaluation is the insurance policy against charisma-based errors.
                </p>
              </div>
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">Agencies</h6>
                <p className="impact-text">
                  When candidates consistently succeed long-term, you stop being a vendor and become a Strategic Talent Advisor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 05 */}
        <div className="case-study-card">
          <div className="case-study-header">
            <span className="case-study-tag">LAYER 05: THE SELECTION AND COMPLIANCE LAYER</span>
            <h3 className="case-study-headline">
              Administrative Friction vs. Integrated Velocity: The Global Scale Case
            </h3>
          </div>

          <div className="impact-grid">
            <div className="impact-card">
              <h4 className="impact-card-title text-red">The Final Mile (The Transactional Drop-off)</h4>
              <p className="impact-text">
                Selection is often treated as a manual hand-off to HR. Perfect signals are killed by slow paperwork or logic-blind compliance checks. Candidates feel like a headcount number, leading to "Buyer's Remorse" or ghosting.
              </p>
            </div>

            <div className="impact-card border-blue">
              <h4 className="impact-card-title text-blue">Automated Compliance Logic (The Parallel Path)</h4>
              <p className="impact-text">
                Compliance checks are triggered agentically based on the "Selection Signal," moving in parallel with the offer. The offer and the roadmap are delivered as a single, high-fidelity package.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h5 className="impact-title">
              <span className="impact-line"></span>
              Why It Matters: Protecting the Exchange
            </h5>
            <div className="impact-grid">
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">In-House</h6>
                <p className="impact-text">
                  A hire isn't a hire until they are in the seat. This layer ensures that "Hiring Health" isn't compromised by a clumsy closing process.
                </p>
              </div>
              <div className="impact-card" style={{ backgroundColor: 'transparent' }}>
                <h6 className="impact-card-title">Agencies</h6>
                <p className="impact-text">
                  A clean, logic-driven selection phase ensures a high-fidelity start to the candidate's tenure, securing your placement and your reputation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Insight */}
        <div className="quote-box mt-large">
          <h5 className="text-blue bold" style={{ marginBottom: '10px', fontSize: '1.1rem' }}>Global Architect's Insight</h5>
          <p className="quote-text-large">
            "When these 5 layers are tuned correctly, hiring stops being a series of lucky accidents and starts being a high-fidelity system. We aren't just filling seats; we are engineering the movement of talent into opportunity with zero signal loss."
          </p>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;