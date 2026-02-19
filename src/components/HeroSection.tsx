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
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-10"
        >
          {/* Profile avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-terminal/50 bg-surface-elevated shadow-[0_0_20px_hsl(174_50%_45%_/_0.15)] ring-2 ring-terminal/20">
              <img
                src={profileImg}
                alt="Achin Varshney"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="min-w-0">
            {/* Status indicator */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >

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
        </motion.div>

        {/* Bottom grid line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
