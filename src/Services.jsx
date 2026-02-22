import React, { useState } from 'react';

const Services = () => {
  const [isEnterprise, setIsEnterprise] = useState(false);

  const servicesList = [
    {
      title: "The Signal Audit",
      tagline: "Diagnostic Discovery",
      description: isEnterprise 
        ? "A comprehensive architectural review of global hiring data, system latency, and cross-platform signal loss."
        : "A deep-dive assessment of your current recruiting stack to identify where top-tier talent is dropping out.",
      deliverables: isEnterprise 
        ? ["Global Infrastructure Mapping", "Security & Compliance Audit", "Multi-Region Signal Report"]
        : ["Funnel Friction Analysis", "Tool-Stack ROI Review", "Immediate Optimization Roadmap"],
      duration: isEnterprise ? "4-6 Weeks" : "2 Weeks"
    },
    {
      title: "Agentic Integration",
      tagline: "The Architectural Build",
      description: isEnterprise 
        ? "Orchestrating a multi-node AI ecosystem integrated with legacy ERP/ATS systems for unified intelligence."
        : "Deploying and tuning a curated selection of sub-advisory tools into a turnkey hiring engine.",
      deliverables: isEnterprise 
        ? ["Custom Agentic Workflows", "Vendor Sync & Management", "Unified Data Dashboarding"]
        : ["Partner Tool Implementation", "Team Adoption Training", "Signal Calibration"],
      duration: isEnterprise ? "3-6 Months" : "4-8 Weeks"
    },
    {
      title: "Fractional Architect",
      tagline: "Harmonic Optimization",
      description: isEnterprise 
        ? "Ongoing strategic oversight of the hiring ecosystem, including quarterly tuning and emerging tech vetting."
        : "Retained advisory to ensure your hiring signals remain sharp as your company scales and market shifts.",
      deliverables: isEnterprise 
        ? ["Quarterly Stack Tuning", "Emerging Tech R&D", "Continuous Vendor Oversight"]
        : ["Monthly Performance Reviews", "Workflow Refinement", "On-Call Strategy Support"],
      duration: "Retainer-Based"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="services-header">
          <h2 className="services-title">Service Offerings</h2>
          <p className="services-subtitle">
            Precision-engineered engagements designed to scale with your organization.
          </p>
        </div>

        {/* The Scale Toggle */}
        <div className="scale-toggle-container">
          <div className="toggle-wrapper">
            <button 
              onClick={() => setIsEnterprise(false)}
              className={`toggle-btn ${!isEnterprise ? 'active' : ''}`}
            >
              Standard Scale
            </button>
            <button 
              onClick={() => setIsEnterprise(true)}
              className={`toggle-btn ${isEnterprise ? 'active' : ''}`}
            >
              Enterprise Scale
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <p className="service-tagline">{service.tagline}</p>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-deliverables">
                <p className="deliverables-label">DELIVERABLES INCLUDE:</p>
                <ul className="deliverables-list">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="deliverable-item">
                      <span className="check-icon">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-footer">
                <span className="service-duration">{service.duration}</span>
                <button className="inquire-btn">Inquire</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Services;