import React from "react";
import { Link } from "react-router-dom";

// ─── Shared style tokens ───────────────────────────────────────────────
const t = {
  navyDeep:    "#080F1E",
  navyMid:     "#0A1628",
  navyLight:   "#0D1B35",
  indigo:      "#4F46E5",
  indigoLight: "#818CF8",
  indigoPale:  "#EEF2FF",
  indigoBorder:"#C7D2FE",
  blue:        "#2563EB",
  sky:         "#0EA5E9",
  violet:      "#7C3AED",
  green:       "#10B981",
  amber:       "#D97706",
  red:         "#EF4444",
  white:       "#FFFFFF",
  bgLight:     "#F8FAFC",
  bgPage:      "#F1F5F9",
  text900:     "#0F172A",
  text700:     "#334155",
  text500:     "#64748B",
  text400:     "#94A3B8",
  border:      "rgba(15,23,42,0.08)",
};

const tag = (label, color = t.indigo) => (
  <span style={{
    display: "inline-block",
    fontSize: "0.68rem", fontWeight: 800,
    letterSpacing: "0.2em", textTransform: "uppercase",
    color, marginBottom: "0.85rem",
  }}>
    {label}
  </span>
);

const ExperimentBadge = ({ children, style = {} }) => (
  <div style={{
    display: "flex", alignItems: "flex-start", gap: "10px",
    background: t.indigoPale, border: `1px solid ${t.indigoBorder}`,
    borderRadius: "10px", padding: "14px 18px",
    ...style,
  }}>
    <span style={{ fontSize: "0.9rem", lineHeight: 1, marginTop: "1px" }}>🔬</span>
    <p style={{ margin: 0, fontSize: "0.82rem", color: "#3730A3", lineHeight: 1.65 }}>
      {children}
    </p>
  </div>
);

// ─── Component ────────────────────────────────────────────────────────
const Home = () => (
  <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

    {/* ══ HERO ══════════════════════════════════════════════════════════ */}
    <section style={{
      background: `linear-gradient(150deg, ${t.navyDeep} 0%, #0F1E3C 55%, #131040 100%)`,
      padding: "7rem 2rem 8rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle dot-grid texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(rgba(129,140,248,0.07) 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
      }} />
      {/* Soft glow */}
      <div style={{
        position: "absolute", top: "40%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(79,70,229,0.16) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Experiment badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        border: `1px solid rgba(129,140,248,0.35)`,
        borderRadius: "999px", padding: "6px 20px",
        marginBottom: "2.5rem",
        background: "rgba(79,70,229,0.1)",
        position: "relative",
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: t.indigoLight, display: "inline-block",
          boxShadow: `0 0 8px ${t.indigoLight}`,
        }} />
        <span style={{
          fontSize: "0.7rem", fontWeight: 700,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#A5B4FC",
        }}>
          An Open Experiment in Talent Alignment
        </span>
      </div>

      <h1 style={{
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 800, margin: "0 0 1.5rem",
        letterSpacing: "-0.03em", lineHeight: 1.15,
        color: t.white,
        position: "relative",
      }}>
        The New Architecture<br />of Talent Alignment
      </h1>

      <p style={{
        fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
        color: "#94A3B8", maxWidth: "600px",
        margin: "0 auto 2.5rem", lineHeight: 1.75,
        position: "relative",
      }}>
        HiringSignals.ai is a living laboratory exploring how open-source
        protocols can more effectively align human potential with opportunity —
        by treating talent as a signal to be discovered, not a resource to be
        siloed.
      </p>

      <div style={{
        display: "flex", gap: "1rem", justifyContent: "center",
        flexWrap: "wrap", position: "relative",
      }}>
        <Link to="/methodology" style={{
          display: "inline-block", padding: "14px 32px",
          background: t.indigo, color: "white",
          fontWeight: 700, borderRadius: "8px",
          textDecoration: "none", fontSize: "0.88rem",
          letterSpacing: "0.04em",
        }}>
          Explore the Protocol
        </Link>
        <Link to="/contact" style={{
          display: "inline-block", padding: "14px 32px",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#CBD5E1", fontWeight: 600, borderRadius: "8px",
          textDecoration: "none", fontSize: "0.88rem",
          letterSpacing: "0.04em",
        }}>
          Start a Conversation
        </Link>
      </div>

      <p style={{
        marginTop: "3rem", fontSize: "0.82rem",
        color: "#334155", fontStyle: "italic",
        position: "relative",
      }}>
        Led by Paul Duplantis — version 0.1 of an ongoing experiment.
      </p>
    </section>

    {/* ══ EXPERIMENT DISCLAIMER BAR ═════════════════════════════════════ */}
    <div style={{
      background: "#FFF7ED",
      borderBottom: "1px solid #FED7AA",
      padding: "13px 2rem",
      textAlign: "center",
    }}>
      <p style={{ margin: 0, fontSize: "0.83rem", color: "#92400E", lineHeight: 1.6 }}>
        <strong>This site is an active experiment.</strong> The concepts and
        protocols described here are working hypotheses under research — not
        shipped products. We are asking questions, not selling answers.
      </p>
    </div>

    {/* ══ THE ALIGNMENT PROBLEM ═════════════════════════════════════════ */}
    <section style={{ background: t.white, padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          {tag("The Problem Space", t.violet)}
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800,
            color: t.text900, margin: "0 0 1.25rem",
            letterSpacing: "-0.03em", lineHeight: 1.15,
          }}>
            Walled gardens degrade the signal.
          </h2>
          <p style={{
            fontSize: "1.05rem", color: t.text500,
            maxWidth: "580px", margin: "0 auto", lineHeight: 1.75,
          }}>
            When human potential is fragmented across proprietary silos,
            discovery becomes noise. The architecture of today's hiring market
            was designed for platform engagement — not resonance.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {[
            {
              label: "Today",
              symbol: "⊗",
              accent: t.red,
              bg: "#FEF2F2",
              border: "#FECACA",
              title: "Fragmented & Siloed",
              body: "Candidate data lives in a dozen proprietary systems. Talent signals are locked behind walls. The most capable individuals never enter the field of discovery because the cost of being seen is too high.",
            },
            {
              label: "The Constraint",
              symbol: "≈",
              accent: t.amber,
              bg: "#FFFBEB",
              border: "#FDE68A",
              title: "Platform Incentive Mismatch",
              body: "Platforms are incentivized to maximize engagement within their walls — not to facilitate genuine alignment. The candidate becomes a commodity, not an observer with agency.",
            },
            {
              label: "The Hypothesis",
              symbol: "◎",
              accent: t.indigo,
              bg: t.indigoPale,
              border: t.indigoBorder,
              title: "Open Resonance Protocol",
              body: "If talent data is treated as a personal asset governed by open standards — discoverable by resonance, not by platform participation — alignment becomes possible for the first time.",
            },
          ].map((card, i) => (
            <div key={i} style={{
              background: card.bg,
              border: `1px solid ${card.border}`,
              borderRadius: "16px", padding: "2rem",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "10px",
                marginBottom: "1rem",
              }}>
                <span style={{ fontSize: "1.1rem", color: card.accent }}>{card.symbol}</span>
                <span style={{
                  fontSize: "0.68rem", fontWeight: 800,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: card.accent,
                }}>{card.label}</span>
              </div>
              <h3 style={{
                fontSize: "1.1rem", fontWeight: 700,
                color: t.text900, margin: "0 0 0.75rem",
              }}>{card.title}</h3>
              <p style={{
                fontSize: "0.92rem", color: t.text700,
                lineHeight: 1.7, margin: 0,
              }}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ THE 2TB REALITY ═══════════════════════════════════════════════ */}
    <section style={{
      background: `linear-gradient(150deg, ${t.navyDeep} 0%, #0F1E3C 55%, #131040 100%)`,
      padding: "6rem 2rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(rgba(129,140,248,0.07) 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px", height: "400px",
        background: "radial-gradient(ellipse, rgba(79,70,229,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{
          fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "#475569",
          margin: "0 0 0.75rem",
        }}>
          The 2-Terabyte Reality
        </p>
        <h2 style={{
          fontSize: "clamp(5rem, 14vw, 10rem)",
          fontWeight: 900, margin: "0 0 1.75rem",
          letterSpacing: "-0.04em", lineHeight: 1,
          background: "linear-gradient(135deg, #FFFFFF 35%, #818CF8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          2 TB.
        </h2>
        <p style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
          color: "#CBD5E1", maxWidth: "640px",
          margin: "0 auto 1.25rem", lineHeight: 1.65,
        }}>
          The entire professional potential of the United States — every resume,
          every career arc — fits on a <em>single consumer hard drive.</em>
        </p>
        <p style={{
          fontSize: "1.05rem", color: "#94A3B8",
          maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.75,
        }}>
          This was never a <em>Big Data</em> problem. It is an{" "}
          <strong style={{ color: "#E2E8F0", fontWeight: 600 }}>
            access and alignment
          </strong>{" "}
          problem — and proprietary silos are the reason signal degrades.
        </p>
        <div style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(129,140,248,0.25)",
          borderRadius: "12px", padding: "18px 28px",
          maxWidth: "560px",
        }}>
          <p style={{ margin: 0, fontSize: "0.9rem", color: t.indigoLight, lineHeight: 1.7, fontStyle: "italic" }}>
            "The collective professional potential of an entire nation can fit
            on a single, consumer-grade external drive. The challenge of modern
            hiring isn't a Big Data problem — it is an access and alignment problem."
          </p>
          <p style={{ margin: "10px 0 0", fontSize: "0.78rem", color: "#475569" }}>
            — Paul Duplantis,{" "}
            <a
              href="https://www.i-dig.io/theresonantbuilders/the-new-architecture"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: t.indigoLight, textDecoration: "none", fontStyle: "italic" }}
            >
              The New Architecture of Talent Alignment ↗
            </a>
          </p>
        </div>
      </div>
    </section>

    {/* ══ THREE VECTORS ═════════════════════════════════════════════════ */}
    <section style={{ background: t.bgLight, padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          {tag("The iDIG Protocol — Experimental Framework", t.indigo)}
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800,
            color: t.text900, margin: "0 0 1rem",
            letterSpacing: "-0.03em", lineHeight: 1.15,
          }}>
            Mapping resonance across three dimensions.
          </h2>
          <p style={{
            fontSize: "1.05rem", color: t.text500,
            maxWidth: "560px", margin: "0 auto", lineHeight: 1.75,
          }}>
            Rather than matching keywords, the iDIG experiment explores how
            professional identity can be expressed and discovered across three
            fundamental vectors.
          </p>
        </div>

        <div style={{ maxWidth: "660px", margin: "0 auto 3rem" }}>
          <ExperimentBadge>
            <strong>Experimental concept — not yet implemented.</strong> The
            three-vector model below represents our working hypothesis for how
            talent resonance might be measured. This framework is under active
            research and remains a proposal, not a product.
          </ExperimentBadge>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {[
            {
              number: "01",
              label: "Social Vector",
              title: "The Network of Trust",
              body: "Who vouches for you? Where do you contribute? The social vector captures community resonance — the signals of trust that emerge from how a professional engages with their field beyond a job title.",
              accent: t.sky,
            },
            {
              number: "02",
              label: "Semantic Vector",
              title: "The Language of Capability",
              body: "Not just keywords — conceptual frameworks. The semantic vector uses LLM-enriched breadcrumbs to understand the actual depth of a professional's knowledge, surfacing latent capabilities that static resumes systematically miss.",
              accent: t.violet,
            },
            {
              number: "03",
              label: "Experiential Vector",
              title: "The Temporal Journey",
              body: "A career is not a list — it is a trajectory. The experiential vector maps the mechanics of a professional journey over time, capturing how context and challenge have shaped the observer.",
              accent: t.green,
            },
          ].map((v) => (
            <div key={v.number} style={{
              background: t.white,
              border: `1px solid ${t.border}`,
              borderTop: `3px solid ${v.accent}`,
              borderRadius: "16px", padding: "2rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            }}>
              <div style={{
                display: "flex", alignItems: "center",
                gap: "12px", marginBottom: "1.25rem",
              }}>
                <span style={{
                  fontSize: "0.72rem", fontWeight: 800,
                  color: v.accent, letterSpacing: "0.1em",
                  fontFamily: "monospace",
                }}>{v.number}</span>
                <span style={{
                  fontSize: "0.68rem", fontWeight: 800,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: v.accent,
                }}>{v.label}</span>
              </div>
              <h3 style={{
                fontSize: "1.2rem", fontWeight: 700,
                color: t.text900, margin: "0 0 0.75rem",
              }}>{v.title}</h3>
              <p style={{
                fontSize: "0.92rem", color: t.text500,
                lineHeight: 1.75, margin: 0,
              }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ ENRICHED BREADCRUMBS ══════════════════════════════════════════ */}
    <section style={{ background: t.white, padding: "6rem 2rem" }}>
      <div style={{
        maxWidth: "900px", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "48px", alignItems: "start",
      }}>
        <div>
          {tag("Enriched Breadcrumbs", t.sky)}
          <h2 style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800,
            color: t.text900, margin: "0 0 1rem",
            letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            Reimagining the language of capability.
          </h2>
          <p style={{
            fontSize: "1rem", color: t.text500,
            lineHeight: 1.8, margin: "0 0 1.5rem",
          }}>
            Traditional resumes and job descriptions are "lossy" formats. They
            strip away intent, nuance, and the reality of day-to-day mechanics.
          </p>
          <p style={{
            fontSize: "1rem", color: t.text500,
            lineHeight: 1.8, margin: 0,
          }}>
            The iDIG hypothesis proposes using LLMs to enrich vectors from
            both candidate and hiring manager — generating a trail of breadcrumbs
            that captures the unspoken requirements of a role and the unstated
            depth of a career.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            {
              icon: "◈",
              label: "Dynamic Stack Ranking",
              desc: "Skills are no longer binary checkboxes. They are ranked by frequency and depth across a professional's actual project history.",
              color: t.sky,
            },
            {
              icon: "◈",
              label: "Latent Capability Discovery",
              desc: "Surface problem-solving approaches and collaboration styles that wouldn't appear in any resume — by analyzing resonance between candidate narrative and actual role intent.",
              color: t.violet,
            },
            {
              icon: "◈",
              label: "Contextual Cross-Domain Alignment",
              desc: "Understand that experience in one domain may have high-dimensional alignment with a seemingly unrelated challenge — moving past keyword limitations entirely.",
              color: t.green,
            },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "14px",
              padding: "18px", background: t.bgLight,
              borderRadius: "12px", border: `1px solid ${t.border}`,
            }}>
              <span style={{ color: item.color, fontSize: "1.1rem", marginTop: "2px" }}>
                {item.icon}
              </span>
              <div>
                <p style={{
                  margin: "0 0 4px", fontWeight: 700,
                  fontSize: "0.88rem", color: t.text900,
                }}>{item.label}</p>
                <p style={{
                  margin: 0, fontSize: "0.82rem",
                  color: t.text500, lineHeight: 1.65,
                }}>{item.desc}</p>
              </div>
            </div>
          ))}
          <ExperimentBadge>
            <strong>Proposed model.</strong> Breadcrumb enrichment is a conceptual
            approach we are designing toward. It is not yet implemented as a
            working system.
          </ExperimentBadge>
        </div>
      </div>
    </section>

    {/* ══ THE OBSERVER PROBLEM ══════════════════════════════════════════ */}
    <section style={{
      background: `linear-gradient(150deg, ${t.navyDeep} 0%, #1E1040 100%)`,
      padding: "6rem 2rem",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.68rem", fontWeight: 800,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: t.indigoLight, marginBottom: "0.85rem",
          }}>
            Preserving Superposition
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800,
            color: t.white, margin: "0 0 1.25rem",
            letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            The moment a candidate signals availability,<br />
            they risk everything.
          </h2>
          <p style={{
            fontSize: "1.05rem", color: "#94A3B8",
            maxWidth: "600px", margin: "0 auto", lineHeight: 1.75,
          }}>
            In today's market, "available" means exposed. Privacy is compromised,
            professional standing is at risk, and the most talented individuals
            never enter the field of discovery because the cost of being seen
            is too high.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px", marginBottom: "2rem",
        }}>
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(129,140,248,0.3)",
            borderRadius: "16px", padding: "2rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <span style={{
                width: 10, height: 10, borderRadius: "50%",
                background: t.indigoLight, display: "inline-block",
                boxShadow: `0 0 12px ${t.indigoLight}`,
              }} />
              <span style={{
                fontSize: "0.68rem", fontWeight: 800,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: t.indigoLight,
              }}>Latent State</span>
            </div>
            <h4 style={{
              fontSize: "1.05rem", fontWeight: 700,
              color: t.white, margin: "0 0 0.75rem",
            }}>Signal visible. Identity protected.</h4>
            <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>
              A candidate marks themselves as resonance-ready. Their professional
              vectors become discoverable to aligned opportunities — but their
              identity remains in superposition. They cannot be seen until they
              choose to be.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(16,185,129,0.3)",
            borderRadius: "16px", padding: "2rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <span style={{
                width: 10, height: 10, borderRadius: "50%",
                background: t.green, display: "inline-block",
                boxShadow: `0 0 12px ${t.green}`,
              }} />
              <span style={{
                fontSize: "0.68rem", fontWeight: 800,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: t.green,
              }}>Disclosed State</span>
            </div>
            <h4 style={{
              fontSize: "1.05rem", fontWeight: 700,
              color: t.white, margin: "0 0 0.75rem",
            }}>Sovereign disclosure.</h4>
            <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>
              When the candidate observes a resonant signal from an aligned
              opportunity, they choose to collapse the wave function. Identity
              is revealed on their terms, at their moment of readiness.
            </p>
          </div>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px dashed rgba(129,140,248,0.3)",
          borderRadius: "10px", padding: "18px 22px", textAlign: "center",
        }}>
          <p style={{ margin: 0, fontSize: "0.82rem", color: t.indigoLight, lineHeight: 1.65 }}>
            <strong>Proposed model — not yet implemented.</strong> This describes
            our hypothesis for how talent protocols might handle the
            privacy/visibility balance. It is one of the central questions this
            experiment is designed to explore.
          </p>
        </div>
      </div>
    </section>

    {/* ══ PULL QUOTE ════════════════════════════════════════════════════ */}
    <section style={{
      background: t.white,
      padding: "5rem 2rem",
      textAlign: "center",
      borderTop: `1px solid ${t.border}`,
    }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <p style={{
          fontSize: "0.72rem", fontWeight: 700,
          letterSpacing: "0.25em", textTransform: "uppercase",
          color: t.text400, marginBottom: "1.75rem",
        }}>
          The Thesis
        </p>
        <blockquote style={{
          fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
          fontWeight: 300, fontStyle: "italic",
          color: t.text900, lineHeight: 1.5,
          margin: "0 0 2rem", letterSpacing: "-0.01em",
        }}>
          "Talent is no longer a resource to be siloed —<br />
          it is a signal to be discovered."
        </blockquote>
        <p style={{ fontSize: "0.88rem", color: t.text500, margin: 0 }}>
          Paul Duplantis —{" "}
          <a
            href="https://www.i-dig.io/theresonantbuilders/the-new-architecture"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: t.blue, textDecoration: "none" }}
          >
            <em>The New Architecture of Talent Alignment</em> ↗
          </a>
        </p>
      </div>
    </section>

    {/* ══ DATA SOVEREIGNTY ══════════════════════════════════════════════ */}
    <section style={{ background: t.bgLight, padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "48px", alignItems: "center",
        }}>
          <div>
            {tag("Built toward Open Standards", t.sky)}
            <h2 style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800,
              color: t.text900, margin: "0 0 1rem",
              letterSpacing: "-0.02em", lineHeight: 1.2,
            }}>
              Your data.<br />Your dominion.
            </h2>
            <p style={{
              fontSize: "1rem", color: t.text500,
              lineHeight: 1.8, margin: "0 0 1rem",
            }}>
              The iDIG Protocol is designed to align with W3C standards —
              specifically the Solid Pod protocol — so that professional
              identity remains sovereign. Data is never shared or modified
              without explicit permission.
            </p>
            <p style={{ fontSize: "0.85rem", color: t.text400, fontStyle: "italic", margin: 0 }}>
              We are in the early days of a transition from platform ownership
              to personal orchestration.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { icon: "◈", color: t.sky,    label: "W3C Solid Pod",               desc: "Personal data stores under individual control — a proposed foundation layer" },
              { icon: "◈", color: t.violet, label: "IndexedDB Storage",            desc: "Encrypted on-device storage as an alternative — no server required" },
              { icon: "◈", color: t.green,  label: "Zero sharing without consent", desc: "The protocol would match; the individual decides disclosure" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "14px",
                padding: "16px 18px", background: t.white,
                borderRadius: "12px", border: `1px solid ${t.border}`,
              }}>
                <span style={{ color: item.color, fontSize: "1.1rem", marginTop: "2px" }}>
                  {item.icon}
                </span>
                <div>
                  <p style={{
                    margin: "0 0 3px", fontWeight: 700,
                    fontSize: "0.88rem", color: t.text900,
                  }}>{item.label}</p>
                  <p style={{
                    margin: 0, fontSize: "0.8rem",
                    color: t.text500, lineHeight: 1.6,
                  }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ══ CTA ═══════════════════════════════════════════════════════════ */}
    <section style={{
      background: `linear-gradient(150deg, ${t.navyMid} 0%, #0D1B35 100%)`,
      padding: "6rem 2rem",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "580px", margin: "0 auto" }}>
        <span style={{
          display: "inline-block",
          fontSize: "0.68rem", fontWeight: 800,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: t.indigoLight, marginBottom: "0.85rem",
        }}>
          Join the Experiment
        </span>
        <h2 style={{
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800,
          color: t.white, margin: "0 0 1.25rem",
          letterSpacing: "-0.02em", lineHeight: 1.2,
        }}>
          We're asking questions,<br />not selling answers.
        </h2>
        <p style={{
          fontSize: "1.05rem", color: "#94A3B8",
          margin: "0 0 2.5rem", lineHeight: 1.8,
        }}>
          HiringSignals.ai is an open conversation about what talent alignment
          could look like. If these ideas resonate — whether you're a candidate,
          a hiring manager, or a fellow builder — we'd like to hear from you.
        </p>
        <Link to="/contact" style={{
          display: "inline-block", padding: "16px 44px",
          background: t.indigo, color: t.white,
          fontWeight: 700, borderRadius: "8px",
          textDecoration: "none", fontSize: "0.92rem",
          letterSpacing: "0.04em",
        }}>
          Start a Conversation
        </Link>
        <p style={{
          marginTop: "2rem", fontSize: "0.78rem",
          color: "#334155", fontStyle: "italic",
        }}>
          This is version 0.1 of an ongoing experiment. Nothing here is final.
        </p>
      </div>
    </section>

  </div>
);

export default Home;
