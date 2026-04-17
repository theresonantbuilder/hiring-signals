import React, { useState } from 'react';

const t = {
  navyDeep:    "#080F1E",
  indigo:      "#4F46E5",
  indigoLight: "#818CF8",
  indigoPale:  "#EEF2FF",
  indigoBorder:"#C7D2FE",
  white:       "#FFFFFF",
  bgLight:     "#F8FAFC",
  text900:     "#0F172A",
  text700:     "#334155",
  text500:     "#64748B",
  text400:     "#94A3B8",
  border:      "rgba(15,23,42,0.08)",
  borderFocus: "#4F46E5",
  red:         "#EF4444",
};

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  background: t.bgLight,
  border: `1px solid ${t.border}`,
  borderRadius: "8px",
  color: t.text900,
  fontSize: "0.95rem",
  fontFamily: "inherit",
  boxSizing: "border-box",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle = {
  display: "block",
  fontSize: "0.82rem",
  fontWeight: 700,
  color: t.text700,
  marginBottom: "6px",
  letterSpacing: "0.03em",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/ajax/paul@hiringsignals.ai", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `HiringSignals.ai Inquiry — ${formData.name}`,
          _captcha: "false",
          ...formData,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was an issue sending your message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('There was an issue sending your message. Please try again.');
    }
  };

  const focusStyle = (field) => focused === field
    ? { ...inputStyle, borderColor: t.borderFocus, background: t.white }
    : inputStyle;

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: t.bgLight, minHeight: "100vh" }}>

      {/* ── HEADER ───────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(150deg, ${t.navyDeep} 0%, #0F1E3C 55%, #131040 100%)`,
        padding: "5rem 2rem 6rem",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `radial-gradient(rgba(129,140,248,0.07) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px", height: "300px",
          background: "radial-gradient(ellipse, rgba(79,70,229,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative" }}>
          <span style={{
            display: "inline-block", fontSize: "0.68rem", fontWeight: 800,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: t.indigoLight, marginBottom: "0.85rem",
          }}>
            Join the Experiment
          </span>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800,
            color: t.white, margin: "0 0 1rem",
            letterSpacing: "-0.03em", lineHeight: 1.1,
          }}>
            Start a Conversation
          </h1>
          <p style={{
            fontSize: "1.05rem", color: "#94A3B8",
            maxWidth: "520px", margin: "0 auto", lineHeight: 1.75,
          }}>
            We're asking questions, not selling answers. Whether you have
            thoughts on the protocol, want to follow the experiment, or see
            an opportunity to collaborate — we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>

          {submitted ? (
            <div style={{
              background: t.indigoPale, border: `1px solid ${t.indigoBorder}`,
              borderRadius: "16px", padding: "3rem 2rem", textAlign: "center",
            }}>
              <p style={{ fontSize: "2rem", margin: "0 0 1rem" }}>✦</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: t.text900, margin: "0 0 0.75rem" }}>
                Message received.
              </h2>
              <p style={{ fontSize: "1rem", color: t.text500, lineHeight: 1.75, margin: 0 }}>
                Thank you for reaching out. J. Paul will be in touch shortly.
                In the meantime, you're welcome to explore the protocol further
                at{" "}
                <a href="https://www.i-dig.io" target="_blank" rel="noopener noreferrer"
                  style={{ color: t.indigo, textDecoration: "none", fontWeight: 600 }}>
                  i-DIG.io ↗
                </a>
              </p>
            </div>
          ) : (
            <div style={{
              background: t.white,
              border: `1px solid ${t.border}`,
              borderRadius: "16px", padding: "2.5rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            }}>
              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>Name</label>
                  <input
                    type="text" name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={focusStyle("name")}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>
                    Email <span style={{ color: t.red }}>*</span>
                  </label>
                  <input
                    type="email" name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                    style={focusStyle("email")}
                    placeholder="you@example.com"
                  />
                </div>

                {/* Role selector */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>I am a…</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    onFocus={() => setFocused("role")}
                    onBlur={() => setFocused(null)}
                    style={{ ...focusStyle("role"), color: formData.role ? t.text900 : t.text400 }}
                  >
                    <option value="" disabled>Select your perspective</option>
                    <option value="Candidate / Professional">Candidate / Professional</option>
                    <option value="Hiring Manager / Employer">Hiring Manager / Employer</option>
                    <option value="Protocol Builder / Developer">Protocol Builder / Developer</option>
                    <option value="Researcher / Academic">Researcher / Academic</option>
                    <option value="Investor / Collaborator">Investor / Collaborator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Interest */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>What brought you here?</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    onFocus={() => setFocused("interest")}
                    onBlur={() => setFocused(null)}
                    style={{ ...focusStyle("interest"), color: formData.interest ? t.text900 : t.text400 }}
                  >
                    <option value="" disabled>Select one</option>
                    <option value="The essay / New Architecture of Talent Alignment">The essay — New Architecture of Talent Alignment</option>
                    <option value="The iDIG Protocol">The iDIG Protocol</option>
                    <option value="Talent alignment research">Talent alignment research</option>
                    <option value="Data sovereignty / Solid Pod">Data sovereignty / Solid Pod</option>
                    <option value="Building something similar">Building something similar</option>
                    <option value="General curiosity">General curiosity</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "28px" }}>
                  <label style={labelStyle}>Tell us more</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...focusStyle("message"),
                      minHeight: "120px",
                      resize: "vertical",
                    }}
                    placeholder="Share your thoughts, questions, or what you're working on…"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%", padding: "14px",
                    background: t.indigo, color: t.white,
                    fontWeight: 700, borderRadius: "8px",
                    border: "none", fontSize: "0.92rem",
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  Send Message
                </button>

                <p style={{
                  textAlign: "center", marginTop: "1rem",
                  fontSize: "0.78rem", color: t.text400,
                  fontStyle: "italic",
                }}>
                  This is version 0.1 of an ongoing experiment. Nothing here is final.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Contact;
