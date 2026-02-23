import React, { useState, useRef } from 'react';

const layers = [
    {
      id: "01",
      title: "The Sourcing Layer",
      type: "detailed",
      sections: [
        {
          title: "1. Infrastructure Check: How do you build your pipeline?",
          questions: [
            {
              title: "A. Defining the Role",
              text: "How is the role defined and written before it hits the market?",
              options: [
                { label: "Manual: We use legacy templates or Word docs from HR/Hiring Managers." },
                { 
                  label: "Augmented: We use non-AI optimization tools for bias and market appeal.", 
                  subOptions: ["Textio", "Datapeople", "Other"] 
                },
                { 
                  label: "Agentic: We use AI-driven \"Intake Intelligence\" to build technical maps of the role.", 
                  subOptions: ["Metaview (Hiring Studio)", "Juicebox", "Other"] 
                }
              ]
            },
            {
              title: "B. Broadcasting the Role",
              text: "How do you distribute the role to the talent market?",
              options: [
                { label: "Manual Posting: We manually post to individual boards." },
                { 
                  label: "Programmatic / Automated: We use services to aggregate and distribute postings.", 
                  subOptions: ["JobTarget", "Appcast", "PandoLogic", "Other"] 
                },
                { 
                  label: "Niche Distribution: We focus on developer or community-specific platforms.", 
                  subOptions: ["GitHub", "Otta", "StackOverflow"] 
                }
              ]
            },
            {
              title: "C. Finding the Candidates",
              text: "How do you identify talent who haven't applied yet?",
              options: [
                { 
                  label: "Search-Based: We use standard filters and Boolean strings.", 
                  subOptions: ["LinkedIn Recruiter", "Indeed", "Monster", "Dice", "Career Builder", "Other"] 
                },
                { 
                  label: "Discovery Automation: We use tools to automate the \"Find and Contact\" loop.", 
                  subOptions: ["SeekOut", "Findem", "Loxo / Fetcher"] 
                },
                { 
                  label: "Agentic Search: We use AI to find talent via natural language, intent, and context.", 
                  subOptions: ["Juicebox (PeopleGPT)", "Metaview (Agentic Search)"] 
                }
              ]
            },
            {
              title: "D. Storing Candidate Information",
              text: "Where does the data ultimately live? What ATS do you currently use?",
              options: [
                { label: "Greenhouse" }, { label: "ICIMS" }, { label: "Bullhorn" },
                { label: "Ashby" }, { label: "Smart Recruiters" }, { label: "Workday" }, { label: "Other" }
              ]
            }
          ],
          qa: "Q & A: What do you think is missing in your current tech stack to identify quality talent?"
        },
        {
          title: "2. Strategy Check",
          questions: [
            {
              text: "Who Writes the JD?",
              options: [
                { label: "HR / Administrative: Focused on compliance and generic requirements." },
                { label: "The Hiring Manager: Focused on a subjective \"wishlist.\"" },
                { label: "AI-Architected: Built using intake intelligence to map actual role logic." }
              ]
            },
            {
              text: "How are applications generated?",
              options: [
                { label: "We manually create an application and post on our site or social" },
                { label: "Application is generated from our ATS" }
              ]
            },
            {
              text: "How do you find 'Passive' Talent?",
              options: [
                { label: "Reactive: We wait for them to apply or appear on a basic LinkedIn search." },
                { label: "Predictive: We use Agentic Search to live-monitor \"Ghost Signals\" (funding, layoffs, patents)." }
              ]
            },
            {
              text: "What is your Recruiter Filter?",
              options: [
                { label: "Manual: Recruiters spend hours sifting through resumes to find a \"fit.\"" },
                { label: "Inference: AI surfaces the top 5% of candidates based on behavioral history, not just keywords." }
              ]
            }
          ],
          qa: "Q & A: What do you think is missing in your current strategy to identify quality talent?"
        }
      ]
    },
    {
      id: "02",
      title: "The Notification Layer",
      probe: "Is your routing logic manual or agentic?",
      techStack: ["Greenhouse", "Lever", "Workday", "Slack Integration", "MS Teams", "Email Alerts"],
      diagnostic: "When a top-tier lead triggers a signal, walk us through the tech route. How long until the manager sees it?"
    },
    {
      id: "03",
      title: "The Verification Layer",
      probe: "Are you fact-checking resumes or verifying behavioral proof?",
      techStack: ["HackerRank", "CoderPad", "Checkr", "GitHub API", "HiPeople", "Manual References"],
      diagnostic: "What percentage of your interview loop is spent proving claims that should have been pre-validated?"
    },
    {
      id: "04",
      title: "The Evaluation Layer",
      probe: "Is your data capture subjective 'vibes' or structured logic?",
      techStack: ["Metaview", "BrightHire", "Gong", "ATS Scorecards", "Excel/Sheets", "Notion"],
      diagnostic: "After the handshake, how is the signal captured? Is there an AI layer structuring the feedback?"
    },
    {
      id: "05",
      title: "The Selection Layer",
      probe: "Is your final mile a 'Black Hole' or a high-velocity circuit?",
      techStack: ["DocuSign", "PandaDoc", "BambooHR", "Gusto", "Manual Word Docs", "Offer Letter Automation"],
      diagnostic: "Describe the friction between 'Yes' and Day 1. Does the candidate hit a wall of manual paperwork?"
    }
  ];

const SignalAudit = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [selections, setSelections] = useState({});
  const [otherValues, setOtherValues] = useState({});
  const [comments, setComments] = useState({});
  const [recordings, setRecordings] = useState({});
  const [recordingActive, setRecordingActive] = useState(null); // Stores key of currently recording section
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const toggleSelection = (id) => {
    setSelections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOtherChange = (id, value) => {
    setOtherValues(prev => ({ ...prev, [id]: value }));
    // Automatically select the checkbox if user types in "Other"
    if (value && !selections[id]) {
      setSelections(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleCommentChange = (key, value) => {
    setComments(prev => ({ ...prev, [key]: value }));
  };

  const toggleRecording = async (key) => {
    if (recordingActive === key) {
      // Stop Recording
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
        setRecordingActive(null);
      }
    } else {
      // Start Recording
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Audio recording is not supported in this browser.");
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        mediaRecorderRef.current = recorder;
        audioChunksRef.current = [];

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) audioChunksRef.current.push(event.data);
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setRecordings(prev => ({ ...prev, [key]: audioUrl }));
        };

        recorder.start();
        setRecordingActive(key);
      } catch (err) {
        console.error("Microphone access error:", err);
        alert("Could not access microphone. Please allow permissions.");
      }
    }
  };

  const handleGenerateReport = () => {
    const reportData = {
      timestamp: new Date().toLocaleString(),
      selections,
      otherValues,
      comments,
      // Note: Audio blobs are local to the browser and cannot be saved to JSON directly.
      // In a production app, these would be uploaded to a server first.
      recordings_status: "Audio files are local to browser session."
    };

    console.log("Audit Report Data:", reportData);

    // Create a downloadable JSON file so data isn't lost
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "hiring_signals_audit.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    alert("Report downloaded to your computer!\n\nNOTE: Currently, this data lives only in your browser. To forward this to your email automatically, we would need to integrate a service like EmailJS.");
  };

  return (
    <section className="case-studies-section">
      <div className="container">
        
        {/* INTRO: SETTING THE STAGE */}
        <div className="case-studies-header" style={{ textAlign: 'left', marginBottom: '80px' }}>
          <span className="case-study-tag">System Diagnostic</span>
          <h2 className="case-studies-title">The Signal Audit</h2>
          <p className="case-studies-subtitle" style={{ maxWidth: '800px', margin: '20px 0' }}>
            The difference between a "Hiring Process" and a <strong>Signal Architecture</strong> is the 
            infrastructure. Most teams are leaking talent through low-fidelity tools and manual bottlenecks.
            <br /><br />
            This audit identifies the "Noise" in your stack. Check your infrastructure, record your situational 
            briefing, and receive your <strong>System Fidelity Score.</strong>
          </p>
        </div>

        {/* AUDIT INTERFACE */}
        <div className="audit-grid">
          
          {/* SIDEBAR NAVIGATION */}
          <div className="audit-sidebar">
            {layers.map((layer, index) => (
              <div 
                key={layer.id}
                onClick={() => setActiveLayer(index)}
                className={`audit-nav-item ${activeLayer === index ? 'active' : ''}`}
              >
                <span className="audit-nav-label">LAYER {layer.id}</span>
                <h4 className="audit-nav-title">{layer.title}</h4>
              </div>
            ))}
          </div>

          {/* ACTIVE DIAGNOSTIC PANEL */}
          <div className="case-study-card" style={{ margin: 0 }}>
            {layers[activeLayer].type === 'detailed' ? (
              // Detailed Survey View (Layer 01)
              <div className="audit-detailed-view">
                {layers[activeLayer].sections.map((section, sIndex) => {
                  const sectionKey = `L${layers[activeLayer].id}-S${sIndex}`;
                  return (
                  <div key={sIndex} className="audit-section">
                    <h3 className="audit-section-title">{section.title}</h3>
                    
                    {section.questions.map((q, qIndex) => {
                      return (
                      <div key={qIndex} className="audit-question-block">
                        {q.title && <p className="audit-question-title">{q.title}</p>}
                        <p className="audit-question-text">{q.text}</p>
                        <div className="audit-options">
                          {q.options.map((opt, oIndex) => {
                            const optId = `L${layers[activeLayer].id}-S${sIndex}-Q${qIndex}-O${oIndex}`;
                            const isOtherOption = opt.label === "Other" || opt.label.includes("Other");
                            
                            return (
                            <div key={oIndex}>
                              <label className="audit-option">
                                <input 
                                  type="checkbox" 
                                  checked={!!selections[optId]} 
                                  onChange={() => toggleSelection(optId)}
                                /> 
                                {isOtherOption ? (
                                  <>
                                    Other: 
                                    <input 
                                      type="text" 
                                      value={otherValues[optId] || ''}
                                      onChange={(e) => handleOtherChange(optId, e.target.value)}
                                      onClick={(e) => e.stopPropagation()}
                                      style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #64748B', color: 'white', marginLeft: '8px', outline: 'none', width: '150px' }}
                                    />
                                  </>
                                ) : opt.label}
                              </label>
                              {opt.subOptions && (
                                <div className="audit-sub-options">
                                  {opt.subOptions.map((sub, subIndex) => {
                                    const subId = `${optId}-SUB${subIndex}`;
                                    const isSelected = !!selections[subId];
                                    const isSubOther = sub === "Other" || sub.includes("Other");

                                    return (
                                      <span 
                                        key={subIndex} 
                                        className={`audit-sub-option ${isSelected ? 'active' : ''}`}
                                        onClick={() => !isSubOther && toggleSelection(subId)}
                                        style={{ 
                                          backgroundColor: isSelected ? 'var(--accent-blue)' : 'rgba(255,255,255,0.05)',
                                          color: isSelected ? 'white' : 'var(--text-muted)',
                                          borderColor: isSelected ? 'var(--accent-blue)' : 'var(--border-color)',
                                          cursor: 'pointer'
                                        }}
                                      >
                                        {isSubOther ? (
                                          <>Other: <input type="text" value={otherValues[subId] || ''} onChange={(e) => handleOtherChange(subId, e.target.value)} onClick={(e) => e.stopPropagation()} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid currentColor', color: 'inherit', width: '80px', outline: 'none', fontSize: 'inherit' }} /></>
                                        ) : sub}
                                      </span>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                          })}
                        </div>
                      </div>
                    );
                    })}

                    {/* Q&A Section with Comment Field */}
                    <div className="recording-section">
                      <h5 className="impact-card-title" style={{ marginBottom: '10px' }}>{section.qa}</h5>
                      <textarea 
                        className="audit-textarea" 
                        placeholder="Type your comments here..."
                        value={comments[sectionKey] || ''}
                        onChange={(e) => handleCommentChange(sectionKey, e.target.value)}
                      ></textarea>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <button 
                          className="rec-btn" 
                          onClick={() => toggleRecording(sectionKey)}
                          style={{ backgroundColor: recordingActive === sectionKey ? '#ef4444' : 'var(--accent-red)' }}
                        >
                          {recordingActive === sectionKey ? "STOP RECORDING" : "RECORD ANSWER"}
                        </button>
                        {recordings[sectionKey] && <span style={{ color: 'var(--accent-green)', fontSize: '12px' }}>✓ Audio Saved</span>}
                        {recordingActive === sectionKey && <span className="rec-timer" style={{ animation: 'pulse 1s infinite' }}>● Recording...</span>}
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            ) : (
              // Standard View (Layers 02-05)
              <>
                <h3 className="case-study-headline" style={{ fontSize: '1.5rem' }}>{layers[activeLayer].probe}</h3>
                
                <div style={{ marginTop: '30px' }}>
                  <p className="lab-label" style={{ fontSize: '10px' }}>Infrastructure Checkpoint</p>
                  <div className="tech-stack-grid">
                    {layers[activeLayer].techStack.map(tech => (
                      <button key={tech} className="tech-btn">{tech}</button>
                    ))}
                    <button className="tech-btn active">+ Other</button>
                  </div>
                </div>

                <div className="recording-section">
                  {(() => {
                    const sectionKey = `L${layers[activeLayer].id}-Main`;
                    return (
                    <>
                  <h5 className="impact-card-title" style={{ marginBottom: '10px' }}>Situational Briefing</h5>
                  <p className="impact-text" style={{ fontSize: '13px', marginBottom: '20px' }}>{layers[activeLayer].diagnostic}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button 
                      className="rec-btn" 
                      onClick={() => toggleRecording(sectionKey)}
                      style={{ backgroundColor: recordingActive === sectionKey ? '#ef4444' : 'var(--accent-red)' }}
                    >
                      {recordingActive === sectionKey ? "STOP RECORDING" : "RECORD ANSWER"}
                    </button>
                    {recordings[sectionKey] && <span style={{ color: 'var(--accent-green)', fontSize: '12px' }}>✓ Audio Saved</span>}
                    {recordingActive === sectionKey && <span className="rec-timer" style={{ animation: 'pulse 1s infinite' }}>● Recording...</span>}
                  </div>
                    </>
                    );
                  })()}
                </div>
              </>
            )}

            {/* NAVIGATION BUTTONS */}
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end' }}>
               <button 
                onClick={() => activeLayer === 4 ? handleGenerateReport() : setActiveLayer(prev => Math.min(prev + 1, 4))}
                className="inquire-btn"
                style={{ padding: '12px 30px' }}
               >
                 {activeLayer === 4 ? "GENERATE AUDIT REPORT" : "NEXT LAYER"}
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SignalAudit;