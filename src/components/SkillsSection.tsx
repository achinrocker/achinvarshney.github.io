import { motion } from "framer-motion";

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Trading & Systems",
    items: ["FIX Protocol", "Dropcopy Processing", "Order Lifecycle Management", "Position Management", "Surveillance & Compliance Pipelines", "Exchange Connectivity (OCG, FIX)"],
  },
  {
    category: "Languages & Frameworks",
    items: ["Python", "Java", "C++", "Perl", "Django", "Spring Boot", "React", "Node.js", "Typescript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Kubernetes", "Git", "GitLab CI", "Linux"],
  },
  {
    category: "Data",
    items: ["SQL", "PostgreSQL", "Caching Systems", "Parallel Processing"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 border-t border-grid">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-terminal-dim tracking-wider uppercase">04</span>
            <div className="h-px w-12 bg-terminal-dim" />
            <h2 className="text-2xl font-semibold text-foreground">Technical Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillGroups.map((group) => (
              <div key={group.category} className="p-6 border border-grid bg-surface-elevated">
                <h3 className="font-mono text-sm text-terminal uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-3 py-1.5 border border-grid text-secondary-foreground hover:border-terminal-dim hover:text-foreground transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
