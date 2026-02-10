import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  name: string;
  context: string;
  problem: string;
  approach: string;
  safeguards: string;
  impact: string;
}

const projects: Project[] = [
  {
    name: "Options Surveillance System",
    context: "Sits at the intersection of trading activity monitoring and compliance, processing options flow data across multiple exchanges.",
    problem: "Existing surveillance pipeline couldn't process the volume of options activity at the speed needed to flag potentially MNPI-driven trades before end-of-day reporting.",
    approach: "Redesigned the data ingestion and correlation pipeline using parallel processing, optimized data structures, and a streaming architecture that evaluates trades against material event windows.",
    safeguards: "All flagged trades are logged with full provenance. The system is idempotent — reprocessing the same data produces identical results. False positive rates are tracked and reviewed weekly.",
    impact: "~40× improvement in processing throughput. Reduced detection-to-flag latency from minutes to seconds.",
  },
  {
    name: "GUAS Validation Layer",
    context: "Gateway-level validation service that sits between the order management system and exchange connectivity, enforcing broker–security compatibility rules.",
    problem: "Invalid orders reaching exchanges caused rejections, operational overhead, and potential regulatory exposure. Rules were scattered across multiple systems.",
    approach: "Centralized all validation logic into a single rule engine with a declarative configuration model. Rules are versioned and auditable.",
    safeguards: "Fail-closed design: if the validation layer cannot determine order validity, the order is rejected. All rule evaluations are logged for post-trade review.",
    impact: "Eliminated invalid order flow to exchanges. Reduced broker onboarding time by standardizing compatibility checks.",
  },
  {
    name: "Trading Dropcopy & Position Pipeline",
    context: "Processes execution reports from brokers to maintain near-real-time position visibility across all trading desks.",
    problem: "Per-broker parsing logic created inconsistent position views. Latency in position updates reduced desk transparency during high-volume trading.",
    approach: "Built a unified domain model for trade events, normalizing across FIX dropcopy, proprietary formats, and exchange-specific messages into a canonical schema.",
    safeguards: "Idempotent processing ensures duplicate messages don't corrupt positions. Full replay capability from raw message logs enables position reconstruction.",
    impact: "Sub-second position visibility across asset classes. Consistent position reporting regardless of broker or message format.",
  },
  {
    name: "Low-Latency Exchange Connectivity (HKEX)",
    context: "Direct market access connectivity to Hong Kong Exchange using the binary OCG protocol for equities trading.",
    problem: "Required microsecond-sensitive message handling with strict sequencing, recovery, and heartbeat management under exchange protocol specifications.",
    approach: "Implemented the complete binary protocol stack with zero-copy message parsing, connection state machine management, and automated failover.",
    safeguards: "Sequence number validation at every stage. Automated gap detection and recovery. Connection health monitoring with sub-second alerting.",
    impact: "Production-grade exchange connectivity supporting live equities trading with measurable latency improvements.",
  },
  {
    name: "Counterparty Simulator",
    context: "Testing infrastructure for validating order lifecycle handling in development environments without market risk.",
    problem: "Testing trading flows required either mock responses (unrealistic) or production access (risky). No middle ground existed.",
    approach: "Built a simulator that replays anonymized production message sequences, preserving timing characteristics and protocol-level behavior of real counterparties.",
    safeguards: "All production data is anonymized before ingestion. Simulator behavior is deterministic and reproducible across test runs.",
    impact: "Enabled realistic end-to-end testing of trading flows. Reduced time-to-confidence for new strategy deployments.",
  },
];

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 border-t border-grid">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-terminal-dim tracking-wider uppercase">03</span>
            <div className="h-px w-12 bg-terminal-dim" />
            <h2 className="text-2xl font-semibold text-foreground">System Deep Dives</h2>
          </div>

          <div className="space-y-4">
            {projects.map((project, idx) => {
              const isOpen = expanded === idx;
              return (
                <div
                  key={project.name}
                  className={`border transition-colors duration-200 ${
                    isOpen ? "border-terminal/30 bg-surface-elevated" : "border-grid hover:border-border"
                  }`}
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-terminal-dim">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-medium text-foreground">{project.name}</h3>
                    </div>
                    <span className="font-mono text-sm text-terminal-dim">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="px-5 pb-6 pt-0"
                    >
                      <div className="grid md:grid-cols-2 gap-6 mt-2">
                        {[
                          { label: "Context", value: project.context },
                          { label: "Problem", value: project.problem },
                          { label: "Approach", value: project.approach },
                          { label: "Safeguards", value: project.safeguards },
                        ].map(({ label, value }) => (
                          <div key={label}>
                            <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider">
                              {label}
                            </span>
                            <p className="text-sm text-secondary-foreground mt-2 leading-relaxed">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 border border-terminal/20 gradient-terminal">
                        <span className="font-mono text-xs text-terminal uppercase tracking-wider">Impact</span>
                        <p className="text-sm text-foreground mt-2 leading-relaxed">{project.impact}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
