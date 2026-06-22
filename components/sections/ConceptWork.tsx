'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
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

type WorkItem = {
  title: string;
  src: string | string[];
  alt: string;
  widthClass: string;
  priority?: boolean;
};

type HeroSlide = {
  title: string;
  category: string;
  description: string;
  image: string;
  thumb: string;
  objectPosition?: string;
};

const heroSlides: HeroSlide[] = [
  {
    title: 'flo remembers',
    category: 'Narrative Short',
    description: "a body carrying what it knows. a moment that feels familiar before it's understood.",
    image: '/assets/work/figma-35830616/hero-flo.png',
    thumb: '/assets/work/figma-35830616/hero-flo.png',
    objectPosition: '47% 50%',
  },
  {
    title: 'the social innovator',
    category: 'Campaign Film',
    description: 'portraits of movement, memory, and modern creative identity.',
    image: '/assets/work/figma-35830616/hero-thumb-01.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-01.png',
  },
  {
    title: 'afro futurist',
    category: 'Campaign Film',
    description: 'a chromatic study of fashion, movement, and speculative culture.',
    image: '/assets/work/figma-35830616/hero-thumb-02.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-02.png',
  },
  {
    title: 'the social innovator',
    category: 'Campaign Film',
    description: 'portraits of movement, memory, and modern creative identity.',
    image: '/assets/work/figma-35830616/hero-thumb-03.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-03.png',
  },
  {
    title: 'weakness',
    category: 'Narrative Short',
    description: 'a boxing-ring fragment about inner conflict, courage, and balance.',
    image: '/assets/work/figma-35830616/hero-thumb-04.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-04.png',
  },
  {
    title: 'freedom in the soul',
    category: 'Portrait Film',
    description: 'a quiet image sequence about presence, release, and self-possession.',
    image: '/assets/work/figma-35830616/hero-thumb-05.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-05.png',
  },
  {
    title: 'her prayer my journey',
    category: 'Editorial Film',
    description: 'a tactile story of devotion, lineage, and personal mythology.',
    image: '/assets/work/figma-35830616/hero-thumb-06.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-06.png',
  },
  {
    title: 'the rising times',
    category: 'Studio Archive',
    description: 'fragments from the archive, held between graphic memory and motion.',
    image: '/assets/work/figma-35830616/hero-thumb-07.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-07.png',
  },
  {
    title: 'weakness',
    category: 'Narrative Short',
    description: 'a boxing-ring fragment about inner conflict, courage, and balance.',
    image: '/assets/work/figma-35830616/hero-thumb-04.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-04.png',
  },
  {
    title: 'freedom in the soul',
    category: 'Portrait Film',
    description: 'a quiet image sequence about presence, release, and self-possession.',
    image: '/assets/work/figma-35830616/hero-thumb-05.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-05.png',
  },
  {
    title: 'the social innovator',
    category: 'Campaign Film',
    description: 'portraits of movement, memory, and modern creative identity.',
    image: '/assets/work/figma-35830616/hero-thumb-03.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-03.png',
  },
  {
    title: 'afro futurist',
    category: 'Campaign Film',
    description: 'a chromatic study of fashion, movement, and speculative culture.',
    image: '/assets/work/figma-35830616/hero-thumb-02.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-02.png',
  },
  {
    title: 'the rising times',
    category: 'Studio Archive',
    description: 'fragments from the archive, held between graphic memory and motion.',
    image: '/assets/work/figma-35830616/hero-thumb-07.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-07.png',
  },
  {
    title: 'her prayer my journey',
    category: 'Editorial Film',
    description: 'a tactile story of devotion, lineage, and personal mythology.',
    image: '/assets/work/figma-35830616/hero-thumb-06.png',
    thumb: '/assets/work/figma-35830616/hero-thumb-06.png',
  },
];

const workItems: WorkItem[] = [
  {
    title: 'flo remembers',
    src: '/assets/work/figma-35830616/card-01.png',
    alt: 'Flo Remembers portrait',
    widthClass: 'lg:col-span-8',
    priority: true,
  },
  {
    title: 'Weakness',
    src: ['/assets/work/figma-35830616/card-02-base.png', '/assets/work/figma-35830616/card-02.png'],
    alt: 'Weakness boxing portrait',
    widthClass: 'lg:col-span-8',
    priority: true,
  },
  {
    title: 'king ketelby james',
    src: '/assets/work/figma-35830616/card-03.png',
    alt: 'King Ketelby James portrait',
    widthClass: 'lg:col-span-8',
    priority: true,
  },
  {
    title: 'free the youth',
    src: '/assets/work/figma-35830616/card-04.png',
    alt: 'Free The Youth portrait',
    widthClass: 'lg:col-span-12',
    priority: true,
  },
  {
    title: 'vim campaign',
    src: '/assets/work/figma-35830616/card-05.png',
    alt: 'Vim campaign portrait',
    widthClass: 'lg:col-span-12',
    priority: true,
  },
  {
    title: 'song of songs',
    src: ['/assets/work/figma-35830616/card-06-base.png', '/assets/work/figma-35830616/card-06.png'],
    alt: 'Song of Songs still',
    widthClass: 'lg:col-span-15',
    priority: true,
  },
  {
    title: 'idle reverie',
    src: '/assets/work/figma-35830616/card-07.png',
    alt: 'Idle Reverie portrait',
    widthClass: 'lg:col-span-8 lg:col-start-1',
    priority: true,
  },
  {
    title: 'flo remembers',
    src: '/assets/work/figma-35830616/card-08.png',
    alt: 'Flo Remembers landscape still',
    widthClass: 'lg:col-span-8',
    priority: true,
  },
  {
    title: 'ever young',
    src: ['/assets/work/figma-35830616/card-02-base.png', '/assets/work/figma-35830616/card-09.png'],
    alt: 'Ever Young motorcycle scene',
    widthClass: 'lg:col-span-8',
    priority: true,
  },
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
      className={`relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-[6px] border p-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:size-12 lg:p-3 ${
        dark
          ? 'border-[#fef3d9] bg-black/75 text-white hover:bg-black focus-visible:outline-[#fef3d9]'
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
      <header className="absolute left-0 top-0 z-30 flex w-full items-center justify-between px-4 py-4 sm:px-10 lg:px-16 lg:py-6">
        <Link href="/" aria-label="smallcrowdd home" onClick={() => handleInternalNavigation('/')} className="relative block h-[16px] w-[113px] md:h-[28px] md:w-[198px]">
          <Image src="/assets/work/figma-35830616/wordmark.svg" alt="smallcrowdd." fill priority className="object-fill" />
        </Link>
        <MenuIconButton label="Open menu" iconSrc="/assets/work/figma-35830616/menu.svg" onClick={() => setDrawerOpen(true)} />
      </header>

      <aside
        aria-hidden={!drawerOpen}
        className={`fixed inset-0 z-[70] flex h-dvh w-full flex-col overflow-y-auto bg-[#fef3d9] text-black transition-[opacity,visibility] duration-200 ${
          drawerOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <div className="flex w-full items-center justify-between p-4 lg:px-16 lg:py-6">
          <Link href="/" aria-label="smallcrowdd home" onClick={() => handleInternalNavigation('/', () => setDrawerOpen(false))} className="relative block h-[16px] w-[113px] md:h-[28px] md:w-[198px]">
            <Image src="/assets/work/figma-35830616/wordmark.svg" alt="smallcrowdd." fill priority className="object-fill invert" />
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

function PlayGlyph() {
  return <Image src="/assets/icons/play.svg" alt="" width={14} height={13} aria-hidden className="size-[14px] rotate-90 invert" />;
}

function InfoGlyph() {
  return <Image src="/assets/work/figma-35830616/info.svg" alt="" width={20} height={20} aria-hidden className="size-5" />;
}

function HeroContent({ slide }: { slide: HeroSlide }) {
  return (
    <div className="absolute inset-x-0 bottom-[174px] z-10 px-4 sm:px-10 md:bottom-[172px] lg:bottom-[234px] lg:px-16">
      <div className="flex w-full max-w-[440px] flex-col items-start gap-4 md:gap-5">
        <h1 className="font-display text-[32px] leading-none tracking-[-0.01em] text-white md:text-[48px] lg:text-[56px]" style={displayStyle}>
          {slide.title}
        </h1>
        <div className="flex w-full flex-col gap-1 leading-[1.4]">
          <p className="text-[16px] font-bold capitalize text-white md:text-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            {slide.category}
          </p>
          <p className="max-w-[400px] text-[14px] font-medium lowercase text-[#c7c7c7] md:text-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            {slide.description}
          </p>
        </div>
        <div className="flex items-start gap-2">
          <a
            href="#"
            className="flex h-9 items-center gap-2 rounded-[1px] bg-black px-3 py-2 text-[16px] font-semibold capitalize leading-[1.4] text-white"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Watch
            <PlayGlyph />
          </a>
          <a
            href="#"
            className="flex h-9 items-center gap-2 rounded-[1px] bg-white px-3 py-2 text-[16px] font-semibold capitalize leading-[1.4] text-black"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Credits
            <Image src="/assets/figma-home/menu.svg" alt="" width={20} height={20} aria-hidden className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function HeroCarousel({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLButtonElement[]>([]);
  const programmaticTargetRef = useRef<number | null>(null);
  const programmaticTimerRef = useRef<number | null>(null);

  const selectSlide = (index: number) => {
    programmaticTargetRef.current = index;
    if (programmaticTimerRef.current) {
      window.clearTimeout(programmaticTimerRef.current);
    }
    onSelect(index);
    itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    programmaticTimerRef.current = window.setTimeout(() => {
      programmaticTargetRef.current = null;
    }, 650);
  };

  return (
    <div className="absolute inset-x-0 bottom-4 z-10 overflow-hidden px-4 sm:px-10 lg:bottom-[62px] lg:px-16">
      <div
        ref={scrollerRef}
        onScroll={() => {
          const scroller = scrollerRef.current;

          if (!scroller || programmaticTargetRef.current !== null) {
            return;
          }

          const center = scroller.scrollLeft + scroller.clientWidth / 2;
          const closest = itemRefs.current.reduce((closestIndex, item, index) => {
            const closestItem = itemRefs.current[closestIndex];
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const closestCenter = closestItem.offsetLeft + closestItem.offsetWidth / 2;

            return Math.abs(itemCenter - center) < Math.abs(closestCenter - center) ? index : closestIndex;
          }, 0);

          if (closest !== activeIndex) {
            onSelect(closest);
          }
        }}
        className="-mx-4 flex w-[calc(100%+32px)] touch-pan-x items-center gap-2 overflow-x-auto overflow-y-hidden px-4 drop-shadow-[0_0_66px_rgba(0,0,0,0.95)] [scrollbar-width:none] sm:-mx-10 sm:w-[calc(100%+80px)] sm:px-10 lg:-mx-16 lg:w-[calc(100%+128px)] lg:px-16 [&::-webkit-scrollbar]:hidden"
      >
        {heroSlides.map((slide, index) => {
          const selected = activeIndex === index;

          return (
            <button
              key={`${slide.thumb}-${index}`}
              ref={(node) => {
                if (node) {
                  itemRefs.current[index] = node;
                }
              }}
              type="button"
              aria-label={selected ? `Selected ${slide.title}` : `Show ${slide.title}`}
              aria-pressed={selected}
              onClick={() => selectSlide(index)}
              className={`relative shrink-0 overflow-hidden rounded-[2px] transition-[width,height,opacity,filter] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                selected
                  ? 'h-[96px] w-[158px] border-2 border-white opacity-100 md:h-[116px] md:w-[190px] lg:h-[132px] lg:w-[216px]'
                  : 'h-[76px] w-[58px] opacity-100 hover:opacity-100 md:h-[92px] md:w-[70px] lg:h-[104px] lg:w-20'
              }`}
            >
              <Image src={slide.thumb} alt="" fill sizes={selected ? '216px' : '80px'} className="object-cover" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WorkHero({ drawerOpen, setDrawerOpen }: { drawerOpen: boolean; setDrawerOpen: (open: boolean) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  return (
    <section className="relative flex h-[714px] w-full flex-col overflow-hidden bg-black text-white md:h-[860px] lg:h-[1000px]">
      {heroSlides.map((slide, index) => (
        <Image
          key={`${slide.image}-${index}`}
          src={slide.image}
          alt={`${slide.title} hero still`}
          fill
          priority={index < 2}
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectPosition: slide.objectPosition ?? '50% 50%' }}
        />
      ))}
      <div className="absolute inset-0 bg-black/10" />
      <Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <HeroContent slide={activeSlide} />
      <HeroCarousel activeIndex={activeIndex} onSelect={setActiveIndex} />
    </section>
  );
}

function DetailsButton() {
  return (
    <a
      href="#"
      className="flex h-[30px] shrink-0 items-center gap-2 rounded-[1px] border border-[#5c5a5a] px-2 py-1 text-[14px] font-semibold leading-[1.4] text-[#9a9a9a] md:text-[16px]"
      style={{ fontVariationSettings: '"wdth" 100' }}
    >
      Details
      <InfoGlyph />
    </a>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const sources = Array.isArray(item.src) ? item.src : [item.src];

  return (
    <article className={`flex min-w-0 flex-col gap-5 md:h-[450px] ${item.widthClass}`}>
      <div className="relative min-h-[360px] flex-1 overflow-hidden bg-[#dcdbdb] md:min-h-0">
        {sources.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={index === sources.length - 1 ? item.alt : ''}
            fill
            sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority={item.priority}
          />
        ))}
      </div>
      <div className="flex min-h-[30px] w-full items-center justify-between gap-2">
        <h2 className="min-w-0 font-display text-[24px] leading-[1.1] tracking-[-0.02em] text-black md:text-[28px] lg:text-[32px]" style={displayStyle}>
          {item.title}
        </h2>
        {item.title === 'song of songs' ? null : <DetailsButton />}
      </div>
    </article>
  );
}

function AllWork() {
  return (
    <section className="flex w-full flex-col gap-8 overflow-hidden bg-white px-4 pb-16 pt-10 text-black sm:px-10 md:gap-12 lg:px-16">
      <div className="flex w-full items-center">
        <h2 className="font-display text-[40px] leading-[1.1] tracking-[-0.02em] text-black md:text-[48px]" style={displayStyle}>
          All Work
        </h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-6 lg:grid-cols-24">
        {workItems.map((item) => (
          <WorkCard key={`${item.title}-${item.src}`} item={item} />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="the-rising-times" className="relative flex flex-col overflow-hidden bg-white pb-4 md:h-[560px] md:justify-between lg:h-[600px]">
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

export function ConceptWork() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black">
      <WorkHero drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <AllWork />
      <Footer />
    </main>
  );
}
