import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  { src: '/screen-1.png', label: 'Vitrine personalizada' },
  { src: '/screen-2.png', label: 'Catálogo de produtos' },
  { src: '/screen-3.png', label: 'Detalhes do produto' },
];

function IPhone16ProMax({ src, alt, eager }: { src: string; alt: string; eager: boolean }) {
  // iPhone 16 Pro Max proportions: 393 x 852 logical pixels → ~9/19.5 ratio
  return (
    <div
      className="relative select-none"
      style={{
        width: 'clamp(210px, 24vw, 270px)',
        aspectRatio: '393 / 852',
        filter:
          'drop-shadow(0 60px 80px rgba(0,0,0,0.35)) drop-shadow(0 20px 32px rgba(0,0,0,0.20)) drop-shadow(0 4px 10px rgba(0,0,0,0.14))',
      }}
    >
      {/* ── Outer frame: titanium Natural finish ── */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius: '13.5% / 6.2%',
          background:
            'linear-gradient(145deg, #c8b99a 0%, #a89070 12%, #7a6850 28%, #5a4c38 48%, #6a5a44 62%, #908070 80%, #c0a882 100%)',
          padding: '2px',
        }}
      >
        {/* Titanium frame glare */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: '13.5% / 6.2%',
            background:
              'linear-gradient(110deg, rgba(255,245,225,0.45) 0%, transparent 16%, transparent 70%, rgba(255,245,225,0.22) 88%, transparent 100%)',
          }}
        />

        {/* Inner bezel — dark matte */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            borderRadius: '12.8% / 5.9%',
            background: 'linear-gradient(170deg, #1c1c1e 0%, #0a0a0c 55%, #1a1a1c 100%)',
            padding: '3.5px',
          }}
        >
          {/* Screen glass */}
          <div
            className="relative w-full h-full overflow-hidden bg-white"
            style={{
              borderRadius: '11.5% / 5.3%',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 28px rgba(0,0,0,0.85)',
            }}
          >
            {/* ── Status bar ── */}
            <div
              aria-hidden
              className="absolute left-0 right-0 flex items-center justify-between pointer-events-none"
              style={{ top: 0, height: '6.5%', background: '#fff', padding: '0 5%', zIndex: 20 }}
            >
              <span style={{ fontSize: '7px', fontWeight: 700, color: '#111', letterSpacing: '0.01em', lineHeight: 1 }}>
                8:59
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                  <rect x="0" y="4.5" width="2" height="3.5" rx="0.4" fill="#111" />
                  <rect x="3" y="3" width="2" height="5" rx="0.4" fill="#111" />
                  <rect x="6" y="1.5" width="2" height="6.5" rx="0.4" fill="#111" />
                  <rect x="9" y="0" width="2" height="8" rx="0.4" fill="#111" />
                </svg>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M5 6.2a0.65 0.65 0 1 1 0 .01" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M2.8 4.4Q5 2.8 7.2 4.4" stroke="#111" strokeWidth="1" strokeLinecap="round" fill="none" />
                  <path d="M1 2.6Q5 0 9 2.6" stroke="#111" strokeWidth="1" strokeLinecap="round" fill="none" />
                </svg>
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                  <rect x="0.5" y="0.5" width="15" height="7" rx="1.5" stroke="#111" strokeWidth="0.8" />
                  <rect x="1.5" y="1.5" width="12" height="5" rx="0.8" fill="#111" />
                  <path d="M17 2.8v2.4" stroke="#111" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
                  <text x="3.5" y="6.2" fontSize="4.2" fill="#fff" fontWeight="700" fontFamily="system-ui">96</text>
                </svg>
              </div>
            </div>

            {/* ── Browser address bar (Safari style) ── */}
            <div
              aria-hidden
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                top: '6.5%',
                height: '6%',
                background: '#f2f2f7',
                zIndex: 18,
                display: 'flex',
                alignItems: 'center',
                padding: '0 4%',
                gap: '3%',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div style={{ flex: 1, background: '#e5e5ea', borderRadius: '6px', height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '6px', fontWeight: 500, color: '#111', letterSpacing: '0.01em' }}>vitrineturbo.com</span>
              </div>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </div>

            {/* ── Screen content ── */}
            <div
              className="absolute left-0 right-0 overflow-hidden"
              style={{ top: '12.5%', bottom: '11.5%', zIndex: 10 }}
            >
              <img
                src={src}
                alt={alt}
                loading={eager ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
                className="w-full h-full object-cover object-top pointer-events-none"
              />
            </div>

            {/* ── Browser bottom nav bar ── */}
            <div
              aria-hidden
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                bottom: '3.8%',
                height: '8%',
                background: '#f2f2f7',
                borderTop: '0.5px solid #c8c8cc',
                zIndex: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '0 3%',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="7" width="14" height="14" rx="2" />
                <path d="M7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#555">
                <circle cx="5" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
              </svg>
            </div>

            {/* Dynamic Island */}
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                top: '1.8%',
                width: '34%',
                height: '4.2%',
                borderRadius: '50px',
                background: '#000',
                zIndex: 30,
                boxShadow: 'inset 0 0 0 1px rgba(40,40,45,0.95), 0 1px 3px rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '12%',
              }}
            >
              <span
                className="block rounded-full"
                style={{
                  width: '20%',
                  height: '55%',
                  background: 'radial-gradient(circle at 38% 38%, #243040 0%, #08121c 55%, #000 100%)',
                  boxShadow: 'inset 0 0 0 1px rgba(60,80,110,0.55), inset 0 0 3px rgba(100,160,240,0.2)',
                }}
              />
            </div>

            {/* Home indicator */}
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
              style={{
                bottom: '1%',
                width: '30%',
                height: '0.55%',
                background: 'rgba(0,0,0,0.32)',
                zIndex: 25,
              }}
            />

            {/* Screen glare */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                zIndex: 40,
                background:
                  'linear-gradient(130deg, rgba(255,255,255,0.10) 0%, transparent 28%, transparent 72%, rgba(255,255,255,0.06) 100%)',
                borderRadius: '11.5% / 5.3%',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Side buttons (titanium) ── */}
      {/* Action button */}
      <span
        aria-hidden
        className="absolute"
        style={{
          left: '-2.5px',
          top: '14%',
          width: '3px',
          height: '4%',
          borderRadius: '2px 0 0 2px',
          background: 'linear-gradient(90deg, #9a8870 0%, #c0aa88 50%, #9a8870 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      />
      {/* Volume up */}
      <span
        aria-hidden
        className="absolute"
        style={{
          left: '-2.5px',
          top: '21.5%',
          width: '3px',
          height: '7%',
          borderRadius: '2px 0 0 2px',
          background: 'linear-gradient(90deg, #9a8870 0%, #c0aa88 50%, #9a8870 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      />
      {/* Volume down */}
      <span
        aria-hidden
        className="absolute"
        style={{
          left: '-2.5px',
          top: '30.5%',
          width: '3px',
          height: '7%',
          borderRadius: '2px 0 0 2px',
          background: 'linear-gradient(90deg, #9a8870 0%, #c0aa88 50%, #9a8870 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      />
      {/* Power / side button */}
      <span
        aria-hidden
        className="absolute"
        style={{
          right: '-2.5px',
          top: '24%',
          width: '3px',
          height: '11%',
          borderRadius: '0 2px 2px 0',
          background: 'linear-gradient(270deg, #9a8870 0%, #c0aa88 50%, #9a8870 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
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

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + SLIDES.length) % SLIDES.length);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
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
        style={{ perspective: '1400px', height: 'clamp(480px, 62vw, 620px)' }}
      >
        {SLIDES.map((slide, i) => {
          const total = SLIDES.length;
          let offset = i - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;
          const abs = Math.abs(offset);

          const translateX = offset * 60;
          const rotateY = offset * -10;
          const scale = isActive ? 1 : 0.80;
          const opacity = abs > 1 ? 0 : isActive ? 1 : 0.52;
          const zIndex = 10 - abs;

          return (
            <div
              key={slide.src}
              className={`absolute top-1/2 left-1/2 ${!isActive ? 'hidden md:block' : ''}`}
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
              <IPhone16ProMax src={slide.src} alt={slide.label} eager={isActive} />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Mockup anterior"
        onClick={() => go(-1)}
        className="hidden md:inline-flex absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 border items-center justify-center hover:bg-white transition-colors shadow-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Próximo mockup"
        onClick={() => go(1)}
        className="hidden md:inline-flex absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 border items-center justify-center hover:bg-white transition-colors shadow-sm"
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
