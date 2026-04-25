
import type { ArticleData } from '../types';

// Images Megève
import megeveHero         from '../assets/images/blog/megeve/haut-de-la-ville-megeve.jpeg';
import megeveCentreVille  from '../assets/images/blog/megeve/centre-ville-megeve.jpeg';
import chamonixCentre     from '../assets/images/blog/megeve/centre-ville-chamonix.jpeg';
import appart1            from '../assets/images/blog/megeve/appartement-megeve (1).jpeg';
import appart2            from '../assets/images/blog/megeve/appartement-megeve (2).jpeg';
import appart3            from '../assets/images/blog/megeve/appartement-megeve (3).jpeg';
import appart4            from '../assets/images/blog/megeve/appartement-megeve (4).jpeg';
import appartChambre      from '../assets/images/blog/megeve/cahmbre-appartement.jpeg';
import appartCuisine      from '../assets/images/blog/megeve/cuisine-appartement.jpeg';
import terrasse           from '../assets/images/blog/megeve/terrasse-appartement.jpeg';
import vueTerrasse        from '../assets/images/blog/megeve/vue-depuis-la-terrasse.jpeg';
import hotel1             from '../assets/images/blog/megeve/vue-devant-hotel (1).jpeg';
import hotel2             from '../assets/images/blog/megeve/vue-devant-hotel (2).jpeg';
import hotel3             from '../assets/images/blog/megeve/vue-devant-hotel (3).jpeg';
import hotel4             from '../assets/images/blog/megeve/vue-devant-hotel (4).jpeg';
import montBlanc          from '../assets/images/blog/megeve/Mont-blanc.jpeg';
import aiguilleduMidi     from '../assets/images/blog/megeve/aiguille-du-midi.jpeg';

export const blog: Record<string, ArticleData> = {
  "optimisation-annonce-2024": {
    id: "optimisation-annonce-2024",
    category: "CONSEILS",
    date: "12 FÉVRIER 2024",
    readTime: "5 MIN",
    author: "Elena Rossi, Directrice Artistique",
    title: "Optimiser votre annonce en France pour la saison 2024",
    excerpt: "Les secrets pour capter la clientèle haut de gamme et augmenter vos réservations de 20% sur tout le territoire.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Le marché de la location saisonnière n'a jamais été aussi compétitif. Pour sortir du lot, il ne suffit plus d'avoir une belle vue ; il faut vendre une promesse d'évasion. La première étape cruciale réside dans la narration visuelle. Un shooting photo professionnel à l'heure dorée est le minimum syndical.",
      "Mais au-delà de l'image, c'est la stratégie tarifaire qui fera la différence. Nos algorithmes montrent que les propriétaires qui ajustent leurs prix en fonction des événements locaux — des festivals azuréens aux foires artisanales de montagne — voient leur taux d'occupation bondir de 15%.",
      "Enfin, n'oubliez pas le pouvoir de la communication. Un premier message personnalisé envoyé dans les 15 minutes suivant la demande augmente drastiquement vos chances de conversion. C'est ici que l'expertise Xiri intervient, alliant réactivité IA et chaleur humaine."
    ]
  },
  "lmnp-corse-guide-2024": {
    id: "lmnp-corse-guide-2024",
    category: "FISCALITÉ",
    date: "20 FÉVRIER 2024",
    readTime: "10 MIN",
    author: "Marc-Antoine Paoli, Consultant Fiscal",
    title: "LMNP en France : Maximisez votre rentabilité nette",
    excerpt: "Le statut de Loueur en Meublé Non Professionnel est particulièrement avantageux sur tout le territoire. On vous explique comment.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Le statut LMNP est le pilier de l'investissement locatif en France. Contrairement aux revenus fonciers classiques, il permet de déclarer vos revenus dans la catégorie des BIC (Bénéfices Industriels et Commerciaux). En optant pour le régime réel, vous pouvez déduire l'intégralité de nos frais de conciergerie, vos intérêts d'emprunt, et surtout, pratiquer l'amortissement comptable de votre bien.",
      "L'amortissement est une 'charge non décaissée' qui vient réduire votre base imposable, souvent jusqu'à la réduire à zéro. Dans les zones à forte tension locative, l'assiette d'amortissement est significative. Xiri & Co vous met en relation avec des experts-comptables spécialisés qui maîtrisent ces spécificités fiscales.",
      "Nous gérons pour vous la partie opérationnelle qui justifie le caractère 'meublé' de la location (inventaire, équipement standard luxe), assurant ainsi la pérennité de votre statut fiscal. C'est 100% légal et optimisé."
    ]
  },
  "taxe-sejour-france-automatisation": {
    id: "taxe-sejour-france-automatisation",
    category: "LÉGAL",
    date: "18 FÉVRIER 2024",
    readTime: "6 MIN",
    author: "Sophie Colonna, Responsable Administrative",
    title: "Taxe de séjour : Xiri automatise tout",
    excerpt: "La taxe de séjour varie selon les communes et les plateformes. Ne prenez plus le risque d'une erreur de calcul.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Chaque commune de France fixe ses propres tarifs de taxe de séjour, souvent votés annuellement. Pour un propriétaire, le calcul et la déclaration peuvent devenir un véritable casse-tête administratif, surtout avec la multiplication des plateformes.",
      "Xiri & Co intègre un module de calcul automatisé basé sur le classement de votre bien (meublé de tourisme classé ou non). Nous collectons la taxe pour vos réservations directes et vérifions les prélèvements effectués par Airbnb ou Booking. Vous n'avez rien à faire : nous préparons les états déclaratifs pour votre mairie.",
      "Cette rigueur administrative vous protège contre tout contrôle et garantit une image irréprochable auprès des institutions locales. La sérénité passe aussi par une gestion fiscale limpide."
    ]
  },
  "residence-secondaire-corse-liberte": {
    id: "residence-secondaire-corse-liberte",
    category: "GESTION",
    date: "10 FÉVRIER 2024",
    readTime: "9 MIN",
    author: "Marc-Antoine Paoli, Consultant Juridique",
    title: "Louer sa résidence secondaire en France sans limites",
    excerpt: "Saviez-vous que la règle des 120 jours ne s'applique pas aux résidences secondaires ? Profitez d'une rentabilité annuelle.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Beaucoup de propriétaires confondent les règles de la résidence principale et de la résidence secondaire. Pour votre résidence secondaire, vous n'êtes pas limité à 120 jours de location par an. Vous pouvez louer 365 jours si vous le souhaitez, maximisant ainsi vos revenus hors saison.",
      "Cette liberté impose toutefois des obligations de déclaration au greffe du tribunal de commerce et en mairie, que Xiri & Co prend intégralement en charge. Nous gérons le passage en 'Meublé de Tourisme Classé', ce qui vous permet également d'obtenir un abattement fiscal de 71% (au lieu de 50%) si vous choisissez le régime micro-BIC.",
      "En nous confiant votre résidence secondaire, vous transformez un centre de coût (taxes foncières, entretien) en un centre de profit performant, tout en conservant la possibilité de venir quand bon vous semble. On se charge de tout pour que votre bien s'autofinance en toute légalité."
    ]
  },
  "confier-bien-controle": {
    id: "confier-bien-controle",
    category: "GESTION",
    date: "24 FÉVRIER 2026",
    readTime: "6 MIN",
    author: "Elena Rossi, Directrice Artistique",
    title: "Confier son bien ne veut pas dire perdre le contrôle.",
    excerpt: "Confier sa maison n'est pas anodin. Découvrez pourquoi déléguer la gestion opérationnelle de votre bien ne signifie pas perdre la main, mais gagner en sérénité.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Confier sa maison, ce n’est pas anodin. Qu’il s’agisse d’une villa vue mer, d’un appartement urbain ou d’un chalet en montagne, un bien immobilier n’est jamais “juste un actif”. Il y a du temps, de l’argent investi, parfois des souvenirs, souvent une vraie implication personnelle.",
      "Alors la première crainte est presque toujours la même : “Si je confie mon bien, est-ce que je vais perdre la main ?” C’est une réaction normale. Le contrôle, ce n’est pas tout gérer soi-même. Beaucoup de propriétaires pensent que garder le contrôle signifie : répondre aux messages, ajuster les prix, organiser les ménages, gérer les arrivées, intervenir au moindre imprévu.",
      "Mais en réalité, cela signifie surtout garder la visibilité et la décision. Chez Xiri, vous ne perdez pas le contrôle. Nous gérons tout l’opérationnel, mais vous restez décisionnaire. Les réservations arrivent directement sur votre compte. Vous bloquez vos dates personnelles quand vous le souhaitez. Vous suivez les performances. Vous avez une vision claire.",
      "Nous nous chargeons de tout : communication voyageurs, sélection, check-in, ménage, maintenance, optimisation des prix. Vous ne faites rien au quotidien. Mais vous savez exactement ce qu’il se passe. C’est légal. Structuré. Sécurisé. Confier son bien ne doit pas être une zone floue. La gestion est encadrée. Les assurances sont en place. Les cautions sont sécurisées.",
      "Vous ne prenez aucun risque inutile. Nous filtrons les voyageurs. Nous intervenons rapidement en cas d’imprévu. Nous anticipons plutôt que subir. Vous déléguez la charge mentale, pas la propriété. Une maison ne se délègue pas à la légère. Nous le savons. Un bien immobilier ne se pilote pas uniquement depuis un tableau de chiffres.",
      "C’est pour cela que la gestion reste locale, au plus proche des propriétés. Garder le contrôle, c’est aussi savoir que quelqu’un connaît réellement votre environnement et agit sur place. Confier son bien ne veut pas dire s’effacer. Cela signifie choisir une gestion structurée, professionnelle et transparente. Vous ne perdez pas la main. Vous gagnez en sérénité. Et souvent, le vrai contrôle commence justement le jour où l’on décide de ne plus tout faire seul."
    ]
  },
  "xiri-megeve-haute-savoie": {
    id: "xiri-megeve-haute-savoie",
    category: "ACTUALITÉS",
    date: "25 AVRIL 2026",
    readTime: "5 MIN",
    author: "L'équipe Xiri",
    title: "Xiri ouvre une conciergerie à Megève : la Haute-Savoie rejoint notre réseau",
    excerpt: "Après l'Hérault, la Corse et le Finistère Sud, Xiri s'installe en Haute-Savoie avec une conciergerie physique à Megève et un premier appartement avec terrasse dans son catalogue.",
    image: megeveHero,
    content: [
      "Après l'Hérault, la Corse et le Finistère Sud, Xiri pose ses valises en Haute-Savoie. Et on ne fait pas les choses à moitié : notre première adresse dans les Alpes, c'est Megève. Un territoire d'exception, qui méritait une présence à la hauteur."
    ],
    sections: [
      {
        title: "Megève, un marché locatif à part",
        paragraphs: [
          "Megève n'est pas une station comme les autres. Entre son architecture préservée, son positionnement haut de gamme et sa clientèle internationale, elle attire des voyageurs exigeants — qui attendent un niveau de service à la hauteur.",
          "Le marché locatif y est tendu, saisonnier et très sélectif. Les voyageurs qui choisissent Megève savent ce qu'ils veulent : du confort, du caractère, et une adresse dont ils se souviendront."
        ],
        images: [megeveCentreVille, chamonixCentre]
      },
      {
        title: "L'appartement : terrasse, vue et emplacement idéal",
        paragraphs: [
          "Notre premier bien à Megève coche toutes les cases. Situé au 2ème étage, l'appartement bénéficie d'une vue dégagée sur la campagne environnante depuis les fenêtres, et d'une vue panoramique sur toute la vallée dès qu'on sort sur la terrasse. L'altitude ? 1 100 mètres. L'air y est pur, les nuits fraîches, et le cadre alpin à couper le souffle.",
          "Côté pratique, l'appartement dispose d'un parking privé fermé — un vrai atout à Megève, où stationner peut vite devenir un casse-tête.",
          "L'appartement est idéalement situé à quelques pas du centre du village, des restaurants, des boutiques et des navettes pour les pistes. Un emplacement qui simplifie le séjour des voyageurs et valorise naturellement le bien."
        ],
        images: [appart1, appart2, terrasse, vueTerrasse, appartChambre, appartCuisine]
      },
      {
        title: "Une présence locale, pas une promesse creuse",
        paragraphs: [
          "Chez Xiri, \"être présent localement\" ne veut pas dire avoir un numéro de téléphone régional. Ça veut dire une équipe installée à Megève, disponible physiquement, des artisans locaux partenaires pour les interventions, un accueil en personne à chaque arrivée de voyageur, et une connaissance fine du marché — tarification, saisonnalité, concurrence.",
          "La Haute-Savoie a ses spécificités : des pics de demande très marqués sur les vacances scolaires, une clientèle étrangère importante, des biens souvent bien équipés mais mal valorisés en ligne. C'est exactement là où Xiri apporte de la valeur."
        ],
        images: [hotel1, hotel2, hotel3, hotel4]
      },
      {
        title: "Propriétaires en Haute-Savoie : c'est le moment",
        paragraphs: [
          "La demande locative en montagne est forte, les plateformes sont saturées d'annonces moyennes, et les voyageurs sont de plus en plus sélectifs. Un bien bien géré, avec de belles photos, un accueil soigné et une tarification dynamique, fait la différence.",
          "Si vous possédez un appartement, un chalet ou une maison en Haute-Savoie et que vous cherchez une conciergerie sérieuse — pas une agence anonyme — discutons-en. On est sur place, on connaît le terrain, et on est prêts à faire de votre bien l'une des meilleures adresses de la région."
        ],
        images: [montBlanc, aiguilleduMidi, appart3]
      }
    ]
  },
  "rentabilite-residence-secondaire": {
    id: "rentabilite-residence-secondaire",
    category: "STRATÉGIE",
    date: "07 AVRIL 2026",
    readTime: "12 MIN",
    author: "Elena Rossi, Directrice Artistique",
    title: "Comment augmenter la rentabilité d’une résidence secondaire en location saisonnière",
    excerpt: "Transformer une résidence secondaire en location saisonnière rentable ne consiste pas seulement à publier une annonce. Découvrez les leviers essentiels pour optimiser vos revenus.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200",
    content: [
      "Transformer une résidence secondaire en location saisonnière rentable ne consiste pas seulement à publier une annonce et attendre des réservations. Pour améliorer la rentabilité d’une résidence secondaire, il faut travailler plusieurs leviers : la présentation du bien, la stratégie tarifaire, l’expérience voyageur et la qualité de gestion."
    ],
    sections: [
      {
        title: "Soigner la présentation du bien",
        paragraphs: [
          "La première impression joue un rôle essentiel. Dans la location saisonnière, les voyageurs choisissent d’abord avec les yeux. Des photos de qualité, une annonce claire et une description bien rédigée permettent de mieux valoriser le bien et d’inspirer confiance.",
          "Un logement bien présenté attire plus facilement l’attention et améliore naturellement les réservations."
        ]
      },
      {
        title: "Définir le bon positionnement",
        paragraphs: [
          "Pour optimiser les revenus locatifs, il faut savoir à qui le bien s’adresse. Un logement destiné à des familles, à des couples ou à une clientèle haut de gamme ne se met pas en avant de la même manière.",
          "Un bien avec une identité claire est souvent plus performant qu’un bien trop générique."
        ]
      },
      {
        title: "Ajuster les prix intelligemment",
        paragraphs: [
          "La rentabilité d’une résidence secondaire ne dépend pas uniquement du prix affiché, mais aussi de la façon dont il évolue selon la saison, la demande et la concurrence.",
          "Une stratégie tarifaire adaptée permet de mieux valoriser les périodes fortes, de rester attractif en basse saison, de limiter les nuits non réservées et ainsi d'augmenter le revenu global."
        ]
      },
      {
        title: "Réduire les périodes creuses",
        paragraphs: [
          "Un logement vide ne rapporte rien. Pour rendre une location saisonnière rentable, il est important de limiter les trous dans le calendrier en améliorant la visibilité de l’annonce, en adaptant les conditions de séjour et en diffusant le bien sur les bons canaux.",
          "Les réservations directes peuvent également aider à mieux maîtriser la rentabilité."
        ]
      },
      {
        title: "Miser sur l’expérience voyageur",
        paragraphs: [
          "Aujourd'hui, les voyageurs attendent plus qu'un simple hébergement. Ils recherchent un séjour fluide, confortable et rassurant. L’accueil, la propreté, la qualité du linge et la réactivité influencent directement leur satisfaction.",
          "De bons avis améliorent ensuite la visibilité du bien et participent à l’optimisation des revenus locatifs."
        ]
      },
      {
        title: "Maîtriser les coûts sans baisser la qualité",
        paragraphs: [
          "Optimiser la rentabilité ne veut pas dire réduire toutes les dépenses. Couper sur le ménage, l’entretien ou l’accueil peut au contraire faire perdre des réservations.",
          "La bonne approche consiste plutôt à mieux organiser la gestion, anticiper les besoins et maintenir un niveau de qualité cohérent avec le positionnement du bien."
        ]
      },
      {
        title: "Déléguer pour professionnaliser la gestion",
        paragraphs: [
          "Quand le propriétaire manque de temps ou n’est pas sur place, déléguer peut devenir un vrai levier de performance. Une bonne gestion de résidence secondaire permet souvent de mieux piloter les réservations, l’accueil, le ménage et l’entretien quotidien.",
          "Déléguer ne veut pas dire perdre le contrôle, mais rendre la gestion plus efficace."
        ]
      },
      {
        title: "Rentabiliser sans dénaturer",
        paragraphs: [
          "Une résidence secondaire a souvent une valeur affective forte. L’objectif n’est pas de la transformer, mais de mieux la valoriser. Une location saisonnière rentable repose avant tout sur de bons choix : mieux présenter, mieux gérer, mieux accueillir et mieux piloter.",
          "C’est cet équilibre qui permet d’augmenter durablement la rentabilité tout en préservant la qualité du bien."
        ]
      }
    ]
  }
};
