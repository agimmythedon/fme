import { PageHeader, Section } from "../components/Layout";
import { CLIENTS } from "../constants";
import { motion } from "motion/react";

export const Clients = () => {
  return (
    <div>
      <PageHeader 
        title="Our Clients & Partners" 
        subtitle="We take pride in our collaborations with a diverse range of clients, including municipalities, government departments, and private engineering firms."
      />

      <Section className="bg-white">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold tracking-widest uppercase rounded-full">
            Trusted By
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Our Valued Collaborations
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            FME has worked with numerous public and private sector partners to deliver high-quality, inclusive infrastructure solutions. Our clients trust us for our technical expertise and commitment to accessibility.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-3xl flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-500 border border-slate-100 group aspect-video"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Partner with FME</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            We are always looking to collaborate on projects that push the boundaries of inclusive and sustainable mobility. If you're interested in working with us, we'd love to hear from you.
          </p>
          <div className="pt-8">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-teal-700 transition-all shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};
