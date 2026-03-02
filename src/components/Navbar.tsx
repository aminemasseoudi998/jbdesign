import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_0_hsl(var(--gold)/0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <button onClick={() => scrollTo("hero")} className="group relative">
          <span className="flex items-center gap-3">
            <span className="flex flex-col leading-none">
              <span className={`font-display text-lg tracking-[0.08em] ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
                Judith
              </span>
              <span className={`font-display text-sm tracking-[0.08em] ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
                <span className="gold-text-gradient italic">Design Studio</span>
              </span>
              <span className="flex items-center gap-1.5 mt-0.5">
                <span className="w-3 h-px bg-gold/50" />
                <span className={`text-[0.5rem] tracking-[0.3em] uppercase font-sans font-light ${scrolled ? "text-muted-foreground" : "text-primary-foreground/50"}`}>
                  & Art Lesson
                </span>
              </span>
            </span>
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {["Portfolio", "Services", "Contact"].map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`relative text-xs font-sans tracking-[0.25em] uppercase line-reveal ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
              } transition-colors duration-300`}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onClick={() => scrollTo("contact")}
            className="px-7 py-2.5 gold-gradient text-primary-foreground text-xs font-sans tracking-[0.2em] uppercase hover:shadow-[0_4px_20px_hsl(var(--gold)/0.4)] transition-all duration-500"
          >
            Free Consultation
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {["Portfolio", "Services", "Contact"].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm font-sans tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {item}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollTo("contact")}
                className="px-7 py-3 gold-gradient text-primary-foreground text-xs font-sans tracking-[0.2em] uppercase w-fit"
              >
                Free Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
