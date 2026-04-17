import React from 'react';
import { Link } from 'react-router-dom';

const t = {
  navyDeep:    "#080F1E",
  navyMid:     "#0A1628",
  indigo:      "#4F46E5",
  indigoLight: "#818CF8",
  indigoPale:  "#EEF2FF",
  indigoBorder:"#C7D2FE",
  sky:         "#0EA5E9",
  violet:      "#7C3AED",
  green:       "#10B981",
  white:       "#FFFFFF",
  bgLight:     "#F8FAFC",
  text900:     "#0F172A",
  text700:     "#334155",
  text500:     "#64748B",
  text400:     "#94A3B8",
  border:      "rgba(15,23,42,0.08)",
};

const SectionTag = ({ children, color = t.indigo }) => (
  <span style={{
    display: "inline-block", fontSize: "0.68rem", fontWeight: 800,
    letterSpacing: "0.2em", textTransform: "uppercase",
    color, marginBottom: "0.85rem",
  }}>
    {children}
  </span>
);

const Advisors = () => (
  <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: t.bgLight, minHeight: "100vh" }}>

    {/* ── HEADER ─────────────────────────────────────────────────────── */}
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
        <SectionTag color={t.indigoLight}>About</SectionTag>
        <h1 style={{
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800,
          color: t.white, margin: "0 0 1rem",
          letterSpacing: "-0.03em", lineHeight: 1.1,
        }}>
          J. Paul Duplantis
        </h1>
        <p style={{
          fontSize: "1rem", fontWeight: 600,
          color: t.indigoLight, letterSpacing: "0.12em",
          textTransform: "uppercase", margin: "0 0 1.5rem",
        }}>
          Protocol Architect · Talent Alignment Researcher
        </p>
        <a
          href="https://www.linkedin.com/in/paulduplantis/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block", padding: "9px 22px",
            border: "1px solid rgba(129,140,248,0.35)",
            borderRadius: "8px", color: "#A5B4FC",
            textDecoration: "none", fontSize: "0.82rem",
            fontWeight: 600, letterSpacing: "0.08em",
            background: "rgba(79,70,229,0.1)",
          }}
        >
          LinkedIn ↗
        </a>
      </div>
    </section>

    {/* ── BIO BODY ───────────────────────────────────────────────────── */}
    <section style={{ background: t.white, padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* Intro */}
        <p style={{
          fontSize: "1.25rem", fontWeight: 300, fontStyle: "italic",
          color: t.text700, lineHeight: 1.75,
          borderLeft: `3px solid ${t.indigo}`, paddingLeft: "1.5rem",
          margin: "0 0 3rem",
        }}>
          "The challenge of modern hiring isn't a Big Data problem. It is an
          access and alignment problem — and proprietary silos are the reason
          signal degrades."
        </p>

        {/* Background */}
        <div style={{ marginBottom: "2.5rem" }}>
          <SectionTag color={t.violet}>Background</SectionTag>
          <h2 style={{
            fontSize: "1.5rem", fontWeight: 700, color: t.text900,
            margin: "0 0 1rem", letterSpacing: "-0.02em",
          }}>
            Two decades at the intersection of people and systems.
          </h2>
          <p style={{ fontSize: "1rem", color: t.text500, lineHeight: 1.85, margin: "0 0 1rem" }}>
            J. Paul Duplantis has spent over two decades working across business
            growth, marketing, and technical talent acquisition — close enough to
            hiring to understand where it systematically breaks down. The pattern
            he kept encountering was consistent: the exchange between human
            potential and opportunity was stalling not from a shortage of talent,
            but from architectural friction — fragmented data, misaligned
            incentives, and platforms designed for engagement rather than resonance.
          </p>
          <p style={{ fontSize: "1rem", color: t.text500, lineHeight: 1.85, margin: 0 }}>
            That observation became the foundation for everything he has built since.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: `1px solid ${t.border}`, margin: "2.5rem 0" }} />

        {/* iDIG Protocol */}
        <div style={{ marginBottom: "2.5rem" }}>
          <SectionTag color={t.indigo}>The iDIG Protocol</SectionTag>
          <h2 style={{
            fontSize: "1.5rem", fontWeight: 700, color: t.text900,
            margin: "0 0 1rem", letterSpacing: "-0.02em",
          }}>
            Building an open grammar for talent alignment.
          </h2>
          <p style={{ fontSize: "1rem", color: t.text500, lineHeight: 1.85, margin: "0 0 1rem" }}>
            The iDIG Protocol is Paul's core research project — an open-source
            framework for talent discovery that treats professional identity as a
            personal, sovereign asset rather than a platform commodity. The
            protocol maps resonance across three dimensions: the{" "}
            <strong style={{ color: t.text700 }}>Social Vector</strong> (networks
            of trust and community), the{" "}
            <strong style={{ color: t.text700 }}>Semantic Vector</strong> (the
            language and depth of capability, enriched by LLMs), and the{" "}
            <strong style={{ color: t.text700 }}>Experiential Vector</strong>{" "}
            (the temporal arc of a professional journey).
          </p>
          <p style={{ fontSize: "1rem", color: t.text500, lineHeight: 1.85, margin: "0 0 1rem" }}>
            A central hypothesis of the protocol is the preservation of
            superposition — the idea that a candidate should be able to signal
            availability and have their professional vectors become discoverable
            without their identity being exposed until they choose to disclose it.
            This "sovereign disclosure" model is designed to remove the career
            risk that keeps talented individuals from ever entering the field of
            discovery in the first place.
          </p>
          <p style={{ fontSize: "1rem", color: t.text500, lineHeight: 1.85, margin: 0 }}>
            The protocol is designed to align with W3C open standards — specifically
            the Solid Pod framework — ensuring that data is never shared or
            modified without explicit consent. The matchmaker operates in the
            space between parties; the data remains under the control of the
            individual.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: `1px solid ${t.border}`, margin: "2.5rem 0" }} />

        {/* HiringSignals */}
        <div style={{ marginBottom: "2.5rem" }}>
          <SectionTag color={t.sky}>HiringSignals.ai</SectionTag>
          <h2 style={{
            fontSize: "1.5rem", fontWeight: 700, color: t.text900,
            margin: "0 0 1rem", letterSpacing: "-0.02em",
          }}>
            The first experiment in the laboratory.
          </h2>
          <p style={{ fontSize: "1rem", color: t.text500, lineHeight: 1.85, margin: "0 0 1rem" }}>
            HiringSignals.ai is Paul's first published proof-of-concept for the
            iDIG Protocol — a living laboratory designed to explore how
            open-source protocols can more effectively align human potential with
            opportunity. It is not intended to be the final word on how we hire.
            It is an experimental probe: a working attempt to validate the
            underlying theory and surface what actually needs to be built.
          </p>
          <p style={{ fontSize: "1rem", color: t.text500, lineHeight: 1.85, margin: 0 }}>
            The thesis is straightforward: the collective professional potential
            of an entire nation fits on a single consumer hard drive. The problem
            was never storage or scale. It was always alignment — and alignment
            requires a new architecture, not a better search box.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: `1px solid ${t.border}`, margin: "2.5rem 0" }} />

        {/* The Resonant Builders */}
        <div style={{ marginBottom: "2.5rem" }}>
          <SectionTag color={t.green}>The Resonant Builders</SectionTag>
          <h2 style={{
            fontSize: "1.5rem", fontWeight: 700, color: t.text900,
            margin: "0 0 1rem", letterSpacing: "-0.02em",
          }}>
            Publishing the theory behind the work.
          </h2>
          <p style={{ fontSize: "1rem", color: t.text500, lineHeight: 1.85, margin: "0 0 1rem" }}>
            Paul documents the intellectual foundation of his research through
            The Resonant Builders — a series of essays published on{" "}
            <a
              href="https://www.i-dig.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: t.indigo, textDecoration: "none", fontWeight: 600 }}
            >
              i-DIG.io
            </a>
            . The series explores what it means to build protocols for human
            resonance rather than platform engagement — examining everything from
            the physics of talent alignment to the practical mechanics of
            open-standard identity systems.
          </p>
          <p style={{ fontSize: "1rem", color: t.text500, lineHeight: 1.85, margin: 0 }}>
            The inaugural essay,{" "}
            <a
              href="https://www.i-dig.io/theresonantbuilders/the-new-architecture"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: t.indigo, textDecoration: "none", fontWeight: 600 }}
            >
              The New Architecture of Talent Alignment ↗
            </a>
            , lays out the core thesis that underlies both the iDIG Protocol and
            this site.
          </p>
        </div>

        {/* CTA */}
        <div style={{
          background: t.indigoPale, border: `1px solid ${t.indigoBorder}`,
          borderRadius: "16px", padding: "2rem 2.5rem",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem",
          marginTop: "3rem",
        }}>
          <div>
            <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "1rem", color: t.text900 }}>
              Want to be part of the experiment?
            </p>
            <p style={{ margin: 0, fontSize: "0.9rem", color: t.text500, lineHeight: 1.65 }}>
              Whether you're a candidate, a hiring manager, or a fellow builder
              — reach out.
            </p>
          </div>
          <Link
            to="/contact"
            style={{
              display: "inline-block", padding: "12px 28px",
              background: t.indigo, color: t.white,
              fontWeight: 700, borderRadius: "8px",
              textDecoration: "none", fontSize: "0.88rem",
              letterSpacing: "0.04em", whiteSpace: "nowrap",
            }}
          >
            Start a Conversation
          </Link>
        </div>

      </div>
    </section>

  </div>
);

export default Advisors;
