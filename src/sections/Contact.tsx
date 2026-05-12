"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { submitInquiryAction } from "@/actions/submitInquiry";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setFormStatus("submitting");
    
    const result = await submitInquiryAction(formData);
    
    if (result.success) {
      setFormStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } else {
      setFormStatus("error");
      setErrors({ form: result.error || "An error occurred." });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Clear error when user types
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: "" });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Let's build <br />
              something <span className="text-[var(--color-emerald-accent)]">extraordinary.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed max-w-md mb-12"
            >
              Ready to elevate your digital presence? Fill out the form, and our team will get back to you within 24 hours to schedule a strategy call.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium mb-2">Email</p>
                <a href="mailto:hello@vyntcore.com" className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-white hover:text-[var(--color-emerald-accent)] transition-colors inline-block">
                  hello@vyntcore.com
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#050505] p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-emerald-accent)]/5 rounded-full blur-[100px] pointer-events-none" />

            {formStatus === "success" ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle2 size={64} className="text-[var(--color-emerald-accent)]" />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-white">Message Sent</h3>
                <p className="text-gray-400">We've received your inquiry and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                {errors.form && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl mb-6 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    {errors.form}
                  </motion.div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    animate={errors.name ? { x: [-5, 5, -5, 5, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    className="space-y-2"
                  >
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b px-0 py-3 text-white focus:outline-none transition-colors placeholder:text-gray-600 ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[var(--color-emerald-accent)]'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </motion.div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-400">Company</label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-[var(--color-emerald-accent)] transition-colors placeholder:text-gray-600"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <motion.div 
                  animate={errors.email ? { x: [-5, 5, -5, 5, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b px-0 py-3 text-white focus:outline-none transition-colors placeholder:text-gray-600 ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[var(--color-emerald-accent)]'}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </motion.div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-400">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-[var(--color-emerald-accent)] transition-colors placeholder:text-gray-600"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Project Details</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-[var(--color-emerald-accent)] transition-colors placeholder:text-gray-600 resize-none"
                    placeholder="Tell us about your goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-[var(--color-emerald-accent)] transition-colors duration-300 disabled:opacity-50 mt-8 relative overflow-hidden"
                >
                  {formStatus === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
