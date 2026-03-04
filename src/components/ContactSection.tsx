import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);

  const openCalendly = () => {
    window.open("https://calendly.com/judithbautista187/30min", "_blank");
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto" ref={ref}>
      {/* Header */}
      <div className="flex flex-col items-center mb-24">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 1 }}
          className="h-px gold-gradient mb-6"
        />
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={isInView ? { opacity: 1, letterSpacing: "0.5em" } : {}}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[0.65rem] font-sans uppercase text-gold mb-5"
        >
          Start Your Journey
        </motion.p>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%", rotateX: 30 }}
            animate={isInView ? { y: 0, rotateX: 0 } : {}}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl text-foreground tracking-tight"
          >
            Get in Touch
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <p className="text-muted-foreground font-display text-xl md:text-2xl italic leading-relaxed">
            Ready to transform your space into something extraordinary?
          </p>

          <div className="space-y-6">
            {[
              { icon: Mail, text: "judithbautista187@gmail.com", href: "mailto:judithbautista187@gmail.com" },
              { icon: Phone, text: "(519) 997‑4591", href: "tel:5199974591" },
              { icon: MapPin, text: "Suite 704, 275 Erie Street East, Windsor, ON N9A 7C7, Canada", href: "#" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.7 }}
                className="flex items-center gap-5 group"
              >
                <motion.div
                  className="w-11 h-11 border border-gold/25 flex items-center justify-center group-hover:gold-gradient group-hover:border-transparent transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon size={15} className="text-gold group-hover:text-primary-foreground transition-colors duration-500" />
                </motion.div>
                <span className="text-sm font-sans text-muted-foreground group-hover:text-foreground transition-colors duration-300 tracking-wider">
                  {item.text}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Book consultation - prominent */}
          <motion.button
            onClick={openCalendly}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-4 px-10 py-5 gold-gradient text-primary-foreground text-xs font-sans tracking-[0.2em] uppercase hover:shadow-[0_10px_40px_hsl(var(--gold)/0.4)] transition-all duration-500 cursor-pointer"
          >
            <span>Book 20 Mins Free Design Consultation</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          {[
            { name: "name", label: "Your Name", type: "text" },
            { name: "email", label: "Email Address", type: "email" },
          ].map((field) => (
            <div key={field.name} className="relative group">
              <label
                className={`absolute left-0 transition-all duration-400 text-sm font-sans pointer-events-none ${
                  focused === field.name
                    ? "-top-6 text-[0.6rem] text-gold tracking-[0.3em] uppercase"
                    : "top-3 text-muted-foreground"
                }`}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                maxLength={field.type === "email" ? 255 : 100}
                onFocus={() => setFocused(field.name)}
                onBlur={(e) => !e.target.value && setFocused(null)}
                className="w-full bg-transparent border-b border-border py-3 text-sm font-sans text-foreground focus:outline-none focus:border-gold transition-colors duration-500"
              />
              <motion.div
                className="absolute bottom-0 left-0 h-px gold-gradient"
                initial={{ width: "0%" }}
                animate={{ width: focused === field.name ? "100%" : "0%" }}
                transition={{ duration: 0.6 }}
              />
            </div>
          ))}

          <div className="relative group">
            <label
              className={`absolute left-0 transition-all duration-400 text-sm font-sans pointer-events-none ${
                focused === "message"
                  ? "-top-6 text-[0.6rem] text-gold tracking-[0.3em] uppercase"
                  : "top-3 text-muted-foreground"
              }`}
            >
              Tell us about your project
            </label>
            <textarea
              rows={4}
              maxLength={1000}
              onFocus={() => setFocused("message")}
              onBlur={(e) => !e.target.value && setFocused(null)}
              className="w-full bg-transparent border-b border-border py-3 text-sm font-sans text-foreground focus:outline-none focus:border-gold transition-colors duration-500 resize-none"
            />
            <motion.div
              className="absolute bottom-0 left-0 h-px gold-gradient"
              initial={{ width: "0%" }}
              animate={{ width: focused === "message" ? "100%" : "0%" }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <motion.button
            type="submit"
            className="group relative px-12 py-5 overflow-hidden border border-foreground text-foreground text-xs font-sans tracking-[0.3em] uppercase transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-background transition-colors duration-500">
              Send Message
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;