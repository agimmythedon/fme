import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Footer } from "./Navigation";
import { motion, AnimatePresence } from "motion/react";

export const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export const Section = ({ 
  children, 
  className = "", 
  id = "", 
  dark = false 
}: { 
  children: ReactNode; 
  className?: string; 
  id?: string; 
  dark?: boolean 
}) => (
  <section 
    id={id} 
    className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? "bg-slate-900 text-white" : "bg-white"} ${className}`}
  >
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const PageHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#0d9488,transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 max-w-3xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </div>
);
