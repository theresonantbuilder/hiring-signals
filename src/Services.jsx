import React, { useState } from 'react';

const directoryData = [
  {
    id: "layer01",
    title: "Layer 01 — Sourcing & Resume Signal",
    goal: "Reduce irrelevant volume and improve match quality before humans waste time.",
    groups: [
      {
        name: "ATS / Core System (foundation layer)",
        description: "These systems become your “system of record.” Most other tools plug into these.",
        providers: [
          { name: "Greenhouse", category: "ATS", lift: "High", strengthens: "workflow consistency, reporting baseline", mainCategory: "ATS" },
          { name: "Ashby", category: "ATS + Analytics", lift: "High", strengthens: "structured pipeline + reporting depth", mainCategory: "ATS" },
          { name: "Lever", category: "ATS/CRM", lift: "High", strengthens: "sourcing-to-pipeline continuity", mainCategory: "ATS" },
          { name: "Workable", category: "ATS", lift: "Medium", strengthens: "SMB-friendly hiring workflow", mainCategory: "ATS" },
          { name: "Teamtailor", category: "ATS/Brand", lift: "Medium", strengthens: "candidate experience + lightweight ATS", mainCategory: "ATS" },
          { name: "Breezy HR", category: "ATS", lift: "Low–Medium", strengthens: "speed for small teams", mainCategory: "ATS" },
          { name: "iCIMS", category: "ATS", lift: "High", strengthens: "enterprise workflows + compliance", mainCategory: "ATS" },
          { name: "SmartRecruiters", category: "ATS", lift: "High", strengthens: "enterprise marketplace integrations", mainCategory: "ATS" },
          { name: "Jobvite", category: "ATS/CRM", lift: "High", strengthens: "high-volume recruiting operations", mainCategory: "ATS" }
        ]
      },
      {
        name: "Sourcing / Talent Discovery",
        providers: [
          { name: "LinkedIn Recruiter", category: "Sourcing", lift: "Medium", strengthens: "targeting, relationship pipeline", mainCategory: "Sourcing/CRM" },
          { name: "Indeed (sponsored/organic)", category: "Sourcing", lift: "Low", strengthens: "volume acquisition (often noisy)", mainCategory: "Sourcing/CRM" },
          { name: "SeekOut", category: "Sourcing", lift: "Medium", strengthens: "targeted search + talent rediscovery", mainCategory: "Sourcing/CRM" },
          { name: "hireEZ", category: "Sourcing", lift: "Medium", strengthens: "outbound sourcing + sequencing", mainCategory: "Sourcing/CRM" },
          { name: "Gem", category: "Sourcing CRM", lift: "Medium", strengthens: "nurture + re-engagement of past candidates", mainCategory: "Sourcing/CRM" },
          { name: "Loxo", category: "CRM/Sourcing", lift: "Medium", strengthens: "outbound workflows, agency-style sourcing", mainCategory: "Sourcing/CRM" },
          { name: "Fetcher", category: "Sourcing service/tooling", lift: "Low–Medium", strengthens: "pipeline generation with assistance", mainCategory: "Sourcing/CRM" }
        ]
      },
      {
        name: "Parsing / Enrichment",
        description: "Turn resumes into usable signal.",
        providers: [
          { name: "DaXtra", category: "Parsing/Search", lift: "Medium", strengthens: "structured resume data", mainCategory: "Sourcing/CRM" },
          { name: "Textkernel", category: "Parsing/Matching", lift: "Medium–High", strengthens: "normalization + matching layers", mainCategory: "Sourcing/CRM" },
          { name: "RChilli", category: "Parsing", lift: "Medium", strengthens: "ATS data cleanliness", mainCategory: "Sourcing/CRM" },
          { name: "Sovren", category: "Parsing", lift: "Medium", strengthens: "resume ingestion", mainCategory: "Sourcing/CRM" }
        ]
      }
    ]
  },
  {
    id: "layer02",
    title: "Layer 02 — Speed, Routing & Touchpoints",
    goal: "Get the right response to the right person fast — before drop-off happens.",
    groups: [
      {
        name: "Scheduling / Coordination",
        providers: [
          { name: "GoodTime", category: "Scheduling", lift: "Medium", strengthens: "coordinator load reduction", mainCategory: "Scheduling" },
          { name: "Calendly", category: "Scheduling", lift: "Low", strengthens: "basic scheduling speed", mainCategory: "Scheduling" },
          { name: "Prelude", category: "Scheduling", lift: "Medium", strengthens: "interview logistics automation", mainCategory: "Scheduling" }
        ]
      },
      {
        name: "Automation / Workflow",
        description: "Routing, reminders, nudges.",
        providers: [
          { name: "Zapier", category: "Automation", lift: "Low–Medium", strengthens: "quick integrations", mainCategory: "Automation/Workflow" },
          { name: "Make (Integromat)", category: "Automation", lift: "Medium", strengthens: "advanced routing workflows", mainCategory: "Automation/Workflow" },
          { name: "Paradox (Olivia)", category: "Conversational automation", lift: "Medium–High", strengthens: "high-volume candidate engagement", mainCategory: "Automation/Workflow" }
        ]
      },
      {
        name: "Messaging / Candidate communication",
        providers: [
          { name: "Gem", category: "Messaging/Nurture", lift: "Medium", strengthens: "response + reactivation", mainCategory: "Sourcing/CRM" },
          { name: "TextUs", category: "SMS", lift: "Low", strengthens: "speed-to-contact for hourly/high-volume", mainCategory: "Sourcing/CRM" }
        ]
      }
    ]
  },
  {
    id: "layer03",
    title: "Layer 03 — Early Qualification & Verification",
    goal: "Disqualify late-stage surprises early — without turning the process into a maze.",
    groups: [
      {
        name: "Assessments / Skills tests",
        providers: [
          { name: "HackerRank", category: "Assessments", lift: "Medium", strengthens: "technical screening", mainCategory: "Assessments" },
          { name: "Codility", category: "Assessments", lift: "Medium", strengthens: "engineering skills signal", mainCategory: "Assessments" },
          { name: "CodeSignal", category: "Assessments", lift: "Medium", strengthens: "standardized technical evaluation", mainCategory: "Assessments" },
          { name: "TestGorilla", category: "Assessments", lift: "Low–Medium", strengthens: "general screening at scale", mainCategory: "Assessments" },
          { name: "Criteria", category: "Assessments", lift: "Medium", strengthens: "aptitude/personality tests", mainCategory: "Assessments" },
          { name: "SHL", category: "Assessments", lift: "High", strengthens: "enterprise psychometrics", mainCategory: "Assessments" },
          { name: "Harver", category: "High-volume screening", lift: "High", strengthens: "volume funnel optimization", mainCategory: "Assessments" }
        ]
      },
      {
        name: "Background / Identity / References",
        providers: [
          { name: "Checkr", category: "Background", lift: "Medium", strengthens: "scalable background checks", mainCategory: "Background/ID" },
          { name: "Sterling", category: "Background", lift: "High", strengthens: "enterprise checks/compliance", mainCategory: "Background/ID" },
          { name: "HireRight", category: "Background", lift: "High", strengthens: "enterprise screening", mainCategory: "Background/ID" },
          { name: "Certn", category: "Background", lift: "Medium", strengthens: "faster checks in some markets", mainCategory: "Background/ID" },
          { name: "SkillSurvey", category: "References", lift: "Medium", strengthens: "structured reference signal", mainCategory: "Background/ID" }
        ]
      },
      {
        name: "Structured Screening",
        description: "Knockout + signal capture.",
        providers: [
          { name: "Typeform", category: "Screening forms", lift: "Low", strengthens: "pre-screen signal collection", mainCategory: "Automation/Workflow" },
          { name: "Qualified-style intake", category: "Varies", lift: "Low–Medium", strengthens: "routing + initial fit", mainCategory: "Automation/Workflow" }
        ]
      }
    ]
  },
  {
    id: "layer04",
    title: "Layer 04 — Interview Signal Capture",
    goal: "Make interviews comparable and usable — not vibes, not memory, not “gut.”",
    groups: [
      {
        name: "Interview Intelligence",
        description: "Notes, transcripts, signal extraction.",
        providers: [
          { name: "Metaview", category: "Interview intelligence", lift: "Medium", strengthens: "structured notes + recall", mainCategory: "Interview Intelligence" },
          { name: "BrightHire", category: "Interview intelligence", lift: "Medium", strengthens: "coaching + consistency", mainCategory: "Interview Intelligence" },
          { name: "Fireflies.ai", category: "Meeting capture", lift: "Low", strengthens: "transcripts + searchable recall", mainCategory: "Interview Intelligence" },
          { name: "Otter.ai", category: "Transcription", lift: "Low", strengthens: "capture, not full scoring", mainCategory: "Interview Intelligence" }
        ]
      },
      {
        name: "Structured interviewing / scorecards",
        providers: [
          { name: "BarRaiser", category: "Interview quality", lift: "Medium–High", strengthens: "structured panels + interviewer calibration", mainCategory: "Interview Intelligence" },
          { name: "(ATS-native scorecards)", category: "Scorecards", lift: "Low", strengthens: "consistency if actually used", mainCategory: "Interview Intelligence" }
        ]
      },
      {
        name: "Video Interviewing",
        providers: [
          { name: "HireVue", category: "Video + assessments", lift: "High", strengthens: "scale interviewing", mainCategory: "Video Interviewing" },
          { name: "Modern Hire", category: "Video/assessments", lift: "High", strengthens: "enterprise selection workflows", mainCategory: "Video Interviewing" },
          { name: "Spark Hire", category: "Video interviewing", lift: "Medium", strengthens: "async screening", mainCategory: "Video Interviewing" }
        ]
      }
    ]
  },
  {
    id: "layer05",
    title: "Layer 05 — Offer, Close & Onboarding Handoff",
    goal: "Reduce offer friction and “silent drop-offs” right before the finish line.",
    groups: [
      {
        name: "Offer management / Approvals",
        providers: [
          { name: "DocuSign", category: "e-sign", lift: "Low", strengthens: "signature + audit trail", mainCategory: "Offer/Onboarding" },
          { name: "Adobe Sign", category: "e-sign", lift: "Low", strengthens: "signature workflows", mainCategory: "Offer/Onboarding" },
          { name: "(ATS-native offer workflows)", category: "Offer workflows", lift: "Low–Medium", strengthens: "approvals if configured", mainCategory: "Offer/Onboarding" }
        ]
      },
      {
        name: "Onboarding / HRIS handoff",
        providers: [
          { name: "Rippling", category: "HRIS", lift: "Medium–High", strengthens: "hire → onboard operational continuity", mainCategory: "Offer/Onboarding" },
          { name: "Gusto", category: "HRIS", lift: "Medium", strengthens: "SMB onboarding/payroll simplicity", mainCategory: "Offer/Onboarding" },
          { name: "BambooHR", category: "HRIS", lift: "Medium", strengthens: "HR workflows for SMB/midmarket", mainCategory: "Offer/Onboarding" },
          { name: "Workday", category: "HRIS", lift: "Very High", strengthens: "enterprise workforce systems", mainCategory: "Offer/Onboarding" }
        ]
      }
    ]
  },
  {
    id: "crosslayer",
    title: "Cross-Layer — Analytics & Funnel Visibility",
    goal: "Make bottlenecks obvious (and measurable) across layers.",
    groups: [
      {
        name: "Analytics",
        providers: [
          { name: "Juicebox", category: "Recruiting analytics", lift: "Medium", strengthens: "funnel visibility, time-to-stage, pass-through", mainCategory: "Analytics" },
          { name: "Ashby Analytics", category: "Analytics", lift: "Medium", strengthens: "layer-by-layer conversion insight", mainCategory: "Analytics" },
          { name: "Greenhouse Reporting", category: "Analytics", lift: "Low–Medium", strengthens: "baseline metrics (varies by setup", mainCategory: "Analytics" },
          { name: "Tableau / Power BI / Looker", category: "BI", lift: "High", strengthens: "custom visibility if data discipline exists", mainCategory: "Analytics" }
        ]
      }
    ]
  }
];

const Services = () => {
  const [viewMode, setViewMode] = useState('layer'); // 'layer' | 'category'

  // Helper to group by category for the Category View
  const getCategoryData = () => {
    const categories = {};
    directoryData.forEach(layer => {
      layer.groups.forEach(group => {
        group.providers.forEach(provider => {
          const cat = provider.mainCategory || "Other";
          if (!categories[cat]) categories[cat] = [];
          categories[cat].push(provider);
        });
      });
    });
    // Sort categories alphabetically
    return Object.keys(categories).sort().reduce((acc, key) => {
      acc[key] = categories[key];
      return acc;
    }, {});
  };

  const categoryData = getCategoryData();

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="services-header">
          <h2 className="services-title">Provider Directory</h2>
          <p className="services-subtitle">A curated list of high-signal tools across the hiring stack.</p>
        </div>

        {/* View Toggle */}
        <div className="scale-toggle-container">
          <div className="toggle-wrapper">
            <button 
              onClick={() => setViewMode('layer')}
              className={`toggle-btn ${viewMode === 'layer' ? 'active' : ''}`}
            >
              Sort by Layer
            </button>
            <button 
              onClick={() => setViewMode('category')}
              className={`toggle-btn ${viewMode === 'category' ? 'active' : ''}`}
            >
              Sort by Category
            </button>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'layer' ? (
          <div className="services-grid" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {directoryData.map((layer) => (
              <div key={layer.id} className="service-card" style={{ width: '100%', boxSizing: 'border-box' }}>
                <p className="service-tagline" style={{ fontSize: '14px', marginBottom: '5px' }}>{layer.id.toUpperCase()}</p>
                <h3 className="service-card-title" style={{ marginBottom: '10px' }}>{layer.title}</h3>
                <p className="service-description" style={{ fontStyle: 'italic', color: '#94A3B8', marginBottom: '30px' }}>
                  Goal: {layer.goal}
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                  {layer.groups.map((group, gIndex) => (
                    <div key={gIndex} style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>{group.name}</h4>
                      {group.description && <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '15px' }}>{group.description}</p>}
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {group.providers.map((provider, pIndex) => (
                          <div key={pIndex} style={{ borderLeft: '3px solid #3B82F6', paddingLeft: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                              <span style={{ color: '#fff', fontWeight: '600', fontSize: '1rem' }}>{provider.name}</span>
                              <span style={{ fontSize: '0.75rem', color: '#64748B', border: '1px solid #334155', padding: '2px 6px', borderRadius: '4px' }}>Lift: {provider.lift}</span>
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '4px' }}>
                              <span style={{ color: '#3B82F6' }}>{provider.category}</span> • {provider.strengthens}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {Object.entries(categoryData).map(([category, providers]) => (
              <div key={category} className="service-card">
                <h3 className="service-card-title" style={{ fontSize: '1.5rem', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {providers.map((provider, index) => (
                    <div key={index} style={{ paddingBottom: '15px', borderBottom: index !== providers.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '5px' }}>
                        <span style={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>{provider.name}</span>
                        <span style={{ fontSize: '0.75rem', color: '#64748B', border: '1px solid #334155', padding: '2px 6px', borderRadius: '4px' }}>Lift: {provider.lift}</span>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#94A3B8', margin: 0 }}>
                        {provider.strengthens}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legend */}
        <div style={{ marginTop: '60px', padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Directory Legend</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', fontSize: '0.9rem', color: '#94A3B8' }}>
            <div>
              <strong style={{ color: '#3B82F6', display: 'block', marginBottom: '5px' }}>Implementation Lift</strong>
              Low: Plug & play<br/>
              Medium: Config required<br/>
              High: Enterprise rollout
            </div>
            <div>
              <strong style={{ color: '#3B82F6', display: 'block', marginBottom: '5px' }}>Status</strong>
              Listed: Not fully vetted yet<br/>
              Vetted: Deep dive available
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Services;