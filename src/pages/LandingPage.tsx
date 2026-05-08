import { useEffect, useState } from 'react';
import { ArrowRight, Plus, Package, MessageCircle, Gift, Instagram, Settings2, Globe as Globe2, ChartBar as BarChart3, Check, Zap, ShoppingBag, TrendingUp, Users, Star } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-light' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-ink-900 flex items-center justify-center">
            <Zap size={16} className="text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display font-semibold text-[15px] text-ink-900">VitrineTurbo</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#recursos" className="font-mono-label uppercase text-[12px] text-ink-500 hover:text-ink-900 transition-colors">Recursos</a>
          <a href="#analytics" className="font-mono-label uppercase text-[12px] text-ink-500 hover:text-ink-900 transition-colors">Analytics</a>
          <a href="#precos" className="font-mono-label uppercase text-[12px] text-ink-500 hover:text-ink-900 transition-colors">Planos</a>
          <a href="#faq" className="font-mono-label uppercase text-[12px] text-ink-500 hover:text-ink-900 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#precos" className="hidden sm:inline-flex btn-ghost rounded-full px-4 py-2 text-[13px] font-display font-medium">
            Ver Planos
          </a>
          <a href="/register" className="btn-primary rounded-full px-4 py-2 text-[13px] font-display font-medium inline-flex items-center gap-1.5">
            Criar Agora
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-white">
      <div className="grid-bg" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="stagger max-w-4xl">
          <div className="inline-flex items-center gap-2 border hairline bg-white rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono-label uppercase text-[11px] text-ink-700">Catálogo Digital — v2.5</span>
          </div>
          <h1 className="font-display font-semibold text-[44px] sm:text-[64px] lg:text-[84px] leading-[1.02] tracking-[-0.035em] text-ink-900 mt-6">
            Seu Catálogo Digital em Minutos.
          </h1>
          <p className="text-ink-500 text-[18px] lg:text-[20px] max-w-2xl mt-6 leading-[1.5]">
            Pare de perder vendas por falta de organização. Tenha sua vitrine online e venda muito mais.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a href="/register" className="btn-primary rounded-full px-7 py-4 font-display font-medium text-[15px] inline-flex items-center gap-2">
              Criar Agora
              <ArrowRight size={16} />
            </a>
            <a href="#precos" className="btn-ghost rounded-full px-7 py-4 font-display font-medium text-[15px] inline-flex items-center">
              Ver Planos
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 lg:gap-10 mt-14 max-w-2xl">
            {[
              { n: '+12k', l: 'vitrines ativas' },
              { n: '99.9%', l: 'uptime' },
              { n: '4.9/5', l: 'avaliação' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-semibold text-2xl lg:text-3xl text-ink-900 tracking-[-0.02em]">{s.n}</div>
                <div className="font-mono-label uppercase text-[11px] text-ink-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal mt-20">
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

function HeroPreview() {
  const bars = [42, 68, 55, 82, 60, 95, 78];
  const labels = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'];
  return (
    <div
      className="rounded-3xl border hairline bg-surface overflow-hidden"
      style={{ boxShadow: '0 40px 120px -40px rgba(10,10,10,0.25)' }}
    >
      <div className="flex items-center gap-3 px-5 py-3 border-b hairline bg-white/60">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
        </div>
        <div className="flex-1 text-center font-mono-label text-[11px] text-ink-400">vitrineturbo.app/loja</div>
        <div className="w-10" />
      </div>
      <div className="grid grid-cols-12 gap-6 p-6 lg:p-10">
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <div className="rounded-2xl border hairline bg-white p-5">
            <div className="font-mono-label uppercase text-[10px] text-ink-400">Receita hoje</div>
            <div className="font-display font-semibold text-3xl text-ink-900 mt-2 tracking-[-0.02em]">R$ 4.870</div>
            <div className="inline-flex items-center gap-1 mt-3 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
              <TrendingUp size={12} />
              <span className="font-mono-label text-[10px]">+18,2%</span>
            </div>
          </div>
          <div className="rounded-2xl border hairline bg-white p-5">
            <div className="font-mono-label uppercase text-[10px] text-ink-400">Pedidos</div>
            <div className="font-display font-semibold text-3xl text-ink-900 mt-2 tracking-[-0.02em]">142</div>
            <div className="mt-4 h-1.5 w-full bg-surface rounded-full overflow-hidden">
              <div className="h-full bg-ink-900 rounded-full" style={{ width: '72%' }} />
            </div>
          </div>
          <div className="rounded-2xl border hairline bg-white p-5">
            <div className="font-mono-label uppercase text-[10px] text-ink-400">Visitas</div>
            <div className="font-display font-semibold text-3xl text-ink-900 mt-2 tracking-[-0.02em]">8.421</div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="rounded-2xl border hairline bg-white p-6 lg:p-8 h-full">
            <div className="flex items-start justify-between gap-4 mb-8">
              <div>
                <div className="font-display font-semibold text-[18px] text-ink-900">Vendas nos últimos 7 dias</div>
                <div className="text-ink-500 text-[13px] mt-1">Performance em tempo real</div>
              </div>
              <span className="font-mono-label uppercase text-[10px] text-ink-500 border hairline rounded-full px-2.5 py-1">
                MAI 2026
              </span>
            </div>
            <div className="flex items-end justify-between gap-3 h-48">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="chart-bar w-full bg-ink-900 rounded-t-md"
                    style={{ height: `${h}%`, animationDelay: `${0.08 * i}s` }}
                  />
                  <span className="font-mono-label text-[10px] text-ink-400">{labels[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ id, kicker, title }: { id?: string; kicker: string; title: string }) {
  return (
    <div className="max-w-3xl reveal">
      <div className="font-mono-label uppercase text-[11px] text-ink-500">{kicker}</div>
      <h2
        id={id}
        className="font-display font-semibold text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.035em] text-ink-900 mt-4"
      >
        {title}
      </h2>
    </div>
  );
}

function BentoCard({
  idx,
  title,
  Icon,
  className = '',
  children,
}: {
  idx: string;
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`reveal card-hover rounded-2xl border hairline bg-surface p-6 lg:p-7 flex flex-col ${className}`}>
      <div className="flex items-center justify-between">
        <div className="w-9 h-9 rounded-lg border hairline bg-white flex items-center justify-center">
          <Icon size={18} className="text-ink-900" strokeWidth={2} />
        </div>
        <span className="font-mono-label text-[10px] text-ink-400">{idx}</span>
      </div>
      <h3 className="font-display font-semibold text-[20px] lg:text-[22px] text-ink-900 tracking-[-0.02em] mt-6">
        {title}
      </h3>
      <div className="mt-5 flex-1">{children}</div>
    </div>
  );
}

function BentoGrid() {
  return (
    <section id="recursos" className="py-24 lg:py-32 bg-white border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading kicker="/ recursos" title="Tudo que você precisa para impulsionar suas vendas" />
        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-4 mt-14">
          <BentoCard
            idx="01"
            title="Gestão Completa de Produtos"
            Icon={Package}
            className="lg:col-span-2 lg:row-span-2"
          >
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square rounded-xl border hairline bg-white p-3 flex flex-col justify-between">
                  <div className="flex-1 rounded-lg bg-surface" />
                  <div className="mt-2 space-y-1.5">
                    <div className="h-1.5 w-2/3 bg-[#E4E4E7] rounded-full" />
                    <div className="font-mono-label text-[10px] text-ink-900">R$ {i * 29}</div>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard idx="02" title="WhatsApp e Vendas" Icon={MessageCircle}>
            <div className="space-y-2">
              <div className="max-w-[80%] bg-surface rounded-2xl rounded-bl-sm px-3 py-2 text-[12px] text-ink-900">
                Olá! Tenho interesse no produto.
              </div>
              <div className="max-w-[80%] ml-auto bg-ink-900 text-white rounded-2xl rounded-br-sm px-3 py-2 text-[12px]">
                Temos em estoque. Envio hoje mesmo.
              </div>
            </div>
          </BentoCard>

          <BentoCard idx="03" title="Indique e Ganhe Comissão" Icon={Gift}>
            <div className="flex items-end justify-between">
              <div>
                <div className="font-display font-semibold text-[48px] leading-none tracking-[-0.03em] text-ink-900">15%</div>
                <div className="font-mono-label uppercase text-[10px] text-ink-400 mt-2">por indicação</div>
              </div>
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface flex items-center justify-center">
                    <Users size={14} className="text-ink-500" />
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard idx="04" title="WhatsApp e Instagram" Icon={Instagram}>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border hairline bg-white p-3">
                <MessageCircle size={16} className="text-ink-900" />
                <div className="font-mono-label uppercase text-[10px] text-emerald-600 mt-3">Conectado</div>
              </div>
              <div className="rounded-xl border hairline bg-white p-3">
                <Instagram size={16} className="text-ink-900" />
                <div className="font-mono-label uppercase text-[10px] text-emerald-600 mt-3">Conectado</div>
              </div>
            </div>
          </BentoCard>

          <BentoCard idx="05" title="Sistema Gerenciável" Icon={Settings2}>
            <div className="space-y-3">
              {[
                { l: 'Estoque', v: 85 },
                { l: 'Pedidos', v: 62 },
                { l: 'Clientes', v: 94 },
              ].map((row) => (
                <div key={row.l}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono-label uppercase text-[10px] text-ink-500">{row.l}</span>
                    <span className="font-mono-label text-[10px] text-ink-900">{row.v}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white rounded-full overflow-hidden border hairline">
                    <div className="h-full bg-ink-900 rounded-full" style={{ width: `${row.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard idx="06" title="Multi Idiomas e Moedas" Icon={Globe2}>
            <div className="flex flex-wrap gap-2">
              {['PT-BR', 'EN-US', 'ES-ES', 'BRL', 'USD', 'EUR'].map((p) => (
                <span key={p} className="font-mono-label text-[10px] uppercase px-2.5 py-1 rounded-full border hairline bg-white text-ink-700">
                  {p}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function AnalyticsSection() {
  const metrics = [
    { Icon: TrendingUp, l: 'Conversão', v: '+24,8%' },
    { Icon: ShoppingBag, l: 'Ticket médio', v: 'R$ 189' },
    { Icon: Users, l: 'Novos clientes', v: '+1.204' },
    { Icon: Star, l: 'Retorno', v: '38%' },
  ];
  return (
    <section id="analytics" className="py-24 lg:py-32 bg-surface border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <div className="font-mono-label uppercase text-[11px] text-ink-500">/ analytics</div>
            <h2 className="font-display font-semibold text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.035em] text-ink-900 mt-4">
              Decisões baseadas em dados reais.
            </h2>
            <p className="text-ink-500 text-[16px] lg:text-[18px] mt-6 leading-[1.5] max-w-xl">
              Tenha uma visão geral do seu negócio e acompanhe suas vendas de forma simples e intuitiva.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-10">
              {metrics.map(({ Icon, l, v }) => (
                <div key={l} className="rounded-2xl border hairline bg-white p-5">
                  <Icon size={18} className="text-ink-900" />
                  <div className="font-mono-label uppercase text-[10px] text-ink-400 mt-4">{l}</div>
                  <div className="font-display font-semibold text-[24px] text-ink-900 tracking-[-0.02em] mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div
              className="rounded-3xl bg-white p-6 lg:p-8 border hairline"
              style={{ boxShadow: '0 30px 80px -40px rgba(10,10,10,0.2)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BarChart3 size={16} className="text-ink-900" />
                  <span className="font-display font-medium text-[14px] text-ink-900">Visão geral</span>
                </div>
                <span className="font-mono-label uppercase text-[10px] text-ink-400">últimos 30d</span>
              </div>
              <svg viewBox="0 0 400 160" className="w-full h-auto">
                <defs>
                  <linearGradient id="vt-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,120 C40,100 60,60 100,70 C140,80 160,40 200,50 C240,60 260,90 300,70 C340,50 360,30 400,40 L400,160 L0,160 Z"
                  fill="url(#vt-area)"
                />
                <path
                  d="M0,120 C40,100 60,60 100,70 C140,80 160,40 200,50 C240,60 260,90 300,70 C340,50 360,30 400,40"
                  fill="none"
                  stroke="#0A0A0A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t hairline">
                {[
                  { l: 'Sessões', v: '42.1k' },
                  { l: 'Vendas', v: '3.412' },
                  { l: 'Receita', v: 'R$ 184k' },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="font-mono-label uppercase text-[10px] text-ink-400">{m.l}</div>
                    <div className="font-display font-semibold text-[20px] text-ink-900 tracking-[-0.02em] mt-1">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  tag,
  name,
  price,
  period,
  featured = false,
}: {
  tag: string;
  name: string;
  price: string;
  period: string;
  featured?: boolean;
}) {
  const benefits = [
    'Produtos ilimitados',
    'Vendas ilimitadas',
    'Integração WhatsApp',
    'Domínio próprio',
    'Suporte prioritário',
    'Sem taxas sobre vendas',
  ];
  return (
    <div
      className={`reveal card-hover rounded-2xl p-7 lg:p-8 border hairline flex flex-col ${
        featured ? 'bg-ink-900 text-white' : 'bg-surface text-ink-900'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`font-display font-semibold text-[16px] ${featured ? 'text-white' : 'text-ink-900'}`}>
          {name}
        </span>
        <span
          className={`font-mono-label uppercase text-[10px] px-2.5 py-1 rounded-full border ${
            featured ? 'border-white/30 text-white' : 'hairline text-ink-500'
          }`}
        >
          {tag}
        </span>
      </div>
      <div className="mt-8 flex items-baseline gap-2">
        <span className="font-display font-semibold text-[44px] lg:text-[52px] tracking-[-0.03em] leading-none">{price}</span>
        <span className={`font-mono-label text-[12px] ${featured ? 'text-white/60' : 'text-ink-400'}`}>{period}</span>
      </div>
      <ul className="mt-8 space-y-3 flex-1">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-3">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                featured ? 'bg-white/15' : 'bg-white border hairline'
              }`}
            >
              <Check size={12} strokeWidth={3} className={featured ? 'text-white' : 'text-ink-900'} />
            </span>
            <span className={`text-[14px] ${featured ? 'text-white/90' : 'text-ink-700'}`}>{b}</span>
          </li>
        ))}
      </ul>
      <a
        href="/register"
        className={`mt-8 rounded-full px-6 py-3.5 font-display font-medium text-[14px] inline-flex items-center justify-center gap-2 transition-colors ${
          featured
            ? 'bg-white text-ink-900 hover:bg-white/90'
            : 'btn-primary'
        }`}
      >
        Criar Agora
        <ArrowRight size={14} />
      </a>
    </div>
  );
}

function PricingSection() {
  return (
    <section id="precos" className="py-24 lg:py-32 bg-white border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading kicker="/ planos" title="Escolha o plano ideal pra você" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14">
          <PricingCard tag="Flexível" name="Mensal" price="R$ 57,00" period="/mês" />
          <PricingCard tag="Mais escolhido" name="Semestral" price="R$ 229,00" period="/6 meses" featured />
          <PricingCard tag="Melhor valor" name="Anual" price="R$ 336,00" period="/ano" />
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const items = [
    {
      q: 'Preciso de cartão de crédito para começar?',
      a: 'Não. Você pode criar sua vitrine e explorar a plataforma sem nenhum compromisso inicial.',
    },
    {
      q: 'Posso usar meu próprio domínio?',
      a: 'Sim. Conecte seu domínio personalizado em poucos cliques, com SSL incluído em todos os planos.',
    },
    {
      q: 'Existe taxa sobre as vendas?',
      a: 'Não cobramos nenhuma comissão sobre suas vendas. Você paga apenas o plano escolhido.',
    },
    {
      q: 'Como funciona a integração com o WhatsApp?',
      a: 'Cada produto gera um link direto para conversa no WhatsApp com a mensagem pronta do cliente.',
    },
    {
      q: 'Posso cancelar a qualquer momento?',
      a: 'Sim. O cancelamento é imediato e sem burocracia, diretamente no painel administrativo.',
    },
  ];
  return (
    <section id="faq" className="py-24 lg:py-32 bg-surface border-t hairline">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <SectionHeading kicker="/ dúvidas" title="Perguntas frequentes." />
        <div className="mt-12 divide-y hairline border-t border-b hairline">
          {items.map((it) => (
            <details key={it.q} className="reveal group py-6">
              <summary className="flex items-center justify-between cursor-pointer gap-6">
                <span className="font-display font-medium text-[17px] lg:text-[19px] text-ink-900 tracking-[-0.01em]">
                  {it.q}
                </span>
                <span className="w-9 h-9 rounded-full border hairline bg-white flex items-center justify-center shrink-0">
                  <Plus size={16} className="faq-icon text-ink-900" strokeWidth={2} />
                </span>
              </summary>
              <p className="mt-4 text-ink-500 text-[15px] leading-[1.5] max-w-2xl">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-white border-t hairline">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="reveal font-display font-semibold text-[40px] sm:text-[56px] lg:text-[80px] leading-[1.04] tracking-[-0.035em] text-ink-900">
          Pronto para acelerar suas vendas?
        </h2>
        <div className="reveal mt-10">
          <a href="#top" className="btn-primary rounded-full px-8 py-4 text-[15px] font-display font-medium inline-flex items-center gap-2">
            Começar Agora
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FooterLanding() {
  return (
    <footer className="border-t hairline bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-ink-900 flex items-center justify-center">
            <Zap size={14} className="text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display font-semibold text-[14px] text-ink-900">VitrineTurbo</span>
        </div>
        <span className="font-mono-label uppercase text-[11px] text-ink-400">
          © 2026 — Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  useReveal();
  return (
    <div className="vt-root min-h-screen bg-white text-ink-900">
      <Header />
      <Hero />
      <BentoGrid />
      <AnalyticsSection />
      <PricingSection />
      <FaqSection />
      <FinalCTA />
      <FooterLanding />
    </div>
  );
}
