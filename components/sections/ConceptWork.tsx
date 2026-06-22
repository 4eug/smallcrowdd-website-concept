'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
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
  videoSrc?: string;
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
    title: 'pink memory',
    category: 'Portrait Film',
    description: 'a still portrait built from color, quiet confidence, and remembered space.',
    image: '/assets/work/figma-35830616/card-01.png',
    thumb: '/assets/work/figma-35830616/card-01.png',
    objectPosition: '50% 35%',
  },
  {
    title: 'weakness',
    category: 'Narrative Short',
    description: 'a boxing-ring fragment about inner conflict, courage, and balance.',
    image: '/assets/work/figma-35830616/card-02.png',
    thumb: '/assets/work/figma-35830616/card-02.png',
  },
  {
    title: 'king ketelby james',
    category: 'Portrait Film',
    description: 'a warm portrait built around gesture, ease, and the confidence of presence.',
    image: '/assets/work/figma-35830616/card-03.png',
    thumb: '/assets/work/figma-35830616/card-03.png',
  },
  {
    title: 'free the youth',
    category: 'Cultural Story',
    description: 'a window into place, texture, and the quiet charge of contemporary identity.',
    image: '/assets/work/figma-35830616/card-04.png',
    thumb: '/assets/work/figma-35830616/card-04.png',
    objectPosition: '42% 50%',
  },
  {
    title: 'vim campaign',
    category: 'Brand Film',
    description: 'a close study of youth, pause, and character inside a moving campaign world.',
    image: '/assets/work/figma-35830616/card-05.png',
    thumb: '/assets/work/figma-35830616/card-05.png',
    objectPosition: '58% 50%',
  },
  {
    title: 'song of songs',
    category: 'Editorial Story',
    description: 'a sunlit frame of movement, color, and memory held in a single still.',
    image: '/assets/work/figma-35830616/card-06.png',
    thumb: '/assets/work/figma-35830616/card-06.png',
    objectPosition: '50% 45%',
  },
  {
    title: 'idle reverie',
    category: 'Visual Study',
    description: 'a nighttime portrait shaped by chrome, shadow, and a feeling of interior rhythm.',
    image: '/assets/work/figma-35830616/card-07.png',
    thumb: '/assets/work/figma-35830616/card-07.png',
    objectPosition: '42% 50%',
  },
  {
    title: 'flo remembers landscape',
    category: 'Narrative Short',
    description: 'a wide memory held in color, distance, and a slow unfolding frame.',
    image: '/assets/work/figma-35830616/card-08.png',
    thumb: '/assets/work/figma-35830616/card-08.png',
  },
  {
    title: 'ever young street',
    category: 'Campaign Film',
    description: 'a bright street image about youth, confidence, and kinetic style.',
    image: '/assets/images/Hero/six.jpg',
    thumb: '/assets/images/Hero/six.jpg',
  },
  {
    title: 'afro futurist',
    category: 'Campaign Film',
    description: 'a chromatic study of fashion, movement, and speculative culture.',
    image: '/assets/images/Hero/four.jpg',
    thumb: '/assets/images/Hero/four.jpg',
  },
  {
    title: 'ever young',
    category: 'Campaign Film',
    description: 'a bright collision of attitude, texture, and motion through a youthful lens.',
    image: '/assets/figma-home/workEverYoung.jpg',
    thumb: '/assets/figma-home/workEverYoung.jpg',
  },
  {
    title: 'freedom in the soul',
    category: 'Portrait Film',
    description: 'a quiet image sequence about presence, release, and self-possession.',
    image: '/assets/figma-home/workFreedom.jpg',
    thumb: '/assets/figma-home/workFreedom.jpg',
  },
  {
    title: 'her prayer my journey',
    category: 'Editorial Film',
    description: 'a tactile story of devotion, lineage, and personal mythology.',
    image: '/assets/figma-home/workPrayer.jpg',
    thumb: '/assets/figma-home/workPrayer.jpg',
  },
  {
    title: 'social frame',
    category: 'Campaign Film',
    description: 'a charged frame of movement, posture, and a world already in progress.',
    image: '/assets/figma-home/workSocial.jpg',
    thumb: '/assets/figma-home/workSocial.jpg',
  },
  {
    title: 'social innovator ii',
    category: 'Campaign Film',
    description: 'a street-level portrait shaped by pace, gaze, and contemporary culture.',
    image: '/assets/figma-home/workSocialTwo.jpg',
    thumb: '/assets/figma-home/workSocialTwo.jpg',
  },
  {
    title: 'the bell rings',
    category: 'Narrative Short',
    description: 'a solitary boxing image held in shadow, pressure, and anticipation.',
    image: '/assets/images/Hero/five.jpg',
    thumb: '/assets/images/Hero/five.jpg',
  },
  {
    title: 'what do i desire',
    category: 'Video Essay',
    description: 'a question held in portraiture, paper, and intimate reflection.',
    image: '/assets/figma-home/testSelected.jpg',
    thumb: '/assets/figma-home/testSelected.jpg',
  },
  {
    title: 'almost joy',
    category: 'Visual Test',
    description: 'a soft experiment in expression, color, and the memory of joy.',
    image: '/assets/figma-home/testTwo.png',
    thumb: '/assets/figma-home/testTwo.png',
  },
  {
    title: 'one big wave',
    category: 'Visual Test',
    description: 'a coastal frame about motion, balance, and the body near water.',
    image: '/assets/figma-home/testThree.jpg',
    thumb: '/assets/figma-home/testThree.jpg',
  },
  {
    title: 'mirrors',
    category: 'Visual Test',
    description: 'a reflected study of face, gesture, and split attention.',
    image: '/assets/figma-home/testFour.jpg',
    thumb: '/assets/figma-home/testFour.jpg',
  },
  {
    title: 'idle reverie pt. ii',
    category: 'Visual Test',
    description: 'a darker study in stillness, glow, and late-night interior mood.',
    image: '/assets/figma-home/testFive.jpg',
    thumb: '/assets/figma-home/testFive.jpg',
  },
  {
    title: 'waterfall memory',
    category: 'Archive Image',
    description: 'a wide natural frame built from falling water, ritual, and atmosphere.',
    image: '/assets/images/Hero/eight.jpg',
    thumb: '/assets/images/Hero/eight.jpg',
  },
  {
    title: 'blue hour',
    category: 'Archive Image',
    description: 'a blue-toned frame from the archive, held between pause and motion.',
    image: '/assets/images/Hero/two.jpg',
    thumb: '/assets/images/Hero/two.jpg',
  },
  {
    title: 'sunset ridge',
    category: 'Archive Image',
    description: 'a coastal horizon held in warm light, distance, and open air.',
    image: '/assets/images/Hero/twelve.jpg',
    thumb: '/assets/images/Hero/twelve.jpg',
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
    widthClass: 'lg:col-span-15 lg:w-[817px]',
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
  return (
    <span className="relative size-5 shrink-0" aria-hidden="true">
      <Image src="/assets/work/figma-35830616/icons/action-play-keylines.svg" alt="" fill className="object-fill" />
      <span className="absolute inset-[1.67%_15.15%_16.13%_0.2%] flex items-center justify-center">
        <span className="relative block h-[12.16px] w-[13.18px] -rotate-[30deg]">
          <Image src="/assets/work/figma-35830616/icons/action-play-polygon.svg" alt="" fill className="object-fill" />
        </span>
      </span>
    </span>
  );
}

function MenuGlyph() {
  return (
    <span className="relative size-5 shrink-0" aria-hidden="true">
      <Image src="/assets/work/figma-35830616/icons/action-menu-keylines.svg" alt="" fill className="object-fill" />
      <span className="absolute inset-y-1/4 left-[16.67%] right-[16.67%]">
        <Image src="/assets/work/figma-35830616/icons/action-menu-vector.svg" alt="" fill className="object-fill" />
      </span>
    </span>
  );
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
        <div className="flex cursor-pointer items-start gap-2">
          <a
            href="#"
            className="flex items-center gap-2 rounded-[1px] bg-black px-3 py-2 text-[16px] font-semibold capitalize leading-[1.4] text-white"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Watch
            <PlayGlyph />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-[1px] bg-white px-3 py-2 text-[16px] font-semibold capitalize leading-[1.4] text-black"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Credits
            <MenuGlyph />
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
  const scrollTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (programmaticTimerRef.current) {
        window.clearTimeout(programmaticTimerRef.current);
      }

      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

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

          if (scrollTimerRef.current) {
            window.clearTimeout(scrollTimerRef.current);
          }

          scrollTimerRef.current = window.setTimeout(() => {
            const currentScroller = scrollerRef.current;

            if (!currentScroller || programmaticTargetRef.current !== null) {
              return;
            }

            const center = currentScroller.scrollLeft + currentScroller.clientWidth / 2;
            const closest = itemRefs.current.reduce((closestIndex, item, index) => {
              const closestItem = itemRefs.current[closestIndex];
              const itemCenter = item.offsetLeft + item.offsetWidth / 2;
              const closestCenter = closestItem.offsetLeft + closestItem.offsetWidth / 2;

              return Math.abs(itemCenter - center) < Math.abs(closestCenter - center) ? index : closestIndex;
            }, 0);

            if (closest !== activeIndex) {
              onSelect(closest);
            }
          }, 120);
        }}
        className="-mx-4 flex w-[calc(100%+32px)] touch-pan-x scroll-smooth items-center gap-2 overflow-x-auto overflow-y-hidden px-4 drop-shadow-[0_0_66px_rgba(0,0,0,0.95)] [scrollbar-width:none] sm:-mx-10 sm:w-[calc(100%+80px)] sm:px-10 lg:-mx-16 lg:w-[calc(100%+128px)] lg:px-16 [&::-webkit-scrollbar]:hidden"
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
                  : 'h-[76px] w-[58px] opacity-100 grayscale saturate-0 hover:opacity-100 md:h-[92px] md:w-[70px] lg:h-[104px] lg:w-20'
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
  const [readyVideoSrc, setReadyVideoSrc] = useState<string | null>(null);
  const activeSlide = heroSlides[activeIndex];
  const activeVideoSrc = activeSlide.videoSrc ?? `/assets/work/generated-videos/slide-${String(activeIndex + 1).padStart(2, '0')}.mp4`;
  const videoReady = readyVideoSrc === activeVideoSrc;

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
      {activeVideoSrc ? (
        <video
          key={activeVideoSrc}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectPosition: activeSlide.objectPosition ?? '50% 50%' }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={activeSlide.image}
          aria-label={`${activeSlide.title} video`}
          onCanPlay={() => setReadyVideoSrc(activeVideoSrc)}
        >
          <source src={activeVideoSrc} type="video/mp4" />
        </video>
      ) : null}
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
      <div className="relative mb-[-8px] flex flex-col gap-8 overflow-hidden rounded-b-3xl lg:rounded-b-[32px] bg-[#131111] px-4 pb-6 pt-12 text-[#f6f6f6] md:mb-0 md:h-[365px] md:flex-row md:justify-between md:gap-5 md:p-10 lg:p-16">
        <div className="absolute inset-0 opacity-20 mix-blend-hard-light [background-image:url('/assets/loader/noise.png')] [background-size:240px_180px]" />
        <div className="relative flex w-full items-start gap-2.5 md:h-[266px] md:max-w-[507px] md:flex-col md:justify-between md:gap-5">
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
