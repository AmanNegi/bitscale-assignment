import { IPricingData } from "@/types/pages/pricing";

/**
 * Pricing data for all the tiers (currently same for annual and monthly)
 */
export const pricingData: IPricingData[] = [
  {
    tier: "Trial",
    priceAlt: "Try now",
    credits: 0,
    features: [
      "25+ data sources",
      "GPT4, LinkedIn and others",
      "Access to slack community",
      "10+ templates to scale your outbound",
    ],
    additionalFeatures: ["Explore product capabilities"],
    cta: "Try Now",
  },
  {
    tier: "Growth",
    price: "$229",
    oldPrice: "$459",
    discount: 50,
    credits: 8000,
    features: [
      "Webhook, HTTP API",
      "Credit rollover (upto 2x plan credits)",
      "Outbound email integrations like Instantly, Smartlead.",
      "Dedicated 3 hours from Bitscale expert",
    ],
    additionalFeatures: [
      "Unlimited leads search",
      "Fully enriched 5000 leads",
      "Personalized outreach at scale",
    ],
    cta: "Continue with Growth",
  },
  {
    tier: "Booster",
    price: "$499",
    oldPrice: "$999",
    discount: 50,
    credits: 25000,
    features: [
      "Webhook, HTTP API",
      "Credit rollover (upto 2x plan credits)",
      "Outbound email integrations like Instantly, Smartlead.",
      "Dedicated 3 hours from Bitscale expert",
      "Advanced models like Claude Sonnet",
      "Dedicated 8 hours from Bitscale expert",
      "2 way Hubspot integration",
    ],
    additionalFeatures: [
      "Unlimited leads search",
      "Fully enriched 15000 leads",
      "Personalized outreach at scale",
    ],
    cta: "Continue with Booster",
    popular: true,
  },
  {
    tier: "Enterprise",
    priceAlt: "Contact Us",
    credits: 0,
    features: [
      "Data privacy certification",
      "Priority Support",
      "Dedicated Bitscale expert",
      "Private Slack Channel",
      "Collaborative workspace and templates",
    ],
    additionalFeatures: [
      "Perfect for High-Volume End-to-End CRM Data Enrichment",
      "Unlimited list of leads with unlimited data points",
    ],
    cta: "Try Now",
  },
];
