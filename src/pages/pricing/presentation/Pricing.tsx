import { useState } from "react";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";

import TabBar from "./components/tabBar";
import { motion } from "framer-motion";

interface PricingData {
  tier: string;
  price?: string;
  priceAlt?: string;
  oldPrice?: string;
  discount?: number;
  credits?: number;
  features: string[];
  additionalFeatures: string[];
  cta: string;
  popular?: boolean;
}

const PricingCard: React.FC<PricingData> = ({
  tier,
  price,
  priceAlt,
  oldPrice,
  discount,
  credits,
  features = [],
  additionalFeatures = [],
  cta,
  popular = false,
}) => (
  <div
    className={`p-6 border border-borderLight rounded-lg shadow-lg flex flex-col h-full relative ${
      popular ? "text-white" : "bg-card text-bodyText"
    }`}
    style={popular ? { background: "var(--gradient-primary)" } : {}}
  >
    {popular && (
      <span className="absolute top-4 right-4 bg-lightAccent text-primaryAccent text-xs font-semibold px-2.5 py-0.5 rounded-full">
        Popular
      </span>
    )}
    <div className={`mb-4 ${popular ? "text-white" : "text-headingText"}`}>
      <h3 className="text-2xl font-bold mb-2">{tier}</h3>
      <div className="flex items-end mb-2">
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-4xl font-bold">{priceAlt}</span>

        {price && (
          <span
            className={`text-xl ml-1 ${
              popular ? "text-white" : "text-bodyText"
            }`}
          >
            /month
          </span>
        )}
      </div>
      <div className="flex items-center">
        {discount && (
          <span className="bg-lightSuccess text-success text-xs font-semibold mr-2 px-2.5 py-1 rounded-full flex items-center">
            <RiDiscountPercentLine className="h-4 w-4 mr-1 flex-shrink-0 text-success" />
            {discount}% off
          </span>
        )}
        {oldPrice && (
          <span
            className={`line-through text-2xl font-bold ${
              popular ? "text-white" : "text-bodyText"
            }`}
          >
            {oldPrice}
          </span>
        )}
      </div>
    </div>
    <ul className="mb-8 space-y-2 flex-grow">
      {credits && credits > 0 ? (
        <li className="flex items-center">
          <FaCircleCheck
            className={`h-4 w-4 mr-2 flex-shrink-0 ${
              popular ? "text-white" : "text-primaryAccent"
            }`}
          />
          <span
            className={`font-semibold ${
              popular ? "text-white" : "text-primaryAccent"
            }`}
          >
            {credits} Credits
          </span>
        </li>
      ) : null}

      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <FaCircleCheck className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto">
      <div
        className={`border-t ${
          popular ? "border-gray-600" : "border-gray-200"
        } my-4`}
      ></div>
      <ul className="mb-8 space-y-2">
        {additionalFeatures.map((feature, index) => (
          <li key={index} className="text-sm font-bold">
            • {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 px-4 rounded-md ${
          popular
            ? "bg-white text-primaryAccent"
            : "bg-primaryAccent text-white"
        } font-semibold`}
      >
        {cta}
      </button>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  const pricingData: PricingData[] = [
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
  return (
    <div className="container  mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-headingText text-center mb-8">
        Pricing
      </h1>
      <TabBar isAnnual={isAnnual} onToggle={setIsAnnual} />
      <div className="overflow-hidden">
        <button onClick={() => setIsAnnual(!isAnnual)}></button>
        <motion.div
          key={isAnnual ? "annual" : "monthly"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          {isAnnual
            ? pricingData
                .slice(0, 4)
                .map((plan, index) => <PricingCard key={index} {...plan} />)
            : pricingData
                .slice(0, 4)
                .map((plan, index) => <PricingCard key={index} {...plan} />)}
        </motion.div>
      </div>
    </div>
  );
};
export default Pricing;
