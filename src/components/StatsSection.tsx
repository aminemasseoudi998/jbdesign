import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 80, suffix: "+", label: "Projects " },
  { value: 20, suffix: "", label: "Years experience in interior design" },
  { value: 15, suffix: "+", label: "Years of teaching art" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const AnimatedNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2.5, ease: [0.22, 1, 0.36, 1] });
    }
  }, [inView, value, count]);

  return (
    <span className="font-display text-5xl md:text-7xl gold-text-gradient tabular-nums">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-32 border-y border-border relative overflow-hidden">
      {/* Background accent */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.02 } : {}}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,hsl(var(--gold))_0px,hsl(var(--gold))_1px,transparent_1px,transparent_120px)]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center relative"
          >
            <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 30 } : {}}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
              className="h-px gold-gradient mx-auto mt-5 mb-4"
            />
            <p className="text-[0.6rem] font-sans tracking-[0.35em] uppercase text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;