import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  { src: '/mockup-1%20copy.png', label: 'Vitrine personalizada' },
  { src: '/mockup-2%20copy.png', label: 'Catálogo de produtos' },
  { src: '/mockup-3%20copy.png', label: 'Detalhes do produto' },
];

function PhoneFrame({
  src,
  alt,
  eager,
}: {
  src: string;
  alt: string;
  eager: boolean;
}) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 'clamp(220px, 26vw, 280px)',
        aspectRatio: '9 / 19.5',
        filter: 'drop-shadow(0 40px 60px rgba(10,10,10,0.28)) drop-shadow(0 12px 24px rgba(10,10,10,0.18))',
      }}
    >
      <div
        className="absolute inset-0 rounded-[14%/6.5%]"
        style={{
          background:
            'linear-gradient(145deg, #2a2a2e 0%, #141416 45%, #0a0a0b 100%)',
          padding: '3px',
        }}
      >
        <div
          className="relative w-full h-full rounded-[13%/6%] overflow-hidden"
          style={{
            background:
              'linear-gradient(160deg, #1a1a1c 0%, #050506 60%, #1a1a1c 100%)',
            padding: '6px',
          }}
        >
          <div
            className="relative w-full h-full rounded-[11%/5%] overflow-hidden bg-black"
          >
            <img
              src={src}
              alt={alt}
              loading={eager ? 'eager' : 'lazy'}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
              draggable={false}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(125deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 72%, rgba(255,255,255,0.06) 100%)',
              }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black"
              style={{
                top: '1.6%',
                width: '34%',
                height: '3.4%',
                boxShadow: 'inset 0 0 0 1px rgba(40,40,44,0.8)',
              }}
            />
          </div>
        </div>
      </div>
      <span
        aria-hidden
        className="absolute bg-[#1d1d20] rounded-r-sm"
        style={{ left: '-1.5px', top: '16%', width: '2.5px', height: '5%' }}
      />
      <span
        aria-hidden
        className="absolute bg-[#1d1d20] rounded-r-sm"
        style={{ left: '-1.5px', top: '24%', width: '2.5px', height: '8%' }}
      />
      <span
        aria-hidden
        className="absolute bg-[#1d1d20] rounded-r-sm"
        style={{ left: '-1.5px', top: '34%', width: '2.5px', height: '8%' }}
      />
      <span
        aria-hidden
        className="absolute bg-[#1d1d20] rounded-l-sm"
        style={{ right: '-1.5px', top: '22%', width: '2.5px', height: '12%' }}
      />
    </div>
  );
}

export default function HeroPhoneCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion]);

  const go = (dir: 1 | -1) => {
    setActive((i) => (i + dir + SLIDES.length) % SLIDES.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <div
      className="relative mx-auto w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Mockups do aplicativo"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          perspective: '1400px',
          height: 'clamp(480px, 62vw, 620px)',
        }}
      >
        {SLIDES.map((slide, i) => {
          const total = SLIDES.length;
          let offset = i - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;
          const abs = Math.abs(offset);
          const hideOnMobile = !isActive;

          const translateX = offset * 62;
          const rotateY = offset * -10;
          const scale = isActive ? 1 : 0.82;
          const opacity = abs > 1 ? 0 : isActive ? 1 : 0.55;
          const zIndex = 10 - abs;

          return (
            <div
              key={slide.src}
              className={`absolute top-1/2 left-1/2 ${hideOnMobile ? 'hidden md:block' : ''}`}
              aria-hidden={!isActive}
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                transition: 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease',
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity',
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <PhoneFrame src={slide.src} alt={slide.label} eager={isActive} />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Mockup anterior"
        onClick={() => go(-1)}
        className="hidden md:inline-flex absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hairline border items-center justify-center text-ink-700 hover:text-ink-900 hover:bg-white transition-colors shadow-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Próximo mockup"
        onClick={() => go(1)}
        className="hidden md:inline-flex absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hairline border items-center justify-center text-ink-700 hover:text-ink-900 hover:bg-white transition-colors shadow-sm"
      >
        <ChevronRight size={20} />
      </button>

      <div className="flex items-center justify-center gap-2 mt-8">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ir para ${slide.label}`}
            aria-current={i === active}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? 28 : 8,
              background: i === active ? '#0a0a0a' : '#d4d4d8',
            }}
          />
        ))}
      </div>
    </div>
  );
}
