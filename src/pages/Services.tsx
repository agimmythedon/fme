import { PageHeader, Section } from "../components/Layout";
import { SERVICES } from "../constants";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Specialist consulting in transport engineering, universal access, and infrastructure planning."
      />

      <Section className="bg-white">
        <div className="space-y-24">
          {SERVICES.map((service, i) => (
            <div 
              key={service.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`space-y-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Key Areas of Expertise</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3 group">
                        <div className="mt-1 text-teal-600 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-5 h-5" /></div>
                        <span className="text-slate-600 text-sm font-medium leading-tight">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-3 transition-all"
                  >
                    Discuss this service <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="text-teal-600 font-bold text-sm uppercase tracking-widest">Value Driven</div>
                  <div className="text-slate-900 font-bold">Specialist Consulting</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Additional Services List */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Consulting</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our expertise extends across the entire infrastructure lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Master Planning & Feasibility Studies",
            "Road Safety Assessments",
            "Environmental Consulting",
            "Universal Access Compliance Reviews",
            "Pedestrian and Cycle Infrastructure",
            "Public Transport Facilities and BRT Systems"
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-teal-300 transition-colors">
              <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
