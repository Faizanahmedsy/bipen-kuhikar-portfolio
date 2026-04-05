import { createClient } from "next-sanity"

// Lazy client — only created when a projectId is actually available.
// This prevents a crash at module load time before .env.local is configured.
function getClient() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  if (!projectId) return null
  return createClient({
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
    apiVersion: "2024-01-01",
    useCdn: true,
  })
}

// Fallback default content — used when Sanity returns nothing yet
export const defaultContent = {
  brandName: "B. Kuhikar",
  brandSubtitle: "Irda certified advisor",
  navBadgeText: "Lic authorised since 2014",
  navCtaText: "Get a plan",
  phoneNumber: "+919824215296",
  phoneDisplay: "+91 98242 15296",
  emailAddress: "bipinkuhikar@gmail.com",

  heroBadge: "Bipinkumar Kuhikar · Investment advisor",
  heroHeadline: "Secure your child's legacy with",
  heroHeadlineAccent: "expert advice.",
  heroDescription:
    "I provide professional investment planning to help families build guaranteed wealth and education funds through trusted Lic strategies.",
  heroPrimaryCtaText: "Book consultation",
  heroSecondaryCtaText: "Meet the advisor",
  heroCardTitle: "Education fund",
  heroCardBadge: "Verified roadmap",
  heroCardChecklist: [
    "Guaranteed education payouts",
    "Premium waiver protection",
    "Tax-free maturity amounts",
  ],

  benefitsSectionTitle: "The anatomy of",
  benefitsSectionTitleAccent: "guaranteed wealth.",
  benefitsSectionDescription:
    "Professional investment roadmaps designed to fund your child's specific life goals with total certainty.",
  benefits: [
    { title: "Education corpus", colorKey: "indigo" },
    { title: "Family shield", colorKey: "rose" },
    { title: "Tax efficiency", colorKey: "emerald" },
    { title: "Marriage fund", colorKey: "pink" },
    { title: "Guaranteed payout", colorKey: "amber" },
    { title: "Wealth builder", colorKey: "blue" },
  ],

  irdaSectionTitle: "Professional license by",
  irdaSectionTitleAccent: "Irda of India.",
  irdaSectionDescription:
    "Every investment recommendation is backed by a professional license, ensuring your advice is compliant with Indian financial regulations and legal standards.",
  irdaCertTitle: "Advisor certificate",
  irdaCertDescription:
    "Confirmed: Bipinkumar Kuhikar is a licensed Investment advisor with Irda and Lic.",
  irdaVerifiedBadge: "Irda verified advisor ✦",

  advisorFullName: "Bipinkumar Kuhikar",
  advisorTitle: "Investment advisor",
  yearsExperience: "10+ Years",
  portfolioDesc: "Hundreds",
  aboutSectionTitle: "Guidance based on",
  aboutSectionTitleAccent: "total integrity.",
  aboutSectionDescription:
    "For over a decade, I have focused on providing transparent investment roadmaps that ensure children have the financial freedom to pursue their professional dreams.",
  aboutFeatureTitle: "Digital-first consultations",
  aboutFeatureDescription:
    "Serving families across India with secure remote planning and doorstep support.",

  ctaBadgeText: "Contact the advisor",
  ctaSectionTitle: "Don't leave your child's future to",
  ctaSectionTitleAccent: "chance.",
  ctaSectionDescription:
    "Get a personalized investment illustration sent to your WhatsApp or email. Professional advice with zero pressure.",
  ctaCallText: "Call +91 98242 15296",
  ctaEmailText: "Write to Bipinkumar",

  footerDisclaimer:
    "Disclaimer: Returns shown are based on historical Lic bonus data. Insurance and investments are subjects of solicitation.",
  footerCopyrightName: "Bipinkumar Kuhikar",
}

export type SiteContent = typeof defaultContent

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const sanity = getClient()
    // No project ID yet → return defaults so the page still renders
    if (!sanity) return defaultContent

    const data = await sanity.fetch(
      `*[_type == "siteContent" && _id == "siteContent"][0]`,
      {},
      { next: { revalidate: 60 } }
    )
    if (!data) return defaultContent
    // Merge fetched data with defaults so missing fields gracefully fall back
    return { ...defaultContent, ...data }
  } catch {
    return defaultContent
  }
}
