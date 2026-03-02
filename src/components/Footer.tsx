import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="flex items-center gap-3">
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg tracking-[0.08em] text-foreground">
                  Judith
                </span>
                <span className="font-display text-sm tracking-[0.08em]">
                  <span className="gold-text-gradient italic">Design Studio</span>
                </span>
                <span className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-3 h-px bg-gold/50" />
                  <span className="text-[0.5rem] tracking-[0.3em] uppercase font-sans font-light text-muted-foreground">
                    & Art Lesson
                  </span>
                </span>
              </span>
            </span>
          </motion.div>

            
         

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[0.6rem] font-sans text-muted-foreground/50 tracking-[0.3em] uppercase"
          >
            © {new Date().getFullYear()} Judith Design Studio & Art Lesson
          </motion.span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
