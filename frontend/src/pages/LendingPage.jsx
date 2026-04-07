// import React, { useState, useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Lenis from 'lenis'
// import Navbar from '../components/Navbar'
// import Hero from '../components/Hero'
// import Features from '../components/Features'
// import HowItWorks from '../components/HowItWorks'
// import Templates from '../components/Templates'
// import Pricing from '../components/Pricing'
// import Testimonials from '../components/Testimonials'
// import CTA from '../components/CTA'
// import Footer from '../components/Footer'
// import Loader from '../components/Loader'

// gsap.registerPlugin(ScrollTrigger)

// function App() {
//   const [loading, setLoading] = useState(true)
//   const appRef = useRef(null)
//   const lenisRef = useRef(null)

//   useEffect(() => {
//   const lenis = new Lenis({
//     duration: 1.2,
//     easing: (t) => 1 - Math.pow(1 - t, 3),
//     smoothWheel: true,
//     smoothTouch: false,
//   });

//   lenisRef.current = lenis;

//   // Sync Lenis with GSAP
//   lenis.on("scroll", ScrollTrigger.update);

//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });

//   gsap.ticker.lagSmoothing(0);

//   // Loading simulation
//   setTimeout(() => setLoading(false), 1500);

//   // Refresh after load
//   setTimeout(() => ScrollTrigger.refresh(), 1800);

//   return () => {
//     gsap.ticker.remove(lenis.raf);
//     lenis.destroy();
//   };
// }, []);
//   if (loading) {
//     return <Loader />
//   }

//   return (
//     <div ref={appRef} className="relative bg-[#03070f] overflow-hidden">
//       {/* Background Elements */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,201,167,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,201,167,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
//         <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-[#00c9a7]/5 rounded-full blur-[100px] animate-pulse" />
//         <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-[#00c9a7]/5 rounded-full blur-[100px] animate-pulse animation-delay-2000" />
//       </div>

//       {/* Floating Orbs */}
//       <div className="fixed top-1/4 right-1/4 w-1 h-1 bg-[#00c9a7] rounded-full shadow-[0_0_20px_#00c9a7] animate-ping" />
//       <div className="fixed bottom-1/3 left-1/3 w-1 h-1 bg-[#00c9a7] rounded-full shadow-[0_0_20px_#00c9a7] animate-ping animation-delay-2000" />
//       <div className="fixed top-2/3 right-1/3 w-1 h-1 bg-[#00c9a7] rounded-full shadow-[0_0_20px_#00c9a7] animate-ping animation-delay-1000" />

//       <Navbar />
//       <Hero />
//       <Features />
//       <HowItWorks />
//       <Templates />
//       <Pricing />
//       <Testimonials />
//       <CTA />
//       <Footer />
//     </div>
//   )
// }

// export default App



import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineSparkles,
  HiOutlineShoppingCart,
  HiOutlineUserGroup,
  HiOutlineChat,
  HiOutlineVideoCamera,
  HiOutlinePhotograph,
  HiOutlineLocationMarker,
  HiOutlineMap,
  HiOutlineCode,
  HiOutlineDownload,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineChip,
  HiOutlineGlobe,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { BsStars, BsRobot, BsGithub, BsTwitter, BsLinkedin, BsArrowRight, BsCheckCircleFill } from "react-icons/bs";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Theme definitions (matching Claude.ai style)
  const themes = {
    dark: {
      bg: "#0F0F0F",
      card: "#1A1A1A",
      cardHover: "#252525",
      border: "#2A2A2A",
      textPrimary: "#FFFFFF",
      textSecondary: "#A0A0A0",
      textMuted: "#6B6B6B",
      accent: "#10A37F",
      accentHover: "#2D8C6F",
      accentGradient: "linear-gradient(135deg, #10A37F 0%, #2D8C6F 100%)",
    },
    light: {
      bg: "#FFFFFF",
      card: "#F7F7F8",
      cardHover: "#F0F0F0",
      border: "#E5E5E5",
      textPrimary: "#1A1A1A",
      textSecondary: "#6B6B6B",
      textMuted: "#8E8E8E",
      accent: "#10A37F",
      accentHover: "#2D8C6F",
      accentGradient: "linear-gradient(135deg, #10A37F 0%, #2D8C6F 100%)",
    },
  };

  const theme = themes[currentTheme];

  // Toggle theme
  const toggleTheme = () => {
    setCurrentTheme(prev => prev === "dark" ? "light" : "dark");
  };

  // Features data
  const features = [
    {
      icon: <HiOutlineChip className="text-2xl" />,
      title: "Full-Stack Generation",
      description: "Generate complete frontend and backend code with modern frameworks like React, Node.js, and more.",
      color: "#10A37F",
    },
    {
      icon: <HiOutlineCode className="text-2xl" />,
      title: "Live Preview",
      description: "See your project come to life instantly with real-time preview and code editing.",
      color: "#3B82F6",
    },
    {
      icon: <HiOutlineDownload className="text-2xl" />,
      title: "One-Click Download",
      description: "Download your complete project as a ZIP file and deploy anywhere.",
      color: "#8B5CF6",
    },
    {
      icon: <HiOutlineShieldCheck className="text-2xl" />,
      title: "Production Ready",
      description: "Generated code follows best practices and is ready for production deployment.",
      color: "#10A37F",
    },
    {
      icon: <HiOutlineLightBulb className="text-2xl" />,
      title: "Smart AI Assistant",
      description: "Powered by advanced AI that understands your requirements and builds exactly what you need.",
      color: "#E6B02E",
    },
    {
      icon: <HiOutlineChartBar className="text-2xl" />,
      title: "Analytics Ready",
      description: "Built-in support for charts, analytics, and data visualization components.",
      color: "#3B82F6",
    },
  ];

  // Templates data
  const templates = [
    { name: "Education ERP", icon: <HiOutlineSparkles />, gradient: "linear-gradient(135deg, #10A37F 0%, #2D8C6F 100%)", description: "Student management, attendance, grades" },
    { name: "E-commerce", icon: <HiOutlineShoppingCart />, gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", description: "Product catalog, cart, payments" },
    { name: "Social Media", icon: <HiOutlineUserGroup />, gradient: "linear-gradient(135deg, #8B5CF6 0%, #10A37F 100%)", description: "Posts, likes, comments, followers" },
    { name: "Chat App", icon: <HiOutlineChat />, gradient: "linear-gradient(135deg, #10A37F 0%, #3B82F6 100%)", description: "Real-time messaging, groups" },
    { name: "Video App", icon: <HiOutlineVideoCamera />, gradient: "linear-gradient(135deg, #E6B02E 0%, #10A37F 100%)", description: "Streaming, uploads, playlists" },
    { name: "Music App", icon: <HiOutlinePhotograph />, gradient: "linear-gradient(135deg, #8B5CF6 0%, #E6B02E 100%)", description: "Audio playback, albums, search" },
    { name: "Food App", icon: <HiOutlineLocationMarker />, gradient: "linear-gradient(135deg, #10A37F 0%, #E6B02E 100%)", description: "Restaurants, ordering, tracking" },
    { name: "Travel App", icon: <HiOutlineMap />, gradient: "linear-gradient(135deg, #3B82F6 0%, #10A37F 100%)", description: "Bookings, maps, reviews" },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full-Stack Developer",
      content: "EVA AI  saved me hours of boilerplate coding. The generated code is clean, modern, and actually works!",
      avatar: "SC",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Startup Founder",
      content: "From idea to working prototype in minutes. This tool is a game-changer for rapid development.",
      avatar: "MR",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Tech Lead",
      content: "The quality of generated code is impressive. It follows best practices and is easy to extend.",
      avatar: "EW",
      rating: 5,
    },
  ];

 

  // Navigation links
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Templates", href: "#templates" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg, color: theme.textPrimary }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: `${theme.bg}CC`, borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: theme.accentGradient }}>
                <BsStars className="text-white text-sm" />
              </div>
              <span className="font-semibold text-lg" style={{ color: theme.textPrimary }}>EVA AI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: theme.textSecondary }}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all"
                style={{ backgroundColor: theme.card, color: theme.textSecondary }}
              >
                {currentTheme === "dark" ? <HiOutlineSun className="text-sm" /> : <HiOutlineMoon className="text-sm" />}
              </button>
              <Link
                to="/app"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90"
                style={{ background: theme.accentGradient, color: "white" }}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ backgroundColor: theme.card }}
            >
              {isMenuOpen ? <HiOutlineX className="text-xl" /> : <HiOutlineMenu className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t"
              style={{ backgroundColor: theme.bg, borderColor: theme.border }}
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-sm"
                    style={{ color: theme.textSecondary }}
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={toggleTheme}
                  className="w-full py-2 rounded-lg text-sm text-left"
                  style={{ backgroundColor: theme.card, color: theme.textSecondary }}
                >
                  {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
                <Link
                  to="/app"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-2 text-center rounded-lg text-sm font-medium"
                  style={{ background: theme.accentGradient, color: "white" }}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative pt-32 pb-20 px-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
            style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}
          >
            <BsStars className="text-xs" style={{ color: theme.accent }} />
            <span className="text-xs" style={{ color: theme.textSecondary }}>AI-Powered Development</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Build Complete Apps
            <br />
            <span style={{ background: theme.accentGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              With AI
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg mb-8"
            style={{ color: theme.textSecondary }}
          >
            Describe your project in plain English, and let AI generate a complete, production-ready application with modern tech stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/app"
              className="px-6 py-3 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
              style={{ background: theme.accentGradient }}
            >
              Start Building <HiOutlineArrowRight className="text-sm" />
            </Link>
            <a
              href="#features"
              className="px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
              style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, color: theme.textSecondary }}
            >
              Learn More <BsArrowRight className="text-sm" />
            </a>
          </motion.div>

          {/* Stats */}
         
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: theme.accent }} />
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.textSecondary }}>
              Everything you need to build modern applications, powered by AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl transition-all hover:scale-105"
                style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.color}20`, color: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm" style={{ color: theme.textSecondary }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 px-4" style={{ backgroundColor: theme.card }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Templates</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.textSecondary }}>
              Choose from a variety of templates or describe your custom idea
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-4 rounded-xl cursor-pointer transition-all"
                style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3" style={{ background: template.gradient }}>
                  <span className="text-white text-xl">{template.icon}</span>
                </div>
                <h3 className="font-semibold mb-1">{template.name}</h3>
                <p className="text-xs" style={{ color: theme.textMuted }}>{template.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.textSecondary }}>
              Three simple steps to build your application
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Describe Your Idea", description: "Tell the AI what you want to build in plain English", icon: <HiOutlineChat className="text-2xl" /> },
              { step: "02", title: "AI Generation", description: "Our AI generates complete, production-ready code", icon: <BsStars className="text-2xl" /> },
              { step: "03", title: "Preview & Download", description: "Preview live, edit code, and download your project", icon: <HiOutlineDownload className="text-2xl" /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl"
                style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{ background: theme.accentGradient, color: "white" }}>
                  {item.step}
                </div>
                <div className="flex justify-center mb-3" style={{ color: theme.accent }}>{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: theme.textSecondary }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4" style={{ backgroundColor: theme.card }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Loved by Developers</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.textSecondary }}>
              Join thousands of developers who build faster with EVA AI 
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl"
                style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: theme.accentGradient, color: "white" }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs" style={{ color: theme.textMuted }}>{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm mb-3" style={{ color: theme.textSecondary }}>"{testimonial.content}"</p>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiOutlineStar key={i} className="text-xs fill-current" style={{ color: theme.accent }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-2xl"
            style={{ background: theme.accentGradient }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Build?</h2>
            <p className="text-lg mb-8 text-white/90">
              Start building your next project with AI. It's free to get started!
            </p>
            <Link
              to="/app"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
              style={{ backgroundColor: "white", color: theme.accent }}
            >
              Start Building Now <HiOutlineArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: theme.accentGradient }}>
                <BsStars className="text-white text-sm" />
              </div>
              <span className="font-semibold">EVA AI</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: theme.textMuted }}>Terms</a>
              <a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: theme.textMuted }}>Privacy</a>
              <a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: theme.textMuted }}>Contact</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg transition-all hover:scale-110" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
                <BsGithub />
              </a>
              <a href="#" className="p-2 rounded-lg transition-all hover:scale-110" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
                <BsTwitter />
              </a>
              <a href="#" className="p-2 rounded-lg transition-all hover:scale-110" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-xs" style={{ color: theme.textMuted }}>
            © 2024 EVA AI . Built with AI for developers.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;