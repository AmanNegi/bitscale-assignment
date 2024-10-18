export interface IPricingCard {
  tier: string;
  price: string;
  credits?: number,
  oldPrice?: string;
  discount?: number,
  features: string[];
  additionalFeatures: string[];
  cta: string;
  popular?: boolean;
}
