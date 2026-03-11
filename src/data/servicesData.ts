
import type { ServiceData } from '../types';

export const servicesData: Record<string, ServiceData> = {
  "gestion-airbnb": {
    id: "01",
    title: "Marketing & Boost d'Annonces",
    description: "Photos professionnelles, rédaction séduisante et tarification dynamique pour maximiser votre taux d'occupation.",
    benefit: "Maximisez vos revenus",
    benefitSummary: "Optimisez la visibilité de votre annonce et boostez vos revenus grâce à notre expertise en marketing digital et tarification dynamique.",
    fullContent: "La visibilité est la clé de la réussite sur les plateformes de location saisonnière. Chez Xiri Conciergerie, nous ne nous contentons pas de publier une annonce ; nous créons une expérience visuelle et textuelle irrésistible. Grâce à nos photographes professionnels spécialisés en architecture et nos rédacteurs SEO multilingues, nous positionnons votre bien en tête des résultats de recherche. Notre expertise en tarification dynamique nous permet d'ajuster vos prix en temps réel selon la demande locale, les événements et la saisonnalité, garantissant ainsi un taux d'occupation optimal et des revenus maximisés tout au long de l'année.",
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
    title: "Filtrage & Sécurité Voyageurs",
    description: "Nous gérons toute la communication et filtrons rigoureusement les profils pour votre sérénité.",
    benefit: "Louez en toute sérénité",
    benefitSummary: "Protégez votre patrimoine avec un filtrage rigoureux et une sélection humaine des voyageurs les plus fiables.",
    fullContent: "Votre patrimoine mérite le respect et une sécurité sans compromis. Notre processus de sélection ne repose pas uniquement sur des algorithmes, mais sur une expertise humaine rigoureuse. Nous vérifions systématiquement les profils, analysons les avis passés et échangeons directement avec chaque voyageur avant de valider une réservation. Cette approche proactive nous permet de garantir que votre bien est confié à des personnes de confiance, respectueuses de votre règlement intérieur et de l'âme de votre demeure. En cas de besoin, nous gérons l'intégralité des dépôts de garantie via une plateforme sécurisée, vous offrant ainsi une tranquillité d'esprit absolue, quel que soit l'éloignement.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200", // Image de confiance/accueil mise à jour (Alternative working URL)
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
    title: "Accueil & Remise de Clés",
    description: "Un accueil personnalisé et un état des lieux rigoureux à chaque départ par nos équipes locales.",
    benefit: "Une expérience 5 étoiles",
    benefitSummary: "Garantissez une première impression mémorable et fidélisez vos voyageurs avec un accueil chaleureux et professionnel.",
    fullContent: "L'arrivée est le moment où commence l'expérience client et où se forge la première impression, souvent décisive pour la suite du séjour. Chez Xiri Conciergerie, nous transformons ce passage obligé en un véritable moment d'accueil. Nos équipes locales accueillent personnellement vos voyageurs, leur présentent les spécificités du logement et partagent leurs meilleurs conseils sur la région. Nous remettons un livret d'accueil complet et restons disponibles pour répondre à toutes leurs questions initiales. Ce contact humain renforce le sentiment de considération des voyageurs et favorise des commentaires élogieux. Au départ, nous réalisons un état des lieux minutieux pour nous assurer que votre propriété vous est restituée dans un état impeccable.",
    img: "https://images.unsplash.com/photo-1531234799389-dcb7651eb0a2?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595113316349-9fa40464094d?auto=format&fit=crop&q=80&w=800"
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
    title: "Ménage Hôtelier & Blanchisserie",
    description: "Propreté hôtelière et linge de qualité premium pour chaque nouveau séjour.",
    benefit: "Standard hôtelier garanti",
    benefitSummary: "Offrez une propreté irréprochable et un confort premium digne des plus grands hôtels à chacun de vos hôtes.",
    fullContent: "La propreté est le critère numéro 1 pour obtenir des avis 5 étoiles et fidéliser une clientèle exigeante. Nous ne nous contentons pas d'un simple nettoyage de surface ; nous appliquons des standards hôteliers de haute désinfection à chaque rotation. Nos équipes de nettoyage professionnelles utilisent des protocoles rigoureux et des produits éco-responsables de qualité. Côté blanchisserie, nous fournissons un linge de maison premium (draps en coton de haute qualité, serviettes moelleuses) traité par un circuit industriel pour garantir une hygiène parfaite et un confort supérieur. Chaque détail compte : pliage soigné, disposition harmonieuse des produits d'accueil et vérification finale par un superviseur avant chaque arrivée.",
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
    title: "Garanties & Dépôts Sécurisés",
    description: "Protection complète de votre bien et gestion des litiges éventuels pour une tranquillité totale.",
    benefit: "Protection 100% sécurisée",
    benefitSummary: "Sécurisez vos revenus et votre bien grâce à une gestion intégrale des cautions et des garanties d'assurance.",
    fullContent: "Louer en toute sérénité nécessite une protection sans faille pour votre patrimoine. Nous mettons en place un système complet de garanties et de dépôts sécurisés pour chaque séjour. Contrairement à une gestion classique, nous gérons l'intégralité du processus de caution sans débit immédiat pour le voyageur, ce qui facilite la réservation tout en maintenant une sécurité totale. En cas de dommage, même mineur, nos équipes documentent précisément les faits et assurent l'intermédiation avec les plateformes et les assurances pour obtenir une réparation rapide et juste. Vous n'avez plus à vous soucier des aspects juridiques ou financiers liés aux éventuels incidents.",
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
    title: "Assistance & Réparations 24/7",
    description: "Réactivité totale pour tous les petits imprévus techniques du quotidien.",
    benefit: "Intervention sous 24h",
    benefitSummary: "Préservez la valeur de votre bien et la satisfaction de vos voyageurs avec une assistance technique ultra-réactive.",
    fullContent: "Une ampoule grillée ou une climatisation capricieuse ne doivent pas gâcher un séjour ni ternir votre réputation d'hôte. Notre service de maintenance ultra-réactif est prêt à intervenir à tout moment pour résoudre les imprévus techniques. Nous disposons d'un réseau d'artisans locaux qualifiés (électriciens, plombiers, serruriers) capables d'intervenir dans les plus brefs délais. Plus qu'un simple dépannage, nous assurons également une maintenance préventive entre les saisons pour détecter d'éventuelles faiblesses avant qu'elles ne deviennent des problèmes critiques. Vous recevez un rapport d'intervention détaillé pour chaque action menée, vous permettant de suivre l'état de votre patrimoine sans avoir à vous déplacer.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
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
