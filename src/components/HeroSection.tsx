import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-grid-pattern">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center md:gap-12"
        >
          {/* Profile Image */}
          <div className="shrink-0 mb-8 md:mb-0 md:order-2">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border glow-terminal">
              <img src={profileImg} alt="Achin Varshney" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="md:order-1">
          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-terminal animate-pulse-terminal" />
            <span className="font-mono text-sm text-terminal-dim tracking-wider uppercase">
              Tech Lead · D.E. Shaw
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
            Achin Varshney
          </h1>

          {/* Title */}
          <p className="font-mono text-lg md:text-xl text-terminal mb-8">
            Trading Systems & Distributed Infrastructure
          </p>

          {/* Value statement */}
          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl leading-relaxed mb-4">
            Designing and scaling high-performance trading systems with a focus on correctness, latency, and production safety.
          </p>

          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
            9+ years delivering low-latency trading infrastructure, FIX connectivity, surveillance systems, and automation across global markets.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terminal/10 border border-terminal/30 text-terminal font-mono text-sm tracking-wide hover:bg-terminal/20 hover:border-terminal/50 transition-all duration-200"
            >
              <span className="text-terminal-dim">→</span> View Experience
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground font-mono text-sm tracking-wide hover:border-foreground/30 hover:text-foreground transition-all duration-200"
            >
              Contact
            </a>
          </div>
          </div>
        </motion.div>

        {/* Bottom grid line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
