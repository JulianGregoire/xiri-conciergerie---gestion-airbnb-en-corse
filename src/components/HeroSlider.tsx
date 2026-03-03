
import * as React from 'react';
import { useEffect, useState } from 'react';
import hero0 from '../images/hero.xiri.jpg';
import hero1 from '../images/hero.xiri1.jpg';
import hero2 from '../images/hero.xiri2.jpg';
import hero3 from '../images/hero.xiri3.jpg';

const images = [hero0, hero1, hero2, hero3];

const HeroSlider: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-full w-full overflow-hidden shadow-2xl border border-xiri-navy/5 rounded-[40px]">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={(image as any).src || image}
                        alt={`Xiri Conciergerie Selection ${index + 1}`}
                        className={`w-full h-full object-cover transition-transform duration-[8500ms] ease-out ${index === currentImageIndex ? 'scale-110' : 'scale-100'}`}
                    />
                </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-xiri-navy/60 via-xiri-navy/10 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md text-xiri-navy p-6 rounded-3xl shadow-xl border border-white/20">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-xiri-gold block mb-2">Expertise Immobilière</span>
                <p className="text-[17px] font-serif leading-tight">Valorisation patrimoniale <br /><span className="font-light italic text-xiri-navy/60">en toute transparence.</span></p>
            </div>
        </div>
    );
};

export default HeroSlider;
