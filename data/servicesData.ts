
import { ServiceData } from '../types';

export const servicesData: Record<string, ServiceData> = {
  "gestion-airbnb": {
    id: "01",
    title: "Gestion d'annonces Airbnb",
    description: "Photos professionnelles, rédaction séduisante et tarification dynamique pour maximiser votre taux d'occupation.",
    fullContent: "La visibilité est la clé de la réussite sur les plateformes de location saisonnière. Notre expertise Xiri transforme votre propriété en une annonce irrésistible. Nous ne nous contentons pas de poster des photos ; nous racontons une histoire, celle de votre bien au cœur de la Corse. Grâce à des algorithmes prédictifs et une connaissance pointue du marché local, nous ajustons vos tarifs en temps réel pour capturer chaque opportunité.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800"
    ],
    expertisePoints: [
      "Shooting photo professionnel HDR",
      "Rédaction multilingue optimisée SEO",
      "Synchronisation multi-plateformes",
      "Veille tarifaire quotidienne"
    ]
  },
  "selection-voyageurs": {
    id: "02",
    title: "Sélection des voyageurs",
    description: "Nous gérons toute la communication et filtrons rigoureusement les profils pour votre sérénité.",
    fullContent: "Votre patrimoine mérite le respect. L'expertise Xiri en sélection des voyageurs repose sur un filtrage humain rigoureux soutenu par nos outils de vérification. Nous analysons les profils, les avis passés et les intentions de séjour pour ne retenir que les hôtes qui traiteront votre villa ou appartement comme le leur. Une communication fluide et réactive dès le premier message instaure un climat de confiance réciproque.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c29535a7?auto=format&fit=crop&q=80&w=1200", // Image de confiance/accueil
    gallery: [
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800"
    ],
    expertisePoints: [
      "Vérification d'identité systématique",
      "Échanges personnalisés pré-réservation",
      "Gestion des cautions sécurisée",
      "Règlement intérieur strict et partagé"
    ]
  },
  "check-in-out": {
    id: "03",
    title: "Check-in / Check-out",
    description: "Un accueil personnalisé et un état des lieux rigoureux à chaque départ par nos équipes locales.",
    fullContent: "L'arrivée est le moment où commence l'expérience client. L'expertise Xiri garantit un accueil chaleureux, souvent en personne, pour présenter les spécificités de votre bien et les pépites locales à découvrir. Au départ, nous réalisons un état des lieux minutieux, garantissant que votre propriété est prête pour les prochains occupants et signalant immédiatement le moindre incident.",
    img: "https://images.unsplash.com/photo-1531234799389-dcb7651eb0a2?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551882547-ff43c639f625?auto=format&fit=crop&q=80&w=800"
    ],
    expertisePoints: [
      "Livret d'accueil digital et physique",
      "Présentation des équipements",
      "Inventaire détaillé au départ",
      "Gestion flexible des horaires"
    ]
  },
  "menage-linge": {
    id: "04",
    title: "Le ménage et le linge",
    description: "Propreté hôtelière et linge de qualité premium pour chaque nouveau séjour.",
    fullContent: "La propreté est le critère numéro 1 pour obtenir des avis 5 étoiles. L'expertise Xiri s'appuie sur des équipes de nettoyage professionnelles formées aux standards de l'hôtellerie de luxe. Nous fournissons un linge de maison de haute qualité (coton percale, éponges denses) et des produits d'accueil raffinés qui enchantent vos voyageurs dès leur entrée dans les lieux.",
    img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=800"
    ],
    expertisePoints: [
      "Nettoyage certifié haute désinfection",
      "Linge de qualité premium (lavage industriel)",
      "Produits d'accueil éco-responsables",
      "Contrôle qualité systématique avant arrivée"
    ]
  },
  "assurances-cautions": {
    id: "05",
    title: "Assurances & cautions",
    description: "Protection complète de votre bien et gestion des litiges éventuels pour une tranquillité totale.",
    fullContent: "Louer en toute sérénité nécessite une protection sans faille. L'expertise Xiri inclut la gestion intégrale des cautions via des partenaires bancaires sécurisés. En cas de dégradation, nous nous chargeons de l'ouverture des dossiers de litige auprès des plateformes et des assurances, défendant vos intérêts avec détermination et professionnalisme.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800"
    ],
    expertisePoints: [
      "Gestion des cautions sans débit",
      "Intermédiation en cas de litige",
      "Conseil en assurance spécifique",
      "Protection juridique incluse"
    ]
  },
  "maintenance-assistance": {
    id: "06",
    title: "Maintenance & assistance",
    description: "Réactivité totale pour tous les petits imprévus techniques du quotidien sur l'île.",
    fullContent: "Une ampoule grillée ou une climatisation capricieuse ne doivent pas gâcher un séjour. L'expertise Xiri mobilise un réseau d'artisans corses réactifs pour intervenir rapidement. Nous assurons une maintenance préventive et curative, veillant à ce que votre investissement reste en parfait état tout au long de l'année.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1595113316349-9fa40464094d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    ],
    expertisePoints: [
      "Assistance voyageurs 24/7",
      "Réseau d'artisans locaux qualifiés",
      "Maintenance préventive inter-saison",
      "Rapport d'intervention détaillé"
    ]
  }
};
