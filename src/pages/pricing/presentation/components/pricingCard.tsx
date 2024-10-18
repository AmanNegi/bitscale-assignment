import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import {
  IFeatureList,
  IPricingData,
  IPricingHeader,
} from "@/types/pages/pricing";

export const PricingCard: React.FC<IPricingData> = ({
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
}) => {
  const cardStyle = popular ? { background: "var(--gradient-primary)" } : {};
  const cardClass = cn(
    "p-6 border border-borderLight rounded-lg shadow-lg flex flex-col h-full relative",
    popular ? "text-white" : "bg-card text-bodyText",
  );

  return (
    <section className={cardClass} style={cardStyle}>
      {popular && (
        <span className="absolute top-4 right-4 bg-lightAccent text-primaryAccent text-xs font-semibold px-2.5 py-0.5 rounded-full">
          Popular
        </span>
      )}
      <PricingHeader
        tier={tier}
        price={price}
        priceAlt={priceAlt}
        oldPrice={oldPrice}
        discount={discount}
        popular={popular}
      />
      <FeatureList credits={credits} features={features} popular={popular} />
      <div className="mt-auto">
        <div
          className={cn(
            "border-t my-4",
            popular ? "border-white border-opacity-20" : "border-borderLight",
          )}
        ></div>
        <AdditionalFeatures additionalFeatures={additionalFeatures} />
        <button
          className={cn(
            "w-full py-2 px-4 rounded-md font-semibold transition-all duration-700",
            popular
              ? "bg-white text-primaryAccent"
              : "bg-primaryAccent text-white hover:bg-secondary",
          )}
        >
          {cta}
        </button>
      </div>
    </section>
  );
};

const PricingHeader: React.FC<IPricingHeader> = ({
  tier,
  price,
  priceAlt,
  oldPrice,
  discount,
  popular,
}) => (
  <div className={cn("mb-4", popular ? "text-white" : "text-headingText")}>
    <h3 className="text-2xl font-bold mb-2">{tier}</h3>
    <div className="flex items-end mb-2">
      <span className="text-5xl font-bold">{price}</span>
      <span className="text-4xl font-bold">{priceAlt}</span>
      {price && (
        <span
          className={cn(
            "text-xl ml-1",
            popular ? "text-white" : "text-bodyText",
          )}
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
          className={cn(
            "line-through text-2xl font-bold",
            popular ? "text-white" : "text-bodyText",
          )}
        >
          {oldPrice}
        </span>
      )}
    </div>
  </div>
);

const FeatureList: React.FC<IFeatureList> = ({
  credits,
  features,
  popular,
}) => (
  <ul className="mb-8 space-y-2 flex-grow">
    {credits ? (
      <li className="flex items-center">
        <FaCircleCheck
          className={cn(
            "h-4 w-4 mr-2 flex-shrink-0",
            popular ? "text-white" : "text-primaryAccent",
          )}
        />
        <span
          className={cn(
            "font-semibold",
            popular ? "text-white" : "text-primaryAccent",
          )}
        >
          {credits} Credits
        </span>
      </li>
    ) : null}
    {features?.map((feature, index) => (
      <li key={index} className="flex items-center">
        <FaCircleCheck className="h-4 w-4 mr-2 flex-shrink-0" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);

const AdditionalFeatures: React.FC<{ additionalFeatures: string[] }> = ({
  additionalFeatures,
}) => (
  <ul className="mb-8 h-[10vh] space-y-2">
    {additionalFeatures?.map((feature, index) => (
      <li key={index} className="text-sm font-bold">
        • {feature}
      </li>
    ))}
  </ul>
);
