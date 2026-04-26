"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MarqueeContent = () => (
  <>
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="flex items-center gap-[2vw] pr-[4vw] whitespace-nowrap shrink-0">
        <span className="font-light tracking-tight">Welcome to the</span>
        <span className="font-bold">College Of Creative Intelligence</span>
      </div>
    ))}
  </>
);

const IdeaItems = () => (
  <>
    {[
      { src: "/idea-1.png", label: "Digital Campaign" },
      { src: "/idea-2.png", label: "Guerilla" },
      { src: "/idea-3.png", label: "Experiential Campaign" },
      { src: "/idea-4.png", label: "Hand Lettering" },
      { src: "/idea-5.png", label: "Print Advertisement" }
    ].map((item, idx) => (
      <div key={idx} className="flex flex-col items-center gap-6 px-4 md:px-8 shrink-0">
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-black">
          <Image src={item.src} width={256} height={256} alt={item.label} className="w-full h-full object-cover" />
        </div>
        <div className="text-[#ec008c] text-sm font-black uppercase tracking-wider">{item.label}</div>
      </div>
    ))}
  </>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const statsData = [
    { value: "14+", label: "Years Creative\nLegacy" },
    { value: "200+", label: "International\nAwards" },
    { value: "100%", label: "Placement,\nEvery Single Year" },
    { value: "57", label: "Global Agency\nPartnerships" }
  ];
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % statsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(".stat-text-animated",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }
    );
  }, [currentStatIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Ideas slider animation
      gsap.to(".ideas-track", {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: 30,
      });

      // Marquee animation
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: 20,
      });

      // 1. Hero Animations (Initial Load)
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero Image Breathe
      gsap.fromTo(".hero-image",
        { scale: 1.05, transformOrigin: "center center" },
        { scale: 1.0, duration: 4, ease: "power2.out" }
      );

      // Navbar Slide Down
      tl.fromTo(".main-header",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=3.5"
      );

      // Pink Circle Dramatic Reveal
      tl.fromTo(".hero-pink-circle",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.2)" },
        "-=1"
      );

      // 2. Empowering Creative Minds
      gsap.fromTo(".reveal-word",
        { yPercent: 120 },
        {
          yPercent: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".empowering-section",
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(".empowering-image",
        { opacity: 0, scale: 0.95, y: 50 },
        {
          opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: ".empowering-section", start: "top 60%" }
        }
      );

      gsap.fromTo(".empowering-inner-image",
        { scale: 1.6, transformOrigin: "center center" },
        {
          scale: 1.5, duration: 4, ease: "power2.out",
          scrollTrigger: { trigger: ".empowering-section", start: "top 60%" }
        }
      );

      gsap.fromTo([".empowering-stat-bg", ".empowering-stat-text"],
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1, ease: "back.out(1.5)",
          scrollTrigger: { trigger: ".empowering-section", start: "top 80%" }
        }
      );

      // 3. Visionaries Line Reveal
      gsap.fromTo(".reveal-line",
        { yPercent: 110 },
        {
          yPercent: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".visionaries-section",
            start: "top 70%",
          }
        }
      );

      // 4. Our Programs
      gsap.fromTo(".programs-image",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.5, ease: "power3.out",
          scrollTrigger: { trigger: ".programs-section", start: "top 70%" }
        }
      );

      gsap.fromTo(".programs-panel",
        { x: 100, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: ".programs-panel", start: "top 80%" }
        }
      );

      gsap.fromTo(".programs-list-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, stagger: 0.1, duration: 0.8,
          scrollTrigger: { trigger: ".programs-panel", start: "top 60%" }
        }
      );

      // 5. Partners / Logos
      gsap.fromTo(".partner-logo",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: ".partners-section", start: "top 80%" }
        }
      );

      // 6. Footer Circles
      gsap.fromTo(".footer-circle",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.2, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: ".footer-circles-section", start: "top 80%" }
        }
      );

      gsap.to(".footer-quote", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: ".footer-circles-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden font-sans w-full"
    >
      <main className="w-full relative min-h-screen flex flex-col shrink-0">

        {/* Hero Section with Header */}
        <section className="relative w-full h-screen flex flex-col overflow-hidden bg-[#d1d1d1]">
          {/* Background Image - Absolute Centering */}
          <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
            <Image
              src="/hero-bg.jpg"
              width={1920}
              height={1080}
              alt="Student sitting with laptop"
              className="hero-image absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto md:w-auto h-[120vh] md:h-[200vh] min-w-[150vw] md:min-w-0 max-w-none grayscale opacity-100 object-cover"
              priority
            />
          </div>

          {/* Header - Now sticky and part of the section flow */}
          <header className="main-header sticky top-0 left-0 w-full flex items-center justify-between px-6 md:px-20 py-4 md:py-8 z-50 transition-all duration-300">
            <div className="flex items-center gap-1 font-black text-3xl md:text-[48px] tracking-tighter cursor-pointer text-black relative z-50">
              NoMAD<span className="w-5 h-5 md:w-8 md:h-8 bg-[#ec008c] rounded-full inline-block ml-1"></span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex gap-5 text-[11px] font-medium tracking-widest uppercase text-black/80">
              <span className="cursor-pointer hover:text-[#ec008c] transition-colors">About Us</span>
              <span className="cursor-pointer hover:text-[#ec008c] transition-colors">Programs</span>
              <span className="cursor-pointer hover:text-[#ec008c] transition-colors">Admissions</span>
              <span className="cursor-pointer hover:text-[#ec008c] transition-colors">Infrastructure</span>
              <span className="cursor-pointer hover:text-[#ec008c] transition-colors">News & Events</span>
              <span className="cursor-pointer hover:text-[#ec008c] transition-colors">Faculty</span>
              <span className="cursor-pointer hover:text-[#ec008c] transition-colors">Alumni</span>
              <span className="cursor-pointer hover:text-[#ec008c] transition-colors">Placement & Internship</span>
              <span className="cursor-pointer hover:text-[#ec008c] transition-colors">Contact Us</span>
            </nav>

            {/* Mobile Hamburger Toggle */}
            <button
              className="xl:hidden relative z-50 text-black p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden`}>
              <nav className="flex flex-col items-center gap-6 text-xl md:text-2xl font-black tracking-widest uppercase text-black">
                <span className="cursor-pointer hover:text-[#ec008c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</span>
                <span className="cursor-pointer hover:text-[#ec008c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Programs</span>
                <span className="cursor-pointer hover:text-[#ec008c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Admissions</span>
                <span className="cursor-pointer hover:text-[#ec008c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Infrastructure</span>
                <span className="cursor-pointer hover:text-[#ec008c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>News & Events</span>
                <span className="cursor-pointer hover:text-[#ec008c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Faculty</span>
                <span className="cursor-pointer hover:text-[#ec008c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Alumni</span>
                <span className="cursor-pointer hover:text-[#ec008c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Placement & Internship</span>
                <span className="cursor-pointer hover:text-[#ec008c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</span>
              </nav>
            </div>
          </header>

          {/* Hero Content Container - Centered in the remaining space */}
          <div className="flex-1 flex flex-col items-center justify-center relative w-full">
            {/* Central Pink Circle */}
            <div className="hero-pink-circle absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-[#d10074]/85 rounded-full mix-blend-multiply z-10 pointer-events-none"></div>

            {/* Main Title - Black Text (Background layer) */}
            <div className="absolute z-20 w-full flex items-center pointer-events-none top-[45%] -translate-y-1/2 mt-0">
              <div className="marquee-track flex text-[16vw] md:text-[7.5vw] leading-[0.8] text-black w-max">
                <MarqueeContent />
              </div>
            </div>

            {/* Main Title - White Text (Foreground layer, clipped to pink circle) */}
            <div
              className="absolute z-30 inset-0 pointer-events-none flex items-center [clip-path:circle(140px_at_45%_45%)] md:[clip-path:circle(225px_at_45%_45%)]"
            >
              <div className="absolute w-full flex items-center top-[45%] -translate-y-1/2 mt-0">
                <div className="marquee-track flex text-[16vw] md:text-[7.5vw] leading-[0.8] text-white w-max">
                  <MarqueeContent />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Empowering Section */}
        <section className="empowering-section relative w-full min-h-[100dvh] h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
          {/* Centered Title */}
          <div className="w-full max-w-[1400px] px-4 md:px-8">
            <h2 className="text-[#ec008c] font-black text-[40px] md:text-[80px] mb-8 md:mb-16 tracking-tighter text-center leading-tight flex flex-wrap justify-center gap-x-2 md:gap-x-4">
              <span className="overflow-hidden block"><span className="reveal-word inline-block">Empowering</span></span>
              <span className="overflow-hidden block"><span className="reveal-word inline-block">Creative</span></span>
              <span className="overflow-hidden block"><span className="reveal-word inline-block">Minds</span></span>
            </h2>
          </div>

          <div className="relative w-full flex flex-col md:flex-row md:justify-end items-center">
            {/* The Image Container */}
            <div className="empowering-image relative w-full md:w-auto flex flex-col md:block items-center">
              <Image
                src="/empowering-creative-minds.png"
                width={1200}
                height={720}
                alt="Students"
                className="empowering-inner-image w-full md:w-auto h-auto max-h-[45vh] md:max-h-[65vh] object-contain object-bottom md:object-right-bottom grayscale px-4 md:px-0"
              />

              {/* Info Block Wrapper - Handles layout and overlap via Grid, NOT animated to avoid stacking context issues */}
              <div className="mt-8 md:mt-0 relative md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-[500px] lg:-left-[450px] w-[90%] md:w-[450px] h-auto md:h-[450px] z-10 mx-auto shrink-0 grid">
                
                {/* Info Block Background (Animated) */}
                <div className="empowering-stat-bg col-start-1 row-start-1 w-full h-full bg-[#d10074]/85 mix-blend-multiply rounded-3xl md:rounded-full shadow-lg md:shadow-xl pointer-events-none"></div>

                {/* Info Block Text Foreground Layer (Animated) */}
                <div className="empowering-stat-text col-start-1 row-start-1 flex flex-col items-center justify-center text-center py-10 px-6 md:p-8 text-white z-20">
                  <div className="relative md:absolute md:top-14 flex flex-col items-center leading-[1.1] tracking-tight mb-6 md:mb-0">
                    <div className="font-bold text-[10px] md:text-sm">MIAMI</div>
                    <div className="font-bold text-[10px] md:text-sm">AD</div>
                    <div className="font-bold text-[10px] md:text-sm">SCHOOL</div>
                    <div className="text-[6px] font-bold tracking-widest mt-1">MUM | BLR</div>
                  </div>
                  <div className="stat-text-animated flex flex-col items-center justify-center">
                    <div className="text-[120px] md:text-[160px] font-black tracking-tighter leading-[0.8] mt-0 md:mt-12 mb-4 md:mb-4">{statsData[currentStatIndex].value}</div>
                    <div className="text-[14px] md:text-[22px] font-light leading-[1.2] tracking-tight whitespace-pre-line">
                      {statsData[currentStatIndex].label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visionaries Section */}
        <section className="visionaries-section px-8 my-8 md:my-12 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:justify-center gap-6 md:gap-16 text-center md:text-left">
          <h2 className="text-[#ec008c] font-semibold text-[60px] md:text-[90px] leading-[0.9] tracking-tight shrink-0">
            Crafting<br />Tomorrow's<br />Visionaries
          </h2>
          <div className="text-[32px] md:text-[48px] font-medium leading-[1.25] text-black/80 flex flex-col whitespace-nowrap">
            <div className="overflow-hidden"><div className="reveal-line">We cultivate fearless creative</div></div>
            <div className="overflow-hidden"><div className="reveal-line">talent that transforms the way</div></div>
            <div className="overflow-hidden"><div className="reveal-line">the world engages with brands,</div></div>
            <div className="overflow-hidden"><div className="reveal-line">stories, and ideas.</div></div>
          </div>
        </section>

        {/* Our Programs */}
        <section className="programs-section relative w-full bg-[#efefef] py-12 md:py-0 overflow-hidden flex flex-col md:flex-row items-center justify-center min-h-[auto] md:min-h-[90vh]">
          {/* Image Container */}
          <div className="programs-image relative md:absolute md:left-0 md:bottom-0 w-full md:w-[75%] lg:w-[65%] h-[40vh] md:h-full flex justify-center md:justify-start items-end z-0">
            <Image
              src="/programs.jpg"
              width={1200}
              height={900}
              alt="Programs"
              className="w-full md:w-auto h-full max-h-[40vh] md:max-h-[90vh] object-contain object-bottom md:object-left-bottom grayscale opacity-90"
            />
          </div>

          {/* Info Block */}
          <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-center md:justify-end items-center h-auto md:h-[90vh] mt-8 md:mt-0 py-8 md:py-0">
            <div className="programs-panel relative w-[95%] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] z-10 flex flex-col justify-center shrink-0 md:mr-12 lg:mr-24">
              {/* Dark Pink Transparent Background Layer */}
              <div className="absolute inset-0 bg-[#c40062] md:bg-[#c40062]/90 rounded-3xl md:rounded-full shadow-lg md:shadow-2xl"></div>

              {/* Text Foreground Layer */}
              <div className="relative md:absolute md:inset-0 z-10 flex flex-col justify-center px-6 py-12 md:px-20 md:py-16 lg:px-[90px] lg:py-20 text-white h-full">
                <h3 className="text-[36px] md:text-5xl lg:text-[52px] font-black mb-3 md:mb-5 tracking-tighter uppercase leading-[0.9] md:leading-none text-center">OUR PROGRAMS</h3>
                <p className="text-[13px] md:text-[14px] lg:text-[16px] font-medium leading-relaxed mb-5 md:mb-6 text-white/95 text-center md:text-left px-2 md:px-0">
                  We cultivate creators through hands-on experiences,
                  offering real-world creative learning pathways with
                  global internships and industry-mentorship, leading to
                  a strong, employability-enhancing portfolio.
                </p>

                <div className="text-[11px] md:text-[12px] lg:text-[14px] font-bold uppercase mb-3 md:mb-3 tracking-tight text-center md:text-left">
                  UNDERGRADUATE & POSTGRADUATE PROGRAMS:
                </div>
                <ul className="text-[13px] md:text-[16px] lg:text-[18px] font-bold space-y-2 md:space-y-2 lg:space-y-2.5 leading-tight mb-6 md:mb-6 mx-auto md:mx-0 w-max">
                  <li className="programs-list-item flex items-center gap-2 md:gap-3"><div className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3.5 lg:h-3.5 bg-white rounded-full shrink-0"></div> Creative Thinking</li>
                  <li className="programs-list-item flex items-center gap-2 md:gap-3"><div className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3.5 lg:h-3.5 bg-white rounded-full shrink-0"></div> Advertising</li>
                  <li className="programs-list-item flex items-center gap-2 md:gap-3"><div className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3.5 lg:h-3.5 bg-white rounded-full shrink-0"></div> Communication Design</li>
                  <li className="programs-list-item flex items-center gap-2 md:gap-3"><div className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3.5 lg:h-3.5 bg-white rounded-full shrink-0"></div> Media and More</li>
                </ul>
                <div className="text-[12px] md:text-xs lg:text-sm font-bold uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity underline underline-offset-[4px] md:underline-offset-[6px] decoration-2 text-center">
                  Explore our programs
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where Ideas Never Settle */}
        <section className="relative my-20 w-full overflow-hidden text-center ideas-section">
          <h2 className="text-[#ec008c] font-black text-5xl mb-16 uppercase tracking-wide">
            Where Ideas Never Settle
          </h2>

          <div className="w-full relative py-8">
            <div className="ideas-track flex w-max">
              <IdeaItems />
              <IdeaItems />
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="partners-section px-8 my-20 w-full max-w-[1400px] mx-auto text-center">
          <h2 className="text-[#ec008c] font-black text-4xl mb-16">Our Best Are Working With The Best</h2>

          <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-12 gap-y-10 px-0 md:px-4 text-black font-bold">
            <span className="partner-logo font-black text-4xl md:text-[44px] tracking-tighter opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">dentsu</span>
            <Image src="/google.png" width={180} height={80} alt="Google" className="partner-logo h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
            <Image src="/spotify.png" width={180} height={80} alt="Spotify" className="partner-logo h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
            <Image src="/netflix.png" width={180} height={80} alt="Netflix" className="partner-logo h-12 md:h-[60px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
            <Image src="/amazon-logo.png" width={180} height={80} alt="Amazon" className="partner-logo h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
            <Image src="/disney-logo.png" width={180} height={80} alt="Disney" className="partner-logo h-14 md:h-[72px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
            <Image src="/meta-logo.png" width={180} height={80} alt="Meta" className="partner-logo h-8 md:h-[42px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
          </div>
        </section>

        {/* Footer Circles */}
        <section className="footer-circles-section py-12 md:py-20 w-full flex justify-center overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 relative w-full max-w-[1400px] mx-auto px-4">

            {/* Left Circle */}
            <div className="footer-circle w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-[#ec008c] flex flex-col items-center justify-center text-center text-white shadow-[0_0_40px_rgba(230,0,122,0.3)] p-8 md:p-10 hover:scale-105 transition-transform duration-500 cursor-pointer shrink-0 z-10">
              <div className="text-[42px] md:text-[64px] font-black leading-[0.9] tracking-tighter">
                In The<br />Heart Of<br />Mumbai
              </div>
              <div className="text-[11px] md:text-sm mt-3 md:mt-4 tracking-wide font-bold">(Upper BKC)</div>
            </div>

            {/* Middle Circle */}
            <div className="footer-circle w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl relative shrink-0 z-20 my-6 lg:my-0">
              <Image src="/mumbai.jpg" width={450} height={450} alt="Mumbai City View" className="w-full h-full object-cover grayscale" />
            </div>

            {/* Right Circle */}
            <div className="footer-circle w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-[#ec008c] flex flex-col justify-center text-white shadow-[0_0_40px_rgba(230,0,122,0.3)] px-10 md:px-16 relative hover:scale-105 transition-transform duration-500 cursor-pointer shrink-0 z-10">
              <div className="text-[12px] md:text-[17px] font-medium leading-relaxed relative text-center">
                <span className="footer-quote absolute -top-4 md:-top-6 -left-1 md:-left-2 text-[30px] md:text-[40px] leading-none opacity-50 origin-center inline-block">❝</span>
                Just like the bustling streets of Mumbai, NoMAD is a melting pot of diverse ideas and cultures, constantly reminding me that here, art and design are not just subjects, but powerful agents of transformation.
                <span className="inline-block ml-1 text-[20px] md:text-[28px] leading-none translate-y-2 opacity-50">❞</span>
              </div>
              <div className="text-[12px] md:text-[14px] font-bold mt-4 md:mt-6 leading-tight text-center">
                - Arun, Student,<br />Communication Design
              </div>
            </div>

          </div>
        </section>

        {/* Black Footer */}
        <footer className="bg-black text-white px-8 md:px-16 py-16 md:py-20 flex flex-col mt-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-10 md:gap-8 lg:gap-12 w-full max-w-[1600px] mx-auto text-[11px] md:text-[13px] tracking-wide leading-relaxed">
            
            {/* Col 1 */}
            <div className="lg:col-span-2 flex flex-col gap-6 text-white/80 pr-0 lg:pr-8">
              <div>
                <span className="font-bold text-white">Campus:</span> Kohinoor City, Kirol Road, Off LBS Marg,<br />
                Upper BKC, Mumbai – 400070, Maharashtra
              </div>
              <div>
                <span className="font-bold text-white">Admissions Office:</span> Rose Cottage Complex,<br />
                Dr SS Rao Marg, Next to Amit Industrial Estate,<br />
                Parel East, Mumbai - 400012, Maharashtra
              </div>
              <div>
                E: hello@nomadcollege.in
              </div>
              <div>
                www.nomadcollege.in
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-6">
              <div className="font-bold uppercase text-white mb-2 tracking-wider">CONTACT</div>
              <div className="text-white/80 leading-snug">
                <div className="text-white mb-1">Mumbai</div>
                +91 98195 43130 /<br />
                +91 98195 43376
              </div>
              <div className="text-white/80 leading-snug">
                <div className="text-white mb-1">Bangalore</div>
                +91 98195 43375 /<br />
                +91 98336 21147
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-2 text-white/80">
              <div className="font-bold uppercase text-white mb-4 tracking-wider">STUDY</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Undergraduate Program</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Postgraduate Program</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Curriculum</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Global Exchange</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Internships</div>
            </div>

            {/* Col 4 */}
            <div className="flex flex-col gap-2 text-white/80">
              <div className="font-bold uppercase text-white mb-4 tracking-wider">WHY NOMAD</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Creative Intelligence</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Real Client Work</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Industry Mentors</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Global Exposure</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Portfolio First</div>
            </div>

            {/* Col 5 */}
            <div className="flex flex-col gap-2 text-white/80">
              <div className="font-bold uppercase text-white mb-4 tracking-wider">EXPLORE</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Student Work</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Alumni</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Faculty</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Campus Life</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Admissions</div>
            </div>

            {/* Col 6 */}
            <div className="flex flex-col gap-2 text-white/80">
              <div className="font-bold uppercase text-white mb-4 tracking-wider">QUICK LINKS</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Apply Now</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Download Brochure</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Visit Campus</div>
              <div className="cursor-pointer hover:text-[#ec008c] transition-colors">Contact Us</div>
            </div>

          </div>

          <div className="w-full text-center mt-20 pt-10 text-[20px] md:text-[28px] lg:text-[34px] font-medium tracking-tight">
            OPEN EDUCATION PVT. LTD.
          </div>
        </footer>

      </main>
    </div>
  );
}
