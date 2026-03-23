import React, { useState } from "react";
import { PageHeader, Section } from "../components/Layout";
import { Mail, Phone, MapPin, ArrowRight, Send, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Discuss your upcoming projects, audits, studies, standards development, or training needs with our specialist consulting team."
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are ready to assist you with specialist consulting services in transport engineering, universal access, and infrastructure planning.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Email Us</h4>
                  <p className="text-lg text-slate-600 font-medium">info@fme-engineering.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Call Us</h4>
                  <p className="text-lg text-slate-600 font-medium">+00 000 000 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Office Location</h4>
                  <p className="text-lg text-slate-600 font-medium">Office Location Placeholder<br />City, Country</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Connect With Us</h4>
              <div className="flex gap-4">
                {/* Social placeholders */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 transition-all cursor-pointer">
                    <div className="w-5 h-5 bg-current rounded-sm opacity-20"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12" aria-live="polite">
                <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center animate-bounce" aria-hidden="true">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. Our team will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-teal-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input 
                      id="full-name"
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email-address" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input 
                      id="email-address"
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                  <input 
                    id="subject"
                    type="text" 
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message"
                    rows={5} 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-teal-700 transition-all shadow-lg"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <section className="h-96 bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center border border-white/50">
            <MapPin className="w-10 h-10 text-teal-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-slate-900">Interactive Map Placeholder</h4>
            <p className="text-sm text-slate-600">Our office location will be displayed here.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
