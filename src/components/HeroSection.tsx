import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroImage from "@/assets/hero-interior.jpg";

const marqueeText = "Design Studio • Art Lesson • Landscape Architecture • Creative Vision • ";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.6]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <motion.img
          src={heroImage}
          alt="Judith Design Studio & Art Lesson"
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Dynamic overlay */}
      <motion.div className="absolute inset-0 bg-foreground" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 via-transparent to-foreground/20" />

      {/* Decorative corner frames with stagger */}
      <motion.div
        className="absolute top-8 left-8 w-28 h-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-primary-foreground/15"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="absolute top-0 left-0 h-full w-px bg-primary-foreground/15"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-8 w-28 h-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
      >
        <motion.div
          className="absolute bottom-0 right-0 w-full h-px bg-primary-foreground/15"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          style={{ transformOrigin: "right" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-full w-px bg-primary-foreground/15"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          style={{ transformOrigin: "bottom" }}
        />
      </motion.div>

      {/* Side vertical text */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-transparent to-primary-foreground/30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          style={{ transformOrigin: "top" }}
        />
        <span className="text-[0.6rem] font-sans tracking-[0.4em] uppercase text-primary-foreground/30"
          style={{ writingMode: "vertical-rl" }}>
          Est. 2010
        </span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-primary-foreground/30 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        style={{ y: contentY }}
      >
        {/* Top accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px gold-gradient mb-8"
        />

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.6em" }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="text-[0.65rem] font-sans uppercase text-primary-foreground/50 mb-8"
        >
          Design Studio & Art Lesson
        </motion.p>

        {/* Split text hero - "Judith" */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "120%", rotateX: 40 }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ delay: 1, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-[10rem] text-primary-foreground leading-[0.85] tracking-tighter"
          >
            Judith
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-1">
          <motion.h1
            initial={{ y: "120%", rotateX: 40 }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ delay: 1.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-[10rem] italic gold-text-gradient leading-[0.85] tracking-tighter"
          >
            Design
          </motion.h1>
        </div>

        {/* Subtitle with animated lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-10 flex items-center gap-4"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 50 }}
            transition={{ delay: 2, duration: 1 }}
            className="h-px bg-primary-foreground/30"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-sm md:text-lg text-primary-foreground/50 font-display font-light tracking-[0.2em] italic"
          >
            Studio & Art Lesson
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 50 }}
            transition={{ delay: 2, duration: 1 }}
            className="h-px bg-primary-foreground/30"
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-14 flex flex-col sm:flex-row gap-5"
        >
          <motion.button
            onClick={scrollToContact}
            className="group relative px-10 py-4 overflow-hidden text-xs font-sans tracking-[0.2em] uppercase text-primary-foreground border border-primary-foreground/25 hover:border-transparent transition-all duration-600"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 gold-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10">Book 20 Mins Free Consultation</span>
          </motion.button>
          <motion.button
            onClick={scrollToPortfolio}
            className="relative px-12 py-4 text-xs font-sans tracking-[0.3em] uppercase text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 line-reveal"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <motion.div
        className="absolute bottom-16 left-0 right-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[0.6rem] font-sans tracking-[0.5em] uppercase text-primary-foreground/10 mx-4">
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        onClick={scrollToPortfolio}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
          <ChevronDown size={18} className="text-primary-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;