type IllustrationProps = {
  className?: string;
};

const baseProps = {
  viewBox: '0 0 200 200',
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'xMidYMid meet',
  fill: 'none',
};

export function TshirtIllustration({ className }: IllustrationProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tshirtFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#E9E9EC" />
        </linearGradient>
      </defs>
      <path
        d="M62 52 L82 42 Q100 56 118 42 L138 52 L162 68 L150 90 L130 82 L130 158 Q130 164 124 164 L76 164 Q70 164 70 158 L70 82 L50 90 L38 68 Z"
        fill="url(#tshirtFill)"
        stroke="#0A0A0A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M82 42 Q100 56 118 42"
        stroke="#0A0A0A"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="78" y1="128" x2="122" y2="128" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <line x1="78" y1="136" x2="110" y2="136" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

export function SneakerIllustration({ className }: IllustrationProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sneakerFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#E4E4E7" />
        </linearGradient>
      </defs>
      <path
        d="M30 128 Q30 112 46 108 L70 98 Q82 92 92 80 L108 62 Q116 54 126 60 Q134 66 130 78 L124 96 L156 106 Q172 110 174 126 L174 138 Q174 146 166 146 L38 146 Q30 146 30 138 Z"
        fill="url(#sneakerFill)"
        stroke="#0A0A0A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M30 138 L174 138" stroke="#0A0A0A" strokeWidth="2.5" />
      <path d="M30 146 L174 146 L170 156 L34 156 Z" fill="#0A0A0A" opacity="0.9" />
      <path
        d="M92 82 L100 94 M104 72 L112 86 M116 64 L124 78"
        stroke="#0A0A0A"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="54" cy="126" r="3" fill="#0A0A0A" />
      <circle cx="72" cy="120" r="3" fill="#0A0A0A" />
      <circle cx="90" cy="114" r="3" fill="#0A0A0A" />
    </svg>
  );
}

export function BallIllustration({ className }: IllustrationProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ballFill" cx="0.4" cy="0.35">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D4D4D8" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="68" fill="url(#ballFill)" stroke="#0A0A0A" strokeWidth="2.5" />
      <polygon
        points="100,78 118,90 112,110 88,110 82,90"
        fill="#0A0A0A"
      />
      <path
        d="M118 90 L142 84 M82 90 L58 84 M88 110 L76 134 M112 110 L124 134 M100 78 L100 58"
        stroke="#0A0A0A"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M58 84 L48 106 L76 134 M142 84 L152 106 L124 134 M76 134 L100 150 L124 134"
        stroke="#0A0A0A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}

export function RacketIllustration({ className }: IllustrationProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="racketFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#E4E4E7" />
        </linearGradient>
      </defs>
      <ellipse
        cx="104"
        cy="78"
        rx="52"
        ry="58"
        fill="url(#racketFill)"
        stroke="#0A0A0A"
        strokeWidth="2.5"
        transform="rotate(-18 104 78)"
      />
      <g transform="rotate(-18 104 78)" opacity="0.55">
        <line x1="64" y1="78" x2="144" y2="78" stroke="#0A0A0A" strokeWidth="1.2" />
        <line x1="68" y1="62" x2="140" y2="62" stroke="#0A0A0A" strokeWidth="1.2" />
        <line x1="68" y1="94" x2="140" y2="94" stroke="#0A0A0A" strokeWidth="1.2" />
        <line x1="72" y1="46" x2="136" y2="46" stroke="#0A0A0A" strokeWidth="1.2" />
        <line x1="72" y1="110" x2="136" y2="110" stroke="#0A0A0A" strokeWidth="1.2" />
        <line x1="104" y1="22" x2="104" y2="134" stroke="#0A0A0A" strokeWidth="1.2" />
        <line x1="88" y1="24" x2="88" y2="132" stroke="#0A0A0A" strokeWidth="1.2" />
        <line x1="120" y1="24" x2="120" y2="132" stroke="#0A0A0A" strokeWidth="1.2" />
        <line x1="72" y1="32" x2="72" y2="124" stroke="#0A0A0A" strokeWidth="1.2" />
        <line x1="136" y1="32" x2="136" y2="124" stroke="#0A0A0A" strokeWidth="1.2" />
      </g>
      <rect
        x="128"
        y="118"
        width="14"
        height="56"
        rx="4"
        fill="#0A0A0A"
        transform="rotate(-18 135 146)"
      />
      <rect
        x="126"
        y="160"
        width="18"
        height="22"
        rx="5"
        fill="#0A0A0A"
        transform="rotate(-18 135 171)"
      />
    </svg>
  );
}

export function MouseIllustration({ className }: IllustrationProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mouseFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#D4D4D8" />
        </linearGradient>
      </defs>
      <path
        d="M70 42 Q100 36 130 42 Q152 50 152 86 L152 148 Q152 170 130 174 Q100 178 70 174 Q48 170 48 148 L48 86 Q48 50 70 42 Z"
        fill="url(#mouseFill)"
        stroke="#0A0A0A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <line x1="100" y1="42" x2="100" y2="96" stroke="#0A0A0A" strokeWidth="2" opacity="0.6" />
      <rect x="94" y="68" width="12" height="22" rx="6" fill="#0A0A0A" />
      <line x1="100" y1="72" x2="100" y2="86" stroke="#FAFAFA" strokeWidth="1.5" opacity="0.6" />
      <path d="M100 36 L100 24" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function CupcakeIllustration({ className }: IllustrationProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cupWrap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4F4F5" />
          <stop offset="100%" stopColor="#D4D4D8" />
        </linearGradient>
        <linearGradient id="cupFrost" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#E4E4E7" />
        </linearGradient>
      </defs>
      <path
        d="M60 110 L76 176 Q78 182 84 182 L116 182 Q122 182 124 176 L140 110 Z"
        fill="url(#cupWrap)"
        stroke="#0A0A0A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <line x1="78" y1="116" x2="86" y2="178" stroke="#0A0A0A" strokeWidth="1.5" opacity="0.4" />
      <line x1="92" y1="114" x2="96" y2="180" stroke="#0A0A0A" strokeWidth="1.5" opacity="0.4" />
      <line x1="108" y1="114" x2="104" y2="180" stroke="#0A0A0A" strokeWidth="1.5" opacity="0.4" />
      <line x1="122" y1="116" x2="114" y2="178" stroke="#0A0A0A" strokeWidth="1.5" opacity="0.4" />
      <path
        d="M54 110 Q54 90 72 82 Q78 62 100 62 Q122 62 128 82 Q146 90 146 110 Z"
        fill="url(#cupFrost)"
        stroke="#0A0A0A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M66 104 Q74 92 86 94 Q92 82 104 86 Q114 78 124 90 Q134 94 138 104"
        stroke="#0A0A0A"
        strokeWidth="1.8"
        fill="none"
        opacity="0.45"
        strokeLinecap="round"
      />
      <circle cx="100" cy="54" r="8" fill="#0A0A0A" />
      <path d="M100 46 Q104 40 110 40" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function FlipFlopIllustration({ className }: IllustrationProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="flipFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#D4D4D8" />
        </linearGradient>
      </defs>
      <ellipse
        cx="100"
        cy="104"
        rx="42"
        ry="72"
        fill="url(#flipFill)"
        stroke="#0A0A0A"
        strokeWidth="2.5"
      />
      <ellipse
        cx="100"
        cy="104"
        rx="34"
        ry="62"
        fill="#FFFFFF"
        stroke="#0A0A0A"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M100 46 Q76 70 84 100 Q90 120 100 128 Q110 120 116 100 Q124 70 100 46 Z"
        fill="#0A0A0A"
      />
      <circle cx="100" cy="48" r="5" fill="#0A0A0A" stroke="#FAFAFA" strokeWidth="1.5" />
    </svg>
  );
}

export const productIllustrations = {
  tshirt: TshirtIllustration,
  sneaker: SneakerIllustration,
  ball: BallIllustration,
  racket: RacketIllustration,
  mouse: MouseIllustration,
  cupcake: CupcakeIllustration,
  flipflop: FlipFlopIllustration,
};
