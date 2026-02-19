import { motion } from "framer-motion";

const achievements = [
  { label: "Data Science League 2022", detail: "3rd Place" },
  { label: "ACM ICPC Asia Regionals", detail: "Qualifier" },
  { label: "Google Code Jam", detail: "Round 2" },
  { label: "Springer Publication", detail: "Multimodal ML for Medical Diagnosis", url: "https://link.springer.com/chapter/10.1007/978-3-319-47952-1_69" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 border-t border-grid">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-terminal-dim tracking-wider uppercase">05</span>
            <div className="h-px w-12 bg-terminal-dim" />
            <h2 className="text-2xl font-semibold text-foreground">Achievements & Research</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((a) => {
              const content = (
                <>
                  <p className="text-foreground font-medium">{a.label}</p>
                  <p className="font-mono text-sm text-terminal-dim mt-1">{a.detail}</p>
                </>
              );
              
              if (a.url) {
                return (
                  <a
                    key={a.label}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 border border-grid hover:border-terminal-dim/30 transition-colors block"
                  >
                    {content}
                  </a>
                );
              }
              
              return (
                <div key={a.label} className="p-5 border border-grid hover:border-terminal-dim/30 transition-colors">
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
