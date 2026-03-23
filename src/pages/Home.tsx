import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Accessibility, 
  Route, 
  Bus, 
  Bike, 
  GraduationCap, 
  Briefcase 
} from "lucide-react";
import { Section } from "../components/Layout";
import { SERVICES, SECTORS } from "../constants";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#0d9488,transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Engineering Inclusive and <br />
              <span className="text-teal-400">Future-Ready</span> Mobility Solutions
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              FME delivers specialist consulting in transport engineering, universal access, infrastructure planning, and project delivery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/services"
                className="w-full sm:w-auto bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all flex items-center justify-center gap-2"
              >
                Our Services <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
              >
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brief Overview */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold tracking-widest uppercase rounded-full">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Designing mobility systems for safer, more accessible futures.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Future Mobility Engineering (FME) is a specialist engineering consultancy dedicated to bridging the gap between technical excellence and practical implementation. We focus on creating infrastructure that is not only efficient but also inclusive and sustainable.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              From developing industry standards for Tactile Ground Surface Indicators (TGSIs) to planning complex Bus Rapid Transit (BRT) systems, our expertise ensures that mobility works for everyone.
            </p>
            <div className="pt-4">
              <Link to="/about" className="text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about our mission <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/Image/1598881773850.jpeg" 
                alt="Engineering Excellence" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-teal-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">Specialist</div>
              <div className="text-teal-100 text-sm font-medium uppercase tracking-widest">Consultancy</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Services */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold tracking-widest uppercase rounded-full">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Core Consulting Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide end-to-end consulting across the mobility spectrum, with a unique focus on accessibility and inclusive design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                {service.description}
              </p>
              <Link to="/services" className="text-sm font-bold text-teal-600 flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why FME */}
      <Section className="bg-slate-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-slate-800 rounded-xl overflow-hidden">
                  <img src="https://picsum.photos/seed/fme-road-infrastructure/400/600" alt="Road Infrastructure" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" loading="lazy" />
                </div>
                <div className="aspect-square bg-teal-600 rounded-xl flex items-center justify-center p-8">
                  <ShieldCheck className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-slate-700 rounded-xl flex items-center justify-center p-8">
                  <Accessibility className="w-16 h-16 text-white" />
                </div>
                <div className="aspect-[3/4] bg-slate-800 rounded-xl overflow-hidden">
                  <img src="https://picsum.photos/seed/fme-te-traffic/400/600" alt="Urban Planning" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-block px-3 py-1 bg-teal-900/50 text-teal-400 text-xs font-bold tracking-widest uppercase rounded-full border border-teal-800">
              Why Choose FME
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Engineering solutions that integrate accessibility, safety, and sustainability.
            </h2>
            <div className="space-y-6">
              {[
                "Technical excellence backed by engineering credibility",
                "Industry leaders in Universal Access and TGSI standards",
                "Evidence-based recommendations for practical implementation",
                "Commitment to inclusive design for all road users",
                "Specialist knowledge in public transport and BRT systems"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 text-teal-400"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="text-slate-400 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Sectors Served */}
      <Section className="bg-white">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Sectors We Serve</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We partner with a wide range of stakeholders to deliver infrastructure that works for everyone.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {SECTORS.map((sector, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-300">
                <sector.icon className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-slate-700 group-hover:text-teal-700 transition-colors">{sector.name}</h4>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="bg-teal-600 py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to shape the future of mobility?
          </h2>
          <p className="text-xl text-teal-100 leading-relaxed">
            Discuss your upcoming projects, audits, or training needs with our specialist consulting team.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-100 transition-all shadow-xl"
            >
              Contact Our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
