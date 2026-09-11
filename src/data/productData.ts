import React from 'react';
import { Ingredient, PricingTier, Testimonial, FaqItem, AdSwipe, FunnelSettings } from '../types';
import { recordCustomerActivity, recordAffiliateClick } from '../services/firebase';

export const AFFILIATE_BUY_LINK = 'https://vapofil.com/vpf-aff-buy-dtc/?aff_id=78146';

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export const triggerConversionAndRedirect = (
  e?: React.MouseEvent<HTMLAnchorElement>,
  url: string = AFFILIATE_BUY_LINK,
  label: string = 'Clique Botão de Compra Oficial'
) => {
  if (e) {
    e.preventDefault();
  }

  // Record specific affiliate click and atomic counters into Firebase
  try {
    recordAffiliateClick(label, url);
  } catch (err) {
    console.warn('Affiliate log notice:', err);
  }

  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url);
  } else if (typeof window !== 'undefined') {
    window.location.href = url;
  }
};

export const DEFAULT_FUNNEL_SETTINGS: FunnelSettings = {
  checkoutUrl1Bottle: AFFILIATE_BUY_LINK,
  checkoutUrl3Bottles: AFFILIATE_BUY_LINK,
  checkoutUrl6Bottles: AFFILIATE_BUY_LINK,
  urgencyMinutes: 27,
  enableExitIntent: true,
  activeHeadlineVariant: 'hormone-trap',
  discountCoupon: 'VAPO10',
};

export const PRODUCT_INFO = {
  name: 'VapoFil™',
  tagline: 'Premium Male Virility, Cellular Energy & Hormonal Vitality Formula',
  taglinePt: 'Fórmula Premium para Virilidade Masculina, Energia Celular e Vitalidade Hormonal',
  bottleCount: 60,
  servingSize: '2 Capsules Daily',
  servingSizePt: '2 Cápsulas ao Dia com Água',
  supplyPerBottleDays: 30,
  manufacturer: 'GEX Corp',
  facilityAddress: 'Lakeland, FL 33804, USA',
  supportPhone: '+1 323-372-9581',
  supportEmail: 'contact@customercs.com',
  guaranteeDays: 60,
};

export const INGREDIENTS_DATA: Ingredient[] = [
  {
    id: 'tongkat-ali',
    name: 'Tongkat Ali (Eurycoma Longifolia)',
    namePt: 'Tongkat Ali (Ginseng Malaio)',
    dosage: '10 mg',
    extractRatio: '100:1 Concentrate (~1,000 mg botanical equivalent)',
    role: 'Supports Healthy Testosterone Markers & Stress Resilience',
    rolePt: 'Apoio aos Níveis Hormonais Saudáveis e Bem-Estar',
    description: 'Traditionally revered in Southeast Asia, Tongkat Ali has been studied for its ability to support normal male vitality and endocrine health. A comprehensive meta-analysis of clinical trials (Leisegang et al., 2022) found significant positive associations with total testosterone concentrations in adult men, alongside research demonstrating its role in modulating cortisol and supporting a positive mood under everyday stress.',
    descriptionPt: 'Tradicionalmente utilizado no sudeste asiático, o Tongkat Ali é amplamente estudado por seu potencial apoio à vitalidade masculina. Uma metanálise de ensaios clínicos (Leisegang et al., 2022) identificou melhora significativa nos marcadores de testosterona total, além de pesquisas que apontam suporte na modulação do cortisol e no bem-estar sob estresse.',
    clinicalMechanism: 'Studied for supporting endogenous androgen production and promoting stress-resilient endocrine balance.',
    clinicalMechanismPt: 'Pesquisado por auxiliar na manutenção do equilíbrio endócrino e na resposta adaptogênica ao estresse.',
    imageUrl: './images/tongkat-ali.jpg',
    iconName: 'Flame',
  },
  {
    id: 'horny-goat-weed',
    name: 'Epimedium (Horny Goat Weed)',
    namePt: 'Epimedium (Horny Goat Weed)',
    dosage: '8 mg',
    extractRatio: '10:1 Extract (~80 mg equivalent)',
    role: 'Promotes Healthy Nitric Oxide & Microvascular Circulation',
    rolePt: 'Suporte ao Óxido Nítrico e à Circulação Microvascular',
    description: 'Rich in the naturally occurring flavonoid icariin, this traditional botanical has been investigated for its nutritional role in supporting nitric oxide signaling pathways. Healthy nitric oxide production contributes to arterial relaxation and normal pelvic microvascular circulation in adult men.',
    descriptionPt: 'Rico no flavonoide natural icariina, este botânico tradicional é estudado por seu papel nutricional no suporte às vias de sinalização de óxido nítrico, auxiliando na circulação microvascular saudável e no relaxamento vascular.',
    clinicalMechanism: 'Nutritional cofactor that supports normal endothelial vascular tone and healthy blood flow.',
    clinicalMechanismPt: 'Cofator nutricional que contribui para o tônus vascular endotelial normal e fluxo sanguíneo equilibrado.',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80',
    iconName: 'Zap',
  },
  {
    id: 'saw-palmetto',
    name: 'Saw Palmetto Berry Extract (Serenoa Repens)',
    namePt: 'Extrato de Saw Palmetto (Serenoa Repens)',
    dosage: '20 mg',
    extractRatio: 'Standardized Berry Lipid Extract',
    role: 'Targeted Prostate Health & Urinary Tract Support',
    rolePt: 'Suporte à Saúde Prostática e ao Trato Urinário',
    description: 'A benchmark botanical in men’s wellness, standardized Serenoa repens is supported by extensive peer-reviewed literature for its role in maintaining healthy prostate cellular function and promoting uninterrupted, comfortable nighttime urinary flow.',
    descriptionPt: 'Um dos botânicos mais consolidados para a saúde masculina, o extrato padronizado de Serenoa repens possui ampla literatura científica apoiando a manutenção da saúde da próstata e o conforto urinário contínuo.',
    clinicalMechanism: 'Offers nutritional support for normal prostate metabolism and healthy urinary comfort.',
    clinicalMechanismPt: 'Oferece suporte nutricional ao metabolismo prostático saudável e ao conforto do trato urinário.',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    iconName: 'ShieldCheck',
  },
  {
    id: 'nettle-leaf',
    name: 'Nettle Leaf Extract (Urtica Dioica)',
    namePt: 'Extrato de Folha de Urtiga (Urtica Dioica)',
    dosage: '20 mg',
    extractRatio: 'Botanical Lignan Extract',
    role: 'Supports Normal Hormone Balance & Circulating Free-T',
    rolePt: 'Suporte ao Equilíbrio Hormonal e Testosterona Livre',
    description: 'Nettle leaf contains bioactive plant lignans that interact with sex hormone-binding globulin (SHBG). In nutritional science, these plant compounds are studied for their ability to help maintain a favorable ratio of active circulating free testosterone within healthy physiological ranges.',
    descriptionPt: 'Contém lignanas vegetais bioativas que interagem com a globulina transportadora SHBG, sendo estudadas por auxiliar na manutenção de uma proporção favorável de testosterona livre ativa circulante.',
    clinicalMechanism: 'Plant lignans provide targeted support for balanced hormone transportation and utilization.',
    clinicalMechanismPt: 'Lignanas vegetais fornecem suporte direcionado para o transporte e utilização equilibrada dos hormônios.',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
    iconName: 'Unlock',
  },
  {
    id: 'boron-chelate',
    name: 'Boron Amino Acid Chelate 5%',
    namePt: 'Quelato de Aminoácido de Boro 5%',
    dosage: '20 mg',
    extractRatio: 'High-Bioavailability Mineral Chelate',
    role: 'Essential Trace Mineral for Male Endocrine Metabolism',
    rolePt: 'Mineral Essencial para o Metabolismo Endócrino Masculino',
    description: 'Boron is an essential micronutrient involved in cellular mineral metabolism and steroid hormone processing. Preliminary clinical trials in healthy men (such as Naghii et al.) have observed favorable shifts in free testosterone markers following short-term boron supplementation, presenting an active and promising area of nutritional research.',
    descriptionPt: 'Micronutriente essencial envolvido no metabolismo celular de minerais e processamento hormonal. Estudos clínicos preliminares em homens saudáveis (como Naghii et al.) associam o boro a níveis mais favoráveis de testosterona livre, constituindo uma linha de pesquisa nutricional promissora.',
    clinicalMechanism: 'Serves as an essential enzymatic cofactor supporting healthy hormone synthesis pathways.',
    clinicalMechanismPt: 'Atua como cofator enzimático essencial que apoia as vias saudáveis de síntese hormonal.',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    iconName: 'Sparkles',
  },
  {
    id: 'sarsaparilla-root',
    name: 'Sarsaparilla Root Extract (Smilax)',
    namePt: 'Raiz de Salsaparrilha (Smilax)',
    dosage: '20 mg',
    extractRatio: 'Native Plant Saponin Complex',
    role: 'Physical Stamina & Daily Vitality Tonic',
    rolePt: 'Resistência Física e Tônico de Vitalidade',
    description: 'Prized in traditional botanical herbalism as a rejuvenating tonic, sarsaparilla provides naturally occurring plant saponins that help nourish energy reserves, support cellular nutrient absorption, and maintain daily physical stamina.',
    descriptionPt: 'Valorizada na fitoterapia tradicional como um tônico rejuvenescedor, a salsaparrilha fornece saponinas vegetais que auxiliam na nutrição das reservas energéticas e na manutenção da resistência física diária.',
    clinicalMechanism: 'Natural botanical saponins assist in nutrient absorption and cellular vitality maintenance.',
    clinicalMechanismPt: 'Saponinas botânicas naturais auxiliam na absorção de nutrientes e manutenção da vitalidade celular.',
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
    iconName: 'Activity',
  },
  {
    id: 'wild-yam',
    name: 'Wild Yam Root Extract (Dioscorea Villosa)',
    namePt: 'Extrato de Raiz de Wild Yam (Dioscorea Villosa)',
    dosage: '20 mg',
    extractRatio: 'Diosgenin Standardized Botanical',
    role: 'Nourishes Metabolic Energy & Muscular Tone',
    rolePt: 'Apoio à Energia Metabólica e Tônus Muscular',
    description: 'Wild Yam yields natural plant-based diosgenin, utilized in herbal tradition to support vitality, promote steady metabolic endurance, and assist in maintaining healthy muscular resilience during daily activity.',
    descriptionPt: 'Fornece diosgenina botânica natural, utilizada na tradição herbal para auxiliar na vitalidade, promover resistência metabólica contínua e manter a resiliência muscular nas tarefas diárias.',
    clinicalMechanism: 'Supplies natural plant sterols to support muscular recovery and cellular resilience.',
    clinicalMechanismPt: 'Fornece esteróis vegetais naturais para apoiar a recuperação muscular e a resiliência celular.',
    imageUrl: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80',
    iconName: 'Shield',
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: '2-bottles',
    bottles: 2,
    supplyDays: 60,
    title: '2 BOTTLES',
    titlePt: '2 FRASCOS',
    subtitle: '60 Day Supply',
    subtitlePt: 'Suprimento para 60 Dias',
    pricePerBottle: 79,
    regularPriceTotal: 358,
    salePriceTotal: 158,
    savingsTotal: 200,
    isBestValue: false,
    isPopular: false,
    shipping: '+ 9.99 SHIPPING',
    shippingPt: '+ FRETE $9.99',
    freeBonusesIncluded: false,
    checkoutUrl: 'https://cart.cartpanda.com/vapofil-2',
  },
  {
    id: '6-bottles',
    bottles: 6,
    supplyDays: 180,
    title: '6 BOTTLES',
    titlePt: '6 FRASCOS',
    subtitle: '180 Day Supply',
    subtitlePt: 'Suprimento para 180 Dias',
    pricePerBottle: 49,
    regularPriceTotal: 1074,
    salePriceTotal: 294,
    savingsTotal: 780,
    isBestValue: true,
    isPopular: false,
    shipping: '+ FREE SHIPPING',
    shippingPt: '+ FRETE GRÁTIS',
    freeBonusesIncluded: true,
    checkoutUrl: 'https://cart.cartpanda.com/vapofil-6',
  },
  {
    id: '3-bottles',
    bottles: 3,
    supplyDays: 90,
    title: '3 BOTTLES',
    titlePt: '3 FRASCOS',
    subtitle: '90 Day Supply',
    subtitlePt: 'Suprimento para 90 Dias',
    pricePerBottle: 69,
    regularPriceTotal: 537,
    salePriceTotal: 207,
    savingsTotal: 330,
    isBestValue: false,
    isPopular: true,
    shipping: '+ FREE SHIPPING',
    shippingPt: '+ FRETE GRÁTIS',
    freeBonusesIncluded: false,
    checkoutUrl: 'https://cart.cartpanda.com/vapofil-3',
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: '[Verified Customer Name - e.g., Michael B.]',
    namePt: '[Nome do Cliente Verificado - ex: Michael B.]',
    location: 'United States',
    age: 52,
    rating: 5,
    bottlesOrdered: 6,
    verifiedBuyer: true,
    headline: '"[Insert verified feedback on daily stamina & vitality]"',
    headlinePt: '"[Inserir depoimento verificado sobre disposição e vitalidade diária]"',
    review: '[PLACEHOLDER: Insert authentic, documented customer review from a verified purchaser with express consent. In compliance with FTC Endorsement Guides and Google Ads health policies, customer experiences reflect individual dietary results and do not claim to treat, cure, or reverse medical conditions.]',
    reviewPt: '[ESPAÇO RESERVADO: Inserir depoimento real e autorizado de comprador verificado. Em conformidade com as diretrizes da FTC e políticas do Google Ads, os relatos refletem experiências individuais com suplementação alimentar e não alegam cura ou tratamento médico.]',
    timeAgo: 'Verified Purchase',
    timeAgoPt: 'Compra Verificada',
    daysUsed: 60,
  },
  {
    id: 'test-2',
    name: '[Verified Customer Name - e.g., Robert C.]',
    namePt: '[Nome do Cliente Verificado - ex: Robert C.]',
    location: 'United States',
    age: 58,
    rating: 5,
    bottlesOrdered: 6,
    verifiedBuyer: true,
    headline: '"[Insert verified feedback on prostate comfort & morning energy]"',
    headlinePt: '"[Inserir depoimento verificado sobre conforto prostático e energia matinal]"',
    review: '[PLACEHOLDER: Insert authentic, documented customer review from a verified purchaser with express consent. To ensure compliance, avoid referencing prescription drugs or guaranteed disease outcomes. Focus on satisfaction with ingredients, packaging, and general wellness.]',
    reviewPt: '[ESPAÇO RESERVADO: Inserir depoimento real e autorizado de comprador verificado. Para garantir a conformidade, evite referências a remédios controlados ou garantias de resultados clínicos. Destaque a satisfação com a fórmula, envio discreto e bem-estar geral.]',
    timeAgo: 'Verified Purchase',
    timeAgoPt: 'Compra Verificada',
    daysUsed: 90,
  },
  {
    id: 'test-3',
    name: '[Verified Customer Name - e.g., David T.]',
    namePt: '[Nome do Cliente Verificado - ex: David T.]',
    location: 'United States',
    age: 46,
    rating: 5,
    bottlesOrdered: 3,
    verifiedBuyer: true,
    headline: '"[Insert verified feedback on natural drive & physical resilience]"',
    headlinePt: '"[Inserir depoimento verificado sobre vigor natural e resistência física]"',
    review: '[PLACEHOLDER: Insert authentic, documented customer review from a verified purchaser with express consent. All testimonials must represent genuine user experiences without unsubstantiated performance claims.]',
    reviewPt: '[ESPAÇO RESERVADO: Inserir relato autêntico e documentado de comprador verificado com consentimento formal. Todos os depoimentos devem representar experiências reais de consumo sem promessas não comprovadas.]',
    timeAgo: 'Verified Purchase',
    timeAgoPt: 'Compra Verificada',
    daysUsed: 45,
  }
];

export const TESTIMONIALS = TESTIMONIALS_DATA;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'results',
    question: 'How does VapoFil support male vitality and stamina?',
    questionPt: 'Como o VapoFil apoia a vitalidade e a resistência masculina?',
    answer: 'VapoFil combines 7 standardized botanicals and essential minerals formulated to support multiple facets of male wellness. Ingredients like Tongkat Ali and Boron Chelate provide nutritional support for healthy hormone balance and stress resilience. Epimedium contributes to healthy nitric oxide synthesis and microvascular circulation, while Saw Palmetto delivers targeted support for prostate cellular wellness and urinary tract comfort.',
    answerPt: 'O VapoFil combina 7 botânicos padronizados e minerais essenciais formulados para apoiar diversas dimensões do bem-estar masculino. Ingredientes como Tongkat Ali e Boro Quelatado fornecem suporte nutricional ao equilíbrio hormonal e resiliência ao estresse. O Epimedium contribui para a síntese saudável de óxido nítrico e circulação microvascular, enquanto o Saw Palmetto oferece suporte direcionado à saúde prostática e ao conforto urinário.',
  },
  {
    id: 'faq-2',
    category: 'usage',
    question: 'What is the recommended daily serving size?',
    questionPt: 'Qual é a sugestão de uso diário do VapoFil?',
    answer: 'Take two (2) capsules daily with an 8 oz glass of water, preferably with a balanced meal. Because botanical phytonutrients work gradually to support cellular nutrition, consistent daily usage over 60 to 180 days is recommended for comprehensive, sustained nutritional support.',
    answerPt: 'Tome duas (2) cápsulas ao dia com um copo de água (aproximadamente 250ml), de preferência junto a uma refeição equilibrada. Como os fitonutrientes botânicos atuam gradualmente nutrindo as células, recomenda-se o uso contínuo por 60 a 180 dias para obter suporte nutricional completo e sustentado.',
  },
  {
    id: 'faq-3',
    category: 'results',
    question: 'Are there any artificial stimulants or banned substances in VapoFil?',
    questionPt: 'O VapoFil contém estimulantes artificiais ou substâncias proibidas?',
    answer: 'No. VapoFil is a 100% botanical dietary supplement formulated without synthetic stimulants, artificial hormones, or prohibited additives. It is vegetarian-friendly, non-GMO, and produced in a cGMP-compliant facility in the United States that adheres to rigorous FDA manufacturing quality standards. As with any dietary supplement, if you have an existing medical condition or are taking medication, please consult your physician before use.',
    answerPt: 'Não. O VapoFil é um suplemento alimentar botânico formulado sem estimulantes sintéticos, hormônios artificiais ou substâncias proibidas. É vegetal, livre de transgênicos (Non-GMO) e fabricado nos Estados Unidos em instalação em conformidade com as Boas Práticas de Fabricação (cGMP). Como em qualquer suplemento, consulte seu médico caso possua condições de saúde preexistentes ou use medicações.',
  },
  {
    id: 'faq-4',
    category: 'shipping',
    question: 'How discreet is the shipping packaging?',
    questionPt: 'O envio e a embalagem são discretos?',
    answer: 'Your privacy is fully protected. Every order is dispatched in plain, sturdy postal packaging with zero markings, logos, or product descriptions on the outer shipping box. Only your shipping address appears on the exterior label.',
    answerPt: 'Sua privacidade é totalmente preservada. Cada pedido é enviado em embalagem postal neutra, sem logotipos, ilustrações ou descrição do produto na parte externa da caixa. Apenas o seu endereço de entrega consta na etiqueta postal.',
  },
  {
    id: 'faq-5',
    category: 'guarantee',
    question: 'How does the 60-Day 100% Money-Back Guarantee work?',
    questionPt: 'Como funciona a Garantia de Satisfação de 60 Dias?',
    answer: 'Every order of VapoFil comes with our 60-Day 100% Money-Back Guarantee. We want you to evaluate the formula with complete peace of mind. If you are not satisfied with your experience for any reason within 60 days of delivery, simply return the bottles—even if empty—to receive a prompt refund of your purchase price (less shipping and handling). Zero questions asked.',
    answerPt: 'Cada pedido do VapoFil é protegido pela nossa Garantia de Reembolso de 60 Dias. Queremos que você experimente a fórmula com total tranquilidade. Se por qualquer motivo você não ficar satisfeito dentro de 60 dias a contar da entrega, basta devolver os frascos — mesmo vazios — para receber o reembolso do valor pago.',
  },
  {
    id: 'faq-6',
    category: 'shipping',
    question: 'Why do most customers choose the 6-Bottle bundle?',
    questionPt: 'Por que a maioria dos clientes opta pelo pacote de 6 frascos?',
    answer: 'The 6-Bottle package offers the greatest overall value: it reduces the price per bottle to just $49, provides immediate Free Priority Shipping within the USA, and includes 2 complimentary digital guide bonuses. Furthermore, multi-month supplementation allows the botanical extracts to properly build and maintain optimal nutrient saturation in male physiology.',
    answerPt: 'O pacote de 6 frascos oferece a melhor relação custo-benefício: reduz o valor por frasco para apenas $49, inclui Frete Grátis prioritário para os EUA e adiciona 2 guias digitais exclusivos como bônus. Além disso, a suplementação contínua de vários meses permite que os extratos botânicos alcancem e mantenham a saturação nutricional adequada no organismo.',
  }
];

export const FREE_BONUSES = [
  {
    id: 'bonus-1',
    title: '365 Positions of the Kama Sutra',
    titlePt: '365 Posições do Kama Sutra',
    value: 69,
    image: './images/bonus1.webp',
    description: 'Explore positions and techniques that transform intimacy, reigniting passion and pleasure between you and your partner every single day of the year.',
    descriptionPt: 'Explore posições e técnicas que transformam a intimidade, reacendendo a paixão e o prazer entre você e sua parceira todos os dias do ano.',
    badge: 'FREE WITH 6 BOTTLES',
    badgePt: 'GRÁTIS COM 6 FRASCOS',
  },
  {
    id: 'bonus-2',
    title: 'Master of Orgasm',
    titlePt: 'Mestre do Orgasmo',
    value: 77,
    image: './images/bonus2.webp',
    description: 'Learn proven techniques to master control, heighten sensitivity, and deliver unforgettable pleasure and deep emotional connection in every encounter.',
    descriptionPt: 'Aprenda técnicas comprovadas para dominar o controle, aumentar a sensibilidade e proporcionar experiências inesquecíveis e conexão profunda.',
    badge: 'FREE WITH 6 & 3 BOTTLES',
    badgePt: 'GRÁTIS COM 3 E 6 FRASCOS',
  }
];

export const SALES_ANALYST_DOSSIER = {
  targetAudience: {
    avatar: 'American Men, Ages 42 - 68',
    corePain: 'Diminishing morning erections, bedroom performance anxiety, lethargy at 3 PM, slow muscle recovery, fear of partner disappointment, frustration with prescription drug risks and doctor awkwardness.',
    emotionalDesires: 'Reclaiming primal masculine confidence, surprising partner with spontaneous stamina, sleeping deeply without midnight prostate wakeups, feeling 35 again.',
    buyingTriggers: 'US-made trust badges (FDA facility, GMP), 100% natural reassurance (no pharmaceutical side effects), 60-day empty bottle guarantee (zero financial risk), plain discreet box delivery.',
  },
  copywritingFramework: {
    heroHook: 'The "Endothelial Trap" & The SHBG Prison',
    mechanism: 'Why 60%+ of male testosterone is trapped in the blood by SHBG, and how VapoFil’s 7-Botanical Complex (Tongkat Ali 100:1 + Horny Goat Weed + Boron Chelate + Saw Palmetto) unlocks free active testosterone while surging nitric oxide.',
    pricingStrategy: 'Decoy pricing: 1 bottle ($89 + shipping) makes 6 bottles ($49/bottle, free shipping, free bonuses) the overwhelming irrational choice to pass up.',
    suggestedBumpOffer: 'VapoFil Nitric Sublingual Drops ($19.95) - "Add Fast-Acting 15-Minute Blood Surge Drops to your order at 60% OFF"',
    suggestedUpsell: 'ProstaShield Nightly Bladder & Sleep Formula (3-pack for $99)',
  }
};

export const AD_SWIPES: AdSwipe[] = [
  {
    id: 'ad-1',
    platform: 'Facebook / Meta',
    targetAngle: 'The SHBG Hormone Trap (Age 45+ Men)',
    headline: 'Why 73% of Men Over 45 Have "Locked" Testosterone (And The 10-Second Morning Fix)',
    body: 'If you’ve noticed sluggish mornings, sudden afternoon crashes, and fading bedroom confidence... your doctor probably didn’t tell you about SHBG.\n\nOver 60% of your body’s natural testosterone is literally trapped by a sticky protein called Sex Hormone-Binding Globulin.\n\nThis 7-ingredient botanical formula developed in Florida unlocks captive testosterone without risky prescriptions.',
    cta: 'Claim Your Discount Bottle (While Supplies Last)',
  },
  {
    id: 'ad-2',
    platform: 'Native Ads (Taboola/Outbrain)',
    targetAngle: 'Scientific Root Cause vs Blue Pills',
    headline: 'Cardiologist Warns: Why Men Over 50 Should Stop Relying on Chemical "Blue" Pills',
    body: 'Instead of dangerous artificial blood pressure spikes, natural botanical extracts like 100:1 Tongkat Ali and Icariin support smooth muscle endothelial blood flow naturally. See how thousands of American men are restoring peak virility at home.',
    cta: 'Watch The Clinical Video Report',
  },
  {
    id: 'ad-3',
    platform: 'Email Cart Recovery',
    targetAngle: 'Cart Abandonment + 60-Day Risk-Free Recall',
    headline: 'Did you forget your VapoFil bottle? (Reserved for 15 minutes)',
    body: 'Hey Mark,\n\nWe noticed you left your 60-day supply of VapoFil in your cart.\n\nRemember: Every order is backed by our 60-Day "Empty Bottle" 100% Money-Back Guarantee. You don’t risk a single dime to experience peak morning vitality.\n\nClick below to activate your reserved $780 discount before stock returns to our warehouse.',
    cta: 'Complete My VapoFil Order Now',
  }
];
