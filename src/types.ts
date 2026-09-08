export type Language = 'en' | 'pt';

export interface Ingredient {
  id: string;
  name: string;
  namePt: string;
  dosage: string;
  extractRatio?: string;
  role: string;
  rolePt: string;
  description: string;
  descriptionPt: string;
  clinicalMechanism: string;
  clinicalMechanismPt: string;
  imageUrl: string;
  iconName: string;
}

export interface PricingTier {
  id: '2-bottles' | '6-bottles' | '3-bottles' | '1-bottle';
  bottles: number;
  supplyDays: number;
  title: string;
  titlePt: string;
  subtitle: string;
  subtitlePt: string;
  pricePerBottle: number;
  regularPriceTotal: number;
  salePriceTotal: number;
  savingsTotal: number;
  isBestValue: boolean;
  isPopular: boolean;
  shipping: string;
  shippingPt: string;
  freeBonusesIncluded: boolean;
  checkoutUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  namePt?: string;
  location: string;
  age: number;
  rating: number;
  bottlesOrdered: number;
  verifiedBuyer: boolean;
  headline: string;
  headlinePt: string;
  review: string;
  reviewPt: string;
  timeAgo: string;
  timeAgoPt: string;
  daysUsed: number;
}

export interface FaqItem {
  id: string;
  question: string;
  questionPt: string;
  answer: string;
  answerPt: string;
  category: 'usage' | 'shipping' | 'guarantee' | 'results';
}

export interface FunnelSettings {
  checkoutUrl1Bottle: string;
  checkoutUrl3Bottles: string;
  checkoutUrl6Bottles: string;
  urgencyMinutes: number;
  enableExitIntent: boolean;
  activeHeadlineVariant: 'hormone-trap' | 'botanical-secret' | 'bedroom-vitality';
  discountCoupon: string;
}

export interface AdSwipe {
  id: string;
  platform: 'Facebook / Meta' | 'Native Ads (Taboola/Outbrain)' | 'Google Search' | 'Email Cart Recovery';
  headline: string;
  body: string;
  cta: string;
  targetAngle: string;
}
