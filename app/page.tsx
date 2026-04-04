"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Phone, Mail, ShieldCheck, TrendingUp, GraduationCap,
  ArrowRight, CheckCircle2, Award, Heart, Star,
  HelpCircle, ChevronDown, Landmark, Sparkles, Users, BadgeCheck
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-in", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.utils.toArray<Element>(".reveal").forEach((elem) => {
        gsap.from(elem, {
          y: 35,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.to(".glow", {
        scale: 1.15,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(".pulse-ring", {
        scale: 2,
        opacity: 0,
        duration: 1.8,
        repeat: -1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: GraduationCap,
      title: "Education Corpus",
      desc: "Build a dedicated fund for college, abroad studies, or professional degrees — ready exactly when your child needs it.",
    },
    {
      icon: ShieldCheck,
      title: "Family Protection",
      desc: "If something happens to you, the policy continues on its own. Your child's future remains fully funded — no matter what.",
    },
    {
      icon: TrendingUp,
      title: "Tax-Free Returns",
      desc: "Save tax on your investment today and receive completely tax-free returns at maturity. A win on both ends.",
    },
    {
      icon: Landmark,
      title: "LIC Backed & Guaranteed",
      desc: "Supported by the Government of India through LIC — one of the most trusted financial institutions in the country.",
    },
    {
      icon: Heart,
      title: "Marriage Planning",
      desc: "An optional add-on that sets aside a lumpsum for your child's wedding, so that special day remains stress-free.",
    },
    {
      icon: Sparkles,
      title: "Flexible Payments",
      desc: "Choose how you want to invest — monthly, quarterly or yearly. Plans available starting from just ₹2,000 per month.",
    },
  ];

  const faq = [
    {
      q: "What is the best age to start?",
      a: "The earlier you start, the better. Beginning at birth to age 5 keeps premiums low and maximises the power of compounding over time.",
    },
    {
      q: "Is the investment safe?",
      a: "Yes. These are LIC plans — non-market linked and backed by the Government of India, offering guaranteed returns and full security.",
    },
    {
      q: "Can I access the money before maturity?",
      a: "Yes, the policy offers a loan facility and partial withdrawals for emergencies after the initial lock-in period.",
    },
    {
      q: "What if I miss a payment?",
      a: "There is a grace period, and lapsed policies can be revived. You also have the option to convert to a paid-up policy to protect your investment.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white text-slate-800 font-sans relative overflow-x-hidden"
    >
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-emerald-400/8 rounded-full blur-[140px] glow" />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-400/8 rounded-full blur-[120px] glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Mobile sticky call button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="tel:+919824215296"
          className="w-16 h-16 bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-500/40 flex items-center justify-center border-4 border-white"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      {/* Navbar */}
      <nav className="relative z-40 px-6 py-5 max-w-7xl mx-auto flex justify-between items-center animate-in">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-900 leading-none text-lg">Bipinkumar Kuhikar</p>
            <p className="text-xs text-slate-400 mt-0.5">Insurance Advisor · IRDA Certified</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 mr-2">
            <span className="relative flex h-2 w-2">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-slate-500 font-medium">Available now</span>
          </div>
          <a
            href="tel:+919824215296"
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md transition-all"
          >
            <Phone className="w-4 h-4" />
            +91 98242 15296
          </a>
          <a
            href="mailto:bipinkuhikar@gmail.com"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-xl text-sm font-semibold text-white hover:bg-slate-800 transition-all shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Write to me
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left copy */}
        <div className="space-y-8 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
            <Award className="w-4 h-4" />
            Child Future Investment Plan
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 tracking-tight">
            Give your child the&nbsp;
            <span className="text-emerald-600 relative inline-block">
              future they deserve.
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10 Q150 2 298 10" stroke="#86efac" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
            Start small. Build big. A smart investment plan today can secure your child&apos;s education, career, and milestones — completely worry-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919824215296"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-2xl text-base font-bold shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-5 h-5" /> Book a Free Call
            </a>
            <a
              href="mailto:bipinkuhikar@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl text-base font-bold hover:border-emerald-300 hover:-translate-y-0.5 transition-all"
            >
              <ArrowRight className="w-5 h-5" /> Get a Plan
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-5 pt-2">
            <div className="flex -space-x-3">
              {["#86efac", "#6ee7b7", "#34d399"].map((bg, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow"
                  style={{ backgroundColor: bg }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500">
                Trusted by <span className="text-slate-900 font-bold">500+ families</span> across India
              </p>
            </div>
          </div>
        </div>

        {/* Right visual card */}
        <div className="relative animate-in">

          {/* Main card */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.10)] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-50 rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 space-y-7">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-400 font-medium">Projected at age 18</p>
                  <p className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1">₹52,75,000</p>
                  <p className="text-sm text-emerald-600 font-semibold mt-1">+ Loyalty Bonus</p>
                </div>
                <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              <ul className="space-y-3">
                {[
                  "Tax-free returns (Section 10(10D))",
                  "Save tax under Section 80C",
                  "Premium waiver on parent's absence",
                  "Payouts at age 18, 20, and 22",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="h-px bg-slate-100" />

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 rounded-2xl">
                  <p className="text-xs text-emerald-600 font-semibold mb-1">Starts from</p>
                  <p className="text-xl font-bold text-slate-900">₹2,000 / mo</p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-2xl">
                  <p className="text-xs text-indigo-600 font-semibold mb-1">Entry age</p>
                  <p className="text-xl font-bold text-slate-900">0 – 12 yrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-5 -right-5 bg-amber-400 text-white rounded-2xl px-5 py-3 shadow-xl rotate-3 font-bold text-sm hidden md:block">
            High Returns ✦
          </div>

          {/* Floating mini card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden md:flex items-center gap-3">
            <BadgeCheck className="w-8 h-8 text-emerald-500 shrink-0" />
            <div>
              <p className="text-xs text-slate-400">Certified by</p>
              <p className="text-sm font-bold text-slate-900">IRDA, Govt. of India</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ─────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-100 py-10 reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50">
            {[
              { icon: Landmark, label: "Life Insurance Corporation" },
              { icon: BadgeCheck, label: "IRDA Authorised" },
              { icon: Users, label: "500+ Families Served" },
              { icon: Award, label: "10+ Years Experience" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 font-semibold text-slate-600">
                <item.icon className="w-6 h-6" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <div className="space-y-10 reveal">
            <div className="space-y-4">
              <p className="text-emerald-600 font-semibold text-sm">Why choose Bipinkumar?</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Advice you can&nbsp;<br />trust completely.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                With more than 10 years of experience, Bipinkumar Kuhikar has helped thousands of parents across India plan for their children&apos;s future with confidence and clarity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { n: "500+", label: "Families Served" },
                { n: "100%", label: "Claim Settlement" },
                { n: "10+", label: "Years of Experience" },
                { n: "₹0", label: "Hidden Charges" },
              ].map((stat, i) => (
                <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-3xl font-extrabold text-slate-900">{stat.n}</p>
                  <p className="text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 reveal">
            {[
              {
                title: "Personalised Plan, Just for You",
                desc: "Every family&apos;s situation is different. Bipinkumar designs a plan specific to your income, goals, and your child&apos;s age.",
              },
              {
                title: "Hassle-Free Claim Assistance",
                desc: "From paperwork to settlement, we handle everything so your family doesn&apos;t have to worry during difficult times.",
              },
              {
                title: "Annual Portfolio Review",
                desc: "A complimentary check-in every year to ensure your plan stays aligned with your growing needs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium mt-1 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </div>
            ))}

            <blockquote className="p-6 bg-slate-900 text-white rounded-2xl">
              <p className="italic leading-relaxed text-slate-300">
                &ldquo;My goal is simple — when your child steps into college, there should be no financial question mark above their head.&rdquo;
              </p>
              <footer className="mt-4 font-bold text-emerald-400">— Bipinkumar S. Kuhikar</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16 reveal">
            <p className="text-emerald-600 font-semibold text-sm">What&apos;s included</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Plan highlights</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              A closer look at what makes this investment plan right for your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group reveal"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROWTH TIMELINE ─────────────────────────────── */}
      <section className="py-24 bg-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 mb-20 reveal">
            <p className="text-emerald-200 font-semibold text-sm">How your investment grows</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Your child&apos;s journey</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, stage: "Today", title: "You invest", desc: "Start a small monthly commitment that fits your budget comfortably." },
              { icon: GraduationCap, stage: "Age 15", title: "School support", desc: "First partial payout helps cover senior secondary school costs." },
              { icon: TrendingUp, stage: "Age 18", title: "College ready", desc: "Major payout covers full college admission and hostel fees." },
              { icon: Award, stage: "Age 21+", title: "Final payout", desc: "Remaining corpus for post-graduate studies or a career head start." },
            ].map((step, i) => (
              <div key={i} className="text-center space-y-5 reveal group">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto group-hover:bg-white/30 transition-colors">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="inline-block px-4 py-1 bg-white/20 text-emerald-100 rounded-full text-xs font-bold">{step.stage}</span>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">{step.title}</h4>
                  <p className="text-emerald-200 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ + CTA ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* FAQ */}
          <div className="space-y-8 reveal">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-500" />
                <p className="text-emerald-600 font-semibold text-sm">Common questions</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Things people ask</h2>
            </div>

            <div className="space-y-4">
              {faq.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group cursor-default"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors pr-4">{item.q}</h4>
                    <ChevronDown className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 shrink-0 transition-colors" />
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="reveal">
            <div className="bg-slate-900 rounded-3xl p-10 h-full flex flex-col justify-between gap-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full -translate-x-1/3 translate-y-1/3" />

              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-extrabold text-white leading-tight tracking-tight">
                  Ready to secure your child&apos;s future?
                </h3>
                <p className="text-slate-400 text-base leading-relaxed">
                  Get a personalised plan illustration sent to you — completely free, no obligations. Just a conversation about what matters most.
                </p>
              </div>

              <div className="relative z-10 space-y-3">
                <a
                  href="tel:+919824215296"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-emerald-500 text-white rounded-2xl font-bold text-base hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
                >
                  <Phone className="w-5 h-5" /> Call +91 98242 15296
                </a>
                <a
                  href="mailto:bipinkuhikar@gmail.com"
                  className="w-full flex items-center justify-center gap-3 py-4 border border-slate-700 text-slate-300 rounded-2xl font-semibold text-sm hover:border-emerald-500 hover:text-emerald-400 transition-all"
                >
                  <Mail className="w-4 h-4" /> bipinkuhikar@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">

            {/* Brand */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg leading-none">Bipinkumar Kuhikar</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Helping families across India secure their children&apos;s dreams with trusted LIC plans since 2014.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h4 className="font-semibold text-slate-300 text-sm uppercase tracking-wide">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+919824215296" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium">
                    <Phone className="w-4 h-4 shrink-0" /> +91 98242 15296
                  </a>
                </li>
                <li>
                  <a href="mailto:bipinkuhikar@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium">
                    <Mail className="w-4 h-4 shrink-0" /> bipinkuhikar@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                  <Landmark className="w-4 h-4 shrink-0" /> LIC of India — Authorised Agent
                </li>
              </ul>
            </div>

            {/* Credentials */}
            <div className="space-y-5">
              <h4 className="font-semibold text-slate-300 text-sm uppercase tracking-wide">Credentials</h4>
              <ul className="space-y-3">
                {[
                  "IRDA Reg. #9122-94",
                  "LIC Authorised Advisor",
                  "10+ Years in Practice",
                  "500+ Policies Issued",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                    <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
            <p>© 2026 Bipinkumar S. Kuhikar. All rights reserved.</p>
            <p className="text-center leading-relaxed max-w-sm">
              *Returns are projected estimates based on historical LIC bonus data. Tax benefits are subject to applicable laws. Insurance is the subject matter of solicitation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
