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



// import React, { useState, useEffect } from "react";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   HiOutlineSparkles,
//   HiOutlineShoppingCart,
//   HiOutlineUserGroup,
//   HiOutlineChat,
//   HiOutlineVideoCamera,
//   HiOutlinePhotograph,
//   HiOutlineLocationMarker,
//   HiOutlineMap,
//   HiOutlineCode,
//   HiOutlineDownload,
//   HiOutlineCheckCircle,
//   HiOutlineArrowRight,
//   HiOutlineMenu,
//   HiOutlineX,
//   HiOutlineSun,
//   HiOutlineMoon,
//   HiOutlineChip,
//   HiOutlineGlobe,
//   HiOutlineLightBulb,
//   HiOutlineCog,
//   HiOutlineShieldCheck,
//   HiOutlineChartBar,
//   HiOutlineUsers,
//   HiOutlineClock,
//   HiOutlineStar,
//   HiOutlinePlay,
//   HiOutlineExternalLink,
// } from "react-icons/hi";
// import { BsStars, BsRobot, BsGithub, BsTwitter, BsLinkedin, BsArrowRight, BsCheckCircleFill } from "react-icons/bs";

// const LandingPage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentTheme, setCurrentTheme] = useState("dark");
//   const { scrollYProgress } = useScroll();
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
//   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

//   // Theme definitions (matching Claude.ai style)
//   const themes = {
//     dark: {
//       bg: "#0F0F0F",
//       card: "#1A1A1A",
//       cardHover: "#252525",
//       border: "#2A2A2A",
//       textPrimary: "#FFFFFF",
//       textSecondary: "#A0A0A0",
//       textMuted: "#6B6B6B",
//       accent: "#592e9f",
//       accentHover: "#4810a3",
//       accentGradient: "linear-gradient(135deg, #4810a3 0%, #4810a3 100%)",
//     },
//     light: {
//       bg: "rgb(11, 8, 8)",
//       card: "#F7F7F8",
//       cardHover: "#F0F0F0",
//       border: "#E5E5E5",
//       textPrimary: "#1A1A1A",
//       textSecondary: "#6B6B6B",
//       textMuted: "#8E8E8E",
//       accent: "#4810a3",
//       accentHover: "#4810a3",
//       accentGradient: "linear-gradient(135deg, #4810a3 0%, #4810a3 100%)",
//     },
//   };

//   const theme = themes[currentTheme];

//   // Toggle theme
//   const toggleTheme = () => {
//     setCurrentTheme(prev => prev === "dark" ? "light" : "dark");
//   };

//   // Features data
//   const features = [
//     {
//       icon: <HiOutlineChip className="text-2xl" />,
//       title: "Full-Stack Generation",
//       description: "Generate complete frontend and backend code with modern frameworks like React, Node.js, and more.",
//       color: "#4810a3",
//     },
//     {
//       icon: <HiOutlineCode className="text-2xl" />,
//       title: "Live Preview",
//       description: "See your project come to life instantly with real-time preview and code editing.",
//       color: "#3B82F6",
//     },
//     {
//       icon: <HiOutlineDownload className="text-2xl" />,
//       title: "One-Click Download",
//       description: "Download your complete project as a ZIP file and deploy anywhere.",
//       color: "#8B5CF6",
//     },
//     {
//       icon: <HiOutlineShieldCheck className="text-2xl" />,
//       title: "Production Ready",
//       description: "Generated code follows best practices and is ready for production deployment.",
//       color: "#4810a3",
//     },
//     {
//       icon: <HiOutlineLightBulb className="text-2xl" />,
//       title: "Smart AI Assistant",
//       description: "Powered by advanced AI that understands your requirements and builds exactly what you need.",
//       color: "#E6B02E",
//     },
//     {
//       icon: <HiOutlineChartBar className="text-2xl" />,
//       title: "Analytics Ready",
//       description: "Built-in support for charts, analytics, and data visualization components.",
//       color: "#3B82F6",
//     },
//   ];

//   // Templates data
//   const templates = [
//     { name: "Education ERP", icon: <HiOutlineSparkles />, gradient: "linear-gradient(135deg, #10A37F 0%, #2D8C6F 100%)", description: "Student management, attendance, grades" },
//     { name: "E-commerce", icon: <HiOutlineShoppingCart />, gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", description: "Product catalog, cart, payments" },
//     { name: "Social Media", icon: <HiOutlineUserGroup />, gradient: "linear-gradient(135deg, #8B5CF6 0%, #10A37F 100%)", description: "Posts, likes, comments, followers" },
//     { name: "Chat App", icon: <HiOutlineChat />, gradient: "linear-gradient(135deg, #10A37F 0%, #3B82F6 100%)", description: "Real-time messaging, groups" },
//     { name: "Video App", icon: <HiOutlineVideoCamera />, gradient: "linear-gradient(135deg, #E6B02E 0%, #10A37F 100%)", description: "Streaming, uploads, playlists" },
//     { name: "Music App", icon: <HiOutlinePhotograph />, gradient: "linear-gradient(135deg, #8B5CF6 0%, #E6B02E 100%)", description: "Audio playback, albums, search" },
//     { name: "Food App", icon: <HiOutlineLocationMarker />, gradient: "linear-gradient(135deg, #10A37F 0%, #E6B02E 100%)", description: "Restaurants, ordering, tracking" },
//     { name: "Travel App", icon: <HiOutlineMap />, gradient: "linear-gradient(135deg, #3B82F6 0%, #10A37F 100%)", description: "Bookings, maps, reviews" },
//   ];

//   // Testimonials data
//   const testimonials = [
//     {
//       name: "Sarah Chen",
//       role: "Full-Stack Developer",
//       content: "EVA AI  saved me hours of boilerplate coding. The generated code is clean, modern, and actually works!",
//       avatar: "SC",
//       rating: 5,
//     },
//     {
//       name: "Michael Rodriguez",
//       role: "Startup Founder",
//       content: "From idea to working prototype in minutes. This tool is a game-changer for rapid development.",
//       avatar: "MR",
//       rating: 5,
//     },
//     {
//       name: "Emily Watson",
//       role: "Tech Lead",
//       content: "The quality of generated code is impressive. It follows best practices and is easy to extend.",
//       avatar: "EW",
//       rating: 5,
//     },
//   ];

 

//   // Navigation links
//   const navLinks = [
//     { name: "Features", href: "#features" },
//     { name: "Templates", href: "#templates" },
//     { name: "How It Works", href: "#how-it-works" },
//     { name: "Testimonials", href: "#testimonials" },
//   ];

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: theme.bg, color: theme.textPrimary }}>
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: `${theme.bg}CC`, borderColor: theme.border }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <Link to="/" className="flex items-center gap-2 group">
//               <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: theme.accentGradient }}>
//                 <BsStars className="text-white text-sm" />
//               </div>
//               <span className="font-semibold text-lg" style={{ color: theme.textPrimary }}>EVA AI</span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-sm transition-colors hover:opacity-70"
//                   style={{ color: theme.textSecondary }}
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-lg transition-all"
//                 style={{ backgroundColor: theme.card, color: theme.textSecondary }}
//               >
//                 {currentTheme === "dark" ? <HiOutlineSun className="text-sm" /> : <HiOutlineMoon className="text-sm" />}
//               </button>
//               <Link
//                 to="/app"
//                 className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90"
//                 style={{ background: theme.accentGradient, color: "white" }}
//               >
//                 Get Started
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-lg"
//               style={{ backgroundColor: theme.card }}
//             >
//               {isMenuOpen ? <HiOutlineX className="text-xl" /> : <HiOutlineMenu className="text-xl" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden border-t"
//               style={{ backgroundColor: theme.bg, borderColor: theme.border }}
//             >
//               <div className="px-4 py-4 space-y-3">
//                 {navLinks.map((link) => (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block py-2 text-sm"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     {link.name}
//                   </a>
//                 ))}
//                 <button
//                   onClick={toggleTheme}
//                   className="w-full py-2 rounded-lg text-sm text-left"
//                   style={{ backgroundColor: theme.card, color: theme.textSecondary }}
//                 >
//                   {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
//                 </button>
//                 <Link
//                   to="/app"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block w-full py-2 text-center rounded-lg text-sm font-medium"
//                   style={{ background: theme.accentGradient, color: "white" }}
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Hero Section */}
//       <motion.section
//         style={{ opacity, scale }}
//         className="relative pt-32 pb-20 px-4 overflow-hidden"
//       >
//         <div className="max-w-7xl mx-auto text-center">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
//             style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}
//           >
//             <BsStars className="text-xs" style={{ color: theme.accent }} />
//             <span className="text-xs" style={{ color: theme.textSecondary }}>AI-Powered Development</span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
//           >
//             Build Complete Apps
//             <br />
//             <span style={{ background: theme.accentGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//               With AI
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="max-w-2xl mx-auto text-lg mb-8"
//             style={{ color: theme.textSecondary }}
//           >
//             Describe your project in plain English, and let AI generate a complete, production-ready application with modern tech stack.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//           >
//             <Link
//               to="/app"
//               className="px-6 py-3 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
//               style={{ background: theme.accentGradient }}
//             >
//               Start Building <HiOutlineArrowRight className="text-sm" />
//             </Link>
//             <a
//               href="#features"
//               className="px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
//               style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, color: theme.textSecondary }}
//             >
//               Learn More <BsArrowRight className="text-sm" />
//             </a>
//           </motion.div>

//           {/* Stats */}
         
//         </div>

//         {/* Background Gradient */}
//         <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: theme.accent }} />
//         </div>
//       </motion.section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
//             <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.textSecondary }}>
//               Everything you need to build modern applications, powered by AI
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="p-6 rounded-xl transition-all hover:scale-105"
//                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}
//               >
//                 <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.color}20`, color: feature.color }}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-sm" style={{ color: theme.textSecondary }}>{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Templates Section */}
//       <section id="templates" className="py-20 px-4" style={{ backgroundColor: theme.card }}>
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Project Templates</h2>
//             <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.textSecondary }}>
//               Choose from a variety of templates or describe your custom idea
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {templates.map((template, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.05 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -4 }}
//                 className="p-4 rounded-xl cursor-pointer transition-all"
//                 style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
//               >
//                 <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3" style={{ background: template.gradient }}>
//                   <span className="text-white text-xl">{template.icon}</span>
//                 </div>
//                 <h3 className="font-semibold mb-1">{template.name}</h3>
//                 <p className="text-xs" style={{ color: theme.textMuted }}>{template.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">How It Works</h2>
//             <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.textSecondary }}>
//               Three simple steps to build your application
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { step: "01", title: "Describe Your Idea", description: "Tell the AI what you want to build in plain English", icon: <HiOutlineChat className="text-2xl" /> },
//               { step: "02", title: "AI Generation", description: "Our AI generates complete, production-ready code", icon: <BsStars className="text-2xl" /> },
//               { step: "03", title: "Preview & Download", description: "Preview live, edit code, and download your project", icon: <HiOutlineDownload className="text-2xl" /> },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center p-6 rounded-xl"
//                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}
//               >
//                 <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{ background: theme.accentGradient, color: "white" }}>
//                   {item.step}
//                 </div>
//                 <div className="flex justify-center mb-3" style={{ color: theme.accent }}>{item.icon}</div>
//                 <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//                 <p className="text-sm" style={{ color: theme.textSecondary }}>{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-20 px-4" style={{ backgroundColor: theme.card }}>
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Loved by Developers</h2>
//             <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.textSecondary }}>
//               Join thousands of developers who build faster with EVA AI 
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="p-6 rounded-xl"
//                 style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: theme.accentGradient, color: "white" }}>
//                     {testimonial.avatar}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-sm">{testimonial.name}</h4>
//                     <p className="text-xs" style={{ color: theme.textMuted }}>{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-sm mb-3" style={{ color: theme.textSecondary }}>"{testimonial.content}"</p>
//                 <div className="flex gap-0.5">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <HiOutlineStar key={i} className="text-xs fill-current" style={{ color: theme.accent }} />
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="p-12 rounded-2xl"
//             style={{ background: theme.accentGradient }}
//           >
//             <h2 className="text-3xl font-bold mb-4 text-white">Ready to Build?</h2>
//             <p className="text-lg mb-8 text-white/90">
//               Start building your next project with AI. It's free to get started!
//             </p>
//             <Link
//               to="/app"
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
//               style={{ backgroundColor: "white", color: theme.accent }}
//             >
//               Start Building Now <HiOutlineArrowRight className="text-sm" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 px-4 border-t" style={{ borderColor: theme.border }}>
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: theme.accentGradient }}>
//                 <BsStars className="text-white text-sm" />
//               </div>
//               <span className="font-semibold">EVA AI</span>
//             </div>
//             <div className="flex gap-6">
//               <a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: theme.textMuted }}>Terms</a>
//               <a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: theme.textMuted }}>Privacy</a>
//               <a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: theme.textMuted }}>Contact</a>
//             </div>
//             <div className="flex gap-4">
//               <a href="#" className="p-2 rounded-lg transition-all hover:scale-110" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
//                 <BsGithub />
//               </a>
//               <a href="#" className="p-2 rounded-lg transition-all hover:scale-110" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
//                 <BsTwitter />
//               </a>
//               <a href="#" className="p-2 rounded-lg transition-all hover:scale-110" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
//                 <BsLinkedin />
//               </a>
//             </div>
//           </div>
//           <div className="text-center mt-8 text-xs" style={{ color: theme.textMuted }}>
//             © 2024 EVA AI . Built with AI for developers.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";

// ─── THEME ────────────────────────────────────────────────────────────────────
const C = {
  violet:     "#7466FA",
  violetDim:  "#5a4de0",
  violetGlow: "rgba(116,102,250,0.20)",
  violetSoft: "rgba(116,102,250,0.08)",
  bg:         "#ffffff",
  surface:    "#f8f7ff",
  surfaceHi:  "#f0eeff",
  border:     "rgba(116,102,250,0.22)",
  borderSub:  "rgba(116,102,250,0.10)",
  text:       "#16113a",
  textSub:    "#5b5380",
  textMuted:  "#9d98b8",
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

// ─── NAV ──────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      transition: "all 0.4s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: `linear-gradient(135deg, ${C.violet}, ${C.violetDim})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 0 20px ${C.violetGlow}`,
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="8" cy="8" r="2" fill="white"/>
            </svg>
          </div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: C.text, letterSpacing: "-0.02em" }}>EVA AI</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="nav-desktop">
          {["Features", "Templates", "How it Works", "Pricing"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} style={{
              color: C.textSub, fontSize: 14, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = C.text}
            onMouseLeave={e => e.target.style.color = C.textSub}
            >{l}</a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
         
          <Link to="/login" style={{
            background: `linear-gradient(135deg, ${C.violet}, ${C.violetDim})`,
            color: "white", padding: "9px 20px", borderRadius: 10, fontSize: 14,
            fontWeight: 600, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
            boxShadow: `0 4px 20px ${C.violetGlow}`,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = `0 8px 30px ${C.violetGlow}`; }}
          onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = `0 4px 20px ${C.violetGlow}`; }}
          >Login / Register</Link>
        </div>
      </div>
    </nav>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: 100 }}>
      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle, ${C.violetGlow} 0%, transparent 70%)`, pointerEvents: "none", filter: "blur(40px)" }} />
      <div style={{ position: "absolute", top: "30%", left: "20%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, rgba(116,102,250,0.1) 0%, transparent 70%)`, pointerEvents: "none", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", top: "20%", right: "15%", width: 250, height: 250, borderRadius: "50%", background: `radial-gradient(circle, rgba(180,160,255,0.08) 0%, transparent 70%)`, pointerEvents: "none", filter: "blur(50px)" }} />

      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
        backgroundSize: "60px 60px", opacity: 0.4,
      }} />

      <motion.div style={{ y, opacity, position: "relative", zIndex: 2, textAlign: "center", maxWidth: 860, padding: "0 24px" }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px",
            borderRadius: 100, border: `1px solid ${C.border}`,
            background: C.violetSoft, marginBottom: 32,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.violet, boxShadow: `0 0 8px ${C.violet}` }} />
          <span style={{ color: C.textSub, fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>AI-Powered App Builder · Now in Beta</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(44px, 7vw, 82px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 24px", color: C.text }}
        >
          Describe it.<br />
          <span style={{
            background: `linear-gradient(135deg, ${C.violet} 0%, #a594ff 50%, #c4b8ff 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>EVA builds it.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ color: C.textSub, fontSize: 18, lineHeight: 1.7, maxWidth: 580, margin: "0 auto 44px", fontFamily: "'DM Sans', sans-serif" }}
        >
          Type what you want to build. EVA AI generates a complete, production-ready full-stack application — frontend, backend, and database — in seconds.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}
        >
          <Link to="/app" style={{
            background: `linear-gradient(135deg, ${C.violet}, ${C.violetDim})`,
            color: "white", padding: "14px 32px", borderRadius: 12, fontSize: 15, fontWeight: 700,
            textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
            boxShadow: `0 8px 32px ${C.violetGlow}, inset 0 1px 0 rgba(255,255,255,0.2)`,
            display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 16px 48px ${C.violetGlow}, inset 0 1px 0 rgba(255,255,255,0.2)`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 8px 32px ${C.violetGlow}, inset 0 1px 0 rgba(255,255,255,0.2)`; }}
          >
            Start Building Free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <a href="#features" style={{
            color: C.text, padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 500,
            textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
            border: `1px solid ${C.borderSub}`, background: "rgba(255,255,255,0.04)",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: "all 0.25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.violetSoft; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderSub; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke={C.textSub} strokeWidth="1.5"/><path d="M6 8l2-2 2 2" stroke={C.textSub} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 8 8)"/></svg>
            Watch Demo
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap" }}
        >
          {[["10k+", "Apps Built"], ["98%", "Satisfaction"], ["< 60s", "Generation Time"]].map(([n, l]) => (
            <div key={n} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 26, color: C.text, letterSpacing: "-0.02em" }}>{n}</div>
              <div style={{ color: C.textMuted, fontSize: 13, fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Hero UI mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative", zIndex: 2, marginTop: 60, width: "100%", maxWidth: 900, padding: "0 24px" }}
      >
        <HeroMockup />
      </motion.div>
    </section>
  );
};

// ─── HERO MOCKUP ──────────────────────────────────────────────────────────────
const HeroMockup = () => {
  const [typed, setTyped] = useState("");
  const prompt = "Build me an e-commerce platform with product listings, cart, and Stripe payments";
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setTyped(prompt.slice(0, i));
        if (i >= prompt.length) {
          clearInterval(iv);
          setTimeout(() => setShowResult(true), 600);
        }
      }, 35);
      return () => clearInterval(iv);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      background: "#ffffff",
      border: `1px solid ${C.border}`,
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: `0 40px 120px rgba(116,102,250,0.12), 0 0 0 1px ${C.border}`,
    }}>
      {/* Window chrome */}
      <div style={{ padding: "14px 20px", borderBottom: `1px solid ${C.borderSub}`, display: "flex", alignItems: "center", gap: 8, background: C.surface }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
        <div style={{ flex: 1, marginLeft: 12, background: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "4px 12px", display: "flex", alignItems: "center" }}>
          <span style={{ color: C.textMuted, fontSize: 12, fontFamily: "monospace" }}>eva.ai/app</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 340 }}>
        {/* Left: prompt */}
        <div style={{ padding: 28, borderRight: `1px solid ${C.borderSub}` }}>
          <div style={{ color: C.textMuted, fontSize: 11, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Describe your app</div>
          <div style={{
            background: C.surfaceHi, borderRadius: 12, padding: "16px 18px",
            border: `1px solid ${C.border}`, minHeight: 100,
            color: C.text, fontSize: 14, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6,
          }}>
            {typed}<span style={{ opacity: typed.length < prompt.length ? 1 : 0, background: C.violet, display: "inline-block", width: 2, height: 16, marginLeft: 1, verticalAlign: "middle", borderRadius: 1 }} />
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 16 }}>
                <div style={{
                  background: `linear-gradient(135deg, ${C.violetSoft}, rgba(116,102,250,0.06))`,
                  border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 14px",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22d3a5", flexShrink: 0 }} />
                  <span style={{ color: C.text, fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>Generating your app… <span style={{ color: C.violet }}>87% complete</span></span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["E-commerce", "Dashboard", "SaaS App", "Portfolio", "Chat App"].map(tag => (
              <div key={tag} style={{
                padding: "4px 12px", borderRadius: 100, background: C.violetSoft,
                border: `1px solid ${C.border}`, color: C.textSub, fontSize: 12,
                fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
              }}>{tag}</div>
            ))}
          </div>
        </div>

        {/* Right: preview */}
        <div style={{ padding: 20, background: C.surface }}>
          <div style={{ color: C.textMuted, fontSize: 11, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Live Preview</div>
          <AnimatePresence>
            {showResult ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                {/* Mini UI preview */}
                <div style={{ background: C.surfaceHi, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.border}` }}>
                  <div style={{ background: C.surface, padding: "8px 12px", display: "flex", gap: 6, alignItems: "center" }}>
                    <div style={{ width: 16, height: 16, borderRadius: 4, background: C.violet }} />
                    <span style={{ color: C.text, fontSize: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>ShopAI</span>
                    <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
                      {["Home","Shop","Cart"].map(t => <span key={t} style={{ color: C.textMuted, fontSize: 9, fontFamily: "'DM Sans',sans-serif" }}>{t}</span>)}
                    </div>
                  </div>
                  <div style={{ padding: 10, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
                    {[C.violet, "#5a4de0", "#a594ff"].map((c, i) => (
                      <div key={i} style={{ borderRadius: 6, overflow: "hidden", background: C.surfaceHi }}>
                        <div style={{ height: 48, background: `linear-gradient(135deg, ${c}40, ${c}20)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: 20, height: 20, borderRadius: 4, background: c + "80" }} />
                        </div>
                        <div style={{ padding: "5px 6px" }}>
                          <div style={{ height: 5, borderRadius: 3, background: C.textMuted + "40", marginBottom: 3 }} />
                          <div style={{ height: 4, borderRadius: 3, background: C.violet + "60", width: "60%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "0 10px 10px", display: "flex", gap: 6 }}>
                    <div style={{ flex: 1, height: 22, borderRadius: 6, background: `linear-gradient(90deg, ${C.violet}, ${C.violetDim})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "white", fontSize: 9, fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>Add to Cart</span>
                    </div>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: C.surfaceHi, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 1h2l1.5 5h4l1-3H3.5" stroke={C.textSub} strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </div>
                  </div>
                </div>
                {/* File list */}
                <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 4 }}>
                  {["src/App.jsx", "src/components/ProductCard.jsx", "src/api/stripe.js", "package.json"].map((f, i) => (
                    <motion.div key={f} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                      style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 8px", borderRadius: 6, background: i === 0 ? C.violetSoft : "transparent" }}>
                      <div style={{ width: 6, height: 6, borderRadius: 2, background: i === 0 ? C.violet : C.textMuted + "60", flexShrink: 0 }} />
                      <span style={{ color: i === 0 ? C.text : C.textMuted, fontSize: 11, fontFamily: "monospace" }}>{f}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 200 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", border: `2px solid ${C.borderSub}`, borderTopColor: C.violet, margin: "0 auto 12px", animation: "spin 1s linear infinite" }} />
                  <span style={{ color: C.textMuted, fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>Waiting for prompt…</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// ─── LOGOS STRIP ──────────────────────────────────────────────────────────────
const LogosStrip = () => {
  const logos = ["Vercel", "Stripe", "Supabase", "Firebase", "AWS", "Tailwind", "Next.js", "Prisma", "PostgreSQL", "Redis"];
  return (
    <section style={{ padding: "56px 0", borderTop: `1px solid ${C.borderSub}`, borderBottom: `1px solid ${C.borderSub}`, overflow: "hidden" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <span style={{ color: C.textMuted, fontSize: 13, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>Works with your favourite stack</span>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: 0, animation: "marquee 18s linear infinite", width: "max-content" }}>
          {[...logos, ...logos].map((l, i) => (
            <div key={i} style={{
              padding: "10px 32px", color: C.textMuted, fontSize: 15, fontWeight: 600,
              fontFamily: "'Syne', sans-serif", whiteSpace: "nowrap", transition: "color 0.2s",
              borderRight: `1px solid ${C.borderSub}`,
            }}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FEATURES ─────────────────────────────────────────────────────────────────
const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Instant Full-Stack Generation",
      desc: "Describe your app in plain English. EVA generates React frontend, Node.js backend, database schema, and API routes — all wired up and ready to deploy.",
      tag: "Core",
    },
    {
      icon: "👁",
      title: "Real-Time Live Preview",
      desc: "Watch your application come alive as the AI generates it. Edit, refine, and iterate with a live preview that updates instantly.",
      tag: "Preview",
    },
    {
      icon: "🚀",
      title: "One-Click Deploy",
      desc: "Deploy your project to Vercel, Netlify, or download as a production-ready ZIP. Ship in minutes, not months.",
      tag: "Deploy",
    },
    {
      icon: "🔒",
      title: "Auth & Payments Built-in",
      desc: "EVA automatically scaffolds authentication (JWT, OAuth) and payment flows (Stripe) based on your app description. No boilerplate.",
      tag: "Security",
    },
    {
      icon: "🧠",
      title: "Context-Aware AI",
      desc: "The AI remembers your entire codebase context — request changes and EVA edits only the right files without breaking what works.",
      tag: "AI",
    },
    {
      icon: "📦",
      title: "Export Clean Code",
      desc: "Your generated code follows best practices, has proper folder structure, comments, and is easy to extend by any developer.",
      tag: "Code",
    },
  ];

  return (
    <section id="features" style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <FadeUp>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px",
            borderRadius: 100, border: `1px solid ${C.border}`, background: C.violetSoft,
            marginBottom: 20,
          }}>
            <span style={{ color: C.violet, fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Features</span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 18 }}>
            Everything you need,<br />nothing you don't
          </h2>
          <p style={{ color: C.textSub, fontSize: 17, maxWidth: 520, margin: "0 auto", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
            EVA handles the complexity so you can focus on what matters — building something people love.
          </p>
        </div>
      </FadeUp>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 2 }}>
        {features.map((f, i) => (
          <FadeUp key={f.title} delay={i * 0.08}>
            <div style={{
              padding: "36px 32px",
              border: `1px solid ${C.borderSub}`,
              background: "transparent",
              transition: "background 0.3s, border-color 0.3s",
              cursor: "default",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = C.violetSoft; e.currentTarget.style.borderColor = C.border; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = C.borderSub; }}
            >
              <div style={{ fontSize: 32, marginBottom: 18 }}>{f.icon}</div>
              <div style={{
                display: "inline-block", padding: "2px 10px", borderRadius: 100,
                background: C.violetSoft, border: `1px solid ${C.border}`,
                color: C.violet, fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 14,
              }}>{f.tag}</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 10, letterSpacing: "-0.01em" }}>{f.title}</h3>
              <p style={{ color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
const HowItWorks = () => {
  const steps = [
    { n: "01", title: "Describe Your Idea", body: "Use plain English to tell EVA what you want to build. Be as vague or specific as you like — the AI will ask for clarification if needed.", accent: C.violet },
    { n: "02", title: "AI Generates the Code", body: "EVA's AI engine writes the entire codebase: React components, API routes, database models, environment configs, and more.", accent: "#a594ff" },
    { n: "03", title: "Preview & Refine", body: "See a live preview instantly. Chat with EVA to tweak design, add features, or change logic — like having a senior dev on call.", accent: "#c4b8ff" },
    { n: "04", title: "Download & Deploy", body: "Export clean, production-ready code or deploy directly to Vercel with one click. Your app goes live in seconds.", accent: C.violet },
  ];

  return (
    <section id="how-it-works" style={{ padding: "120px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${C.violetGlow} 0%, transparent 65%)`, pointerEvents: "none", filter: "blur(60px)", opacity: 0.4 }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em", marginBottom: 16 }}>
              From idea to app in <span style={{ background: `linear-gradient(135deg, ${C.violet}, #c4b8ff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>4 steps</span>
            </h2>
            <p style={{ color: C.textSub, fontSize: 17, fontFamily: "'DM Sans', sans-serif" }}>No setup. No boilerplate. No waiting.</p>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 24 }}>
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.1}>
              <div style={{ position: "relative" }}>
                {i < steps.length - 1 && (
                  <div style={{ position: "absolute", top: 28, left: "calc(100% + 0px)", width: 24, height: 1, background: `linear-gradient(90deg, ${C.border}, transparent)`, display: "none" }} />
                )}
                <div style={{
                  background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, padding: "32px 28px",
                  height: "100%", boxShadow: `0 4px 40px rgba(116,102,250,0.08)`,
                }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800, lineHeight: 1,
                    background: `linear-gradient(135deg, ${s.accent}50, ${s.accent}20)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    marginBottom: 20,
                  }}>{s.n}</div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>{s.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── TEMPLATES ────────────────────────────────────────────────────────────────
const Templates = () => {
  const items = [
    { name: "E-commerce Store", desc: "Products, cart, Stripe payments, admin panel", icon: "🛒", color: C.violet },
    { name: "SaaS Dashboard", desc: "Analytics, user management, billing, settings", icon: "📊", color: "#5a4de0" },
    { name: "Social Platform", desc: "Posts, followers, feed, DMs, notifications", icon: "👥", color: "#a594ff" },
    { name: "Chat Application", desc: "Real-time messaging, rooms, file sharing", icon: "💬", color: C.violet },
    { name: "Education LMS", desc: "Courses, quizzes, progress, certificates", icon: "🎓", color: "#5a4de0" },
    { name: "Food Delivery", desc: "Restaurants, ordering, tracking, reviews", icon: "🍕", color: "#a594ff" },
    { name: "Portfolio Site", desc: "Projects, blog, contact, dark mode", icon: "🎨", color: C.violet },
    { name: "Travel Booking", desc: "Flights, hotels, maps, itineraries", icon: "✈️", color: "#5a4de0" },
  ];

  return (
    <section id="templates" style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <FadeUp>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 60, flexWrap: "wrap", gap: 20 }}>
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em", marginBottom: 12 }}>
              Start from a template
            </h2>
            <p style={{ color: C.textSub, fontSize: 16, fontFamily: "'DM Sans', sans-serif" }}>Or describe anything. EVA handles it either way.</p>
          </div>
          <a href="/app" style={{
            color: C.violet, fontSize: 14, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
            textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
          }}>View all templates →</a>
        </div>
      </FadeUp>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {items.map((item, i) => (
          <FadeUp key={item.name} delay={i * 0.06}>
            <div style={{
              background: C.surface, border: `1px solid ${C.borderSub}`, borderRadius: 16,
              padding: "24px 22px", cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surfaceHi; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 20px 60px rgba(116,102,250,0.15), 0 0 0 1px ${C.border}`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderSub; e.currentTarget.style.background = C.surface; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                border: `1px solid ${item.color}30`, marginBottom: 16, fontSize: 22,
              }}>{item.icon}</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: C.text, marginBottom: 6 }}>{item.name}</h3>
              <p style={{ color: C.textMuted, fontSize: 13, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>{item.desc}</p>
              <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 4, color: item.color, fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Use template <span>→</span>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

// ─── PRICING ──────────────────────────────────────────────────────────────────
const Pricing = () => {
  const plans = [
    {
      name: "Starter", price: "$0", period: "forever", desc: "Perfect for trying EVA and building personal projects.",
      features: ["5 app generations/mo", "Live preview", "ZIP download", "Community support"],
      cta: "Get Started Free", highlight: false,
    },
    {
      name: "Pro", price: "$29", period: "/month", desc: "For developers and founders who ship fast.",
      features: ["Unlimited generations", "One-click Vercel deploy", "Private projects", "Priority AI queue", "GitHub export", "Email support"],
      cta: "Start Pro Trial", highlight: true,
    },
    {
      name: "Team", price: "$99", period: "/month", desc: "Collaborate and ship together at scale.",
      features: ["Everything in Pro", "5 team seats", "Shared workspaces", "Custom templates", "API access", "Dedicated support"],
      cta: "Start Team Trial", highlight: false,
    },
  ];

  return (
    <section id="pricing" style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <FadeUp>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Simple, honest pricing
          </h2>
          <p style={{ color: C.textSub, fontSize: 17, fontFamily: "'DM Sans', sans-serif" }}>Start free. Upgrade when you need more.</p>
        </div>
      </FadeUp>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 20 }}>
        {plans.map((p, i) => (
          <FadeUp key={p.name} delay={i * 0.1}>
            <div style={{
              background: p.highlight ? `linear-gradient(135deg, ${C.violet}20, ${C.violetDim}10)` : C.surface,
              border: `1px solid ${p.highlight ? C.violet : C.borderSub}`,
              borderRadius: 20, padding: "36px 30px",
              position: "relative", overflow: "hidden",
              boxShadow: p.highlight ? `0 0 60px ${C.violetGlow}` : "none",
            }}>
              {p.highlight && (
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  background: `linear-gradient(135deg, ${C.violet}, ${C.violetDim})`,
                  color: "white", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100,
                  fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em",
                }}>POPULAR</div>
              )}
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: C.textSub, marginBottom: 8 }}>{p.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, color: C.text, letterSpacing: "-0.03em" }}>{p.price}</span>
                <span style={{ color: C.textMuted, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>{p.period}</span>
              </div>
              <p style={{ color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, marginBottom: 28 }}>{p.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {p.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: `${C.violet}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4l2 2 3-3" stroke={C.violet} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                    </div>
                    <span style={{ color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="/app" style={{
                display: "block", textAlign: "center", padding: "12px 20px", borderRadius: 10,
                background: p.highlight ? `linear-gradient(135deg, ${C.violet}, ${C.violetDim})` : "transparent",
                border: p.highlight ? "none" : `1px solid ${C.border}`,
                color: p.highlight ? "white" : C.text,
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none",
                boxShadow: p.highlight ? `0 8px 30px ${C.violetGlow}` : "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={e => { if (!p.highlight) { e.currentTarget.style.background = C.violetSoft; } else { e.currentTarget.style.transform = "translateY(-1px)"; }}}
              onMouseLeave={e => { if (!p.highlight) { e.currentTarget.style.background = "transparent"; } else { e.currentTarget.style.transform = ""; }}}
              >{p.cta}</a>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

// ─── CTA BANNER ───────────────────────────────────────────────────────────────
const CTABanner = () => (
  <section style={{ padding: "60px 24px 120px" }}>
    <FadeUp>
      <div style={{
        maxWidth: 900, margin: "0 auto", borderRadius: 28, overflow: "hidden", position: "relative",
        background: `linear-gradient(135deg, ${C.violet} 0%, ${C.violetDim} 60%, #3a2fb8 100%)`,
        padding: "72px 60px", textAlign: "center",
        boxShadow: `0 40px 100px ${C.violetGlow}`,
      }}>
        {/* Noise texture overlay */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px", pointerEvents: "none" }} />
        {/* Glow circles */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.1)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -40, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />

        <div style={{ position: "relative" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
            Ready to ship 10x faster?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, fontFamily: "'DM Sans', sans-serif", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Join thousands of developers who build full-stack apps with a single prompt. Free to start.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/app" style={{
              background: "white", color: C.violet, padding: "14px 32px", borderRadius: 12,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = ""}
            >Start Building Free →</Link>
            <a href="#features" style={{
              background: "rgba(255,255,255,0.12)", color: "white", padding: "14px 28px", borderRadius: 12,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 15, textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>See all features</a>
          </div>
        </div>
      </div>
    </FadeUp>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ borderTop: `1px solid ${C.borderSub}`, padding: "56px 24px 40px", maxWidth: 1200, margin: "0 auto" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr repeat(3, auto)", gap: 48, flexWrap: "wrap", marginBottom: 48 }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${C.violet}, ${C.violetDim})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" fill="none"/><circle cx="8" cy="8" r="2" fill="white"/></svg>
          </div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: C.text }}>EVA AI</span>
        </div>
        <p style={{ color: C.textMuted, fontSize: 14, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, maxWidth: 240 }}>
          Build complete full-stack applications with a single prompt. The AI app builder for developers and founders.
        </p>
      </div>
      {[
        { title: "Product", links: ["Features", "Templates", "Pricing", "Changelog"] },
        { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
        { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
      ].map(col => (
        <div key={col.title}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: C.text, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {col.links.map(l => (
              <a key={l} href="#" style={{ color: C.textMuted, fontSize: 14, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.textMuted}
              >{l}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 32, borderTop: `1px solid ${C.borderSub}`, flexWrap: "wrap", gap: 12 }}>
      <span style={{ color: C.textMuted, fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>© 2025 EVA AI. Built with AI for developers.</span>
      <div style={{ display: "flex", gap: 16 }}>
        {["Twitter", "GitHub", "LinkedIn"].map(s => (
          <a key={s} href="#" style={{ color: C.textMuted, fontSize: 13, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s" }}
          onMouseEnter={e => e.target.style.color = C.text}
          onMouseLeave={e => e.target.style.color = C.textMuted}
          >{s}</a>
        ))}
      </div>
    </div>
  </footer>
);

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background: ${C.bg};
      color: ${C.text};
      font-family: 'DM Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: ${C.bg}; }
    ::-webkit-scrollbar-thumb { background: ${C.violet}60; border-radius: 3px; }

    @keyframes spin { to { transform: rotate(360deg); } }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marqueeRev {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }

    @media (max-width: 768px) {
      .nav-desktop { display: none !important; }
    }
  `}</style>
);

// ─── APP ──────────────────────────────────────────────────────────────────────
const LandingPage = () => (
  <>
    <GlobalStyle />
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <LogosStrip />
      <Features />
      <HowItWorks />
      <Templates />
      <Pricing />
      <CTABanner />
      <Footer />
    </div>
  </>
);

export default LandingPage;