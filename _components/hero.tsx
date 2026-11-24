
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion, Variants} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
 
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const headline = ["Building with purpose.", "Securing what matters."];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const fadeUp:Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative isolate min-h-[760px] h-[100svh] max-h-[1100px] overflow-hidden bg-[#102B35] text-[#F8F8F5]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          initial={shouldReduceMotion ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Modern architectural property surrounded by elegant landscaping"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102B35]/95 via-[#102B35]/75 to-[#102B35]/25" />

      {/* BOTTOM GRADIENT */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#102B35] via-transparent to-[#102B35]/40" />

      {/* SPOTLIGHT / GLASS ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_55%_45%,rgba(193,139,91,0.13),transparent_55%)]" />

      {/* NAVIGATION */}
      <header className="relative z-50 mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 md:px-12 lg:px-20">

        {/* LOGO */}
        <Link
          href="/"
          aria-label="Oceanic Builders home"
          className="group flex flex-col"
        >
          <span className="text-[22px] font-extrabold tracking-[0.13em] text-[#F8F8F5] md:text-[25px]">
            OCEANIC<span className="text-[#C18B5B]">.</span>
          </span>
          <span className="mt-0.5 text-[8px] font-medium tracking-[0.38em] text-[#EAE5DA]/70">
            BUILDERS
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative py-2 text-[12px] font-medium tracking-[0.13em] text-[#F8F8F5]/75 transition-colors hover:text-[#C18B5B]"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C18B5B] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="#contact"
          className="hidden items-center gap-3 border border-[#C18B5B]/70 px-5 py-3 text-[11px] font-semibold tracking-[0.13em] text-[#F8F8F5] transition-all duration-300 hover:bg-[#C18B5B] hover:text-[#102B35] lg:flex"
        >
          REQUEST A QUOTE
          <ArrowUpRight size={15} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center border border-white/20 text-[#F8F8F5] lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={
          menuOpen
            ? { opacity: 1, height: "auto", visibility: "visible" }
            : { opacity: 0, height: 0, visibility: "hidden" }
        }
        transition={{ duration: 0.3 }}
        className="absolute left-0 right-0 top-[88px] z-40 overflow-hidden border-b border-white/10 bg-[#102B35]/95 backdrop-blur-xl lg:hidden"
      >
        <nav className="flex flex-col px-6 py-5">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-sm tracking-widest text-[#F8F8F5]/80 transition-colors hover:text-[#C18B5B]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-between bg-[#C18B5B] px-5 py-4 text-xs font-bold tracking-widest text-[#102B35]"
          >
            REQUEST A QUOTE
            <ArrowUpRight size={17} />
          </Link>
        </nav>
      </motion.div>

      {/* HERO CONTENT */}
      <div className="relative mx-auto flex h-[calc(100%-100px)] w-full max-w-[1600px] items-center px-6 pb-16 md:px-12 lg:px-20">

        <div className="w-full max-w-[850px]">

          {/* EYEBROW */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-7 flex items-center gap-3"
          >
           
            <span className="text-[10px] font-semibold tracking-[0.24em] text-[#C18B5B] md:text-xs">
              CONSTRUCTION · ELECTRICAL · SECURITY
            </span>
          </motion.div>

          {/* HEADLINE */}
          <div className="mb-7">
            {headline.map((line, index) => (
              <motion.h1
                key={line}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 35,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: shouldReduceMotion ? 0 : 0.2 + index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(2.7rem,6.5vw,5.8rem)] font-bold leading-[1.04] tracking-[-0.065em] text-[#F8F8F5]"
              >
                {index === 1 ? (
                  <>
                    Securing <span className="font-medium italic text-[#C18B5B]">what matters.</span>
                  </>
                ) : (
                  line
                )}
              </motion.h1>
            ))}
          </div>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.65 }}
            className="mb-9 max-w-[570px] text-[14px] leading-[1.9] text-[#EAE5DA]/80 md:text-[16px]"
          >
            Quality construction, professional electrical solutions and
            advanced security installations — built around the spaces
            that matter most.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.85 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#contact"
              className="group flex min-h-[54px] items-center gap-5 bg-[#C18B5B] px-6 text-[11px] font-bold tracking-[0.13em] text-[#102B35] transition-all duration-300 hover:bg-[#EAE5DA]"
            >
              REQUEST A QUOTE
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="#services"
              className="group flex min-h-[54px] items-center gap-4 border border-white/35 px-6 text-[11px] font-semibold tracking-[0.13em] text-[#F8F8F5] transition-all duration-300 hover:border-[#C18B5B] hover:text-[#C18B5B]"
            >
              EXPLORE SERVICES
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>


     
    </section>
  );
}
