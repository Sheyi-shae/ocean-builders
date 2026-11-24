
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock3,
  Building2,
  HardHat,
  Zap,
  ShieldCheck,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "GIVE US A CALL",
    value: "813-330-5241",
    href: "tel:+18133305241",
    description: "Speak with our team",
  },
  {
    icon: Mail,
    label: "SEND US AN EMAIL",
    value: "OceanicBuilders@USA.com",
    href: "mailto:OceanicBuilders@USA.com",
    description: "Tell us about your project",
  },
  {
    icon: MapPin,
    label: "OUR LOCATION",
    value: "11113 N 22nd Street",
    href: "https://www.google.com/maps/search/?api=1&query=11113+N+22nd+Street+Tampa+FL+33612",
    description: "Tampa, Florida 33612",
  },
];

const services = [
  "Construction",
  "Electrical & Wiring",
  "CCTV & Security Installation",
  "Other / General Inquiry",
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ContactPage() {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Project Inquiry - ${formData.service}`
    );

    const body = encodeURIComponent(
      `Hello Oceanic Builders,

I would like to discuss a project with your team.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Project Details:
${formData.message}

Thank you.`
    );

    window.location.href =
      `mailto:OceanicBuilders@USA.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <section id="contact" className="overflow-hidden bg-[#F8F8F5] text-[#102B35]">

      {/* =========================================
          CONTACT HERO
      ========================================= */}
      <div className="relative isolate overflow-hidden bg-[#102B35] py-28 text-[#F8F8F5] md:py-36">

        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[600px] w-[600px] rounded-full bg-[#1C4650]/50 blur-[120px]" />

        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_50%,rgba(193,139,91,0.12),transparent_55%)]" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[850px]"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#C18B5B]">
                LET'S BUILD SOMETHING TOGETHER
              </span>
            </div>

            <h1 className="font-[var(--font-manrope)] text-5xl font-bold leading-[1.08] tracking-[-0.06em] md:text-7xl lg:text-[84px]">
              Let's talk about
              <span className="mt-2 block font-medium italic text-[#C18B5B]">
                your next project.
              </span>
            </h1>

            <p className="mt-8 max-w-[560px] text-sm leading-8 text-[#EAE5DA]/70 md:text-base">
              Whether you're planning a construction project,
              need professional electrical work, or want to
              improve your property's security, we're ready
              to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact-form"
                className="group flex min-h-[54px] items-center gap-5 bg-[#C18B5B] px-7 text-[11px] font-bold tracking-[0.14em] text-[#102B35] transition-colors hover:bg-[#EAE5DA]"
              >
                START A CONVERSATION
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="tel:+18133305241"
                className="flex min-h-[54px] items-center gap-3 border border-white/25 px-6 text-xs font-semibold tracking-wider transition-colors hover:border-[#C18B5B] hover:text-[#C18B5B]"
              >
                <Phone size={15} />
                813-330-5241
              </a>
            </div>
          </motion.div>

          {/* LOCATION STRIP */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-20 flex flex-wrap items-center gap-x-12 gap-y-5 border-t border-white/15 pt-7"
          >
            <div className="flex items-center gap-3">
              <MapPin size={17} className="text-[#C18B5B]" />
              <div>
                <p className="text-[9px] tracking-[0.2em] text-white/45">
                  BASED IN
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wider">
                  TAMPA, FLORIDA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building2 size={17} className="text-[#C18B5B]" />
              <div>
                <p className="text-[9px] tracking-[0.2em] text-white/45">
                  COMPANY
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wider">
                  OCEANIC BUILDERS LLC
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          CONTACT INFORMATION + FORM
      ========================================= */}
      <section className="py-24 md:py-32" id="contact-form">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">

          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            {/* LEFT INFORMATION */}
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#C18B5B]" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#C18B5B]">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="font-[var(--font-manrope)] text-4xl font-bold leading-tight tracking-[-0.05em] md:text-5xl">
                We'd love to
                <span className="block font-medium italic text-[#C18B5B]">
                  hear from you.
                </span>
              </h2>

              <p className="mt-6 max-w-[420px] text-sm leading-8 text-[#64747A]">
                Have a question or a project in mind?
                Reach out through any of the channels below.
                Our team is ready to discuss your needs.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-12 space-y-8">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "OUR LOCATION" ? "_blank" : undefined}
                      rel={item.label === "OUR LOCATION" ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#102B35]/10 bg-white transition-colors group-hover:border-[#C18B5B]">
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                          className="text-[#C18B5B]"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#64747A]">
                          {item.label}
                        </p>

                        <p className="mt-2 break-words font-[var(--font-manrope)] text-base font-bold transition-colors group-hover:text-[#C18B5B]">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs text-[#64747A]">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="mt-1 text-[#C18B5B] opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                      />
                    </a>
                  );
                })}
              </div>

              {/* SERVICE AREA CARD */}
              <div className="mt-14 bg-[#102B35] p-7 text-[#F8F8F5]">
                <div className="mb-5 flex items-center gap-3">
                  <MapPin size={19} className="text-[#C18B5B]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#C18B5B]">
                    SERVICE AREA
                  </span>
                </div>

                <h3 className="font-[var(--font-manrope)] text-xl font-bold">
                  Proudly based in Tampa.
                </h3>

                <p className="mt-3 text-xs leading-7 text-white/60">
                  Contact us to discuss your construction,
                  wiring or security camera installation
                  project and confirm service availability
                  in your area.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=11113+N+22nd+Street+Tampa+FL+33612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.14em] text-[#C18B5B] transition-colors hover:text-white"
                >
                  OPEN ADDRESS IN MAPS
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.aside>

            {/* RIGHT FORM */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="border border-[#102B35]/10 bg-white p-6 md:p-10 lg:p-12"
            >
              <div className="mb-10">
                <p className="mb-3 text-[10px] font-bold tracking-[0.22em] text-[#C18B5B]">
                  PROJECT INQUIRY
                </p>

                <h2 className="font-[var(--font-manrope)] text-3xl font-bold tracking-tight md:text-4xl">
                  Tell us about your project.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#64747A]">
                  Complete the form below and we'll help
                  you take the next step.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">

                {/* NAME + EMAIL */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-[10px] font-bold tracking-wider"
                    >
                      FULL NAME <span className="text-[#C18B5B]">*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-14 w-full border border-[#102B35]/15 bg-[#F8F8F5] px-4 text-sm outline-none transition-colors placeholder:text-[#64747A]/60 focus:border-[#C18B5B]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-[10px] font-bold tracking-wider"
                    >
                      EMAIL ADDRESS <span className="text-[#C18B5B]">*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-14 w-full border border-[#102B35]/15 bg-[#F8F8F5] px-4 text-sm outline-none transition-colors placeholder:text-[#64747A]/60 focus:border-[#C18B5B]"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-[10px] font-bold tracking-wider"
                  >
                    PHONE NUMBER
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-14 w-full border border-[#102B35]/15 bg-[#F8F8F5] px-4 text-sm outline-none transition-colors placeholder:text-[#64747A]/60 focus:border-[#C18B5B]"
                  />
                </div>

                {/* SERVICE SELECT */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-3 block text-[10px] font-bold tracking-wider"
                  >
                    SERVICE REQUIRED <span className="text-[#C18B5B]">*</span>
                  </label>

                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="h-14 w-full appearance-none border border-[#102B35]/15 bg-[#F8F8F5] px-4 text-sm outline-none transition-colors focus:border-[#C18B5B]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[10px] font-bold tracking-wider"
                  >
                    PROJECT DETAILS <span className="text-[#C18B5B]">*</span>
                  </label>

                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell us a little about what you have in mind..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none border border-[#102B35]/15 bg-[#F8F8F5] p-4 text-sm leading-7 outline-none transition-colors placeholder:text-[#64747A]/60 focus:border-[#C18B5B]"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="group flex min-h-[58px] w-full items-center justify-between bg-[#102B35] px-6 text-[11px] font-bold tracking-[0.16em] text-white transition-colors hover:bg-[#1C4650]"
                >
                  PREPARE YOUR INQUIRY

                  <Send
                    size={17}
                    className="text-[#C18B5B] transition-transform group-hover:translate-x-1"
                  />
                </button>

                {submitted && (
                  <p role="status" className="flex items-start gap-2 text-xs leading-6 text-[#1C4650]">
                    <CheckCircle2 size={17} className="mt-1 shrink-0" />
                    Your email application should open with your inquiry
                    details. Please send the prepared email to complete
                    your request.
                  </p>
                )}

                <p className="text-center text-[10px] leading-6 text-[#64747A]">
                  Your project information will be used to help
                  respond to your inquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          LOCATION SECTION
      ========================================= */}
      <section className="bg-[#EAE5DA] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 md:px-12 lg:grid-cols-2 lg:items-center lg:px-20">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C18B5B]" />
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#C18B5B]">
                FIND US IN FLORIDA
              </span>
            </div>

            <h2 className="font-[var(--font-manrope)] text-4xl font-bold tracking-[-0.05em] md:text-5xl">
              Rooted in Tampa.
              <span className="mt-2 block font-medium italic text-[#C18B5B]">
                Ready for your project.
              </span>
            </h2>

            <p className="mt-6 max-w-[450px] text-sm leading-8 text-[#64747A]">
              Oceanic Builders LLC is based in Tampa, Florida.
              Get in touch to discuss your project and confirm
              whether our services are available in your area.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=11113+N+22nd+Street+Tampa+FL+33612"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#102B35] px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-white transition-colors hover:bg-[#1C4650]"
            >
              GET DIRECTIONS
              <ArrowUpRight size={16} className="text-[#C18B5B]" />
            </a>
          </div>

          {/* MAP PLACEHOLDER / ADDRESS PANEL */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#102B35] p-8 text-center text-white md:min-h-[380px]">

            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-1/4 top-0 h-full w-px rotate-45 bg-white" />
              <div className="absolute left-2/3 top-0 h-full w-px -rotate-45 bg-white" />
              <div className="absolute left-0 top-1/3 h-px w-full bg-white" />
              <div className="absolute left-0 top-2/3 h-px w-full bg-white" />
            </div>

            <div className="relative z-10 max-w-[340px]">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C18B5B]/50 bg-[#C18B5B]/10">
                <MapPin size={28} className="text-[#C18B5B]" />
              </div>

              <p className="mb-3 text-[10px] font-bold tracking-[0.25em] text-[#C18B5B]">
                OCEANIC BUILDERS LLC
              </p>

              <h3 className="font-[var(--font-manrope)] text-2xl font-bold">
                Tampa, Florida
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                11113 N 22nd Street
                <br />
                Tampa, FL 33612
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=11113+N+22nd+Street+Tampa+FL+33612"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#C18B5B] hover:text-white"
              >
                VIEW ON GOOGLE MAPS
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================= */}
      {/* <section className="bg-[#102B35] px-6 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-[750px]">

          <p className="mb-5 text-[10px] font-bold tracking-[0.25em] text-[#C18B5B]">
            OCEANIC BUILDERS LLC
          </p>

          <h2 className="font-[var(--font-manrope)] text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">
            Your next project
            <span className="block font-medium italic text-[#C18B5B]">
              starts with a conversation.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[470px] text-sm leading-8 text-white/60">
            Let's discuss your construction, electrical
            or security installation needs.
          </p>

          <a
            href="tel:+18133305241"
            className="group mt-9 inline-flex min-h-[56px] items-center gap-5 bg-[#C18B5B] px-7 text-[11px] font-bold tracking-[0.14em] text-[#102B35] transition-colors hover:bg-[#EAE5DA]"
          >
            CALL 813-330-5241
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section> */}
    </section>
  );
}
