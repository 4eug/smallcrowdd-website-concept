'use client';

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { markIntroBypassedForInternalNavigation } from '../introNavigation';

const navLinks = ['Work', 'Studio', 'Tests', 'The Rising Times'];
const socialLinks = ['Instagram', 'Tiktok', 'LinkedIn', 'Vimeo'];
const menuLinks = ['Home', 'Work', 'studio', 'Test', 'the rising times'];
const menuSocialLinks = ['Instagram', 'Tiktok', 'LinkedIn', 'Vimeo'];
const testPageHref = '/test';
const pageHrefs: Record<string, string> = {
  home: '/',
  work: '/work',
  about: '/#intro-section',
  studio: '/studio',
  tests: testPageHref,
  test: testPageHref,
  'the rising times': '/#the-rising-times',
};

const displayStyle: CSSProperties = {
  fontFamily:
    '"Smallcrowdd Bebas Neue", Impact, Haettenschweiler, "Arial Narrow Bold", "Arial Narrow", sans-serif',
  fontSynthesis: 'none',
  textTransform: 'none',
};

const services = [
  {
    title: 'Film, Photography & Video Production',
    description:
      'We produce cinematic, story-driven films and visual content across narrative, documentary, branded, and music-led work, with full post-production finishing.',
  },
  {
    title: 'Creative Direction, Strategy & Project Management',
    description:
      'We develop concepts, visual languages, and narrative frameworks, overseeing creative strategy and end-to-end production execution.',
  },
  {
    title: 'Exhibitions, Experiences & Events',
    description:
      'We design immersive installations, visual archives, and experiential storytelling moments that connect audiences to culture, space, and meaning.',
  },
];

type LogoItem = {
  src: string;
  alt: string;
  className: string;
};

const awards: LogoItem[] = [
  { src: '/assets/studio-figma/award-la-international.png', alt: 'Winner LA International Art Film Fest 2025', className: 'h-[104px] w-[156.632px]' },
  { src: '/assets/studio-figma/award-cannes.png', alt: 'Winner Cannes Arts Fest 2025', className: 'h-[104px] w-[156.632px]' },
  { src: '/assets/studio-figma/award-aimaff-hm.png', alt: '2026 AIMAFF Honorable Mention', className: 'h-[104px] w-[163.589px]' },
  { src: '/assets/studio-figma/award-lift.png', alt: 'LIFT-OFF Global Network', className: 'h-[104px] w-[154.791px]' },
  { src: '/assets/studio-figma/award-aimaff.png', alt: 'AIMAFF award', className: 'size-[104px]' },
  { src: '/assets/studio-figma/award-london.png', alt: 'Winner London Global Film Festival', className: 'h-[104px] w-[116.519px]' },
];

const clients: LogoItem[] = [
  { src: '/assets/studio-figma/client-puma.svg', alt: 'Puma', className: 'h-[72px] w-[144.607px]' },
  { src: '/assets/studio-figma/client-adidas.svg', alt: 'Adidas', className: 'h-[72px] w-[107.573px]' },
  { src: '/assets/studio-figma/client-afrofuture.png', alt: 'Afrofuture', className: 'h-[72px] w-[165.176px]' },
  { src: '/assets/studio-figma/client-accra.svg', alt: 'Accra Babashop', className: 'h-[72px] w-[108.719px]' },
  { src: '/assets/studio-figma/client-gfa.jpg', alt: 'Ghana Football Association', className: 'h-[104px] w-[90.734px]' },
  { src: '/assets/studio-figma/client-luuknow.png', alt: 'Luuknow', className: 'h-[72px] w-[131.294px]' },
];

function getPageHref(label: string) {
  return pageHrefs[label.toLowerCase()] ?? '/';
}

function shouldBypassIntroForHref(href: string) {
  return href === '/' || href.startsWith('/#');
}

function handleInternalNavigation(href: string, onNavigate?: () => void) {
  if (shouldBypassIntroForHref(href)) {
    markIntroBypassedForInternalNavigation();
  }

  onNavigate?.();
}

function MenuIconButton({
  label,
  iconSrc,
  onClick,
  tone = 'dark',
}: {
  label: string;
  iconSrc: string;
  onClick: () => void;
  tone?: 'dark' | 'light';
}) {
  const dark = tone === 'dark';

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md border p-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:size-12 lg:p-3 ${
        dark
          ? 'border-[#fef3d9] bg-black/75 text-white hover:bg-black focus-visible:outline-[#131111]'
          : 'border-[#fef3d9] bg-black/75 text-white hover:bg-black focus-visible:outline-[#131111]'
      }`}
    >
      <Image src={iconSrc} alt="" width={24} height={24} aria-hidden className="size-4 lg:size-6" />
    </button>
  );
}

function Header({ drawerOpen, setDrawerOpen }: { drawerOpen: boolean; setDrawerOpen: (open: boolean) => void }) {
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [drawerOpen, setDrawerOpen]);

  return (
    <>
      <header className="sticky left-0 top-0 z-30 flex w-full items-center justify-between bg-white px-4 py-4 text-black md:px-16 lg:px-24 lg:py-6">
        <Link href="/" aria-label="smallcrowdd home" onClick={() => handleInternalNavigation('/')} className="relative block h-5 w-10 lg:h-8 lg:w-16">
          <Image src="/assets/logos/smallcrowdd-mini.svg" alt="smallcrowdd." fill priority className="object-fill" />
        </Link>
        <MenuIconButton label="Open menu" iconSrc="/assets/figma-home/menu.svg" onClick={() => setDrawerOpen(true)} />
      </header>

      <aside
        aria-hidden={!drawerOpen}
        className={`fixed inset-0 z-[70] flex h-dvh w-full flex-col overflow-y-auto bg-[#fef3d9] text-black transition-[opacity,visibility] duration-200 ${
          drawerOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <div className="flex w-full items-center justify-between p-4 md:px-16 md:py-6 lg:px-24">
          <Link
            href="/"
            aria-label="smallcrowdd home"
            onClick={() => handleInternalNavigation('/', () => setDrawerOpen(false))}
            className="relative block h-5 w-10 shrink-0 lg:h-8 lg:w-16"
          >
            <Image src="/assets/logos/smallcrowdd-mini.svg" alt="smallcrowdd." fill priority className="object-fill" />
          </Link>
          <MenuIconButton label="Close menu" iconSrc="/assets/figma-home/menu-close.svg" onClick={() => setDrawerOpen(false)} tone="light" />
        </div>

        <div className="relative flex min-h-px flex-1 flex-col justify-between gap-8 px-4 py-8 md:flex-row md:justify-start md:gap-10 md:px-16 md:py-12 lg:gap-3 lg:px-24 lg:py-14">
          <nav
            aria-label="Main menu"
            className="flex w-full flex-col items-start gap-3 font-display text-[56px] leading-[1.1] tracking-[-1.12px] md:w-auto md:gap-2 md:text-[88px] md:tracking-[-1.76px] lg:text-[120px] lg:tracking-[-2.4px]"
            style={displayStyle}
          >
            {menuLinks.map((link) => {
              const href = getPageHref(link);

              return (
                <Link
                  key={link}
                  href={href}
                  onClick={() => handleInternalNavigation(href, () => setDrawerOpen(false))}
                  className="transition hover:text-[#8c8787]"
                >
                  {link}
                </Link>
              );
            })}
          </nav>

          <div className="flex w-[187px] flex-col gap-2 text-[20px] leading-[1.2] tracking-[-0.6px] md:absolute md:right-16 md:top-12 lg:left-[82.5%] lg:right-auto lg:top-8 lg:gap-3 lg:text-2xl lg:tracking-[-0.72px]">
            <p className="font-medium text-[#a07204]">Follow us:</p>
            <div className="flex flex-col gap-2 font-bold text-[#131111]">
              {menuSocialLinks.map((link) => (
                <a key={link} href="#" onClick={() => setDrawerOpen(false)} className="transition hover:text-[#8c8787]">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2.5 p-4 text-[16px] font-medium leading-[1.33] tracking-[-0.48px] text-[#a07204] md:flex-row md:items-center md:justify-between md:px-16 md:py-6 lg:px-24 lg:text-[18px] lg:tracking-[-0.54px]">
          <p>
            Always open for new <br />
            projects and collaborations
          </p>
          <p>Copyright &copy;smallcrowdd 2026</p>
        </div>
      </aside>
    </>
  );
}

function ServiceCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="flex w-full flex-col gap-3 border-b border-[#d7d7d7] p-4 last:border-b md:p-6">
      <h2 className="font-display text-[24px] leading-[1.2] tracking-[-0.01em] text-black md:text-[32px]" style={displayStyle}>
        {title}
      </h2>
      <p className="text-[16px] font-medium leading-[1.2] tracking-[-0.03em] text-[#575757] md:text-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        {children}
      </p>
    </article>
  );
}

function LogoGrid({ items, variant }: { items: LogoItem[]; variant: 'awards' | 'clients' }) {
  return (
    <div
      className={
        variant === 'awards'
          ? 'inline-grid grid-cols-2 gap-x-1 gap-y-1 overflow-hidden sm:grid-cols-3 sm:gap-x-10 sm:gap-y-4'
          : 'grid w-full max-w-[473.83px] grid-cols-2 gap-x-1 gap-y-1 overflow-hidden sm:gap-x-[16.81px] sm:gap-y-[52.025px] sm:px-[8.405px]'
      }
    >
      {items.map((item) => (
        <div
          key={item.alt}
          className={
            variant === 'awards'
              ? 'flex size-[180px] items-center justify-center overflow-hidden p-4'
              : 'flex h-[110.47px] min-w-0 items-center justify-center overflow-hidden p-4'
          }
        >
          <div className={`relative shrink-0 ${item.className}`}>
            <Image src={item.src} alt={item.alt} fill sizes={variant === 'awards' ? '164px' : '166px'} className="object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative flex flex-col overflow-hidden bg-white pb-4 md:h-[560px] md:justify-between lg:h-[655px]">
      <div className="relative mb-[-8px] flex flex-col gap-8 overflow-hidden rounded-b-3xl lg:rounded-b-[32px] bg-[#131111] px-4 pb-6 pt-12 text-[#f6f6f6] md:mb-0 md:h-[365px] lg:h-[420px] md:flex-row md:justify-between md:gap-5 md:px-16 md:pb-20 md:pt-16 lg:px-24 lg:pb-24 lg:pt-24">
        <div className="absolute inset-0 opacity-20 mix-blend-hard-light [background-image:url('/assets/loader/noise.png')] [background-size:240px_180px]" />
        <div className="relative flex w-full items-start gap-2.5 md:min-h-[180px] md:max-w-[507px] md:flex-col md:justify-between md:gap-5 lg:min-h-[254px]">
          <div className="flex min-w-0 flex-1 flex-col gap-2 text-[24px] font-medium leading-[1.2] md:block md:text-[40px] lg:text-[48px]">
            <p className="text-[#999]">
              Let&apos;s Create <br className="md:hidden" />
              Together
            </p>
            <a href="#" className="block font-semibold tracking-[-0.03em] text-white underline md:mt-5">
              Contact us
            </a>
          </div>
          <div className="flex h-8 w-[108px] shrink-0 items-start gap-[5px] md:h-auto md:w-auto md:gap-3">
            <Image src="/assets/figma-home/footer-badge-vector.svg" alt="" width={80} height={40} className="h-8 min-w-0 flex-1 object-fill [clip-path:inset(0)] md:h-10 md:w-20 md:flex-none" />
            <span className="min-w-0 flex-1 text-[16px] font-semibold lowercase leading-[1.4] text-[#9a9a9a] md:flex-none">design</span>
          </div>
        </div>
        <div className="relative flex w-full gap-5 text-[14px] font-medium leading-[1.2] tracking-[-0.03em] md:w-auto md:gap-12 md:text-[18px] lg:gap-32 lg:text-[20px]">
          <div className="flex min-w-0 flex-1 flex-col gap-5 lg:w-[187px] lg:flex-none">
            {navLinks.map((link) => {
              const href = getPageHref(link);

              return (
                <Link key={link} href={href} onClick={() => handleInternalNavigation(href)}>
                  {link}
                </Link>
              );
            })}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-5 lg:w-[187px] lg:flex-none">
            {socialLinks.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Image
        src="/assets/figma-home/footerLogo.svg"
        alt="smallcrowdd."
        width={1384}
        height={196}
        className="relative mx-4 h-auto w-[calc(100%-32px)] object-fill md:absolute md:left-1/2 md:top-[334px] lg:top-[389px] md:mx-0 md:mt-0 md:w-[calc(100%-128px)] md:-translate-x-1/2 lg:h-[196px] lg:w-[calc(100%-192px)]"
      />

      <div className="relative z-10 mt-3 flex w-full items-center justify-center gap-4 px-4 text-center text-[14px] font-medium leading-[1.2] tracking-[-0.03em] text-[#131111] md:mt-0 md:justify-center md:px-16 md:text-[20px] lg:px-24">
        <p className="whitespace-nowrap">All rights reserved ©smallcrowdd 2026</p>
        <a href="#" className="hidden">
          Privacy policy
        </a>
        <a href="#" className="hidden">
          Terms of service
        </a>
      </div>
    </footer>
  );
}

export function ConceptStudio() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      <section className="flex w-full flex-col gap-5 overflow-hidden bg-white px-4 pb-16 pt-6 md:gap-12 md:px-16 md:pt-16 lg:px-24">
        <div className="flex w-full max-w-[1080px] flex-col gap-5 md:gap-8">
          <div className="flex flex-col gap-8 font-display text-[32px] leading-[1.04] tracking-[-0.01em] text-black md:text-[48px]" style={displayStyle}>
            <p>
              we are a creative studio shaping the future of contemporary storytelling. Our approach blends refined craft, cultural intelligence,
              and intentional creativity—grounded in craft, authenticity, and community.
            </p>
            <p>sc partners with brands, creatives, and communities to bring meaningful stories to life.</p>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-[2px] border border-[#d7d7d7] lowercase">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title}>
                {service.description}
              </ServiceCard>
            ))}
          </div>
        </div>

        <section className="flex w-full max-w-[1080px] flex-col gap-8">
          <h2 className="max-w-[681px] font-display text-[48px] leading-[1.33] tracking-[-0.01em] text-black" style={displayStyle}>
            We set a new pace for how stories are remembered.
          </h2>
          <LogoGrid items={awards} variant="awards" />
        </section>

        <section className="flex w-full max-w-[1080px] items-start justify-center gap-6 max-md:flex-col">
          <h2
            className="flex min-w-0 flex-1 flex-col justify-center font-display text-[48px] leading-[41.43px] tracking-[-1.883px] text-black"
            style={displayStyle}
          >
            Selected Clients
          </h2>
          <div className="flex shrink-0 flex-col items-center justify-center gap-8">
            <p
              className="max-w-[480px] text-[24px] font-medium leading-[1.33] tracking-[-0.703px] text-black md:whitespace-nowrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Here are some brands you&apos;ll probably
              <br />
              recognize that we&apos;ve had the pleasure to
              <br />
              work with. Cool, right? Now that we&apos;ve got
              <br />
              your attention, we often say the bigger the
              <br />
              brand, the less room there is for creative
              <br />
              excitement as other priorities tend to
              <br />
              overshadow design.
            </p>
            <LogoGrid items={clients} variant="clients" />
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
