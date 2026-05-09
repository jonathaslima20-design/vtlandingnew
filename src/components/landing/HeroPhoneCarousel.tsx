import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES: {
  src: string;
  label: string;
  inset?: { x: string; top: string; bottom: string };
}[] = [
  { src: '/mockup-1%20copy.png', label: 'Vitrine personalizada' },
  {
    src: '/mockup-2%20copy.png',
    label: 'Catálogo de produtos',
    inset: { x: '5%', top: '15%', bottom: '4%' },
  },
  {
    src: '/mockup-3%20copy.png',
    label: 'Detalhes do produto',
    inset: { x: '5%', top: '15%', bottom: '4%' },
  },
];

function StatusBar() {
  return (
    <div
      aria-hidden
      className="absolute left-0 right-0 flex items-center justify-between pointer-events-none"
      style={{ top: '6.2%', padding: '0 6% 0 6%', height: '4%', zIndex: 20 }}
    >
      {/* Time */}
      <span style={{ fontSize: '7px', fontWeight: 600, color: '#111', letterSpacing: '0.02em', lineHeight: 1 }}>
        9:41
      </span>
      {/* Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
        {/* Signal bars */}
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <rect x="0" y="4" width="2" height="3" rx="0.4" fill="#111" />
          <rect x="2.7" y="2.5" width="2" height="4.5" rx="0.4" fill="#111" />
          <rect x="5.4" y="1" width="2" height="6" rx="0.4" fill="#111" />
          <rect x="8.1" y="0" width="2" height="7" rx="0.4" fill="#111" opacity="0.25" />
        </svg>
        {/* Wifi */}
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M4.5 5.5 a0.5 0.5 0 1 1 0 .01" stroke="#111" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M2.8 4.0 Q4.5 2.8 6.2 4.0" stroke="#111" strokeWidth="0.9" strokeLinecap="round" fill="none" />
          <path d="M1.2 2.6 Q4.5 0.4 7.8 2.6" stroke="#111" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.45" />
        </svg>
        {/* Battery */}
        <svg width="14" height="7" viewBox="0 0 14 7" fill="none">
          <rect x="0.5" y="0.5" width="11" height="6" rx="1.2" stroke="#111" strokeWidth="0.8" />
          <rect x="1.5" y="1.5" width="8" height="4" rx="0.6" fill="#111" />
          <path d="M12 2.2 v2.6" stroke="#111" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  eager,
  inset,
}: {
  src: string;
  alt: string;
  eager: boolean;
  inset?: { x: string; top: string; bottom: string };
}) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 'clamp(220px, 26vw, 280px)',
        aspectRatio: '9 / 19.5',
        filter:
          'drop-shadow(0 50px 70px rgba(10,10,10,0.30)) drop-shadow(0 16px 28px rgba(10,10,10,0.18)) drop-shadow(0 4px 10px rgba(10,10,10,0.12))',
      }}
    >
      <div
        className="absolute inset-0 rounded-[18%/8.2%]"
        style={{
          background:
            'linear-gradient(135deg, #8a8a8e 0%, #5c5c60 8%, #3a3a3d 22%, #232326 45%, #2d2d30 62%, #4a4a4d 82%, #6f6f73 100%)',
          padding: '2.5px',
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 rounded-[18%/8.2%] pointer-events-none"
          style={{
            background:
              'linear-gradient(115deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 18%, rgba(255,255,255,0) 72%, rgba(255,255,255,0.18) 92%, rgba(255,255,255,0) 100%)',
            mixBlendMode: 'overlay',
          }}
        />
        <div
          className="relative w-full h-full rounded-[17%/7.7%] overflow-hidden"
          style={{
            background:
              'linear-gradient(160deg, #2c2c2f 0%, #0d0d0f 50%, #202024 100%)',
            padding: '4px',
          }}
        >
          <div
            className="relative w-full h-full rounded-[15.5%/7%] overflow-hidden bg-white"
            style={{
              boxShadow:
                'inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 22px rgba(0,0,0,0.9)',
            }}
          >
            {/* Screen content */}
            <div
              className="absolute inset-0 bg-white"
              style={
                inset
                  ? { padding: `${inset.top} ${inset.x} ${inset.bottom} ${inset.x}` }
                  : { paddingTop: '14%' }
              }
            >
              <img
                src={src}
                alt={alt}
                loading={eager ? 'eager' : 'lazy'}
                decoding="async"
                className={`w-full h-full ${inset ? 'object-contain' : 'object-cover'} object-top select-none pointer-events-none`}
                draggable={false}
              />
            </div>

            {/* Status bar — sits above content */}
            <StatusBar />

            {/* Dynamic island */}
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black flex items-center justify-end pr-[6%]"
              style={{
                top: '1.4%',
                width: '32%',
                height: '3.6%',
                zIndex: 30,
                boxShadow:
                  'inset 0 0 0 1px rgba(30,30,32,0.9), 0 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              <span
                aria-hidden
                className="block rounded-full"
                style={{
                  width: '22%',
                  height: '55%',
                  background:
                    'radial-gradient(circle at 35% 35%, #2a3340 0%, #0a1018 55%, #000 100%)',
                  boxShadow:
                    'inset 0 0 0 1px rgba(60,70,90,0.6), inset 0 0 2px rgba(120,160,220,0.25)',
                }}
              />
            </div>

            {/* Screen glare */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                zIndex: 40,
                background:
                  'linear-gradient(125deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 74%, rgba(255,255,255,0.07) 100%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Side buttons */}
      <span
        aria-hidden
        className="absolute rounded-r-[2px]"
        style={{
          left: '-2px',
          top: '15.5%',
          width: '3px',
          height: '4.5%',
          background: 'linear-gradient(90deg, #2a2a2d 0%, #4a4a4d 60%, #2a2a2d 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
      />
      <span
        aria-hidden
        className="absolute rounded-r-[2px]"
        style={{
          left: '-2px',
          top: '23%',
          width: '3px',
          height: '7.5%',
          background: 'linear-gradient(90deg, #2a2a2d 0%, #4a4a4d 60%, #2a2a2d 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
      />
      <span
        aria-hidden
        className="absolute rounded-r-[2px]"
        style={{
          left: '-2px',
          top: '32%',
          width: '3px',
          height: '7.5%',
          background: 'linear-gradient(90deg, #2a2a2d 0%, #4a4a4d 60%, #2a2a2d 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
      />
      <span
        aria-hidden
        className="absolute rounded-l-[2px]"
        style={{
          right: '-2px',
          top: '25%',
          width: '3px',
          height: '11%',
          background: 'linear-gradient(270deg, #2a2a2d 0%, #4a4a4d 60%, #2a2a2d 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
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
              <PhoneFrame src={slide.src} alt={slide.label} eager={isActive} inset={slide.inset} />
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
