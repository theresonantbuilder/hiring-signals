import React, { useState, useRef } from 'react';

const layers = [
    {
      id: "00",
      title: "Infrastructure Check",
      type: "detailed",
      sections: [
        {
          title: "How do you build your pipeline?",
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
        }
      ]
    },
    {
      id: "01",
      title: "Universal Signal Check",
      probe: "Q & A: Where does your hiring process most often break down — and what signal should be captured earlier (from resumes, notes, messages) so your team can qualify and decide faster?"
    }
  ];

const separatorStyle = {
  width: '80px',
  height: '4px',
  background: '#3B82F6',
  borderRadius: '4px',
  boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)',
  margin: '40px auto'
};

const SignalAudit = () => {
  const [selections, setSelections] = useState({});
  const [otherValues, setOtherValues] = useState({});
  const [comments, setComments] = useState({});
  const [recordings, setRecordings] = useState({});
  const [recordingActive, setRecordingActive] = useState(null); // Stores key of currently recording section
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
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

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleFinalSubmit = u
      alert("Email address is required to submit.");
      return;
    }

    // Prepare data for email (flat structure works best for form handlers)
    const emailData = {
      _subject: `Hiring Signal Check - ${userInfo.name || 'Anonymous'}`,
      _template: "table",
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
      timestamp: new Date().toLocaleString(),
      selections: JSON.stringify(selections, null, 2),
      comments: JSON.stringify(comments, null, 2),
      otherValues: JSON.stringify(otherValues, null, 2)
    };

    const reportData = {
      timestamp: new Date().toLocaleString(),
      userInfo,
      selections,
      otherValues,
      comments,
      // Note: Audio blobs are local to the browser and cannot be saved to JSON directly.
      // In a production app, these would be uploaded to a server first.
      recordings_status: "Audio files are local to browser session."
    };
," + encodeURIComponent(JSON.stringify(reportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "hiring_signals_audit.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    // Send email
    try {
      const response = await fetch("https://formsubmit.co/ajax/paul@hiringsignals.ai", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
      });
      
      if (response.ok) {
        alert("Audit submitted successfully! A copy has also been downloaded to your computer.");
      } else {
        alert("Audit downloaded to your computer. (Email submission failed, please send the file manually).");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Audit downloaded to your computer. (Email submission failed, please send the file manually).");
    }

    setShowSubmitModal(false);
  };

  const checkCompletion
      if (layer.type === 'detailed') {
        for (let sIndex = 0; sIndex < layer.sections.length; sIndex++) {
          const section = layer.sections[sIndex];
          // Check questions
          for (let qIndex = 0; qIndex < section.questions.length; qIndex++) {
            const question = section.questions[qIndex];
            let questionAnswered = false;
            for (let oIndex = 0; oIndex < question.options.length; oIndex++) {
               const optId = `L${layer.id}-S${sIndex}-Q${qIndex}-O${oIndex}`;
               if (selections[optId]) {
                 questionAnswered = true;
                 break;
               }
            }
            if (!questionAnswered) return false;
          }
          // Check Q&A (comment or recording)
          const sectionKey = `L${layer.id}-S${sIndex}`;
          if (!comments[sectionKey] && !recordings[sectionKey]) return false;
        }
      } else {
        // Standard layer
        // We only track recordings for standard layers in the current code
        const sectionKey = `L${layer.id}-Main`;
        if (!comments[sectionKey] && !recordings[sectionKey]) return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    if (checkCompletion()) {
      setShowSubmitModal(true);
    } else {
      if (window.confirm("Are you sure you want to submit before all fields are completed?")) {
        setShowSubmitModal(true);
      }
    }
  };

  return (
    <section className="case-studies-section">
      <div className="container" style={{ maxWidth: '100%', paddingRight: '300px' }}>
        
        {/* INTRO: SETTING THE STAGE */}
        <div className="case-studies-header" style={{ textAlign: 'left', marginBottom: '80px' }}>
          <span className="case-study-tag">System Diagnostic</span>
          <h2 className="case-studies-title">Hiring Signal Check</h2>
          <div className="case-studies-subtitle" style={{ maxWidth: '100%', margin: '20px 0', fontSize: '1.1rem', lineHeight: '1.6', color: '#94A3B8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Most hiring stacks capture activity — but they don’t surface what’s slowing you down.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              The Hiring Signal Check is a fast diagnostic to identify where candidates go cold across your funnel (sourcing, response, qualification, interviewing, and offer/onboarding) — and what to change first to reduce drop-off and speed decisions.
            </p>
            
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2rem' }}>Two ways to complete it:</h4>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#3B82F6' }}>Talk it through (recommended):</strong> book a short Zoom and I’ll guide the questions while I capture the signal in real time.</li>
              <li><strong style={{ color: '#3B82F6' }}>Fill it out here:</strong> answer each section at your own pace (type or record your voice).</li>
            </ul>

            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>What you’ll get:</h4>
            <ul style={{ paddingLeft: '20px', color: '#CBD5E1' }}>
              <li>A clear friction map of your top 1–2 leaks</li>
              <li>A priority action plan (what to fix first, and why)</li>
              <li>A provider shortlist tagged AI-Native vs Inference-Ready when relevant</li>
              <li>A recommended next step: quick config changes, a pilot plan, or hands-on implementation support</li>
            </ul>
          </div>
        </div>

        {/* Double Separator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '80px' }}>
          <div style={{ ...separatorStyle, margin: 0 }}></div>
          <div style={{ ...separatorStyle, margin: 0 }}></div>
        </div>

        {/* AUDIT INTERFACE */}
        <div>
          {layers.map((layer, index) => (
            <React.Fragment key={layer.id}>
            <div className="case-study-card" style={{ marginBottom: index < layers.length - 1 ? '0px' : '60px' }}>

            {layer.type === 'detailed' ? (
              // Detailed Survey View (Layer 01)
              <div className="audit-detailed-view">
                {layer.sections.map((section, sIndex) => {
                  const sectionKey = `L${layer.id}-S${sIndex}`;
                  return (
                  <div key={sIndex} className="audit-section">
                    <h3 className="audit-section-title">{section.title}</h3>
                    
                    {section.questions.map((q, qIndex) => {
                      return (
                      <React.Fragment key={qIndex}>
                      <div className="audit-question-block">
                        {q.title && <p className="audit-question-title">{q.title}</p>}
                        <p className="audit-question-text">{q.text}</p>
                        <div className="audit-options">
                          {q.options.map((opt, oIndex) => {
                            const optId = `L${layer.id}-S${sIndex}-Q${qIndex}-O${oIndex}`;
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
                      {qIndex < section.questions.length - 1 && (
                        <div style={separatorStyle}></div>
                      )}
                      </React.Fragment>
                    );
                    })}

                    <div style={separatorStyle}></div>

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
                <h5 className="impact-card-title" style={{ marginBottom: '10px' }}>{layer.probe}</h5>
                

                <div className="recording-section">
                  {(() => {
                    const sectionKey = `L${layer.id}-Main`;
                    return (
                    <>
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

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '40px auto' }}>
                    <div style={{ ...separatorStyle, margin: 0 }}></div>
                    <div style={{ ...separatorStyle, margin: 0 }}></div>
                  </div>

                  <h5 className="impact-card-title" style={{ marginBottom: '10px' }}>Reach out to Paul Duplantis if you would like a deep conversation on your hiring tech stack to help identify potential solutions for your needs.</h5>
                    </>
                    );
                  })()}
                </div>
              </>
            )}
            </div>
            {index < layers.length - 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '40px auto' }}>
                <div style={{ ...separatorStyle, margin: 0 }}></div>
                <div style={{ ...separatorStyle, margin: 0 }}></div>
              </div>
            )}
            </React.Fragment>
          ))}

          {/* Floating Submit Button */}
          <button
            onClick={handleSubmit}
            style={{
              position: 'fixed',
              top: '50%',
              right: '40px',
              transform: 'translateY(-50%)',
              backgroundColor: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
              cursor: 'pointer',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Submit Signal Check
          </button>

        </div>

        {/* Submit Modal */}
        {showSubmitModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3 className="modal-title">Final Step</h3>
              <p className="modal-description">
                Please provide your details to finalize the audit. We'll send a copy of the report to your email.
              </p>
              
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                className="modal-input"
                value={userInfo.name}
                onChange={handleUserInfoChange}
              />
              
              <input 
                type="email" 
                name="email"
                placeholder="Email Address (Required)" 
                className="modal-input"
                value={userInfo.email}
                onChange={handleUserInfoChange}
                required
              />
              
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                className="modal-input"
                value={userInfo.phone}
                onChange={handleUserInfoChange}
              />
              
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setShowSubmitModal(false)}>
                  Cancel
                </button>
                <button className="btn-primary" onClick={handleFinalSubmit}>
                  Submit Audit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignalAudit;