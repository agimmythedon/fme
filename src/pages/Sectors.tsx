import { PageHeader, Section } from "../components/Layout";
import { SECTORS } from "../constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Sectors = () => {
  return (
    <div>
      <PageHeader 
        title="Sectors We Serve" 
        subtitle="Building trust with government, municipalities, developers, architects, and transport planners."
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SECTORS.map((sector, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-white text-slate-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm" aria-hidden="true">
                <sector.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{sector.name}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Tailored engineering and consulting solutions specifically designed for the unique challenges of {sector.name.toLowerCase()}.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" /> Strategic Planning
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" /> Technical Advisory
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" /> Compliance Audits
                </li>
              </ul>
              <Link to="/contact" className="text-sm font-bold text-teal-600 flex items-center gap-2 hover:gap-3 transition-all">
                Enquire for {sector.name} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Collaborative Infrastructure Development</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            We work closely with infrastructure agencies and public transport entities to ensure every project meets the highest standards of safety, accessibility, and engineering excellence.
          </p>
          <div className="pt-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-teal-700 transition-all shadow-xl"
            >
              Partner with FME <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};
