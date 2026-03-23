import { motion } from "motion/react";
import { PageHeader, Section } from "../components/Layout";
import { CheckCircle2, ShieldCheck, Accessibility, Globe, Leaf, Briefcase, Users, FolderKanban, Eye } from "lucide-react";

export const About = () => {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Future Mobility Engineering (FME) is a specialist engineering consultancy dedicated to inclusive, sustainable, and future-ready infrastructure solutions."
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold tracking-widest uppercase rounded-full">
              Our Identity
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Bridging the gap between engineering excellence and practical implementation.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Future Mobility Engineering (FME) provides specialist consulting services across transport, accessibility, infrastructure, mobility planning, and engineering design. We are driven by the belief that infrastructure should be designed for everyone, regardless of their physical abilities or mode of transport.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team brings together technical expertise in highways and traffic engineering with a deep understanding of universal access and design. This unique combination allows us to provide evidence-based recommendations that are both technically sound and socially inclusive.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
              <img src="/Image/1602296571763.jpeg" alt="Consulting" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" loading="lazy" />
            </div>
            <div className="aspect-square bg-teal-600 rounded-2xl flex items-center justify-center p-8 shadow-lg">
              <ShieldCheck className="w-16 h-16 text-white" />
            </div>
            <div className="aspect-square bg-slate-900 rounded-2xl flex items-center justify-center p-8 shadow-lg">
              <Accessibility className="w-16 h-16 text-teal-400" />
            </div>
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
              <img src="https://picsum.photos/seed/fme-pm-construction/400/400" alt="Infrastructure" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" loading="lazy" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To design and implement mobility systems that are safe, accessible, and sustainable, ensuring that infrastructure serves all members of society equally.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
              <Accessibility className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the leading specialist consultancy in inclusive engineering, setting the global standard for accessible and future-ready mobility infrastructure.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Values</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2 font-medium text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Innovation
              </li>
              <li className="flex items-center gap-2 font-medium text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Accessibility
              </li>
              <li className="flex items-center gap-2 font-medium text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Safety
              </li>
              <li className="flex items-center gap-2 font-medium text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Sustainability
              </li>
              <li className="flex items-center gap-2 font-medium text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Integrity
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Commitment</h2>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "FME is committed to innovation, accessibility, safety, and sustainable infrastructure. We position ourselves as a company that bridges gaps between engineering excellence, policy alignment, accessibility, and practical implementation."
          </p>
          <div className="pt-8 flex justify-center">
            <div className="w-24 h-1 bg-teal-600 rounded-full"></div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold tracking-widest uppercase rounded-full">
              Leadership
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Our Principal</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Profile Image & Quick Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/Screenshot 2026-03-20 at 03.58.37.png" 
                  alt="Frano Combrinck" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-slate-900">Frano Combrinck</h3>
                <p className="text-teal-600 font-semibold text-lg leading-tight">
                  CEO & Principal Engineer | Future Mobility Engineering (FME)
                </p>
                <div className="w-16 h-1 bg-teal-600 rounded-full"></div>
              </div>
            </div>

            {/* Detailed Profile */}
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-slate max-w-none">
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Frano Combrinck is a highly experienced civil engineering professional, business leader, and Universal Access specialist with a distinguished track record in transport engineering, infrastructure planning, and inclusive design.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  As CEO and Principal Engineer of Future Mobility Engineering (FME), he leads the strategic direction of the firm, delivering innovative and practical engineering solutions across South Africa and internationally.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-teal-600">
                    <Briefcase className="w-5 h-5" />
                    <h4 className="font-bold uppercase tracking-wider text-sm">Professional Overview</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    With extensive experience spanning both the public and private sectors, Frano has built a reputation for combining technical excellence with practical implementation. His expertise lies in Highways, Traffic & Transportation Engineering, and Integrated Transport Master Planning.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-teal-600">
                    <Users className="w-5 h-5" />
                    <h4 className="font-bold uppercase tracking-wider text-sm">Leadership & Impact</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Frano has managed multidisciplinary teams, provided technical advisory to the City of Tshwane, and led design reviews for major infrastructure projects, ensuring compliance with safety and accessibility standards.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <Accessibility className="w-6 h-6 text-teal-600" />
                  Universal Access & Thought Leadership
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  A core pillar of Frano's work is advancing Universal Design. He has played a leading role in the research and development of Universal Access standards and authored key industry documents including the Tshwane Standard Construction Details for Pedestrian Crossings and TGSIs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <FolderKanban className="w-6 h-6 text-teal-600" />
                  Major Projects
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      Gauteng NMT Master Plan
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      Tshwane BRT System
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      Gautrain Accessibility Inputs
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      Integrated Rapid Public Transport Networks
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      International Monorail (Nigeria)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-teal-600" />
                  Vision
                </h4>
                <p className="text-slate-600 leading-relaxed italic border-l-4 border-teal-600 pl-6 py-2">
                  "Integrating accessibility into mainstream engineering practice and standardising Universal Design across the industry to design transport systems that serve all users equally."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
