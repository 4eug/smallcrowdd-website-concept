'use client';

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { markIntroBypassedForInternalNavigation } from '../introNavigation';

const navLinks = ['Work', 'About', 'Tests', 'The Rising Times'];
const socialLinks = ['Phone', 'Instagram', 'Tiktok', 'LinkedIn', 'Vimeo'];
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
};

const awards: LogoItem[] = [
  { src: '/assets/studio/award-la-international.svg', alt: 'Winner LA International Art Film Fest 2025' },
  { src: '/assets/studio/award-cannes.svg', alt: 'Winner Cannes Arts Fest 2025' },
  { src: '/assets/studio/award-siff.svg', alt: 'Award Winner Siff Film Festival' },
  { src: '/assets/studio/award-london-global.svg', alt: 'Winner London Global Film Festival' },
  { src: '/assets/studio/award-aimaff-hm.svg', alt: '2026 AIMAFF Honorable Mention' },
  { src: '/assets/studio/award-lift-off.svg', alt: 'LIFT-OFF Global Network' },
];

const clients: LogoItem[] = [
  { src: '/assets/studio/client-puma.svg', alt: 'Puma' },
  { src: '/assets/studio/client-adidas.svg', alt: 'Adidas' },
  { src: '/assets/studio/client-accra-babashop.svg', alt: 'Accra Babashop' },
  { src: '/assets/studio/client-afrofuture.svg', alt: 'Afro Future' },
  { src: '/assets/studio/client-gfa.svg', alt: 'GFA' },
  { src: '/assets/studio/client-luuknow.svg', alt: 'LuukNow' },
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
      <header className="sticky left-0 top-0 z-30 flex w-full items-center justify-between bg-white px-6 py-4 text-black lg:px-16 lg:py-6">
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
        <div className="flex w-full items-center justify-between p-4 lg:px-16 lg:py-6">
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

        <div className="relative flex min-h-px flex-1 flex-col justify-between gap-8 px-4 py-8 lg:flex-row lg:justify-start lg:gap-3 lg:px-[156px] lg:py-14">
          <nav
            aria-label="Main menu"
            className="flex w-full flex-col items-start gap-3 font-display text-[56px] leading-[1.1] tracking-[-1.12px] lg:w-auto lg:text-[120px] lg:tracking-[-2.4px]"
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

          <div className="flex w-[187px] flex-col gap-2 text-[20px] leading-[1.2] tracking-[-0.6px] lg:absolute lg:left-[82.5%] lg:top-8 lg:gap-3 lg:text-2xl lg:tracking-[-0.72px]">
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

        <div className="flex w-full flex-col gap-2.5 p-4 text-[16px] font-medium leading-[1.33] tracking-[-0.48px] text-[#a07204] lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-6 lg:text-[18px] lg:tracking-[-0.54px]">
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

function LogoGrid({ items, padding = 'p-1' }: { items: LogoItem[]; padding?: 'p-1' | 'p-2' }) {
  return (
    <div className="grid grid-cols-2 gap-1 gap-x-1 gap-y-1 overflow-hidden sm:gap-4 sm:gap-x-6 lg:gap-x-10 lg:gap-y-4">
      {items.map((item) => (
        <div key={item.alt} className={`flex size-[140px] items-center justify-center overflow-hidden ${padding} sm:size-[180px] sm:p-4`}>
          <Image src={item.src} alt={item.alt} width={180} height={180} className="max-h-full max-w-full object-contain" />
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative flex flex-col overflow-hidden bg-white pb-4 md:h-[560px] md:justify-between lg:h-[600px]">
      <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-b-3xl bg-[#131111] px-4 pb-8 pt-12 text-[#f6f6f6] sm:px-10 md:h-[365px] md:flex-row md:gap-5 md:py-10 lg:p-16">
        <div className="absolute inset-0 opacity-20 mix-blend-hard-light [background-image:url('/assets/loader/noise.png')] [background-size:240px_180px]" />
        <div className="relative flex w-full max-w-[507px] flex-col justify-between gap-5 md:h-[266px]">
          <div className="text-[24px] font-medium leading-[1.2] md:text-[40px] lg:text-[48px]">
            <p className="text-[#999]">Let&apos;s Create Together</p>
            <a href="#" className="mt-5 block font-semibold tracking-[-0.03em] text-white underline">
              Contact us
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Image src="/assets/figma-home/footer-badge-vector.svg" alt="" width={80} height={40} className="h-10 w-20 [clip-path:inset(0)]" />
            <span className="text-[16px] font-semibold lowercase leading-[1.4] text-[#9a9a9a]">design</span>
          </div>
        </div>
        <div className="relative flex w-full gap-5 text-[14px] font-medium leading-[1.2] tracking-[-0.03em] md:w-auto md:gap-12 md:text-[18px] lg:gap-32 lg:text-[20px]">
          <div className="flex flex-1 flex-col gap-5 md:w-[187px] md:flex-none">
            {navLinks.map((link) => {
              const href = getPageHref(link);

              return (
                <Link key={link} href={href} onClick={() => handleInternalNavigation(href)}>
                  {link}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-1 flex-col gap-5 md:w-[187px] md:flex-none">
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
        className="relative mx-4 h-auto w-[calc(100%-32px)] object-fill sm:mx-10 sm:w-[calc(100%-80px)] md:absolute md:left-1/2 md:top-[334px] md:mx-0 md:mt-0 md:-translate-x-1/2 lg:w-[calc(100%-128px)]"
      />

      <div className="relative z-10 mt-6 flex w-full items-center justify-center gap-4 px-4 text-center text-[14px] font-medium leading-[1.2] tracking-[-0.03em] text-[#131111] sm:px-10 md:mt-0 md:justify-between md:text-[20px] lg:px-16">
        <p className="whitespace-nowrap">All rights reserved ©smallcrowdd 2026</p>
        <a href="#" className="hidden w-[347px] text-center sm:block">
          Privacy policy
        </a>
        <a href="#" className="hidden w-[347px] text-right sm:block">
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

      <section className="flex w-full flex-col gap-5 overflow-hidden bg-white px-4 pb-16 pt-6 md:gap-12 md:px-16 md:pt-16">
        <div className="flex w-full max-w-[1180px] flex-col gap-5 md:gap-8">
          <div className="flex flex-col gap-8 font-display text-[32px] leading-[1.04] tracking-[-0.01em] text-black md:text-[48px]" style={displayStyle}>
            <div>
              <p>we are a creative studio shaping the future of contemporary storytelling.</p>
              <p>Our approach blends refined craft, cultural intelligence, and intentional creativity—grounded in craft, authenticity, and community.</p>
            </div>
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

        <section className="flex w-full max-w-[1180px] flex-col gap-4 sm:gap-6 md:gap-8">
          <h2 className="max-w-[681px] font-display text-[36px] leading-[1.04] tracking-[-0.01em] text-black sm:text-[44px] lg:text-[56px]" style={displayStyle}>
            We set a new pace for how stories are remembered.
          </h2>
          <LogoGrid items={awards} padding="p-1" />
        </section>

        <section className="flex w-full max-w-[681px] flex-col gap-4 sm:gap-8 lg:gap-10">
          <h2
            className="font-display text-[32px] leading-[1.1] tracking-[-0.01em] text-black sm:text-[36px] lg:text-[44px]"
            style={displayStyle}
          >
            we&apos;ve collaborated with a growing community of brands, creators, and organizations committed to meaningful storytelling.
          </h2>
          <LogoGrid items={clients} padding="p-2" />
        </section>
      </section>

      <Footer />
    </main>
  );
}
