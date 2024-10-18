export interface IPricingData {
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

export type IPricingHeader = Pick<
  IPricingData,
  "tier" | "price" | "priceAlt" | "oldPrice" | "discount" | "popular"
>;

export type IFeatureList = Pick<
  IPricingData,
  "credits" | "features" | "popular"
>;
