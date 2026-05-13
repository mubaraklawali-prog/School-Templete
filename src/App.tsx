/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Phone, 
  Award, 
  Users, 
  Clock, 
  CheckCircle2, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck, 
  Cpu, 
  MapPin, 
  Mail, 
  Calendar, 
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ==========================================
// SCHOOL MASTER CONFIGURATION
// Use these placeholders to customize the school
// ==========================================
const SCHOOL_CONFIG = {
  name: "[SCHOOL_NAME]",
  tagline: "[SCHOOL_TAGLINE]",
  location: "[SCHOOL_LOCATION]",
  phone: "[SCHOOL_PHONE]",
  whatsapp: "[SCHOOL_WHATSAPP]",
  email: "[SCHOOL_EMAIL]",
  logo: "[SCHOOL_LOGO]", // Use a high-res PNG or SVG
  address: "[SCHOOL_ADDRESS]",
  primaryColor: "#0F172A", // Default Slate 900
  secondaryColor: "#2563EB", // Default blue 600
  heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop",
  aboutImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  admissionStatus: "ADMISSIONS OPEN 2024/2025",
  whatsappMessage: "Hello, I am interested in enrolling my child at [SCHOOL_NAME]. Can I get more information?",
  googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126829.2748367503!2d3.33624!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e83a7da3c886!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1715550000000!5m2!1sen!2sng",
  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#"
  },
  // Toggle visibility of optional sections
  showWAEC: true,
  showPrincipalMessage: true,
  showFacilities: true,
  showEvents: true,
};

// ==========================================
// SUB-COMPONENTS
// ==========================================

const WhatsAppButton = ({ className = "", text = "Chat on WhatsApp" }) => (
  <a 
    href={`https://wa.me/${SCHOOL_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(SCHOOL_CONFIG.whatsappMessage)}`}
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-green-500/20 active:scale-95 ${className}`}
  >
    <MessageCircle size={20} />
    <span>{text}</span>
  </a>
);

const PrimaryCTA = ({ className = "", text = "Book School Visit" }) => (
  <button 
    onClick={() => window.location.href = "#contact"}
    className={`inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95 ${className}`}
  >
    <Calendar size={20} />
    <span>{text}</span>
  </button>
);

const SectionHeading = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <motion.h4 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3"
    >
      {subtitle}
    </motion.h4>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

// ==========================================
// MAIN TEMPLATE SECTIONS
// ==========================================

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform">
              {SCHOOL_CONFIG.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-lg md:text-xl leading-none transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                {SCHOOL_CONFIG.name}
              </span>
              <span className={`text-[10px] md:text-xs font-medium tracking-tighter opacity-80 uppercase transition-colors ${scrolled ? 'text-blue-600' : 'text-blue-300 md:text-blue-200'}`}>
                Academic Excellence
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm">
            {['About', 'Why Us', 'Gallery', 'Programs', 'Admissions', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`transition-colors hover:text-blue-600 ${scrolled ? 'text-slate-700' : 'text-slate-700 lg:text-white'}`}
              >
                {item}
              </a>
            ))}
            <WhatsAppButton text="Admissions Info" className="scale-90" />
          </nav>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-0 bg-white z-[60] flex flex-col p-8 lg:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-bold text-xl">{SCHOOL_CONFIG.name}</span>
                <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
              </div>
              <div className="flex flex-col gap-6 text-2xl font-bold text-slate-900">
                {['About', 'Why Us', 'Gallery', 'Programs', 'Admissions', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{item}</a>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-4">
                <WhatsAppButton className="w-full justify-center" />
                <PrimaryCTA className="w-full justify-center" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={SCHOOL_CONFIG.heroImage} 
            alt="School Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-blue-600 text-white text-[10px] md:text-sm font-black px-4 py-1.5 rounded-full mb-6 tracking-widest shadow-xl shadow-blue-500/20"
            >
              {SCHOOL_CONFIG.admissionStatus}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
            >
              The Best Foundation For Your <span className="text-blue-400 italic">Child's Future.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl"
            >
              We combine academic excellence with strong moral values to shape the next generation of leaders. Join our community of high achievers.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <WhatsAppButton text="Chat With Admissions" className="text-lg py-4 px-8" />
              <PrimaryCTA text="Book Private Visit" className="text-lg py-4 px-8 bg-slate-100 !text-slate-900 border-2 border-slate-200" />
            </motion.div>

            {/* Quick Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-8 items-center"
            >
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="parent" />
                  </div>
                ))}
              </div>
              <div className="text-slate-400 text-sm">
                <span className="text-white font-bold block text-lg">500+ Happy Parents</span>
                Trust {SCHOOL_CONFIG.name} with their children's education
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract shapes for premium feel */}
        <div className="absolute right-[-10%] top-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute left-[30%] bottom-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* 3. QUICK TRUST FACTS */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {[
              { icon: Award, label: "Govt. Approved", value: "Fully Certified", desc: "Meets all standards" },
              { icon: Users, label: "Expert Staff", value: "30+ Teachers", desc: "Highly qualified" },
              { icon: GraduationCap, label: "Success Rate", value: "98% Pass Rate", desc: "WAEC & NECO" },
              { icon: ShieldCheck, label: "Safe Campus", value: "24/7 Security", desc: "CCTV & Protocols" }
            ].map((fact, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-blue-600 mb-4 border border-slate-100">
                  <fact.icon size={28} />
                </div>
                <h3 className="text-slate-900 font-black text-xl mb-1">{fact.value}</h3>
                <p className="text-slate-500 text-sm font-medium">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SCHOOL */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img src={SCHOOL_CONFIG.aboutImage} alt="Students" className="w-full" />
              </motion.div>
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -right-10 z-20 bg-blue-600 text-white p-8 rounded-full shadow-2xl hidden md:block"
              >
                <div className="text-4xl font-black">15+</div>
                <div className="text-xs font-bold leading-tight uppercase">Years of<br />Excellence</div>
              </motion.div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-50 rounded-full -z-0"></div>
            </div>
            
            <div className="flex-1">
              <SectionHeading 
                centered={false}
                subtitle="About Our School"
                title="Committed to Academic & Moral Excellence Since 2008"
              />
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                At {SCHOOL_CONFIG.name}, we believe that every child is unique and has the potential to achieve greatness. Our curriculum is designed to challenge students intellectually while nurturing their creative and moral growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <CheckCircle2 size={20} className="text-blue-600" /> Our Mission
                  </h4>
                  <p className="text-slate-600 text-sm">To provide a stimulating learning environment that fosters academic rigor and ethical character.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <CheckCircle2 size={20} className="text-blue-600" /> Our Vision
                  </h4>
                  <p className="text-slate-600 text-sm">To be the leading institution in Nigeria known for producing well-rounded, innovative leaders.</p>
                </div>
              </div>
              
              <PrimaryCTA text="Learn More About Us" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section id="why us" className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            subtitle="Why Choose Us"
            title="The Advantage Your Child Deserves"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Qualified Educators", desc: "Our teachers are certified professionals dedicated to interactive and personalized learning." },
              { icon: ShieldCheck, title: "Character Development", desc: "We place heavy emphasis on moral discipline, religious values, and ethical behavior." },
              { icon: Cpu, title: "Modern ICT Lab", desc: "Equipping students with early digital literacy through our fully equipped computer facilities." },
              { icon: BookOpen, title: "Rich Curriculum", desc: "A blend of Nigerian and International standards to ensure global competitiveness." },
              { icon: Clock, title: "Safe Environment", desc: "A serene, secure, and child-friendly campus with 24/7 monitoring and security." },
              { icon: GraduationCap, title: "Extra-Curriculars", desc: "From sports to music and arts, we nurture every talent your child possesses." }
            ].map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-2 shadow-xl hover:shadow-blue-500/10"
              >
                <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <reason.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SCHOOL LIFE / GALLERY */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="Galleria"
            title="A Glimpse Into School Life"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1577891729319-f28b3c14a533?q=80&w=800", title: "Smart Classroom" },
              { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800", title: "Sport Day" },
              { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800", title: "Library" },
              { img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800", title: "Cultural Day" },
              { img: "https://images.unsplash.com/photo-1491843351663-7111924475a1?q=80&w=800", title: "Laboratory" },
              { img: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800", title: "Graduation" },
              { img: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=800", title: "Assembly" },
              { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", title: "Creativity" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative h-48 md:h-64 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-white font-bold text-sm">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="text-blue-600 font-bold hover:underline">View All Full Gallery →</button>
          </div>
        </div>
      </section>

      {/* 7. ACADEMIC PROGRAMS */}
      <section id="programs" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="Foundations of Learning"
            title="Our Academic Programs"
          />
          
          <div className="flex flex-col lg:flex-row gap-8">
            {[
              { 
                level: "Nursery / Preschool", 
                age: "Age 2 - 5", 
                desc: "Focusing on cognitive development, play-based learning, and early socialization skills.", 
                features: ["Montessori approach", "Early literacy", "Art & Music", "Safe playground"],
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600"
              },
              { 
                level: "Primary School", 
                age: "Age 6 - 11", 
                desc: "Building solid foundations in Literacy, Numeracy, Science, and Social Studies.", 
                features: ["Critical thinking", "ICT foundation", "Leadership skills", "Inter-house sports"],
                image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600"
              },
              { 
                level: "Secondary School", 
                age: "Age 12 - 18", 
                desc: "Rigorous academic preparation for national and international examinations with career guidance.", 
                features: ["WAEC/NECO Prep", "Science & Art Labs", "Debate & Clubs", "Technical Skills"],
                image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=600"
              }
            ].map((prog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : i === 2 ? 30 : 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 transition-all hover:shadow-2xl"
              >
                <div className="h-48 overflow-hidden">
                  <img src={prog.image} alt={prog.level} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{prog.age}</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-2 mb-4">{prog.level}</h3>
                  <p className="text-slate-600 text-sm mb-8 leading-relaxed">{prog.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {prog.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle2 size={16} className="text-green-500" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 rounded-2xl bg-slate-50 text-slate-900 font-bold border-2 border-slate-100 hover:bg-slate-100 transition-colors">
                    Enrollment Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OPTIONAL SECTIONS (Toggle via CONFIG) */}
      
      {/* Principal Message */}
      {SCHOOL_CONFIG.showPrincipalMessage && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-white/20 p-2 shrink-0 border border-white/20">
                <img src="https://i.pravatar.cc/300?u=principal" alt="Principal" className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div>
                <h4 className="text-blue-100 font-bold uppercase tracking-widest text-sm mb-4">Message From the Principal</h4>
                <p className="text-xl md:text-3xl font-bold leading-relaxed mb-8 italic">
                  "Our goal is not just to teach children to read and write, but to empower them to think critically and act with integrity. Every student who walks through our gates is a seed of greatness."
                </p>
                <div className="flex flex-col">
                  <span className="text-2xl font-black">Mrs. [PRINCIPAL_NAME]</span>
                  <span className="text-blue-200 font-medium">Lagos State Certified Educator, M.Ed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WAEC/NECO Results */}
      {SCHOOL_CONFIG.showWAEC && (
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <SectionHeading 
              subtitle="Proven Success"
              title="Academic Achievement Record"
            />
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "WAEC 2023", value: "98% Credit", desc: "In Math & English" },
                { label: "NECO 2023", value: "100% Pass", desc: "Overall performance" },
                { label: "JAMB 2024", value: "240+ Avg", desc: "Top scores achieved" }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <div className="text-4xl font-black text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-lg font-bold text-slate-900 mb-1">{stat.label}</div>
                  <p className="text-slate-500 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="Parent Stories"
            title="Trusted By Hundreds of Families"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mrs. Adeyemi", class: "Mother of JSS2 Student", img: "1", text: "The discipline and personal attention my son receives here is unmatched. His academic performance has improved significantly in just one year." },
              { name: "Pastor Okafor", class: "Parent of Primary 4 Child", img: "2", text: "What I love most is the balance between academics and spiritual growth. The teachers truly care about the moral character of the students." },
              { name: "Dr. Fatima Musa", class: "Mother of Class 5 Pupil", img: "3", text: "As a working parent, the safe and organized environment gives me peace of mind. The communication between the school and parents is excellent." }
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                </div>
                <p className="text-slate-700 italic mb-8 flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=parent${t.img}`} alt={t.name} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-xs text-slate-500">{t.class}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-4xl">
          <SectionHeading 
            subtitle="Got Questions?"
            title="Frequently Asked Questions"
          />
          
          <div className="space-y-4">
            {[
              { q: "What is the admission procedure?", a: "Admissions begin with the purchase of a form from the school office, followed by an assessment test and an interview for both parents and student." },
              { q: "Do you offer school bus services?", a: "Yes, we provide safe and comfortable transport services covering most areas within [SCHOOL_LOCATION]. Contact us for specific routes." },
              { q: "What are the school hours?", a: "Nursery/Primary hours are 8:00 AM - 1:30 PM. Secondary School hours are 8:00 AM - 3:00 PM. We also offer after-school care services." },
              { q: "Are scholarships available?", a: "We offer academic merit-based scholarships for exceptionally gifted students entering the Secondary School level. Applications are typically in May." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform ${activeFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFAQ === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-slate-600 text-sm leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <SectionHeading 
                centered={false}
                subtitle="Reach Out"
                title="We’d Love To Hear From You"
              />
              <p className="text-slate-600 mb-10 text-lg">Our admissions team is available to answer your questions and guide you through the process of joining our academic community.</p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Our Location</h5>
                    <p className="text-slate-600 text-sm">{SCHOOL_CONFIG.address}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">WhatsApp Us</h5>
                    <p className="text-slate-600 text-sm">{SCHOOL_CONFIG.whatsapp}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Email Us</h5>
                    <p className="text-slate-600 text-sm">{SCHOOL_CONFIG.email}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                    <Clock />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Office Hours</h5>
                    <p className="text-slate-600 text-sm">Mon - Fri: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <WhatsAppButton text="Get Admissions Guidance" className="w-full sm:w-auto" />
              </div>
            </div>

            <div className="flex-1 w-full h-[400px] lg:h-auto min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
               {/* GOOGLE MAP EMBED */}
               <iframe 
                src={SCHOOL_CONFIG.googleMapEmbed} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  {SCHOOL_CONFIG.name.charAt(0)}
                </div>
                <span className="font-black text-2xl tracking-tighter">{SCHOOL_CONFIG.name}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nurturing the future leaders of Nigeria through quality education, character building, and world-class facilities since 2008.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-8">Navigation</h5>
              <div className="flex flex-col gap-4 text-slate-400 text-sm">
                {['About Us', 'Academic Programs', 'School Gallery', 'Admissions', 'Student Life'].map(item => (
                  <a key={item} href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-8">Support</h5>
              <div className="flex flex-col gap-4 text-slate-400 text-sm">
                {['Contact Us', 'Our Location', 'Fee Structure', 'Career', 'Terms of Service'].map(item => (
                  <a key={item} href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-8 text-blue-400">Newsletter</h5>
              <p className="text-slate-400 text-sm mb-6">Stay updated with the latest news and events from {SCHOOL_CONFIG.name}.</p>
              <div className="flex gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800">
                <input type="email" placeholder="Email Address" className="bg-transparent border-none focus:ring-0 text-sm px-4 flex-grow outline-none" />
                <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"><ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} {SCHOOL_CONFIG.name}. All Rights Reserved.</p>
            <p className="flex items-center gap-1 font-medium">
              Website by <span className="text-blue-400 font-bold">Mubarak Digital Solutions</span>
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (Sticky CTA) */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-[100]"
      >
        <a 
          href={`https://wa.me/${SCHOOL_CONFIG.whatsapp.replace(/\D/g, '')}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-green-600 text-white p-2 pr-6 rounded-full shadow-2xl hover:bg-green-700 transition-all active:scale-95"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
            <MessageCircle size={30} fill="currentColor" />
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-[10px] font-bold uppercase leading-none opacity-80">Online</span>
            <span className="font-bold text-sm">Admissions Help</span>
          </div>
        </a>
      </motion.div>

    </div>
  );
}
