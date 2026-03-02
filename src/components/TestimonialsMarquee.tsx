import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  { quote: "Absolutely transformed our home beyond imagination.", client: "Sarah M." },
  { quote: "The most elegant and refined design experience.", client: "David R." },
  { quote: "Every detail was considered with extraordinary care.", client: "Emma L." },
  { quote: "A visionary approach to luxury living spaces.", client: "Michael T." },
  { quote: "Impeccable taste and flawless execution.", client: "Olivia K." },
];

const TestimonialsMarquee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 overflow-hidden border-y border-border relative">
      {/* Label */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs font-sans tracking-[0.5em] uppercase text-gold/60">What Our Clients Say</p>
      </motion.div>

      {/* First row - scrolls left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
        className="mb-6"
      >
        <motion.div
          className="flex whitespace-nowrap gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex items-center gap-6 px-8 py-5 border border-border/60 bg-background/50 backdrop-blur-sm min-w-fit">
              <span className="font-display text-4xl gold-text-gradient leading-none">"</span>
              <div>
                <p className="font-display text-base italic text-foreground/80 whitespace-nowrap">{t.quote}</p>
                <p className="text-[0.6rem] font-sans tracking-[0.3em] uppercase text-muted-foreground mt-1">— {t.client}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Second row - scrolls right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="flex whitespace-nowrap gap-12"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...testimonials.reverse(), ...testimonials].map((t, i) => (
            <div key={i} className="flex items-center gap-6 px-8 py-5 border border-border/60 bg-background/50 backdrop-blur-sm min-w-fit">
              <span className="font-display text-4xl gold-text-gradient leading-none">"</span>
              <div>
                <p className="font-display text-base italic text-foreground/80 whitespace-nowrap">{t.quote}</p>
                <p className="text-[0.6rem] font-sans tracking-[0.3em] uppercase text-muted-foreground mt-1">— {t.client}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsMarquee;
