import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-grid">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-terminal-dim tracking-wider uppercase">01</span>
            <div className="h-px w-12 bg-terminal-dim" />
            <h2 className="text-2xl font-semibold text-foreground">Engineering Profile</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-secondary-foreground leading-relaxed text-lg">
                I specialize in building systems where correctness and reliability matter as much as performance. My work focuses on preventing invalid order flow, enabling near-real-time visibility into trading positions, and designing automation that reduces operational risk in global trading environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach centers on owning production-critical components end-to-end — from design through deployment and monitoring. I design for failure, rollback, and replay. Every system I build is evaluated against the question: what happens when this fails in production during market hours?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond individual systems, I lead cross-team collaboration to ensure trading infrastructure evolves cohesively — aligning connectivity, risk, and surveillance under a unified engineering standard.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-4 border border-grid bg-surface-elevated">
                <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider">Location</span>
                <p className="text-foreground mt-1">Gurugram, India</p>
              </div>
              <div className="p-4 border border-grid bg-surface-elevated">
                <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider">Focus</span>
                <p className="text-foreground mt-1">Trading Systems, Low-Latency Infrastructure, Compliance</p>
              </div>
              <div className="p-4 border border-grid bg-surface-elevated">
                <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider">Links</span>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="font-mono text-sm text-terminal hover:text-foreground transition-colors">LinkedIn</a>
                  <a href="#" className="font-mono text-sm text-terminal hover:text-foreground transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
