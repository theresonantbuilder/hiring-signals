import React from "react";
import { Link } from "react-router-dom";

const phases = [
  {
    title: "Resume Noise Is Eating Your Team’s Time",
    subtitle: "Sourcing: Is this happening now?",
    description: "Your ops leaders are reviewing dozens of resumes that don’t match real job-site needs.",
    possibleTitle: "What is possible",
    possibleDescription: "Signal-based filtering that surfaces only work-ready candidates aligned to your actual operating environment.",
    outcome: "Managers spend 15 minutes reviewing viable candidates — not 4 hours sorting noise.",
    actionTitle: "What to do",
    actionDescription: (
      <>
        Reach out to Paul to help you evaluate what solutions might reduce noise and improve signal at the top of your funnel — without overcomplicating your workflow.
        <br /><br />
        <span style={{ color: '#fff' }}>Potential providers to consider:</span><br />
        Metaview (AI Sourcing)<br />
        Juicebox (AI sourcing + ranking + outreach)
      </>
    )
  },
  {
    title: "Applicants Go Cold Because No One Responded Fast Enough",
    subtitle: "Notifications: Is this happening now?",
    description: "Resumes hit a shared inbox. No urgency. No routing. Delays cost you talent.",
    possibleTitle: "What is possible",
    possibleDescription: "Priority routing + automated candidate engagement so decision-makers respond in hours, not days.",
    outcome: "First-to-market speed without hiring a recruiting coordinator.",
    actionTitle: "What to do",
    actionDescription: (
      <>
        Reach out to Paul to help you evaluate what solutions might reduce latency and improve speed — without overcomplicating your workflow.
        <br /><br />
        <span style={{ color: '#fff' }}>Potential providers to consider:</span><br />
        Paradox (Conversational AI)<br />
        Sense (Automated Engagement)
      </>
    )
  },
  {
    title: "Qualification Happens Too Late",
    subtitle: "Qualifying: Is this happening now?",
    description: "Licensing, eligibility, or relocation issues show up after interviews.",
    possibleTitle: "What is possible",
    possibleDescription: "Automated pre-verification and structured qualification before time is invested.",
    outcome: "Only qualified candidates reach your hiring managers.",
    actionTitle: "What to do",
    actionDescription: (
      <>
        Reach out to Paul to identify the “late-stage surprises” that keep derailing hires (license, eligibility, location, etc.), then move them earlier with a clean, structured qualification step—without turning your process into a form maze.
        <br /><br />
        <span style={{ color: '#fff' }}>Potential providers to consider:</span><br />
        Greenhouse (ATS workflows + structured stages/fields) — capture key qualifiers early and enforce consistent stage gates.<br />
        Checkr (background screening inside Greenhouse) — order/review screenings directly from the candidate profile to prevent last-minute compliance surprises.
      </>
    )
  },
  {
    title: "Hiring Decisions Are Based on Memory",
    subtitle: "Interviewing: Is this happening now?",
    description: "Notes live in email threads. Interview insights get lost.",
    possibleTitle: "What is possible",
    possibleDescription: "Structured competency extraction and searchable candidate data across your team.",
    outcome: "Objective comparison. Less bias. Higher certainty.",
    actionTitle: "What to do",
    actionDescription: (
      <>
        Reach out to Paul to standardize how interview signal is captured and compared across your team—so feedback becomes consistent, searchable, and decision-ready (without adding more admin work).
        <br /><br />
        <span style={{ color: '#fff' }}>Potential providers to consider:</span><br />
        Metaview — AI notetaker + searchable interview insights; can also auto-fill Greenhouse scorecards to reduce “missing feedback” and improve consistency.<br />
        Greenhouse — structured scorecards and the ability to require scorecard submission, so decisions aren’t made without documented evidence.
      </>
    )
  },
  {
    title: "Offers Stall. Candidates Ghost.",
    subtitle: "Onboarding:What’s happening now",
    description: "Manual paperwork. Delays between offer and Day 1.",
    possibleTitle: "What is possible",
    possibleDescription: "Automated digital offers and compliance workflows.",
    outcome: "Higher activation rates and less last-minute attrition.",
    actionTitle: "What to do",
    actionDescription: (
      <>
        Reach out to Paul to tighten the “close” workflow (approvals → offer letter → signature → Day-1 steps), so nothing sits in limbo and candidates aren’t left guessing what’s next.
        <br /><br />
        <span style={{ color: '#fff' }}>Potential providers to consider:</span><br />
        Greenhouse — offer stages, approvals, and a clean handoff from “decision” to “offer sent” (so the process doesn’t depend on someone remembering to follow up)<br />
        DocuSign — fast e-signature + status tracking for offer letters and onboarding documents (removes the back-and-forth and reduces drop-off points)
      </>
    )
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
        <div style={{
          maxWidth: '800px',
          margin: '4rem auto 0 auto',
          padding: '3rem',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '24px',
          backdropFilter: 'blur(12px)',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0 20px 50px -20px rgba(59, 130, 246, 0.15)'
        }}>
          <div style={{
            position: 'absolute',
            top: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: '#3B82F6',
            borderRadius: '4px',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)'
          }}></div>
          <p style={{
            fontSize: '1.4rem',
            lineHeight: '1.5',
            color: 'white',
            fontWeight: '500',
            margin: '0 0 2rem 0'
          }}>
            Most hiring stacks capture data, not intent. <span style={{ color: '#3B82F6', fontWeight: '700' }}>Inference</span> (AI-assisted interpretation) turns your hiring inputs into <span style={{ color: '#3B82F6', fontWeight: '700' }}>signal</span> — so the right actions happen sooner.
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: '#94A3B8', margin: '0 auto', maxWidth: '650px' }}>
            HiringSignals.ai helps growing teams reduce hiring friction by adding an inference layer to their existing stack — so the right candidates get routed, qualified, and decided on faster.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#94A3B8', margin: '1.5rem auto 0', maxWidth: '650px', fontStyle: 'italic' }}>
            I start with a conversation, map where your hiring signal breaks down, then introduce the right tools and partners to fix it. ~~ Paul Duplantis
          </p>
          <div style={{
            position: 'absolute',
            bottom: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: '#3B82F6',
            borderRadius: '4px',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)'
          }}></div>
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
                {phase.possibleTitle && (
                  <>
                    <p className="phase-subtitle" style={{ color: '#3B82F6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', marginTop: '25px' }}>
                      {phase.possibleTitle}
                    </p>
                    <p className="phase-description" style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: '1.7', marginBottom: '25px', maxWidth: '800px' }}>
                      {phase.possibleDescription}
                    </p>
                  </>
                )}
                <div style={{ borderLeft: '4px solid #3B82F6', padding: '20px', background: 'rgba(59, 130, 246, 0.05)' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '10px', color: '#fff' }}>RESULT:</p>
                  <p style={{ margin: 0, color: '#94A3B8', fontSize: '15px', fontStyle: 'italic' }}>{phase.outcome}</p>
                </div>
                {phase.actionTitle && (
                  <>
                    <p className="phase-subtitle" style={{ color: '#3B82F6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', marginTop: '25px' }}>
                      {phase.actionTitle}
                    </p>
                    <p className="phase-description" style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: '1.7', marginBottom: '25px', maxWidth: '800px' }}>
                      {phase.actionDescription}
                    </p>
                    <div style={{ marginTop: '15px', padding: '15px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#94A3B8', fontStyle: 'italic' }}>
                        The providers listed above are not a complete list. <Link to="/directory" style={{ color: '#3B82F6', textDecoration: 'none' }}>Browse the Provider Directory</Link> to see other providers in this category.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;