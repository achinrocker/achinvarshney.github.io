import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      toast({ title: "All fields are required", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      await emailjs.send("service_mjdqwof", "template_2kum29l", {
        from_name: form.name,
        from_email: form.email,
        to_email: "achinvarshney93@gmail.com",
        subject: form.subject,
        message: form.message,
      }, "Ni7vioWYUK9uAKLAX");
      toast({ title: "Message sent", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({ title: "Failed to send message", description: "Please try again later.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

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
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-xs text-terminal-dim uppercase tracking-wider block mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full bg-surface-elevated border border-grid text-foreground px-3 py-2 text-sm font-mono focus:outline-none focus:border-terminal transition-colors placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-terminal-dim uppercase tracking-wider block mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full bg-surface-elevated border border-grid text-foreground px-3 py-2 text-sm font-mono focus:outline-none focus:border-terminal transition-colors placeholder:text-muted-foreground"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-terminal-dim uppercase tracking-wider block mb-2">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  maxLength={200}
                  className="w-full bg-surface-elevated border border-grid text-foreground px-3 py-2 text-sm font-mono focus:outline-none focus:border-terminal transition-colors placeholder:text-muted-foreground"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-terminal-dim uppercase tracking-wider block mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={5}
                  className="w-full bg-surface-elevated border border-grid text-foreground px-3 py-2 text-sm font-mono focus:outline-none focus:border-terminal transition-colors resize-none placeholder:text-muted-foreground"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="font-mono text-sm px-6 py-2.5 border border-terminal text-terminal hover:bg-terminal hover:text-background transition-colors disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Info & Status */}
            <div className="space-y-8">
              <div className="space-y-4">
                <a href="mailto:achinvarshney@gmail.com" className="flex items-center gap-3 group">
                  <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider w-16">Email</span>
                  <span className="text-foreground group-hover:text-terminal transition-colors">achinvarshney@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/achin-varshney/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider w-16">LinkedIn</span>
                  <span className="text-foreground group-hover:text-terminal transition-colors">linkedin.com/in/achin-varshney</span>
                </a>
                <a href="https://github.com/achinrocker" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider w-16">GitHub</span>
                  <span className="text-foreground group-hover:text-terminal transition-colors">github.com/achinrocker</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-terminal-dim uppercase tracking-wider w-16">Location</span>
                  <span className="text-foreground">Gurugram, India</span>
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
