import corseImg from "../images/corse image.jpg";
import finistereImg from "../images/Finistere Sud.jpg";
import heraultImg from "../images/Herault.jpg";
import savoieImg from "../images/Savoie.jpg";

export const regions = [
    {
        name: "Conciergerie de Corse",
        slug: "corse",
        description: "Découvrez notre sélection exclusive de villas et propriétés de charme sur l'Île de Beauté. De Porto-Vecchio à la Balagne, nous offrons une gestion premium au cœur de la Corse.",
        image: corseImg,
        metrics: {
            properties: "45+",
            rating: "4.9/5",
            experience: "10 ans"
        },
        villes: [
            { name: "PORTO-VECCHIO", href: "/villes/porto-vecchio" },
            { name: "BONIFACIO", href: "/villes/bonifacio" },
            { name: "AJACCIO", href: "/villes/ajaccio" },
            { name: "CALVI", href: "/villes/calvi" },
            { name: "BASTIA", href: "/villes/bastia" },
            { name: "LUMIO / SANT'AMBROGGIO", href: "/villes/lumio" },
        ],
    },
    {
        name: "Conciergerie du Finistère Sud",
        slug: "finistere-sud",
        description: "L'authenticité bretonne sublimée par une conciergerie d'exception. Nous gérons vos biens sur la Riviera bretonne, de Bénodet à Concarneau, avec une exigence absolue.",
        image: finistereImg,
        metrics: {
            properties: "20+",
            rating: "4.8/5",
            experience: "5 ans"
        },
        villes: [
            { name: "Quimper", href: "/villes/quimper" },
            { name: "Concarneau", href: "/villes/concarneau" },
            { name: "Bénodet", href: "/villes/benodet" },
        ],
    },
    {
        name: "Conciergerie de l'Hérault",
        slug: "herault",
        description: "Entre terre et mer, confiez-nous la gestion de votre résidence dans l'Hérault. Un service sur-mesure pour maximiser vos revenus locatifs sous le soleil d'Occitanie.",
        image: heraultImg,
        metrics: {
            properties: "35+",
            rating: "4.9/5",
            experience: "8 ans"
        },
        villes: [
            { name: "Narbonne", href: "/villes/narbonne" },
            { name: "Valras-Plage", href: "/villes/valras-plage" },
            { name: "Cap d'Agde", href: "/villes/cap-dagde" },
        ],
    },
    {
        name: "Conciergerie de Savoie",
        slug: "savoie",
        description: "L'excellence alpine à votre service. Notre réseau exclusif gère des chalets et appartements de prestige au cœur des domaines skiables les plus prisés.",
        image: savoieImg,
        metrics: {
            properties: "15+",
            rating: "5.0/5",
            experience: "3 ans"
        },
        villes: [
            { name: "Megève", href: "/villes/megeve" },
        ],
    },
];

