import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Home, Ruler, Brush, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Palette, title: "Interior Styling", num: "01" },
  { icon: Home, title: "Art Consultation", num: "02" },
  { icon: Ruler, title: "Space Planning", num: "03" },
  { icon: Brush, title: "Art Curation", num: "04" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-cream-dark relative overflow-hidden" ref={ref}>
      {/* Background text */}
      <motion.div
        className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[18rem] leading-none text-foreground/[0.015] select-none pointer-events-none"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 2 }}
      >
        JDS
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
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
            What We Offer
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", rotateX: 30 }}
              animate={isInView ? { y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl text-foreground tracking-tight"
            >
              Services
            </motion.h2>
          </div>
        </div>

        {/* Service cards */}
        <div className="space-y-0 divide-y divide-border">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative py-10 md:py-14 cursor-pointer"
            >
              <div className="relative z-10 flex items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="font-display text-sm tracking-widest text-gold/40">
                    {s.num}
                  </span>
                  <motion.div
                    className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <s.icon size={20} className="text-gold" />
                  </motion.div>
                  <h3 className="font-display text-3xl md:text-5xl tracking-wide text-foreground">
                    {s.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={24}
                  className="text-gold"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
