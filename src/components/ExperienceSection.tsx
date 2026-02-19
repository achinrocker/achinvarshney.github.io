import { motion } from "framer-motion";
import { useState } from "react";

interface Role {
  title: string;
  period: string;
  highlights: { text: string; detail?: string }[];
  qualities?: string[];
}

const roles: Role[] = [
  {
    title: "Tech Lead",
    period: "2022 – Present",
    highlights: [
      {
        text: "Led end-to-end trading connectivity and broker onboarding for new strategies and funds, ensuring multi-region production readiness",
        detail: "Coordinated across trading desks, broker operations, and infrastructure teams to establish connectivity pipelines with deterministic rollout procedures and automated validation."
      },
      {
        text: "Architected a validation layer enforcing broker–security compatibility, eliminating invalid order flow before exchange submission",
        detail: "Designed a rule engine that cross-references broker capabilities, security attributes, and regulatory constraints to reject non-compliant orders at the gateway level — preventing downstream exchange rejections."
      },
      {
        text: "Migrated Dropcopy processing to a unified domain model, enabling near-real-time position visibility and improved desk transparency",
        detail: "Replaced fragmented per-broker parsing with a canonical trade event model, enabling consistent position aggregation across asset classes with sub-second latency."
      },
      {
        text: "Designed an Options Surveillance System to detect potentially MNPI-driven options trading, improving processing throughput by ~40×",
        detail: "Built a pipeline that correlates options activity with material events, using parallel processing and optimized data structures to reduce detection latency from minutes to seconds."
      },
      {
        text: "Built automation for China short position recall bookings, reducing manual operational overhead",
      },
      {
        text: "Developed a Counterparty Simulator using production logs to enable realistic testing of trading flows",
        detail: "Replays anonymized production message sequences against development environments, enabling end-to-end validation of order lifecycle handling without market risk."
      },
    ],
    qualities: ["Deterministic behavior", "Idempotent processing", "Rollback-safe deployments", "Auditability & replay"],
  },
  {
    title: "Senior Software Developer",
    period: "2019 – 2021",
    highlights: [
      {
        text: "Built low-latency equities trading engine connectivity with HKEX using binary OCG protocol",
        detail: "Implemented the binary protocol stack with careful attention to message sequencing, heartbeat management, and recovery procedures required by the exchange."
      },
      {
        text: "Designed performance-sensitive systems under strict correctness constraints",
      },
      {
        text: "Developed exchange integration infrastructure for production-critical trading paths",
      },
    ],
  },
  {
    title: "Software Developer",
    period: "2016 – 2018",
    highlights: [
      {
        text: "Built FIX-based electronic trading connectivity across multiple asset classes",
      },
      {
        text: "Delivered infrastructure enhancements across core trading platform components",
      },
      {
        text: "Executed regulatory transition work (MiFID II) for sponsored access and algorithmic trading compliance",
      },
    ],
  },
];

const ExperienceSection = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleDetail = (key: string) => {
    setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="experience" className="py-24 border-t border-grid">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-terminal-dim tracking-wider uppercase">02</span>
            <div className="h-px w-12 bg-terminal-dim" />
            <h2 className="text-2xl font-semibold text-foreground">Experience</h2>
          </div>

          <div className="mb-6">
            <h3 className="font-mono text-lg text-terminal">D.E. Shaw & Co.</h3>
            <p className="text-muted-foreground text-sm mt-1">2016 – Present · 9+ years</p>
          </div>

          <div className="space-y-16">
            {roles.map((role, roleIdx) => (
              <div key={role.title} className="relative">
                {/* Role header */}
                <div className="flex flex-wrap items-baseline gap-4 mb-6">
                  <h4 className="text-xl font-semibold text-foreground">{role.title}</h4>
                  <span className="font-mono text-sm text-muted-foreground">{role.period}</span>
                </div>

                {/* Highlights */}
                <ul className="space-y-4">
                  {role.highlights.map((item, idx) => {
                    const key = `${roleIdx}-${idx}`;
                    const isExpanded = expandedItems[key];
                    return (
                      <li key={idx} className="group">
                        <div className="flex gap-3">
                          <span className="text-terminal-dim mt-1.5 text-xs shrink-0">▸</span>
                          <div>
                            <p className="text-secondary-foreground leading-relaxed">
                              {item.text}
                            </p>
                            {item.detail && (
                              <>
                                <button
                                  onClick={() => toggleDetail(key)}
                                  className="font-mono text-xs text-terminal-dim hover:text-terminal mt-2 transition-colors"
                                >
                                  {isExpanded ? "− Hide details" : "+ View system details"}
                                </button>
                                {isExpanded && (
                                  <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="text-sm text-muted-foreground mt-2 pl-3 border-l border-terminal-dim/30 leading-relaxed"
                                  >
                                    {item.detail}
                                  </motion.p>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* System qualities */}
                {role.qualities && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {role.qualities.map(q => (
                      <span
                        key={q}
                        className="font-mono text-xs px-3 py-1.5 border border-grid bg-surface-elevated text-terminal-dim"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                )}

                {/* Divider */}
                {roleIdx < roles.length - 1 && (
                  <div className="mt-12 h-px bg-gradient-to-r from-border via-border to-transparent" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
