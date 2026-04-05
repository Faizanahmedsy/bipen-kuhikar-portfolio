"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import {
  Phone,
  Mail,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Award,
  Heart,
  Star,
  Plus,
  Activity,
  Briefcase,
  Landmark,
  UserCheck,
  MapPin,
  Calendar,
  Stamp,
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Functional constants for real-world use
  const PHONE_NUMBER = "+919824215296"
  const EMAIL_ADDRESS = "bipinkuhikar@gmail.com"

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations for the hero
      gsap.from(".animate-in", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      })

      // Scroll reveal for all tactile cards
      gsap.utils.toArray<Element>(".reveal").forEach((elem) => {
        gsap.from(elem, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          },
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const benefits = [
    {
      title: "Education corpus",
      icon: GraduationCap,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      accent: "group-hover:text-indigo-600",
    },
    {
      title: "Family shield",
      icon: ShieldCheck,
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
      accent: "group-hover:text-rose-600",
    },
    {
      title: "Tax efficiency",
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      accent: "group-hover:text-emerald-600",
    },
    {
      title: "Marriage fund",
      icon: Heart,
      color: "text-pink-600",
      bg: "bg-pink-50",
      border: "border-pink-100",
      accent: "group-hover:text-pink-600",
    },
    {
      title: "Guaranteed payout",
      icon: Landmark,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
      accent: "group-hover:text-amber-600",
    },
    {
      title: "Wealth builder",
      icon: Award,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      accent: "group-hover:text-blue-600",
    },
  ]

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100"
    >
      {/* ── STICKY NAVBAR ───────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl animate-in items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

          {/* Brand — left */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 shadow-md shadow-emerald-600/25">
              <ShieldCheck className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-[15px] leading-none font-black tracking-tight text-slate-900">
                B. Kuhikar
              </p>
              <p className="mt-0.5 text-[10px] font-semibold text-emerald-600">
                Irda certified advisor
              </p>
            </div>
          </div>

          {/* Actions — right */}
          <div className="flex items-center gap-2">
            {/* Trust pill: only lg+ */}
            <div className="hidden items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-slate-500 lg:flex">
              <Star size={11} className="fill-amber-400 text-amber-400" />
              Lic authorised since 2014
            </div>

            {/* Phone icon — mobile only (up to md) */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="Call now"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 transition-all active:scale-90 md:hidden"
            >
              <Phone size={15} />
            </a>

            {/* Full number — md+ */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-emerald-200 hover:text-emerald-600 md:flex"
            >
              <Phone size={14} /> +91 98242 15296
            </a>

            {/* CTA — always visible, scales down on mobile */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition-all active:scale-95 hover:bg-emerald-700 sm:rounded-2xl sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Get a plan
            </a>
          </div>

        </div>
      </nav>

      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-12 pb-24 lg:grid-cols-2">
        <div className="animate-in space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold tracking-wide text-emerald-600 capitalize shadow-sm">
            <UserCheck size={12} />
            Bipinkumar Kuhikar · Investment advisor
          </div>
          <h1 className="text-5xl leading-[0.95] font-black tracking-tighter text-slate-900 md:text-7xl">
            Secure your child&apos;s <br /> legacy with <br />
            <span className="text-emerald-600 underline decoration-emerald-100 underline-offset-[12px]">
              expert advice.
            </span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed font-medium text-slate-500">
            I provide professional investment planning to help families build
            guaranteed wealth and education funds through trusted Lic
            strategies.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="rounded-2xl bg-emerald-600 px-8 py-4 text-center text-lg font-black text-white shadow-xl shadow-emerald-600/20 transition-all hover:-translate-y-1"
            >
              Book consultation
            </a>
            <a
              href="#about"
              className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-center text-lg font-black text-slate-900 transition-all hover:bg-slate-50"
            >
              Meet the advisor
            </a>
          </div>
        </div>

        {/* Tactile Card Visual */}
        <div className="relative animate-in">
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-emerald-50" />
            <div className="relative z-10">
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <GraduationCap size={24} />
                </div>
                <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-600 uppercase">
                  Verified roadmap
                </div>
              </div>
              <div className="mb-8 space-y-1">
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Strategic growth
                </p>
                <h3 className="font-serif text-4xl font-black tracking-tighter text-slate-900 italic">
                  Education fund
                </h3>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="mb-1 flex items-center gap-2 text-[10px] font-bold tracking-tighter text-slate-400 uppercase">
                    <Activity size={12} /> Risk factor
                  </div>
                  <div className="text-xl font-black text-slate-800 italic">
                    Zero market risk
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="mb-1 flex items-center gap-2 text-[10px] font-bold tracking-tighter text-slate-400 uppercase">
                    <TrendingUp size={12} /> Tax efficiency
                  </div>
                  <div className="text-xl font-black text-slate-800 italic">
                    Max tax saved
                  </div>
                </div>
              </div>
              <div className="space-y-3 pt-2">
                {[
                  "Guaranteed education payouts",
                  "Premium waiver protection",
                  "Tax-free maturity amounts",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm font-bold text-slate-600"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500" />{" "}
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 rotate-3 rounded-2xl border-4 border-white bg-slate-900 px-6 py-4 text-sm font-black text-white shadow-2xl">
            Irda verified advisor ✦
          </div>
        </div>
      </section>

      {/* ── INNOVATION GRID (BENEFITS) ──────────────────── */}
      <section className="border-y border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-16 text-center">
            <h2 className="mb-4 text-4xl leading-none font-black tracking-tight text-slate-900">
              The anatomy of{" "}
              <span className="text-emerald-600 italic">
                guaranteed wealth.
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-medium text-slate-500">
              Professional investment roadmaps designed to fund your
              child&apos;s specific life goals with total certainty.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className={`reveal rounded-3xl border bg-white p-6 shadow-sm ${benefit.border} group relative cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl`}
              >
                <div
                  className={`absolute -top-4 -right-4 h-24 w-24 rounded-full ${benefit.bg} opacity-50 transition-transform duration-500 group-hover:scale-150`}
                ></div>
                <div className="relative z-10 mb-6 flex items-center gap-4">
                  <div
                    className={`h-14 w-14 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center shadow-inner`}
                  >
                    <benefit.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">
                    {benefit.title}
                  </h3>
                </div>
                <div className="relative z-10 space-y-3">
                  <div className="flex gap-1">
                    <div className="relative h-12 flex-1 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                      <div className="absolute bottom-0 left-2 h-[30%] w-2 rounded-t-sm bg-slate-200 transition-all duration-700 group-hover:h-[60%]"></div>
                      <div className="absolute bottom-0 left-5 h-[80%] w-2 rounded-t-sm bg-slate-200 transition-all duration-700 group-hover:h-[40%]"></div>
                      <div className="absolute bottom-0 left-8 h-[50%] w-2 rounded-t-sm bg-slate-200 transition-all duration-700 group-hover:h-[90%]"></div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                      <ArrowRight
                        size={16}
                        className={`text-slate-300 transition-colors ${benefit.accent}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IRDA CERTIFICATION (TACTILE DOCUMENT) ────────── */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <div className="reveal space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold tracking-wide text-slate-600 uppercase shadow-sm">
            <ShieldCheck size={12} className="text-emerald-500" /> Regulatory
            compliance
          </div>
          <h2 className="text-4xl leading-[0.9] font-black tracking-tighter text-slate-900 md:text-5xl">
            Professional license by <br />{" "}
            <span className="text-emerald-600 italic">Irda of India.</span>
          </h2>
          <p className="text-lg leading-relaxed font-medium text-slate-500">
            Every investment recommendation is backed by a professional license,
            ensuring your advice is compliant with Indian financial regulations
            and legal standards.
          </p>
        </div>

        <div className="reveal group relative">
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-slate-100 bg-white p-10 shadow-2xl transition-all duration-500 hover:scale-[1.01]">
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-slate-200 bg-slate-50">
                <Stamp className="h-8 w-8 text-slate-300" />
              </div>
              <h3 className="mb-2 font-serif text-2xl font-black tracking-tight text-slate-900 italic">
                Advisor certificate
              </h3>
              <p className="mb-8 px-8 text-sm font-medium text-slate-400">
                Confirmed: Bipinkumar Kuhikar is a licensed Investment advisor
                with Irda and Lic.
              </p>
              <div className="flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-tighter text-emerald-700 uppercase">
                    License: Active
                  </span>
                </div>
                <div className="font-mono text-[10px] font-black tracking-widest text-slate-300">
                  REG: 9824215296
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ADVISOR ────────────────────────────────── */}
      <section
        id="about"
        className="mx-auto my-12 grid max-w-7xl items-center gap-16 rounded-[4rem] bg-white px-6 py-24 md:grid-cols-2"
      >
        <div className="reveal order-2 md:order-1">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-2 shadow-2xl transition-all hover:scale-[1.01]">
            <div className="rounded-[2.2rem] bg-slate-900 p-8 text-white md:p-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
                  <UserCheck size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl leading-tight font-black tracking-tighter">
                    Bipinkumar Kuhikar
                  </h3>
                  <p className="font-mono text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                    Investment advisor
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Calendar className="mb-2 text-emerald-400" size={14} />
                    <p className="text-[9px] font-black text-slate-400 uppercase">
                      Consultancy
                    </p>
                    <p className="text-base font-bold italic">10+ Years</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Briefcase className="mb-2 text-emerald-400" size={14} />
                    <p className="text-[9px] font-black text-slate-400 uppercase">
                      Portfolio
                    </p>
                    <p className="text-base font-bold italic">Hundreds</p>
                  </div>
                </div>
                <div className="space-y-3 border-t border-white/10 pt-4 font-mono text-[10px] text-slate-300">
                  <div className="flex justify-between tracking-tighter uppercase">
                    <span>Irda_certification</span>
                    <span className="font-bold text-white">Verified</span>
                  </div>
                  <div className="flex justify-between tracking-tighter uppercase">
                    <span>Advisor_tier</span>
                    <span className="font-bold text-emerald-400 uppercase">
                      Senior
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal order-1 space-y-8 md:order-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tracking-wide text-slate-600 uppercase">
            <UserCheck size={12} className="text-emerald-600" /> Professional
            profile
          </div>
          <h2 className="text-4xl leading-[0.9] font-black tracking-tighter text-slate-900 md:text-5xl">
            Guidance based on <br />{" "}
            <span className="text-emerald-600 italic">total integrity.</span>
          </h2>
          <p className="text-lg leading-relaxed font-medium text-slate-500 italic">
            For over a decade, I have focused on providing transparent
            investment roadmaps that ensure children have the financial freedom
            to pursue their professional dreams.
          </p>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 shadow-inner">
                <MapPin size={20} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">
                  Digital-first consultations
                </p>
                <p className="text-sm font-medium text-slate-400">
                  Serving families across India with secure remote planning and
                  doorstep support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="group relative space-y-8 overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-12 text-center shadow-2xl transition-all hover:shadow-emerald-100 md:p-20">
          <div className="pointer-events-none absolute top-10 left-10 rotate-12 opacity-[0.03]">
            <ShieldCheck size={300} />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-black tracking-widest text-emerald-600 uppercase">
              <Plus size={10} /> Contact the advisor
            </div>
            <h2 className="text-4xl leading-none font-black tracking-tighter text-slate-900 md:text-6xl">
              Don&apos;t leave your child&apos;s <br /> future to{" "}
              <span className="text-emerald-600 underline decoration-slate-200 underline-offset-8">
                chance.
              </span>
            </h2>
            <p className="mx-auto max-w-lg leading-relaxed font-medium text-slate-500">
              Get a personalized investment illustration sent to your WhatsApp
              or email. Professional advice with zero pressure.
            </p>
          </div>
          <div className="relative z-10 flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-10 py-5 text-lg font-black text-white shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
            >
              <Phone size={20} /> Call +91 98242 15296
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-10 py-5 text-lg font-black text-slate-900 transition-all hover:bg-slate-50 active:scale-95"
            >
              <Mail size={20} /> Write to Bipinkumar
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="relative overflow-hidden border-t border-slate-100 bg-white pt-16 pb-10">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 shadow-md">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-base leading-none font-black tracking-tight text-slate-900">
                    Bipinkumar Kuhikar
                  </p>
                  <p className="text-[10px] font-semibold text-emerald-600 italic">
                    Investment advisor
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-emerald-600"
              >
                <Phone size={14} /> +91 98242 15296
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-emerald-600"
              >
                <Mail size={14} /> bipinkuhikar@gmail.com
              </a>
            </div>
          </div>
          <div className="my-10 h-px w-full bg-slate-100" />
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-[11px] leading-relaxed font-medium text-slate-400 italic">
              Disclaimer: Returns shown are based on historical Lic bonus data.
              Insurance and investments are subjects of solicitation.
            </p>
            <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              © {new Date().getFullYear()} Bipinkumar Kuhikar
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
