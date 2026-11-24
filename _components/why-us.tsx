
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  BadgeCheck,
  Lightbulb,
  Handshake,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Quality Workmanship",
    description:
      "We approach every project with attention to detail and a commitment to delivering dependable results.",
    icon: BadgeCheck,
  },
  {
    number: "02",
    title: "Reliable Solutions",
    description:
      "From construction to security installations, we focus on solutions designed around your property's needs.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Technical Expertise",
    description:
      "Our services bring construction, electrical systems and modern security solutions together.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Customer Commitment",
    description:
      "We believe in clear communication, professional service and putting our clients' needs first.",
    icon: Handshake,
  },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#102B35] py-24 text-[#F8F8F5] md:py-32"
    >
      {/* BACKGROUND DETAIL */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#1C4650]/30 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">

          {/* IMAGE SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-h-[680px] overflow-hidden">
              <Image
                src="/images/why.jpg"
                alt="Modern architectural building showcasing quality construction"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102B35]/60 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-[#C18B5B]">
                  OCEANIC BUILDERS
                </p>
                <p className="mt-2 max-w-[250px] font-[var(--font-manrope)] text-2xl font-semibold leading-tight">
                  Building spaces with purpose.
                </p>
              </div>
            </div>

            {/* DECORATIVE FRAME */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-0 h-full w-full border border-[#C18B5B]/50" />
          </motion.div>

          {/* CONTENT SIDE */}
          <div className="relative">

          

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-7 font-[var(--font-manrope)] text-4xl font-bold leading-[1.1] tracking-[-0.055em] md:text-5xl xl:text-[58px]"
            >
              Built on integrity.
              <span className="mt-2 block font-medium italic text-[#C18B5B]">
                Defined by quality.
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-11 max-w-[560px] text-sm leading-8 text-[#EAE5DA]/70 md:text-base"
            >
              Every property deserves dependable solutions. At Oceanic
              Builders, we bring construction, electrical and security
              services together with a focus on quality workmanship,
              thoughtful execution and lasting value.
            </motion.p>

            {/* TRUST PILLARS */}
            <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.number}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group border-t border-white/15 pt-5"
                  >


                    <h3 className="mb-3 font-[var(--font-manrope)] text-lg font-semibold">
                      {value.title}
                    </h3>

                    <p className="text-xs leading-7 text-[#EAE5DA]/60 md:text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 border-t border-white/15 pt-7"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.16em] text-[#C18B5B] transition-colors hover:text-[#EAE5DA]"
              >
                DISCOVER WHAT SETS US APART

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
