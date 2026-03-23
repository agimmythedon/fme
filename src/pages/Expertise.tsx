import { PageHeader, Section } from "../components/Layout";
import { CheckCircle2, ArrowRight, ShieldCheck, Accessibility, Route, Bus, Bike, GraduationCap, Briefcase, Map } from "lucide-react";
import { Link } from "react-router-dom";

export const Expertise = () => {
  const capabilities = [
    { title: "Urban Mobility Systems", icon: Route },
    { title: "Inclusive Infrastructure", icon: Accessibility },
    { title: "Public Transport Systems", icon: Bus },
    { title: "Accessibility Auditing", icon: ShieldCheck },
    { title: "Road Safety Improvements", icon: ShieldCheck },
    { title: "Pedestrian Environments", icon: Users },
    { title: "Cycling Infrastructure", icon: Bike },
    { title: "Standards Development", icon: Briefcase },
    { title: "Strategic Transport Planning", icon: Map }
  ];

  return (
    <div>
      <PageHeader 
        title="Areas of Expertise" 
        subtitle="Our project capability spans across urban mobility, inclusive infrastructure, and strategic transport planning."
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold tracking-widest uppercase rounded-full">
              Project Capability
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Shaping roads, public transport systems, and public spaces that work for everyone.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              FME brings a wealth of experience in managing and delivering complex infrastructure projects. Our focus is on creating environments that are safe, accessible, and sustainable.
            </p>
            <div className="space-y-4">
              {[
                "Accessibility auditing and recommendations",
                "Standards development and guidance",
                "Professional training for built environment teams",
                "Technical advisory for transport authorities"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-teal-600"><CheckCircle2 className="w-5 h-5" /></div>
                  <span className="text-slate-700 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="https://picsum.photos/seed/mobility/1200/800" 
                alt="Urban Mobility" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">Expertise</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">Driven Solutions</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col gap-6 hover:bg-white hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-white text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-300 shadow-sm">
                <cap.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{cap.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Specialist knowledge and technical capability in delivering {cap.title.toLowerCase()} projects with a focus on quality and compliance.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Technical Excellence & Standards</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We are particularly proud of our leadership in developing standards for Tactile Ground Surface Indicators (TGSIs), addressing confusion in the engineering and architectural industries and setting a new benchmark for inclusive design.
          </p>
          <div className="pt-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-teal-700 transition-all shadow-xl"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

const Users = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
