import { defineField, defineType } from "sanity"

export const siteContent = defineType({
  name: "siteContent",
  title: "Site Content",
  type: "document",
  groups: [
    { name: "navbar", title: "Navbar" },
    { name: "hero", title: "Hero Section" },
    { name: "benefits", title: "Benefits Section" },
    { name: "irda", title: "IRDA Section" },
    { name: "about", title: "About Section" },
    { name: "cta", title: "CTA Section" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    // ── NAVBAR ──────────────────────────────────
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      group: "navbar",
      initialValue: "B. Kuhikar",
    }),
    defineField({
      name: "brandSubtitle",
      title: "Brand Subtitle",
      type: "string",
      group: "navbar",
      initialValue: "Irda certified advisor",
    }),
    defineField({
      name: "navBadgeText",
      title: "Nav Trust Badge Text",
      type: "string",
      group: "navbar",
      initialValue: "Lic authorised since 2014",
    }),
    defineField({
      name: "navCtaText",
      title: "Nav CTA Button Text",
      type: "string",
      group: "navbar",
      initialValue: "Get a plan",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number (with country code)",
      type: "string",
      group: "navbar",
      initialValue: "+919824215296",
    }),
    defineField({
      name: "phoneDisplay",
      title: "Phone Number (display format)",
      type: "string",
      group: "navbar",
      initialValue: "+91 98242 15296",
    }),
    defineField({
      name: "emailAddress",
      title: "Email Address",
      type: "string",
      group: "navbar",
      initialValue: "bipinkuhikar@gmail.com",
    }),

    // ── HERO ──────────────────────────────────
    defineField({
      name: "heroBadge",
      title: "Hero Badge Text",
      type: "string",
      group: "hero",
      initialValue: "Bipinkumar Kuhikar · Investment advisor",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline (plain part)",
      type: "string",
      group: "hero",
      initialValue: "Secure your child's legacy with",
    }),
    defineField({
      name: "heroHeadlineAccent",
      title: "Hero Headline Accent (green italic)",
      type: "string",
      group: "hero",
      initialValue: "expert advice.",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "I provide professional investment planning to help families build guaranteed wealth and education funds through trusted Lic strategies.",
    }),
    defineField({
      name: "heroPrimaryCtaText",
      title: "Hero Primary CTA Text",
      type: "string",
      group: "hero",
      initialValue: "Book consultation",
    }),
    defineField({
      name: "heroSecondaryCtaText",
      title: "Hero Secondary CTA Text",
      type: "string",
      group: "hero",
      initialValue: "Meet the advisor",
    }),
    defineField({
      name: "heroCardTitle",
      title: "Hero Card Title",
      type: "string",
      group: "hero",
      initialValue: "Education fund",
    }),
    defineField({
      name: "heroCardBadge",
      title: "Hero Card Badge",
      type: "string",
      group: "hero",
      initialValue: "Verified roadmap",
    }),
    defineField({
      name: "heroCardChecklist",
      title: "Hero Card Checklist Items",
      type: "array",
      of: [{ type: "string" }],
      group: "hero",
      initialValue: [
        "Guaranteed education payouts",
        "Premium waiver protection",
        "Tax-free maturity amounts",
      ],
    }),

    // ── BENEFITS ──────────────────────────────────
    defineField({
      name: "benefitsSectionTitle",
      title: "Benefits Section Title",
      type: "string",
      group: "benefits",
      initialValue: "The anatomy of",
    }),
    defineField({
      name: "benefitsSectionTitleAccent",
      title: "Benefits Section Title Accent",
      type: "string",
      group: "benefits",
      initialValue: "guaranteed wealth.",
    }),
    defineField({
      name: "benefitsSectionDescription",
      title: "Benefits Section Description",
      type: "text",
      rows: 2,
      group: "benefits",
      initialValue:
        "Professional investment roadmaps designed to fund your child's specific life goals with total certainty.",
    }),
    defineField({
      name: "benefits",
      title: "Benefit Cards",
      type: "array",
      group: "benefits",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "colorKey",
              title: "Color Theme",
              type: "string",
              options: {
                list: [
                  { title: "Indigo", value: "indigo" },
                  { title: "Rose", value: "rose" },
                  { title: "Emerald", value: "emerald" },
                  { title: "Pink", value: "pink" },
                  { title: "Amber", value: "amber" },
                  { title: "Blue", value: "blue" },
                ],
              },
            }),
          ],
        },
      ],
      initialValue: [
        { title: "Education corpus", colorKey: "indigo" },
        { title: "Family shield", colorKey: "rose" },
        { title: "Tax efficiency", colorKey: "emerald" },
        { title: "Marriage fund", colorKey: "pink" },
        { title: "Guaranteed payout", colorKey: "amber" },
        { title: "Wealth builder", colorKey: "blue" },
      ],
    }),

    // ── IRDA ──────────────────────────────────
    defineField({
      name: "irdaSectionTitle",
      title: "IRDA Section Title",
      type: "string",
      group: "irda",
      initialValue: "Professional license by",
    }),
    defineField({
      name: "irdaSectionTitleAccent",
      title: "IRDA Section Title Accent",
      type: "string",
      group: "irda",
      initialValue: "Irda of India.",
    }),
    defineField({
      name: "irdaSectionDescription",
      title: "IRDA Section Description",
      type: "text",
      rows: 3,
      group: "irda",
      initialValue:
        "Every investment recommendation is backed by a professional license, ensuring your advice is compliant with Indian financial regulations and legal standards.",
    }),
    defineField({
      name: "irdaCertTitle",
      title: "Certificate Title",
      type: "string",
      group: "irda",
      initialValue: "Advisor certificate",
    }),
    defineField({
      name: "irdaCertDescription",
      title: "Certificate Description",
      type: "text",
      rows: 2,
      group: "irda",
      initialValue:
        "Confirmed: Bipinkumar Kuhikar is a licensed Investment advisor with Irda and Lic.",
    }),
    defineField({
      name: "irdaVerifiedBadge",
      title: "Verified Badge Text",
      type: "string",
      group: "irda",
      initialValue: "Irda verified advisor ✦",
    }),

    // ── ABOUT ──────────────────────────────────
    defineField({
      name: "advisorFullName",
      title: "Advisor Full Name",
      type: "string",
      group: "about",
      initialValue: "Bipinkumar Kuhikar",
    }),
    defineField({
      name: "advisorTitle",
      title: "Advisor Title / Role",
      type: "string",
      group: "about",
      initialValue: "Investment advisor",
    }),
    defineField({
      name: "yearsExperience",
      title: "Years of Experience",
      type: "string",
      group: "about",
      initialValue: "10+ Years",
    }),
    defineField({
      name: "portfolioDesc",
      title: "Portfolio Description",
      type: "string",
      group: "about",
      initialValue: "Hundreds",
    }),
    defineField({
      name: "aboutSectionTitle",
      title: "About Section Title",
      type: "string",
      group: "about",
      initialValue: "Guidance based on",
    }),
    defineField({
      name: "aboutSectionTitleAccent",
      title: "About Section Title Accent",
      type: "string",
      group: "about",
      initialValue: "total integrity.",
    }),
    defineField({
      name: "aboutSectionDescription",
      title: "About Section Description",
      type: "text",
      rows: 3,
      group: "about",
      initialValue:
        "For over a decade, I have focused on providing transparent investment roadmaps that ensure children have the financial freedom to pursue their professional dreams.",
    }),
    defineField({
      name: "aboutFeatureTitle",
      title: "About Feature Title",
      type: "string",
      group: "about",
      initialValue: "Digital-first consultations",
    }),
    defineField({
      name: "aboutFeatureDescription",
      title: "About Feature Description",
      type: "text",
      rows: 2,
      group: "about",
      initialValue:
        "Serving families across India with secure remote planning and doorstep support.",
    }),

    // ── CTA ──────────────────────────────────
    defineField({
      name: "ctaBadgeText",
      title: "CTA Badge Text",
      type: "string",
      group: "cta",
      initialValue: "Contact the advisor",
    }),
    defineField({
      name: "ctaSectionTitle",
      title: "CTA Section Title",
      type: "string",
      group: "cta",
      initialValue: "Don't leave your child's future to",
    }),
    defineField({
      name: "ctaSectionTitleAccent",
      title: "CTA Section Title Accent",
      type: "string",
      group: "cta",
      initialValue: "chance.",
    }),
    defineField({
      name: "ctaSectionDescription",
      title: "CTA Section Description",
      type: "text",
      rows: 2,
      group: "cta",
      initialValue:
        "Get a personalized investment illustration sent to your WhatsApp or email. Professional advice with zero pressure.",
    }),
    defineField({
      name: "ctaCallText",
      title: "CTA Call Button Text",
      type: "string",
      group: "cta",
      initialValue: "Call +91 98242 15296",
    }),
    defineField({
      name: "ctaEmailText",
      title: "CTA Email Button Text",
      type: "string",
      group: "cta",
      initialValue: "Write to Bipinkumar",
    }),

    // ── FOOTER ──────────────────────────────────
    defineField({
      name: "footerDisclaimer",
      title: "Footer Disclaimer",
      type: "text",
      rows: 2,
      group: "footer",
      initialValue:
        "Disclaimer: Returns shown are based on historical Lic bonus data. Insurance and investments are subjects of solicitation.",
    }),
    defineField({
      name: "footerCopyrightName",
      title: "Footer Copyright Name",
      type: "string",
      group: "footer",
      initialValue: "Bipinkumar Kuhikar",
    }),
  ],
})
