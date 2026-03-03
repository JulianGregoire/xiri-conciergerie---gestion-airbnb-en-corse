
import React, { useEffect, useState } from 'react';

const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1200"
];

const HeroSlider: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-full w-full overflow-hidden shadow-xl border border-xiri-navy/5 rounded-3xl">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={image}
                        alt={`Xiri Conciergerie ${index + 1}`}
                        className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${index === currentImageIndex ? 'scale-105' : 'scale-100'}`}
                    />
                </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-xiri-navy/60 via-xiri-navy/20 to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-xiri-navy p-4 rounded-2xl">
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-xiri-gold">Pack Performance 360</p>
                <p className="text-[15px] font-medium">Une seule commission, exécution complète.</p>
            </div>
        </div>
    );
};

export default HeroSlider;
