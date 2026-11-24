
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
 
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const services = [
  { label: "Construction", href: "/#services" },
  { label: "Electrical & Wiring", href: "/#services" },
  { label: "CCTV & Security", href: "/#services" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-[#102B35] text-[#F8F8F5]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#1C4650]/40 blur-[120px]" />
        <div className="absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full bg-[#C18B5B]/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
       

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-14 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-heading text-3xl font-semibold tracking-[0.12em] text-[#F8F8F5]">
                OCEANIC
              </span>
              <span className="mt-1 text-[9px] font-medium tracking-[0.48em] text-[#C18B5B]">
                BUILDERS LLC
              </span>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/50">
              Building with purpose. Securing what matters. Oceanic Builders
              delivers construction, electrical and security solutions with
              care and attention to detail.
            </p>

            {/* <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition hover:border-[#C18B5B] hover:text-[#C18B5B]"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition hover:border-[#C18B5B] hover:text-[#C18B5B]"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition hover:border-[#C18B5B] hover:text-[#C18B5B]"
              >
                <Linkedin size={16} />
              </a>
            </div> */}
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C18B5B]">
              Explore
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-[#F8F8F5]"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C18B5B]">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/55 transition hover:text-[#F8F8F5]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C18B5B]">
              Get in Touch
            </h3>

            <ul className="space-y-6">
              <li>
                <a
                  href="tel:+18133305241"
                  className="group flex items-start gap-3"
                >
                  <Phone
                    size={16}
                    className="mt-1 shrink-0 text-[#C18B5B]"
                  />
                  <span className="text-sm text-white/60 transition group-hover:text-white">
                    813-330-5241
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:OceanicBuilders@USA.com"
                  className="group flex items-start gap-3"
                >
                  <Mail
                    size={16}
                    className="mt-1 shrink-0 text-[#C18B5B]"
                  />
                  <span className="break-all text-sm text-white/60 transition group-hover:text-white">
                    OceanicBuilders@USA.com
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=11113+N+22nd+Street+Tampa+FL+33612"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3"
                >
                  <MapPin
                    size={16}
                    className="mt-1 shrink-0 text-[#C18B5B]"
                  />
                  <span className="text-sm leading-6 text-white/60 transition group-hover:text-white">
                    11113 N 22nd Street
                    <br />
                    Tampa, FL 33612
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Oceanic Builders LLC. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="transition hover:text-white"
            >
              Terms of Use
            </Link>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 uppercase tracking-[0.15em] transition hover:text-[#C18B5B]"
            >
              Back to top
              <ArrowRight
                size={13}
                className="transition-transform group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
