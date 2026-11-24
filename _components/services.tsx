
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  HardHat,
  Zap,
  Cctv,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Construction",
    description:
      "From new builds to property improvements, we deliver quality construction solutions with attention to detail and lasting value.",
    image: "/images/construction.jpg",
    alt: "Modern residential construction and architectural project",
    icon: HardHat,
    features: ["New Construction", "Renovations", "Property Improvements"],
    href: "#contact",
  },
  {
    number: "02",
    title: "Electrical & Wiring",
    description:
      "Dependable electrical installations and wiring solutions designed to support safe, efficient and functional spaces.",
    image: "/images/electrical.jpg",
    alt: "Professional electrical wiring and installation",
    icon: Zap,
    features: ["Electrical Wiring", "Installations", "System Upgrades"],
    href: "#contact",
  },
  {
    number: "03",
    title: "CCTV & Security",
    description:
      "Modern surveillance and security camera installations that help protect properties and provide greater peace of mind.",
    image: "/images/cctv.jpg",
    alt: "Modern CCTV security camera installation",
    icon: Cctv,
    features: ["CCTV Installation", "Surveillance Systems", "Security Upgrades"],
    href: "#contact",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
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
      id="services"
      className="relative overflow-hidden bg-[#F8F8F5] py-24 text-[#102B35] md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">

        {/* SECTION INTRO */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C18B5B]">
                WHAT WE DO
              </span>
            </div>

            <h2 className="max-w-[650px] font-[var(--font-manrope)] text-4xl font-bold leading-[1.1] tracking-[-0.055em] md:text-6xl">
              Expertise that builds.
              <span className="block font-medium italic text-[#C18B5B]">
                Solutions that last.
              </span>
            </h2>
          </div>

          <p className="max-w-[440px] pb-2 text-sm leading-8 text-[#64747A] md:text-base">
            From construction and electrical installations to modern
            security systems, we bring essential building solutions
            together under one trusted name.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.12 }}
                className="group relative flex flex-col border border-[#102B35]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,43,53,0.10)]"
              >
                {/* IMAGE */}
                <div className="relative aspect-[5/4] overflow-hidden bg-[#EAE5DA]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102B35]/60 via-transparent to-transparent" />

                 

                  {/* ICON */}
                  <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center border border-white/50 bg-[#102B35]/50 text-[#EAE5DA] backdrop-blur-md">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="mb-3 font-[var(--font-manrope)] text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mb-7 text-sm leading-7 text-[#64747A]">
                    {service.description}
                  </p>

                  {/* FEATURES */}
                  <div className="mb-8 mt-auto space-y-3 border-t border-[#102B35]/10 pt-5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-xs font-medium text-[#102B35]/75"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#C18B5B]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* LINK */}
                  <Link
                    href={service.href}
                    className="group/link flex items-center justify-between border-t border-[#102B35]/10 pt-5 text-[10px] font-bold tracking-[0.16em] text-[#102B35] transition-colors hover:text-[#C18B5B]"
                  >
                    DISCUSS YOUR PROJECT

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 flex flex-col justify-between gap-5 border-t border-[#102B35]/15 pt-8 md:flex-row md:items-center"
        >
          <p className="text-sm text-[#64747A]">
            Have a project in mind? Let&lsquo;s build something dependable.
          </p>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-4 text-xs font-bold tracking-[0.15em] text-[#102B35] transition-colors hover:text-[#C18B5B]"
          >
            LET&lsquo;S TALK ABOUT YOUR PROJECT
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
