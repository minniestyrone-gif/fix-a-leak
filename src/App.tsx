/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Droplets, 
  Wrench, 
  Flame, 
  FileText, 
  AlertTriangle, 
  Waves, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Star,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Zap,
  Clock
} from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  {
    title: 'Geyser Replacement',
    description: 'Expert installation of premium geysers with energy-efficient settings.',
    icon: <Waves className="w-8 h-8" />,
    color: 'bg-emerald-500'
  },
  {
    title: 'Alternative Water Heating',
    description: 'Solar and heat pump solutions to reduce your carbon footprint and costs.',
    icon: <Flame className="w-8 h-8" />,
    color: 'bg-lime-500'
  },
  {
    title: 'Certificate of Compliance',
    description: 'Professional auditing and PIRB certificates for your property.',
    icon: <FileText className="w-8 h-8" />,
    color: 'bg-green-600'
  },
  {
    title: 'General Maintenance',
    description: 'Routine checks and fixes to keep your plumbing system in top shape.',
    icon: <Wrench className="w-8 h-8" />,
    color: 'bg-teal-500'
  },
  {
    title: 'Burst Pipes',
    description: 'Emergency 24/7 response for burst pipes to minimize water damage.',
    icon: <AlertTriangle className="w-8 h-8" />,
    color: 'bg-red-500'
  },
  {
    title: 'Blocked Drains',
    description: 'Modern hydro-jetting and clearing services for persistent blockages.',
    icon: <Droplets className="w-8 h-8" />,
    color: 'bg-blue-500'
  }
];

const values = [
  { title: 'Reliability', icon: <ShieldCheck className="w-6 h-6" />, text: 'We show up on time, every time.' },
  { title: 'Expert Team', icon: <Zap className="w-6 h-6" />, text: 'Qualified professionals with years of experience.' },
  { title: '24/7 Support', icon: <Clock className="w-6 h-6" />, text: 'Emergency plumbing help whenever you need it.' }
];

const testimonials = [
  { name: 'John Smith', text: 'Best plumbing service in town. They fixed my geyser within hours!', rating: 5 },
  { name: 'Sarah Evans', text: 'Professional, clean, and very reasonably priced. Highly recommend.', rating: 5 },
  { name: 'Michael Chen', text: 'Fixed a persistent drain issue that others couldn\'t solve.', rating: 5 },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">Fix-a-Leak</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="relative group p-[2px] rounded-full overflow-hidden">
               <div className="absolute inset-0 bg-conic-gradient from-brand-primary via-white to-brand-primary animate-rotate opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'conic-gradient(from 0deg, var(--color-brand-primary), white, var(--color-brand-primary))', transform: 'scale(2)' }} />
               <a href="#contact" className="relative block bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark/90 transition-all shadow-xl shadow-brand-dark/20 z-10">
                 Book Now
               </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full glass p-6 border-t border-brand-primary/10"
          >
              <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-brand-primary text-white w-full py-4 rounded-xl font-bold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Plumber
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Floating Green Pixels */}
        <div className="absolute inset-0 pointer-events-none -z-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-brand-primary/40 rounded-sm"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: 0 
              }}
              animate={{ 
                y: [null, '-20%', '20%'],
                x: [null, '10%', '-10%'],
                opacity: [0, 1, 0],
                rotate: [0, 90, 180]
              }}
              transition={{ 
                duration: 5 + Math.random() * 10, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20">
           <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary rounded-full blur-[120px] animate-pulse" />
           <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-emerald-400 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-secondary text-xs font-bold tracking-widest uppercase mb-6">
                Premium Plumbing Services
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-balance">
                Perfect your flow <br/>
                with <span className="text-brand-secondary">Fix-a-Leak</span>
              </h1>
              <p className="text-lg text-brand-dark/70 mb-8 max-w-lg leading-relaxed">
                Expert plumbing solutions designed for modern homes. From emergency repairs to eco-friendly water heating, we focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="relative group p-[2px] rounded-full overflow-hidden">
                   <div className="absolute inset-0 bg-conic-gradient from-brand-primary via-white to-brand-primary animate-rotate opacity-100" style={{ background: 'conic-gradient(from 0deg, var(--color-brand-primary), white, var(--color-brand-primary))', transform: 'scale(2)' }} />
                   <a href="#contact" className="relative bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-2 group z-10">
                    Test Your Flow <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <a href="#services" className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-primary/20 hover:text-brand-secondary transition-all flex items-center justify-center gap-2">
                  View Services
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-light bg-brand-primary flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold">Trusted by 500+ households</p>
                  <p className="text-brand-dark/60">Professional service you can rely on</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
              id="about"
            >
              <div className="relative glass rounded-[2rem] p-4 md:p-8 overflow-hidden shadow-2xl">
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/5 to-transparent -z-10" />
                 
                 {/* Mock UI Element - About Us Widget */}
                 <div className="space-y-6">
                    <div className="flex justify-between items-center bg-brand-dark rounded-xl p-3 text-white shadow-inner">
                        <span className="text-xs font-medium">Plumbing Efficiency</span>
                        <span className="text-xl font-display font-bold">98/100</span>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                        {values.map((val, idx) => (
                           <motion.div 
                             key={val.title}
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ delay: 0.4 + (idx * 0.1) }}
                             className="bg-white/60 p-4 rounded-2xl border border-white/40 shadow-sm flex items-start gap-4 hover:bg-brand-primary hover:text-white transition-all cursor-default group"
                           >
                             <div className="p-2 bg-brand-primary/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                {val.icon}
                             </div>
                             <div>
                                <h3 className="font-bold text-sm mb-1">{val.title}</h3>
                                <p className="text-xs opacity-70 leading-normal">{val.text}</p>
                             </div>
                           </motion.div>
                        ))}
                    </div>

                    <div className="bg-brand-primary/20 p-4 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Droplets className="text-brand-primary w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-dark/70">Expert Plumbers</span>
                        </div>
                        <CheckCircle2 className="text-brand-secondary" />
                    </div>
                 </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-primary/40 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-lime-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl font-bold"
            >
              Professional Solutions <br/> for Every Problem
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2rem] bg-brand-light border border-brand-primary/10 hover:border-brand-primary transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 cursor-default"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-brand-dark/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-brand-secondary font-bold group-hover:gap-3 transition-all">
                  Get a quote <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-dark -z-20" />
        <div className="container mx-auto px-6 text-white">
           <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Satisfaction Guaranteed</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div 
                          key={t.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.2 }}
                          className="glass-dark p-8 rounded-3xl"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="text-brand-primary w-4 h-4 fill-brand-primary" />
                                ))}
                            </div>
                            <p className="text-lg italic mb-6 opacity-80">"{t.text}"</p>
                            <p className="font-bold">{t.name}</p>
                            <p className="text-xs opacity-50 uppercase tracking-widest mt-1">Verified Client</p>
                        </motion.div>
                    ))}
                </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="bg-brand-dark rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 text-white shadow-2xl overflow-hidden relative">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] -z-10" />
            
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 md:mb-12">Contact Details</h2>
              
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Phone className="text-brand-primary w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <p className="text-xs opacity-50 uppercase tracking-widest font-bold mb-1">Call Us 24/7</p>
                    <p className="text-lg md:text-xl font-bold">067 257 5717</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail className="text-brand-primary w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <p className="text-xs opacity-50 uppercase tracking-widest font-bold mb-1">Email Support</p>
                    <p className="text-lg md:text-xl font-bold">hello@fixaleak.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="text-brand-primary w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <p className="text-xs opacity-50 uppercase tracking-widest font-bold mb-1">Our Address</p>
                    <p className="text-lg md:text-xl font-bold text-balance">44 Ibis st, sonstraal heights Cape Town 7550</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-10 pt-10 md:mt-16 md:pt-16 border-t border-white/10 flex justify-center">
                <a 
                  href="tel:0672575717"
                  className="bg-brand-primary text-white px-8 py-3.5 md:px-12 md:py-5 rounded-full font-bold text-base md:text-xl hover:bg-brand-secondary transition-all shadow-2xl shadow-brand-primary/20"
                >
                  Book an Emergency Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-brand-primary/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Droplets className="text-white w-5 h-5" />
              </div>
              <span className="font-display text-xl font-bold">Fix-a-Leak</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-brand-dark/50">
              <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a>
            </div>
            <p className="text-xs text-brand-dark/40 font-medium uppercase tracking-[0.2em]">
              © 2026 Fix-a-Leak Plumbing - All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
