// Service data for Cameroon farming platform
// Includes French and English translations for Cameroon context

export interface ServiceFeature {
  en: string;
  fr: string;
}

export interface Service {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  features: ServiceFeature[];
  icon: string;
  color: string;
  ctaText: {
    en: string;
    fr: string;
  };
  pagePath: string;
}

export const servicesData: Service[] = [
  {
    id: 'farm-mapping',
    title: {
      en: 'Farm Mapping & EUDR Verification',
      fr: 'Cartographie des Exploitations et Conformité EUDR'
    },
    description: {
      en: 'Satellite-based farm boundary mapping and EU Deforestation Regulation compliance verification for Cameroon farmers.',
      fr: 'Cartographie des limites des exploitations par satellite et vérification de la conformité au Règlement de l\'UE sur la déforestation pour les agriculteurs camerounais.'
    },
    features: [
      { en: 'Satellite farm boundary mapping', fr: 'Cartographie des limites des exploitations par satellite' },
      { en: 'EUDR compliance verification', fr: 'Vérification de la conformité EUDR' },
      { en: 'Digital farm records & certification', fr: 'Enregistrements numériques et certification des exploitations' },
      { en: 'GPS-based farm documentation', fr: 'Documentation des exploitations basée sur GPS' }
    ],
    icon: '',
    color: 'bg-green-500',
    ctaText: {
      en: 'Get Farm Mapped',
      fr: 'Cartographier Mon Exploitation'
    },
    pagePath: '/services/farm-mapping'
  },
  {
    id: 'input-financing',
    title: {
      en: 'Input Financing (BNPL)',
      fr: 'Financement des Intrants (Achat Maintenant, Payer Plus Tard)'
    },
    description: {
      en: 'Buy Now Pay Later for agricultural inputs with flexible payment plans aligned with harvest cycles.',
      fr: 'Achetez maintenant et payez plus tard pour les intrants agricoles avec des plans de paiement flexibles alignés sur les cycles de récolte.'
    },
    features: [
      { en: 'Flexible payment plans', fr: 'Plans de paiement flexibles' },
      { en: 'Harvest-aligned repayment', fr: 'Remboursement aligné sur la récolte' },
      { en: 'Partnerships with local suppliers', fr: 'Partenariats avec les fournisseurs locaux' },
      { en: 'Quick approval process', fr: 'Processus d\'approbation rapide' }
    ],
    icon: '',
    color: 'bg-blue-500',
    ctaText: {
      en: 'Apply for Financing',
      fr: 'Demander un Financement'
    },
    pagePath: '/services/input-financing'
  },
  {
    id: 'micro-insurance',
    title: {
      en: 'Micro-Insurance',
      fr: 'Micro-Assurance Agricole'
    },
    description: {
      en: 'Affordable crop, livestock, and weather-based insurance for smallholder farmers in Cameroon.',
      fr: 'Assurance abordable pour les cultures, le bétail et les risques climatiques pour les petits agriculteurs au Cameroun.'
    },
    features: [
      { en: 'Weather-indexed crop insurance', fr: 'Assurance récolte basée sur les conditions météo' },
      { en: 'Livestock mortality coverage', fr: 'Couverture mortalité du bétail' },
      { en: 'Affordable premiums', fr: 'Primes abordables' },
      { en: 'Quick claims processing', fr: 'Traitement rapide des réclamations' }
    ],
    icon: '',
    color: 'bg-purple-500',
    ctaText: {
      en: 'Get Insured',
      fr: 'Souscrire une Assurance'
    },
    pagePath: '/services/micro-insurance'
  },
  {
    id: 'marketplace',
    title: {
      en: 'Agricultural Marketplace',
      fr: 'Marché Numérique Agricole'
    },
    description: {
      en: 'Digital marketplace connecting Cameroon farmers with buyers for agricultural products and inputs.',
      fr: 'Marché numérique connectant les agriculteurs camerounais avec les acheteurs pour les produits et intrants agricoles.'
    },
    features: [
      { en: 'Product listings & price discovery', fr: 'Listes de produits et découverte des prix' },
      { en: 'Direct farmer-to-buyer connections', fr: 'Connexions directes agriculteur-acheteur' },
      { en: 'Quality verification system', fr: 'Système de vérification de la qualité' },
      { en: 'Secure payment processing', fr: 'Traitement sécurisé des paiements' }
    ],
    icon: '',
    color: 'bg-orange-500',
    ctaText: {
      en: 'Explore Marketplace',
      fr: 'Explorer le Marché'
    },
    pagePath: '/services/marketplace'
  }
];

// Helper function to get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return servicesData.find(service => service.id === id);
};

// Helper function to get all services
export const getAllServices = (): Service[] => {
  return servicesData;
};
