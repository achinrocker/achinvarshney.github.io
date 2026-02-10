import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 border-t border-grid">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-terminal-dim tracking-wider uppercase">06</span>
            <div className="h-px w-12 bg-terminal-dim" />
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-secondary-foreground leading-relaxed mb-8">
                Open to discussing trading systems architecture, distributed infrastructure challenges, or engineering leadership opportunities.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:achin@example.com"
                  className="flex items-center gap-3 group"
                >
                  <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider w-16">Email</span>
                  <span className="text-foreground group-hover:text-terminal transition-colors">achin@example.com</span>
                </a>
                <a href="#" className="flex items-center gap-3 group">
                  <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider w-16">LinkedIn</span>
                  <span className="text-foreground group-hover:text-terminal transition-colors">linkedin.com/in/achinvarshney</span>
                </a>
                <a href="#" className="flex items-center gap-3 group">
                  <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider w-16">GitHub</span>
                  <span className="text-foreground group-hover:text-terminal transition-colors">github.com/achinvarshney</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider w-16">Location</span>
                  <span className="text-foreground">Gurugram, India</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-grid bg-surface-elevated glow-terminal">
              <div className="font-mono text-xs text-terminal-dim mb-4">system.status</div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Availability</span>
                  <span className="font-mono text-sm text-terminal">Open to conversation</span>
                </div>
                <div className="h-px bg-grid-line" />
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Response Time</span>
                  <span className="font-mono text-sm text-foreground">&lt; 24 hours</span>
                </div>
                <div className="h-px bg-grid-line" />
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Timezone</span>
                  <span className="font-mono text-sm text-foreground">IST (UTC+5:30)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container max-w-5xl mx-auto px-6 mt-24 pt-8 border-t border-grid">
        <div className="flex flex-wrap justify-between items-center gap-4 pb-8">
          <span className="font-mono text-xs text-muted-foreground">
            © 2024 Achin Varshney
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Built with precision.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
