import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portfolioArt1 from "@/assets/portfolio-art-1.jpg";
import portfolioArt2 from "@/assets/portfolio-art-2.jpg";
import portfolioArt3 from "@/assets/portfolio-art-3.jpg";

const projects = [
  { img: portfolioArt1, label: "Landscape Architecture", category: "Design" },
  { img: portfolioArt2, label: "Drawing Studio", category: "Art Lesson" },
  { img: portfolioArt3, label: "Watercolor Workshop", category: "Art Lesson" },
];

const PortfolioItem = ({ project, index, span }: { project: typeof projects[0]; index: number; span: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${span}`}
    >
      <motion.div className="w-full h-full" style={{ y: imgY, scale: imgScale }}>
        <img
          src={project.img}
          alt={`${project.label} by Judith Design Studio & Art Lesson`}
          className="w-full h-[110%] object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-110"
          loading="lazy"
        />
      </motion.div>

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <motion.span
          className="text-[0.6rem] font-sans tracking-[0.4em] uppercase text-gold translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75"
        >
          {project.category}
        </motion.span>
        <span className="font-display text-2xl md:text-3xl italic text-primary-foreground translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
          {project.label}
        </span>
        <motion.div
          className="w-0 h-px gold-gradient mt-3 group-hover:w-20 transition-all duration-700 delay-200"
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-5 right-5 w-12 h-12 border-t border-r border-primary-foreground/0 group-hover:border-gold/50 transition-all duration-600 delay-100" />
      <div className="absolute bottom-5 left-5 w-12 h-12 border-b border-l border-primary-foreground/0 group-hover:border-gold/50 transition-all duration-600 delay-100" />

      {/* Index number */}
      <span className="absolute top-5 left-6 font-display text-xs text-primary-foreground/0 group-hover:text-primary-foreground/30 transition-all duration-500 tracking-widest">
        0{index + 1}
      </span>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spans = [
    "md:col-span-7 aspect-[4/3]",
    "md:col-span-5 aspect-[3/4]",
    "md:col-span-12 aspect-[16/9]",
  ];

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto" ref={ref}>
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
          Selected Projects
        </motion.p>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%", rotateX: 30 }}
            animate={isInView ? { y: 0, rotateX: 0 } : {}}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl text-foreground tracking-tight"
          >
            Portfolio
          </motion.h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        {projects.map((project, i) => (
          <PortfolioItem key={i} project={project} index={i} span={spans[i]} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;