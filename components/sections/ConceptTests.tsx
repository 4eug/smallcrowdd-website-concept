'use client';

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { markIntroBypassedForInternalNavigation } from '../introNavigation';

const navLinks = ['Work', 'About', 'Tests', 'The Rising Times'];
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

function HeaderBrand({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline text-[#d93c42] ${className}`}>
      <span className="font-serif text-[32px] font-black leading-none tracking-[-0.06em] md:text-[40px]">smallcrowdd.</span>
      <span
        className="ml-0.5 text-[14px] font-semibold leading-none tracking-[-0.03em] md:text-[18px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        tests
      </span>
    </span>
  );
}

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

type TestCardData = {
  title: string;
  src: string;
  alt: string;
  imageClassName?: string;
  imageStyle?: CSSProperties;
  priority?: boolean;
};

const testCards: TestCardData[] = [
  {
    title: 'The boiling sky  pt. 1',
    src: '/assets/tests/tbs-pt1.png',
    alt: 'The Boiling Sky pt. 1 test still',
    priority: true,
  },
  {
    title: 'The boiling sky  pt. 2',
    src: '/assets/tests/tbs-pt2.png',
    alt: 'The Boiling Sky pt. 2 test still',
    priority: true,
  },
  {
    title: 'almost joy',
    src: '/assets/tests/almost-joy.png',
    alt: 'Almost Joy test still',
    imageClassName: 'object-cover grayscale',
    imageStyle: { objectPosition: '50% 44%', transform: 'scale(1.35)' },
  },
  {
    title: 'what do i desire?',
    src: '/assets/tests/what-do-i-desire.png',
    alt: 'What Do I Desire test still',
    imageClassName: 'object-cover grayscale',
    imageStyle: { objectPosition: '50% 39%', transform: 'scale(1.36)' },
  },
  {
    title: 'idle reverie pt 1',
    src: '/assets/tests/idle-reverie-pt1.png',
    alt: 'Idle Reverie pt 1 test still',
    imageStyle: { objectPosition: '50% 70%' },
  },
  {
    title: 'idle reverie pt 2',
    src: '/assets/tests/idle-reverie-pt2.png',
    alt: 'Idle Reverie pt 2 test still',
    imageStyle: { objectPosition: '50% 45%' },
  },
];

const featuredTests = {
  mirrors: {
    title: 'Mirrors',
    src: '/assets/tests/mirrors.png',
    alt: 'Mirrors test still',
    copy:
      'Mirrors reflects the battle we wage with ourselves. Set in a boxing gym, two kids face each other across the ring—each one a reflection of the other, caught in the push and pull of doubt and courage. Koblah stands between them as referee, holding the space where self-confrontation becomes self-discovery.',
    imageStyle: { objectPosition: '50% 48%' },
  },
  oneBigWave: {
    title: 'One Big Wave',
    src: '/assets/tests/one-big-wave.png',
    alt: 'One Big Wave test still',
    copy:
      "One Big Wave reflects the moment fear becomes a threshold. Set on an open shoreline at dawn, a young surfer paddles out alone—carrying everything they’ve been running from. Mele waits on the beach, watching, knowing the ocean won’t give what’s asked until the asking stops. Out where the swells rise tallest, surrender and courage turn out to be the same stroke.",
    imageStyle: { objectPosition: '50% 47%' },
  },
};

function MenuIconButton({
  label,
  iconSrc,
  onClick,
}: {
  label: string;
  iconSrc: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#fef3d9] bg-black/75 p-2 transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#131111] lg:size-12 lg:p-3"
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
      <header className="sticky left-0 top-0 z-30 flex w-full items-center justify-between bg-white px-4 py-4 sm:px-10 lg:px-16 lg:py-6">
        <Link href="/" aria-label="smallcrowdd tests home" onClick={() => handleInternalNavigation('/')} className="block shrink-0">
          <HeaderBrand />
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
            className="block shrink-0 !text-[#131111]"
          >
            <HeaderBrand />
          </Link>
          <MenuIconButton label="Close menu" iconSrc="/assets/figma-home/menu-close.svg" onClick={() => setDrawerOpen(false)} />
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

function CornerFrame({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className="absolute left-0 top-0 size-[21px] border-l-[3px] border-t-[3px] border-black" />
      <span className="absolute right-0 top-0 size-[21px] border-r-[3px] border-t-[3px] border-black" />
      <span className="absolute bottom-0 left-0 size-[21px] border-b-[3px] border-l-[3px] border-black" />
      <span className="absolute bottom-0 right-0 size-[21px] border-b-[3px] border-r-[3px] border-black" />
    </div>
  );
}

function InfoGlyph() {
  return <Image src="/assets/icons/details-info.svg" alt="" width={20} height={20} aria-hidden className="size-5" />;
}

function PlayGlyph() {
  return <Image src="/assets/icons/play.svg" alt="" width={14} height={13} aria-hidden className="size-[14px] rotate-90" />;
}

function Actions() {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <a
        href="#"
        className="flex h-[30px] items-center gap-2 rounded-[1px] border border-[#5C5A5A] px-2 py-1 text-[16px] font-semibold leading-[1.4] text-[#5C5A5A]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Details
        <InfoGlyph />
      </a>
      <a
        href="#"
        className="flex h-[30px] items-center gap-2 rounded-[1px] bg-black px-2 py-1 text-[16px] font-semibold leading-[1.4] text-white"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Watch
        <PlayGlyph />
      </a>
    </div>
  );
}

function CardTitle({ children }: { children: ReactNode }) {
  return (
    <p className="min-w-0 font-display text-[20px] leading-[1.4] tracking-normal text-black md:text-[22px] lg:text-[24px] lg:truncate" style={displayStyle}>
      {children}
    </p>
  );
}

function TestCard({ card }: { card: TestCardData }) {
  return (
    <article className="relative h-[376px] min-w-0 flex-1 sm:h-[388px] lg:h-[404px]">
      <CornerFrame />
      <div className="absolute inset-4 flex flex-col gap-4 lg:inset-6 lg:gap-6">
        <div className="relative h-[266px] w-full overflow-hidden">
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className={card.imageClassName ?? 'object-cover'}
            style={card.imageStyle}
            priority={card.priority}
          />
        </div>
        <div className="flex min-h-[30px] flex-col items-start justify-between gap-2 xl:h-[30px] xl:flex-row xl:items-center xl:gap-4">
          <CardTitle>{card.title}</CardTitle>
          <Actions />
        </div>
      </div>
    </article>
  );
}

function FeaturedTest({
  feature,
}: {
  feature: {
    title: string;
    src: string;
    alt: string;
    copy: string;
    imageStyle?: CSSProperties;
  };
}) {
  return (
    <div className="flex w-full gap-6 max-lg:flex-col">
      <article className="relative h-[298px] w-full min-w-0 shrink-0 sm:h-[360px] lg:h-[465px] lg:flex-1 lg:shrink">
        <CornerFrame />
        <div className="absolute inset-4 flex lg:inset-6">
          <div className="relative h-full min-h-0 w-full flex-1 overflow-hidden">
            <Image
              src={feature.src}
              alt={feature.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              style={feature.imageStyle}
            />
          </div>
        </div>
      </article>
      <div className="flex w-full shrink-0 flex-col items-start gap-2 md:gap-4 lg:w-[524px]">
        <CardTitle>{feature.title}</CardTitle>
        <p
          className="text-[16px] font-normal leading-[1.33] tracking-[-0.03em] text-black md:text-[18px] lg:text-[20px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {feature.copy}
        </p>
        <Actions />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative flex flex-col overflow-hidden bg-white pb-4 md:h-[560px] md:justify-between lg:h-[600px]">
      <div className="relative mb-[-8px] flex flex-col gap-8 overflow-hidden rounded-b-3xl lg:rounded-b-[32px] bg-[#131111] px-4 pb-6 pt-12 text-[#f6f6f6] md:mb-0 md:h-[365px] md:flex-row md:justify-between md:gap-5 md:p-10 lg:p-16">
        <div className="absolute inset-0 opacity-20 mix-blend-hard-light [background-image:url('/assets/loader/noise.png')] [background-size:240px_180px]" />
        <div className="relative flex w-full items-start gap-2.5 md:h-[266px] md:max-w-[507px] md:flex-col md:justify-between md:gap-5">
          <div className="flex min-w-0 flex-1 flex-col gap-2 text-[24px] font-medium leading-[1.2] md:block md:text-[40px] lg:text-[48px]">
            <p className="text-[#999]">
              Let’s Create <br className="md:hidden" />
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
            {navLinks.map((link) => (
              <Link key={link} href={getPageHref(link)} onClick={() => handleInternalNavigation(getPageHref(link))}>
                {link}
              </Link>
            ))}
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
        className="relative mx-4 h-auto w-[calc(100%-32px)] object-fill md:absolute md:left-1/2 md:top-[334px] md:mx-0 md:mt-0 md:-translate-x-1/2 lg:w-[1384px] lg:max-w-[calc(100%-56px)]"
      />

      <div className="relative z-10 mt-3 flex w-full items-center justify-center gap-4 px-4 text-center text-[14px] font-medium leading-[1.2] tracking-[-0.03em] text-[#131111] md:mt-0 md:justify-center md:px-10 md:text-[20px] lg:px-16">
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

export function ConceptTests() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      <section className="flex w-full flex-col gap-10 overflow-hidden bg-white px-4 pb-16 pt-6 sm:px-10 md:gap-12 lg:px-16 lg:pt-16">
        <div className="flex w-full max-w-[1080px] flex-col gap-6 md:gap-8">
          <h1
            className="font-display text-[32px] leading-[1.04] tracking-[-0.01em] text-black md:text-[40px] lg:text-[48px]"
            style={displayStyle}
          >
            our creative lab — an ongoing space for experimentation, skill-building, and visual exploration. Through light studies,
            movement tests, narrative fragments, color explorations, and performance sketches, we use these sessions to refine our craft
            beyond commissioned work.
          </h1>
          <p
            className="text-[24px] font-bold leading-[1.2] tracking-[-0.01em] text-[#575757] md:text-[26px] lg:text-[28px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Each test begins with curiosity — a technique to develop, a feeling to translate, or an idea to explore. We work instinctively,
            pulling from our styling archive, collaborating with available models, and building looks from what’s accessible. Locations are
            chosen intuitively, and concepts evolve in real time.
          </p>
        </div>

        <div className="grid w-full max-w-[1180px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-12">
          <TestCard card={testCards[0]} />
          <TestCard card={testCards[1]} />
        </div>

        <div className="w-full max-w-[1180px]">
          <FeaturedTest feature={featuredTests.mirrors} />
        </div>

        <div className="grid w-full max-w-[1180px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-12">
          <TestCard card={testCards[2]} />
          <TestCard card={testCards[3]} />
        </div>

        <p
          className="max-w-[1080px] text-[24px] font-bold leading-[1.2] tracking-[-0.01em] text-[#575757] md:text-[26px] lg:text-[28px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          The process is fast, collaborative, and discovery-led. Some tests grow into full projects, while others remain visual studies —
          all contributing to the growth of our creative language.
        </p>

        <div className="grid w-full max-w-[1180px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-12">
          <TestCard card={testCards[4]} />
          <TestCard card={testCards[5]} />
        </div>

        <div className="w-full max-w-[1180px]">
          <FeaturedTest feature={featuredTests.oneBigWave} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
