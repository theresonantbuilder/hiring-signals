import React from 'react';
import { Link } from 'react-router-dom';
import paulPhoto from './assets/PaulDuplantis profile pic  Sept 2023.jpg';

const Advisors = () => {
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
            }}>
              <a 
                href="https://www.linkedin.com/in/paulduplantis/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: '#3B82F6', 
                  padding: '8px 16px', 
                  borderRadius: '6px',
                  fontSize: '11px', 
                  fontWeight: 'bold', 
                  letterSpacing: '1px',
                  color: 'white',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                LINKEDIN
              </a>
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
              Hiring Systems Advisor
            </p>
            
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#CBD5E1', marginBottom: '1.5rem' }}>
              <strong>The Journey:</strong> Over the past two decades I’ve worked across business growth, marketing, and technical talent acquisition — close enough to hiring to see what actually breaks it. The pattern is consistent: the exchange between candidates and opportunity gets stalled not by a lack of applicants, but by systemic noise — unclear routing, slow follow-up, late qualification, and decision insight trapped in threads and memory.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#CBD5E1', marginBottom: '1.5rem' }}>
              <strong>The Shift:</strong> AI has changed the landscape. For the first time, hiring teams can access practical inference at scale — not just keyword search, but tools that can interpret intent, context, and fit signals across messy real-world data. Used carefully, that’s a genuine advantage: faster qualification, clearer handoffs, and more consistent decisions. Used carelessly, it’s just more automation layered onto broken workflows — or “AI for the sake of AI,” which creates new failure modes and erodes trust.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#CBD5E1', marginBottom: '1.5rem' }}>
              <strong>How I Help:</strong> I help growing teams bring structure to the funnel first, then integrate modern tools where they create measurable lift. My approach is vendor-neutral and pragmatic: identify where signal is being lost, clarify ownership and routing, and apply the right level of automation only where it improves speed and clarity without dehumanizing the process.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#CBD5E1' }}>
              <strong>Why Me:</strong> I bring a blended perspective — time in the field as a recruiter, experience advising businesses, and a deep curiosity about Generative AI. I’m also building my own discovery and matching framework to pressure-test what works (and what doesn’t) so I can help teams integrate these capabilities responsibly. The goal isn’t to “AI-ify hiring.” It’s to restore signal and make hiring more human by removing unnecessary friction.
            </p>
          </div>
        </div>

        {/* SECTION 2: Hiring Signal Check */}
        <div className="lab-section" style={{ 
          textAlign: 'left', 
          padding: '40px', 
          borderRadius: '20px', 
          border: '1px solid #E2E8F0', 
          marginBottom: '60px', 
          backgroundColor: '#F8FAFC' 
        }}>
          <p style={{ color: '#3B82F6', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '2px', marginBottom: '10px' }}>
            System Diagnostic
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#1E293B', marginBottom: '20px' }}>Hiring Signal Check</h3>
          <div style={{ textAlign: 'left', maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', color: '#475569', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '1rem' }}>
              If you’re unsure where to start, I use a simple diagnostic called the <Link to="/audit" style={{ color: '#3B82F6', fontWeight: '600', textDecoration: 'none' }}>Hiring Signal Check</Link>. It’s designed to quickly reveal where signal is being lost across your funnel — and where practical tools or workflow changes would create the most impact.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              We’ll look at a few high-leverage areas, such as:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
              <li>Response speed & routing: Are applicants getting to the right person fast enough?</li>
              <li>Early qualification: Are eligibility, location, and must-have requirements verified early?</li>
              <li>Interview signal capture: Are interview insights structured and retrievable, or stuck in memory and email?</li>
              <li>Offer & onboarding momentum: Where do candidates stall or ghost after “yes”?</li>
            </ul>
            <p>
              The output is a clear set of priorities: what to fix first, what can wait, and which categories of tools (if any) are worth evaluating — based on your team size, hiring volume, and constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisors;