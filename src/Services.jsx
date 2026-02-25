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
          { name: "Greenhouse", website: "https://www.greenhouse.io/", category: "ATS / Core System", lift: "High", description: "ATS and hiring workflow system-of-record; supports structured pipelines, scorecards, and integrations.", rating: "4.4", reviewUrl: "https://www.g2.com/sellers/greenhouse-software", mainCategory: "ATS" },
          { name: "Ashby", website: "https://ashbyhq.com/", category: "ATS / Core System; Analytics", lift: "High", description: "ATS with strong analytics; combines workflow + reporting to improve funnel visibility and decision-making.", rating: "4.7", reviewUrl: "https://www.g2.com/sellers/ashby", mainCategory: "ATS" },
          { name: "Lever", website: "https://www.lever.co/", category: "ATS / CRM", lift: "High", description: "ATS/CRM hybrid supporting sourcing-to-pipeline continuity and relationship management.", rating: null, reviewUrl: null, mainCategory: "ATS" },
          { name: "Workable", website: "https://www.workable.com/", category: "ATS / Core System", lift: "Medium", description: "SMB/midmarket ATS focused on ease-of-use, job posting, and pipeline management.", rating: "4.5", reviewUrl: "https://www.g2.com/sellers/workable", mainCategory: "ATS" },
          { name: "Teamtailor", website: "https://www.teamtailor.com/", category: "ATS / Employer Brand", lift: "Medium", description: "ATS with strong candidate experience and employer branding capabilities.", rating: "4.6", reviewUrl: "https://www.g2.com/sellers/teamtailor", mainCategory: "ATS" },
          { name: "Breezy HR", website: "https://breezy.hr/", category: "ATS / Core System", lift: "Low–Medium", description: "Lightweight ATS for small teams; quick setup and simple workflow management.", rating: "4.4", reviewUrl: "https://www.g2.com/sellers/breezy-hr", mainCategory: "ATS" },
          { name: "iCIMS", website: "https://www.icims.com/", category: "ATS / Enterprise", lift: "High", description: "Enterprise ATS focused on scale, compliance, and complex workflows.", rating: "4.2", reviewUrl: "https://www.g2.com/sellers/icims", mainCategory: "ATS" },
          { name: "SmartRecruiters", website: "https://www.smartrecruiters.com/", category: "ATS / Enterprise", lift: "High", description: "Enterprise ATS with broad marketplace integrations and global hiring support.", rating: "4.3", reviewUrl: "https://www.g2.com/sellers/smartrecruiters", mainCategory: "ATS" },
          { name: "Jobvite", website: "https://www.jobvite.com/", category: "ATS / CRM", lift: "High", description: "Talent acquisition suite supporting high-volume recruiting operations.", rating: null, reviewUrl: null, mainCategory: "ATS" }
        ]
      },
      {
        name: "Sourcing / Talent Discovery",
        providers: [
          { name: "LinkedIn Recruiter", website: "https://business.linkedin.com/talent-solutions/recruiter", category: "Sourcing / Talent Discovery", lift: "Medium", description: "Search and outreach for professional profiles; strong for targeted outbound sourcing and pipeline building.", rating: null, reviewUrl: null, mainCategory: "Sourcing/CRM" },
          { name: "Indeed", website: "https://www.indeed.com/", category: "Job Board / Sourcing Channel", lift: "Low", description: "Job advertising and candidate sourcing channel; often strong volume, variable quality depending on role/market.", rating: null, reviewUrl: null, mainCategory: "Sourcing/CRM" },
          { name: "SeekOut", website: "https://www.seekout.com/", category: "Sourcing / Talent Discovery", lift: "Medium", description: "Talent search and rediscovery; supports targeted sourcing and re-engagement workflows.", rating: "4.5", reviewUrl: "https://www.g2.com/sellers/seekout", mainCategory: "Sourcing/CRM" },
          { name: "hireEZ", website: "https://hireez.com/", category: "Sourcing / Outreach", lift: "Medium", description: "Outbound sourcing platform with search and engagement/sequencing capabilities.", rating: "4.6", reviewUrl: "https://www.g2.com/sellers/hireez", mainCategory: "Sourcing/CRM" },
          { name: "Gem", website: "https://www.gem.com/", category: "CRM; Sourcing; Messaging/Nurture", lift: "Medium", description: "Recruiting CRM for nurturing and re-engagement; supports outreach and campaign management, often paired with ATS.", rating: "4.7", reviewUrl: "https://www.g2.com/sellers/gem", mainCategory: "Sourcing/CRM" },
          { name: "Loxo", website: "https://loxo.co/", category: "CRM/Sourcing", lift: "Medium", description: "Recruiting CRM and sourcing platform; common in agency/executive search workflows.", rating: "4.6", reviewUrl: "https://www.g2.com/sellers/loxo", mainCategory: "Sourcing/CRM" },
          { name: "Fetcher", website: "https://fetcher.ai/", category: "Sourcing (Tooling/Service)", lift: "Low–Medium", description: "Sourcing assistance and tooling to generate outbound pipelines with less manual effort.", rating: null, reviewUrl: null, mainCategory: "Sourcing/CRM" }
        ]
      },
      {
        name: "Parsing / Enrichment",
        description: "Turn resumes into usable signal.",
        providers: [
          { name: "DaXtra", website: "https://www.daxtra.com/", category: "Parsing / Search", lift: "Medium", description: "Resume/CV parsing and search tools to structure candidate data for downstream use.", rating: null, reviewUrl: null, mainCategory: "Sourcing/CRM" },
          { name: "Textkernel", website: "https://www.textkernel.com/", category: "Parsing / Matching", lift: "Medium–High", description: "Parsing and matching/semantic search capabilities for normalizing candidate data and improving search.", rating: null, reviewUrl: null, mainCategory: "Sourcing/CRM" },
          { name: "RChilli", website: "https://www.rchilli.com/", category: "Parsing", lift: "Medium", description: "Resume parsing and data standardization for ATS/CRM workflows.", rating: null, reviewUrl: null, mainCategory: "Sourcing/CRM" },
          { name: "Sovren", website: "https://www.sovren.com/", category: "Parsing", lift: "Medium", description: "Resume parsing and data extraction for staffing and enterprise use cases.", rating: null, reviewUrl: null, mainCategory: "Sourcing/CRM" }
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
          { name: "GoodTime", website: "https://www.goodtime.io/", category: "Scheduling / Coordination", lift: "Medium", description: "Scheduling and interview coordination platform to reduce time-to-interview and coordinator load.", rating: "4.4", reviewUrl: "https://www.g2.com/sellers/goodtime-io", mainCategory: "Scheduling" },
          { name: "Calendly", website: "https://calendly.com/", category: "Scheduling", lift: "Low", description: "Self-serve scheduling links to reduce back-and-forth; useful for screens and stakeholder scheduling.", rating: "3.1", reviewUrl: "https://www.trustpilot.com/review/calendly.com", mainCategory: "Scheduling" },
          { name: "Prelude", website: "https://www.prelude.co/", category: "Scheduling / Coordination", lift: "Medium", description: "Interview scheduling and candidate coordination focused on automation and logistics.", rating: null, reviewUrl: null, mainCategory: "Scheduling" }
        ]
      },
      {
        name: "Automation / Workflow",
        description: "Routing, reminders, nudges.",
        providers: [
          { name: "Zapier", website: "https://zapier.com/", category: "Automation / Workflow", lift: "Low–Medium", description: "No-code automation for connecting tools and routing tasks/notifications across systems.", rating: "4.5", reviewUrl: "https://www.g2.com/sellers/zapier", mainCategory: "Automation/Workflow" },
          { name: "Make (Integromat)", website: "https://www.make.com/", category: "Automation / Workflow", lift: "Medium", description: "Advanced automation and integrations for complex workflows and routing logic.", rating: null, reviewUrl: null, mainCategory: "Automation/Workflow" },
          { name: "Paradox (Olivia)", website: "https://paradox.ai/", category: "Conversational Automation", lift: "Medium–High", description: "Conversational assistant for high-volume engagement, screening, and scheduling automation.", rating: null, reviewUrl: null, mainCategory: "Automation/Workflow" }
        ]
      },
      {
        name: "Messaging / Candidate communication",
        providers: [
          { name: "TextUs", website: "https://www.textus.com/", category: "Messaging / SMS", lift: "Low", description: "SMS messaging for faster candidate contact, common in hourly/high-volume hiring.", rating: null, reviewUrl: null, mainCategory: "Sourcing/CRM" }
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
          { name: "HackerRank", category: "Assessments / Skills", lift: "Medium", description: "Technical coding assessments for engineering hiring; supports standardized skill evaluation.", rating: null, reviewUrl: null, mainCategory: "Assessments" },
          { name: "Codility", category: "Assessments / Skills", lift: "Medium", description: "Coding assessments and skill evaluation for engineering roles.", rating: null, reviewUrl: null, mainCategory: "Assessments" },
          { name: "CodeSignal", category: "Assessments / Skills", lift: "Medium", description: "Skills assessment platform with standardized tests and scoring for technical hiring.", rating: null, reviewUrl: null, mainCategory: "Assessments" },
          { name: "TestGorilla", category: "Assessments / Screening", lift: "Low–Medium", description: "General assessments for pre-screening; broad library across roles.", rating: null, reviewUrl: null, mainCategory: "Assessments" },
          { name: "Criteria", category: "Assessments / Aptitude", lift: "Medium", description: "Aptitude and personality assessments for early-stage qualification.", rating: null, reviewUrl: null, mainCategory: "Assessments" },
          { name: "SHL", category: "Assessments / Enterprise", lift: "High", description: "Enterprise psychometric and skills assessments, often for large-scale hiring.", rating: null, reviewUrl: null, mainCategory: "Assessments" },
          { name: "Harver", category: "High-volume Screening", lift: "High", description: "High-volume selection and screening workflows aimed at improving throughput and quality.", rating: null, reviewUrl: null, mainCategory: "Assessments" }
        ]
      },
      {
        name: "Background / Identity / References",
        providers: [
          { name: "Checkr", category: "Background Checks", lift: "Medium", description: "Background screening platform commonly used for scalable checks.", rating: null, reviewUrl: null, mainCategory: "Background/ID" },
          { name: "Sterling", category: "Background Checks / Enterprise", lift: "High", description: "Enterprise background and screening services with compliance-focused workflows.", rating: null, reviewUrl: null, mainCategory: "Background/ID" },
          { name: "HireRight", category: "Background Checks / Enterprise", lift: "High", description: "Background screening services often used at enterprise scale.", rating: null, reviewUrl: null, mainCategory: "Background/ID" },
          { name: "Certn", category: "Background Checks", lift: "Medium", description: "Background checks with an emphasis on speed and international coverage (varies by region).", rating: null, reviewUrl: null, mainCategory: "Background/ID" },
          { name: "SkillSurvey", category: "References", lift: "Medium", description: "Structured reference checking to capture consistent feedback signal earlier.", rating: null, reviewUrl: null, mainCategory: "Background/ID" }
        ]
      },
      {
        name: "Structured Screening",
        description: "Knockout + signal capture.",
        providers: [
          { name: "Typeform", category: "Screening Forms", lift: "Low", description: "Flexible form builder for pre-screen questions and knockouts; can route candidates based on responses.", rating: null, reviewUrl: null, mainCategory: "Automation/Workflow" }
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
          { name: "Metaview", category: "Interview Intelligence; AI Sourcing", lift: "Medium", description: "AI recruiting platform including interview intelligence/notetaker plus AI sourcing agent to find candidates; can support outreach workflows.", rating: "4.8", reviewUrl: "https://www.g2.com/sellers/metaview", mainCategory: "Interview Intelligence" },
          { name: "BrightHire", category: "Interview Intelligence", lift: "Medium", description: "Interview intelligence for capturing notes and coaching consistency across interviewers.", rating: "4.7", reviewUrl: "https://www.g2.com/sellers/brighthire", mainCategory: "Interview Intelligence" },
          { name: "Fireflies.ai", category: "Meeting Capture / Transcription", lift: "Low", description: "Meeting transcription and summaries; can support recruiting calls but is general-purpose.", rating: null, reviewUrl: null, mainCategory: "Interview Intelligence" },
          { name: "Otter.ai", category: "Transcription", lift: "Low", description: "Transcription and meeting notes; general-purpose capture tool.", rating: null, reviewUrl: null, mainCategory: "Interview Intelligence" }
        ]
      },
      {
        name: "Structured interviewing / scorecards",
        providers: [
          { name: "BarRaiser", category: "Interview Quality / Structured Interviewing", lift: "Medium–High", description: "Structured interview processes and interviewer calibration support to improve consistency.", rating: null, reviewUrl: null, mainCategory: "Interview Intelligence" }
        ]
      },
      {
        name: "Video Interviewing",
        providers: [
          { name: "HireVue", category: "Video Interviewing; Assessments", lift: "High", description: "Video interviewing and assessment workflows for scaled hiring; enterprise-oriented.", rating: null, reviewUrl: null, mainCategory: "Video Interviewing" },
          { name: "Modern Hire", category: "Video Interviewing; Assessments", lift: "High", description: "Enterprise hiring platform combining assessments and video interviewing for selection workflows.", rating: null, reviewUrl: null, mainCategory: "Video Interviewing" },
          { name: "Spark Hire", category: "Video Interviewing", lift: "Medium", description: "Video interviewing platform, including async options for early screening.", rating: null, reviewUrl: null, mainCategory: "Video Interviewing" }
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
          { name: "DocuSign", category: "Offer / e-Sign", lift: "Low", description: "E-signature workflows for offer letters and approvals with audit trails.", rating: "4.4", reviewUrl: "https://www.g2.com/sellers/docusign", mainCategory: "Offer/Onboarding" },
          { name: "Adobe Sign", category: "Offer / e-Sign", lift: "Low", description: "E-signature workflows for offers and related documents.", rating: null, reviewUrl: null, mainCategory: "Offer/Onboarding" }
        ]
      },
      {
        name: "Onboarding / HRIS handoff",
        providers: [
          { name: "Rippling", category: "HRIS / Onboarding", lift: "Medium–High", description: "HRIS platform supporting onboarding and employee lifecycle; often used for hire-to-day-one continuity.", rating: "4.8", reviewUrl: "https://www.g2.com/sellers/rippling", mainCategory: "Offer/Onboarding" },
          { name: "Gusto", category: "HRIS / Payroll", lift: "Medium", description: "SMB payroll + HR platform; supports onboarding workflows for smaller teams.", rating: "4.6", reviewUrl: "https://www.g2.com/sellers/gusto", mainCategory: "Offer/Onboarding" },
          { name: "BambooHR", category: "HRIS", lift: "Medium", description: "HRIS for SMB/midmarket; onboarding and employee management workflows.", rating: "4.4", reviewUrl: "https://www.g2.com/sellers/bamboohr", mainCategory: "Offer/Onboarding" },
          { name: "Workday", category: "HRIS / Enterprise", lift: "Very High", description: "Enterprise HRIS used for large organizations; complex implementation but powerful system-of-record.", rating: null, reviewUrl: null, mainCategory: "Offer/Onboarding" }
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
          { name: "Juicebox", category: "Analytics / Funnel Visibility", lift: "Medium", description: "Recruiting analytics focused on funnel visibility (conversion, time-in-stage, source quality) across the hiring process.", rating: null, reviewUrl: null, mainCategory: "Analytics" },
          { name: "Tableau", category: "Business Intelligence", lift: "High", description: "BI platform for custom analytics and dashboards; requires disciplined data pipelines.", rating: null, reviewUrl: null, mainCategory: "Analytics" },
          { name: "Power BI", category: "Business Intelligence", lift: "High", description: "BI platform for reporting and dashboards; often used with ATS exports and warehouse data.", rating: null, reviewUrl: null, mainCategory: "Analytics" },
          { name: "Looker", category: "Business Intelligence", lift: "High", description: "BI and modeling layer for analytics; useful when data is centralized in a warehouse.", rating: null, reviewUrl: null, mainCategory: "Analytics" }
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
          <p style={{ fontSize: '0.95rem', color: '#94A3B8', fontStyle: 'italic', marginTop: '20px', maxWidth: '800px', margin: '20px auto 0' }}>
            Providers are included for informational purposes and do not imply recommendation; I can conduct targeted research on your behalf and will label entries “Spoken With” as diligence progresses. ~~Paul
          </p>
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
                              <span style={{ color: '#fff', fontWeight: '600', fontSize: '1rem' }}>
                                {provider.website ? (
                                  <a href={provider.website} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted rgba(255,255,255,0.5)' }}>
                                    {provider.name}
                                  </a>
                                ) : provider.name}
                              </span>
                              <span style={{ fontSize: '0.75rem', color: '#64748B', border: '1px solid #334155', padding: '2px 6px', borderRadius: '4px' }}>Lift: {provider.lift}</span>
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '4px' }}>
                              <span style={{ color: '#3B82F6' }}>{provider.category}</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '6px', lineHeight: '1.4' }}>
                              {provider.description}
                            </p>
                            {provider.rating && (
                               <div style={{ marginTop: '6px', fontSize: '0.8rem' }}>
                                 <span style={{ color: '#FBBF24' }}>★ {provider.rating}</span>
                                 {provider.reviewUrl && (
                                   <span style={{ marginLeft: '8px' }}>
                                     <a href={provider.reviewUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'none' }}>Read Reviews →</a>
                                   </span>
                                 )}
                               </div>
                            )}
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
                        <span style={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>
                          {provider.website ? (
                            <a href={provider.website} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted rgba(255,255,255,0.5)' }}>
                              {provider.name}
                            </a>
                          ) : provider.name}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#64748B', border: '1px solid #334155', padding: '2px 6px', borderRadius: '4px' }}>Lift: {provider.lift}</span>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#CBD5E1', margin: 0, lineHeight: '1.4' }}>
                        {provider.description}
                      </p>
                      {provider.rating && (
                         <div style={{ marginTop: '8px', fontSize: '0.8rem' }}>
                           <span style={{ color: '#FBBF24' }}>★ {provider.rating}</span>
                           {provider.reviewUrl && (
                             <span style={{ marginLeft: '8px' }}>
                               <a href={provider.reviewUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'none' }}>Read Reviews →</a>
                             </span>
                           )}
                         </div>
                      )}
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