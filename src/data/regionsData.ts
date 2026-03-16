import corseImg from "../images/corse.png";
import finistereImg from "../images/finister.png";
import heraultImg from "../images/herault.png";

// Import a placeholder or a new image for Savoie
const savoieImg = { src: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a1?auto=format&fit=crop&q=80&w=2670" };

export const regions = [
    {
        name: "Corse",
        menuName: "Conciergerie de Corse",
        slug: "corse",
        description: "Découvrez notre sélection exclusive de villas et propriétés de charme sur l'Île de Beauté. De Porto-Vecchio à la Balagne, nous offrons une gestion premium au cœur de la Corse.",
        image: corseImg,
        metrics: {
            properties: "45+",
            rating: "4.9/5",
            experience: "10 ans"
        },
        villes: [
            { name: "Porto-Vecchio", href: "/villes/porto-vecchio" },
            { name: "Bonifacio", href: "/villes/bonifacio" },
            { name: "Ajaccio", href: "/villes/ajaccio" },
            { name: "Calvi", href: "/villes/calvi" },
            { name: "Bastia", href: "/villes/bastia" },
            { name: "Lumio / Sant'Ambroggio", href: "/villes/lumio" },
        ],
    },
    {
        name: "Finistère Sud",
        menuName: "Conciergerie du Finistère Sud",
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
        name: "Hérault",
        menuName: "Conciergerie de l'Hérault",
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
        name: "Savoie",
        menuName: "Conciergerie de Savoie",
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

