'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type WorkCard = {
  title: string;
  src: string;
  width?: string;
  height?: string;
  flex?: string;
  imageAspectRatio?: string;
  imageClassName?: string;
  imageStyle?: CSSProperties;
  imageWidth?: number;
  imageHeight?: number;
  mobileMediaHeight?: string;
  blendLuminosity?: boolean;
  overlay?: boolean;
  priority?: boolean;
};

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

const bebasNeueDisplayStyle: CSSProperties = {
  fontFamily:
    '"Smallcrowdd Bebas Neue", Impact, Haettenschweiler, "Arial Narrow Bold", "Arial Narrow", sans-serif',
  fontSynthesis: 'none',
  textTransform: 'none',
};

const workCards: WorkCard[] = [
  {
    title: 'the social innovator',
    src: '/assets/figma-home/workSocial.jpg',
    flex: '715 1 0',
    imageAspectRatio: '715 / 631',
    mobileMediaHeight: '350px',
  },
  {
    title: 'afro futurist',
    src: '/assets/figma-home/workAfro.jpg',
    flex: '573 1 0',
    imageAspectRatio: '573 / 390',
    imageClassName: 'object-fill',
    imageStyle: {
      height: '183.65%',
      top: '-1.01%',
    },
    imageWidth: 1080,
    imageHeight: 1350,
    mobileMediaHeight: '350px',
  },
  {
    title: 'weakness trailer 🥊🎈',
    src: '/assets/figma-home/workWeakness.jpg',
    flex: '684 1 0',
    imageAspectRatio: '684 / 655',
    mobileMediaHeight: '350px',
    blendLuminosity: true,
    overlay: true,
  },
  {
    title: 'freedom in the soul',
    src: '/assets/figma-home/workFreedom.jpg',
    width: '100%',
    imageAspectRatio: '1312 / 480',
    imageClassName: 'object-fill',
    imageStyle: {
      height: '182.22%',
      top: '-22.36%',
    },
    imageWidth: 1080,
    imageHeight: 720,
    mobileMediaHeight: '350px',
  },
  {
    title: 'the social innovator',
    src: '/assets/figma-home/workSocialTwo.jpg',
    flex: '373 1 0',
    imageAspectRatio: '373 / 390',
    mobileMediaHeight: '300px',
  },
  {
    title: 'ever young',
    src: '/assets/figma-home/workEverYoung.jpg',
    flex: '520 1 0',
    imageAspectRatio: '520 / 390',
    mobileMediaHeight: '300px',
  },
  {
    title: 'Her Prayer My Journey',
    src: '/assets/figma-home/workPrayer.jpg',
    flex: '373 1 0',
    imageAspectRatio: '373 / 390',
    mobileMediaHeight: '300px',
  },
];

const testCards = [
  '/assets/figma-home/testSelected.jpg',
  '/assets/optimized/figma-home/testTwo.webp',
  '/assets/figma-home/testThree.jpg',
  '/assets/figma-home/testFour.jpg',
  '/assets/figma-home/testFive.jpg',
];

const timelinePattern = [56, 99, 38, 74, 94, 147, 21, 66, 41, 80, 11, 48, 31, 91, 61, 18, 71, 36, 147, 75];
const timelineGroups = 28;
const timelineLoopDistance = 1400;

function DisplayWordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-serif font-black leading-none tracking-[-0.06em] ${className}`}>
      smallcrowdd.
    </span>
  );
}

function getPageHref(label: string) {
  return pageHrefs[label.toLowerCase()] ?? '/';
}

function SectionHeader({
  title,
  tone = 'light',
  viewAllHref = '#',
}: {
  title: string;
  tone?: 'light' | 'dark';
  viewAllHref?: string;
}) {
  return (
    <div className="flex w-full items-center justify-between whitespace-nowrap">
      <h2
        className={`font-display text-[32px] leading-[1.1] tracking-[-0.02em] md:text-[44px] lg:text-[56px] ${tone === 'dark' ? 'text-[#f6f6f6]' : 'text-[#131111]'}`}
        style={bebasNeueDisplayStyle}
      >
        {title}
      </h2>
      <Link href={viewAllHref} className="text-[16px] font-medium leading-[1.33] tracking-[-0.03em] text-[#8c8787] underline md:text-[24px] lg:text-[28px]">
        View all
      </Link>
    </div>
  );
}

function WorkCard({ card }: { card: WorkCard }) {
  const figureStyle = {
    '--work-flex': card.flex ?? 'initial',
    '--work-width': card.width ?? '100%',
    '--work-height': card.height ?? 'auto',
  } as CSSProperties;

  const mediaStyle: CSSProperties = card.height
    ? ({ '--work-mobile-media-height': card.mobileMediaHeight ?? '350px' } as CSSProperties)
    : ({
        '--work-mobile-media-height': card.mobileMediaHeight ?? '350px',
        aspectRatio: card.imageAspectRatio,
      } as CSSProperties);

  return (
    <figure
      className="flex w-full flex-none flex-col gap-4 md:min-w-0 md:shrink md:flex-[var(--work-flex)] md:gap-5 lg:w-[var(--work-width)]"
      style={figureStyle}
    >
      <div
        className={`relative h-[var(--work-mobile-media-height)] min-h-0 overflow-hidden bg-[#dcdbdb] md:h-auto ${card.height ? 'md:flex-1' : 'md:shrink-0'} ${
          card.blendLuminosity ? 'mix-blend-luminosity' : ''
        }`}
        style={mediaStyle}
      >
        {card.imageStyle ? (
          <Image
            src={card.src}
            alt={card.title}
            width={card.imageWidth ?? 1080}
            height={card.imageHeight ?? 1080}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className={`absolute left-0 max-w-none w-full ${card.imageClassName ?? 'object-fill'}`}
            style={card.imageStyle}
            priority={card.priority}
          />
        ) : (
          <Image
            src={card.src}
            alt={card.title}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className={card.imageClassName ?? 'object-cover'}
            priority={card.priority}
          />
        )}
        {card.overlay ? <div className="absolute inset-0 bg-black/20" /> : null}
      </div>
      <figcaption
        className="font-display text-[24px] leading-[1.1] tracking-[-0.02em] text-black md:text-[28px] lg:text-[32px]"
        style={bebasNeueDisplayStyle}
      >
        {card.title}
      </figcaption>
    </figure>
  );
}

function Timeline({ progress, activeIndex }: { progress: number; activeIndex: number }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<HTMLSpanElement[]>([]);
  const timelineTweenRef = useRef<{ kill: () => void } | null>(null);

  useEffect(() => {
    let cleanup = false;

    import('gsap').then(({ gsap }) => {
      if (cleanup || !timelineRef.current) {
        return;
      }

      timelineTweenRef.current?.kill();
      timelineTweenRef.current = gsap.to(timelineRef.current, {
        x: -((progress * timelineLoopDistance) % timelineLoopDistance),
        duration: 1.05,
        ease: 'expo.out',
      });

      gsap.to(lineRefs.current, {
        scaleY: (index) => {
          const cycleIndex = index % timelinePattern.length;
          const activeLine = (activeIndex * 4 + 5) % timelinePattern.length;
          const distance = Math.min(
            Math.abs(cycleIndex - activeLine),
            timelinePattern.length - Math.abs(cycleIndex - activeLine),
          );

          return distance < 2 ? 1.24 : 0.86 + (cycleIndex % 5) * 0.028;
        },
        opacity: (index) => {
          const cycleIndex = index % timelinePattern.length;
          const activeLine = (activeIndex * 4 + 5) % timelinePattern.length;
          const distance = Math.min(
            Math.abs(cycleIndex - activeLine),
            timelinePattern.length - Math.abs(cycleIndex - activeLine),
          );

          return distance < 3 ? 1 : 0.62;
        },
        transformOrigin: 'bottom center',
        duration: 0.85,
        stagger: {
          each: 0.003,
          from: Math.round(progress * lineRefs.current.length),
        },
        ease: 'expo.out',
      });
    });

    return () => {
      cleanup = true;
    };
  }, [activeIndex, progress]);

  return (
    <div
      data-tests-timeline
      className="pointer-events-none absolute left-1/2 top-[309px] h-10 w-full -translate-x-1/2 overflow-hidden opacity-15 md:bottom-[-60px] md:top-auto md:h-[147px] md:w-[calc(100%+960px)]"
    >
      <div ref={timelineRef} className="h-full w-max will-change-transform">
        <div className="flex h-full w-max animate-[spectrum-drift_18s_linear_infinite] gap-[2.183px] md:gap-2">
          {Array.from({ length: timelineGroups }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex h-full shrink-0 items-end gap-[2.183px] md:gap-2">
              {timelinePattern.map((height, index) => (
                <span
                  key={`${groupIndex}-${index}`}
                  ref={(node) => {
                    if (node) {
                      lineRefs.current[groupIndex * timelinePattern.length + index] = node;
                    }
                  }}
                  className="h-[calc(var(--line-height)*0.272109)] w-[0.546px] shrink-0 bg-[#f6f6f6] md:h-[var(--line-height)] md:w-0.5"
                  style={{ '--line-height': `${height}px` } as CSSProperties}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TestsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLButtonElement[]>([]);
  const frameRefs = useRef<HTMLImageElement[]>([]);
  const scrollTweenRef = useRef<{ kill: () => void } | null>(null);
  const programmaticTargetRef = useRef<number | null>(null);

  const updateScrollProgress = () => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const maxScroll = Math.max(scroller.scrollWidth - scroller.clientWidth, 1);
    setScrollProgress(scroller.scrollLeft / maxScroll);
  };

  const updateFocusFromScroll = () => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    updateScrollProgress();

    if (programmaticTargetRef.current !== null) {
      return;
    }

    const viewportCenter = scroller.scrollLeft + scroller.clientWidth / 2;
    const nextIndex = itemRefs.current.reduce((closestIndex, item, index) => {
      const closestItem = itemRefs.current[closestIndex];
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const closestCenter = closestItem.offsetLeft + closestItem.offsetWidth / 2;

      return Math.abs(itemCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter) ? index : closestIndex;
    }, 0);

    setActiveIndex(nextIndex);
  };

  const focusCard = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    const scroller = scrollerRef.current;
    const item = itemRefs.current[index];

    if (!scroller || !item) {
      return;
    }

    programmaticTargetRef.current = index;
    setActiveIndex(index);

    const focusWidthShift = window.innerWidth < 768 ? (281.303 - 228.778) / 2 : (546 - 444) / 2;
    const resizeCorrection = index > activeIndex ? -focusWidthShift : focusWidthShift;
    const nextLeft = Math.max(
      0,
      item.offsetLeft + item.offsetWidth / 2 - scroller.clientWidth / 2 + resizeCorrection,
    );

    import('gsap').then(({ gsap }) => {
      scrollTweenRef.current?.kill();
      scrollTweenRef.current = gsap.to(scroller, {
        scrollLeft: nextLeft,
        duration: 0.95,
        ease: 'expo.inOut',
        overwrite: 'auto',
        onUpdate: updateScrollProgress,
        onComplete: () => {
          programmaticTargetRef.current = null;
          setActiveIndex(index);
          updateScrollProgress();
        },
      });
    });
  };

  useEffect(() => {
    let cleanup = false;

    import('gsap').then(({ gsap }) => {
      if (cleanup) {
        return;
      }

      gsap.to(frameRefs.current, {
        opacity: (index) => (index === activeIndex ? 1 : 0),
        scale: (index) => (index === activeIndex ? 1 : 0.9),
        duration: 0.56,
        ease: 'expo.out',
      });
    });

    return () => {
      cleanup = true;
    };
  }, [activeIndex]);

  return (
    <>
      <div
        ref={scrollerRef}
        onScroll={updateFocusFromScroll}
        className="relative z-10 -mx-4 flex w-[calc(100%+32px)] touch-pan-x items-center gap-[12.396px] overflow-x-auto overflow-y-hidden px-8 [scrollbar-width:none] md:-mx-16 md:w-[calc(100%+128px)] md:gap-8 md:px-16 md:pl-[calc(50vw-240px)] md:pr-[calc(50vw-240px)] lg:-mx-24 lg:w-[calc(100%+192px)] lg:gap-12 lg:px-24 lg:pl-[464px] lg:pr-[464px] [&::-webkit-scrollbar]:hidden"
      >
        {testCards.map((src, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={src}
              ref={(node) => {
                if (node) {
                  itemRefs.current[index] = node;
                }
              }}
              type="button"
              onClick={() => focusCard(index)}
              aria-label={isActive ? `Selected test ${index + 1}` : `Focus test ${index + 1}`}
              aria-pressed={isActive}
              className={`relative block shrink-0 transition-[width,height,transform,filter] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6f6f6] ${
                isActive ? 'h-[153.532px] w-[281.303px] md:h-[298px] md:w-[460px] lg:w-[546px]' : 'h-[125.478px] w-[228.778px] md:h-[242px] md:w-[374px] lg:w-[444px]'
              } ${isActive ? 'cursor-default' : 'cursor-pointer hover:scale-[1.015] hover:brightness-110'}`}
            >
              <Image
                ref={(node) => {
                  if (node) {
                    frameRefs.current[index] = node;
                  }
                }}
                src="/assets/figma-home/selectedFrame.svg"
                alt=""
                fill
                className="object-fill opacity-0"
                sizes="546px"
              />
              <span
                className={`absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-[width,height] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  isActive ? 'h-[137.394px] w-[258.259px] md:h-[266px] md:w-[421px] lg:w-[500px]' : 'h-[111.727px] w-[210.013px] md:h-[216px] md:w-[343px] lg:w-[407px]'
                }`}
              >
                <Image
                  src={src}
                  alt={isActive ? `Selected test ${index + 1}` : `Test ${index + 1}`}
                  fill
                  sizes={isActive ? '500px' : '407px'}
                  className="object-cover"
                />
              </span>
            </button>
          );
        })}
      </div>
      <Timeline progress={scrollProgress} activeIndex={activeIndex} />
    </>
  );
}

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
      className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#fef3d9] bg-black/75 p-2 transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fef3d9] lg:size-12 lg:p-3"
    >
      <Image src={iconSrc} alt="" width={24} height={24} aria-hidden className="size-4 lg:size-6" />
    </button>
  );
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    setIsReady(false);
    video.currentTime = 0;
    void video.play().catch(() => {
      setIsReady(true);
    });
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onLoadedData={() => setIsReady(true)}
      onPlaying={() => setIsReady(true)}
      className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-150 ${
        isReady ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <source src="/videos/Loading.mp4" type="video/mp4" />
    </video>
  );
}

export function ConceptHome() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToIntro = () => {
    document.getElementById('intro-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
  }, [drawerOpen]);

  return (
    <>
      <main className="min-h-screen bg-white text-[#131111]">
      <header className="absolute left-0 top-0 z-30 flex w-full items-center justify-between px-4 py-4 md:px-16 md:py-6 lg:px-24">
        <Link href="/" aria-label="smallcrowdd home" className="text-[#fef3d9]">
          <Image
            src="/assets/figma-home/heroWordmark.svg"
            alt="smallcrowdd."
            width={141}
            height={20}
            priority
            className="h-5 w-[141px] md:hidden"
          />
          <DisplayWordmark className="hidden text-[40px] leading-none md:block" />
        </Link>
        <MenuIconButton label="Open menu" iconSrc="/assets/figma-home/menu.svg" onClick={() => setDrawerOpen(true)} />
      </header>

      <aside
        aria-hidden={!drawerOpen}
        className={`fixed inset-0 z-[70] flex h-dvh w-full flex-col overflow-y-auto bg-[#fef3d9] text-black transition-[opacity,visibility] duration-200 ${
          drawerOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <div className="flex w-full cursor-pointer items-center justify-between p-4 lg:px-24 lg:py-6">
          <Link
            href="/"
            aria-label="smallcrowdd home"
            onClick={() => setDrawerOpen(false)}
            className="relative block h-5 w-[141px] shrink-0 md:h-10 md:w-[252px]"
          >
            <Image src="/assets/figma-home/menu-logo.svg" alt="smallcrowdd." fill priority className="object-fill" />
          </Link>
          <MenuIconButton label="Close menu" iconSrc="/assets/figma-home/menu-close.svg" onClick={() => setDrawerOpen(false)} />
        </div>

        <div className="relative flex min-h-px flex-1 flex-col justify-between gap-8 px-4 py-8 lg:flex-row lg:justify-start lg:gap-3 lg:px-24 lg:py-14">
          <nav
            aria-label="Main menu"
            className="flex w-full flex-col items-start gap-3 font-display text-[56px] leading-[1.1] tracking-[-1.12px] lg:w-auto lg:text-[120px] lg:tracking-[-2.4px]"
            style={bebasNeueDisplayStyle}
          >
            {menuLinks.map((link) => (
              <Link key={link} href={getPageHref(link)} onClick={() => setDrawerOpen(false)} className="transition hover:text-[#8c8787]">
                {link}
              </Link>
            ))}
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

        <div className="flex w-full flex-col gap-2.5 p-4 text-[16px] font-medium leading-[1.33] tracking-[-0.48px] text-[#a07204] lg:flex-row lg:items-center lg:justify-between lg:px-24 lg:py-6 lg:text-[18px] lg:tracking-[-0.54px]">
          <p>
            Always open for new <br />
            projects and collaborations
          </p>
          <p>Copyright &copy;smallcrowdd 2026</p>
        </div>
      </aside>

      <section className="relative h-[600px] w-full overflow-hidden bg-[#131111] text-[#fef3d9] md:h-dvh md:min-h-[720px]">
        <HeroVideo />
        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 flex-col items-center justify-center gap-2.5 px-4 md:left-1/2 md:right-auto md:top-[42.6%] md:w-[min(904px,calc(100%-128px))] md:-translate-x-1/2 md:translate-y-0 md:items-start md:px-0">
          <p className="w-full text-center text-[20px] font-medium leading-[1.33] tracking-[-0.6px] text-[#fef3d9] md:text-[28px]">
            Crafting impactful stories through art, film, and events.
          </p>
          <Image src="/assets/figma-home/heroWordmark.svg" alt="smallcrowdd." width={904} height={128} priority className="h-[42px] w-[296px] md:h-auto md:w-full" />
        </div>
        <button
          type="button"
          onClick={scrollToIntro}
          aria-label="Scroll to intro section"
          className="absolute bottom-0 left-1/2 flex w-[139px] -translate-x-1/2 flex-col items-center gap-3 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fef3d9]"
        >
          <p className="w-full text-center text-[14px] font-normal leading-[1.2] tracking-[-0.42px] text-[#fef3d9] md:text-[18px] md:leading-[21.6px] md:tracking-[-0.54px]">Scroll to explore</p>
          <div className="flex h-[46px] w-1 items-start overflow-hidden bg-[rgba(38,27,0,0.65)]">
            <span className="h-[9px] w-full animate-[scroll-indicator_1.35s_ease-in-out_infinite] bg-[#fef3d9]" />
          </div>
        </button>
      </section>

      <section
        id="intro-section"
        data-node-id="45:12506"
        aria-labelledby="intro-heading"
            className="flex w-full flex-col items-stretch gap-5 bg-[#fefdfa] px-4 py-6 text-center text-black md:gap-6 md:px-16 md:py-10 lg:p-24"
      >
        <h1
          id="intro-heading"
          data-node-id="45:12507"
          className="font-display text-[48px] leading-[1.1] tracking-[-0.02em] md:text-[56px] lg:text-[64px]"
          style={bebasNeueDisplayStyle}
        >
          <span className="lg:whitespace-nowrap">a creative studio shaping the future of contemporary</span>
          <br />
          storytelling.
        </h1>
        <p
          data-node-id="45:12508"
          className="text-[24px] font-normal leading-[1.33] tracking-[-0.03em] md:text-[26px] lg:text-[28px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          We set a new pace for how stories are remembered.
        </p>
      </section>

      <section id="selected-work" className="w-full bg-[#fefdfa]">
        <div
          data-node-id="39:21728"
          className="flex w-full flex-col gap-5 bg-[#fefdfa] px-4 py-6 md:gap-8 md:px-16 md:py-10 lg:p-24"
        >
          <div data-node-id="39:21729" className="flex w-full items-center justify-between whitespace-nowrap">
            <h2
              data-node-id="39:21730"
              className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-black md:text-[44px] lg:text-[56px]"
              style={bebasNeueDisplayStyle}
            >
              Selected Work
            </h2>
            <a
              data-node-id="39:21731"
              href="/work"
              className="text-[20px] font-medium leading-[1.33] tracking-[-0.03em] text-[#8c8787] underline md:text-[24px] lg:text-[28px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              View all
            </a>
          </div>

          <div data-node-id="39:21732" className="flex flex-col gap-5 md:flex-row md:gap-6">
            <WorkCard card={workCards[0]} />
            <WorkCard card={workCards[1]} />
          </div>

          <div data-node-id="39:21735" className="flex flex-col gap-6 md:flex-row">
            <p
              data-node-id="39:21736"
              className="min-w-0 text-[16px] font-normal leading-[1.33] tracking-[-0.03em] text-black md:text-[20px] lg:text-[24px]"
              style={{
                flex: '604 1 0',
                fontVariationSettings: '"wdth" 100',
              }}
            >
              Weakness explores the strength within vulnerability. set in a boxing gym, two kids represent inner conflict and resilience,
              battling it out in the ring. koblah, as the referee, stands between them—symbolizing balance, growth, and the quiet power
              found in facing oneself.
            </p>
            <WorkCard card={workCards[2]} />
          </div>

          <div data-node-id="39:21738" className="flex">
            <WorkCard card={workCards[3]} />
          </div>

          <div data-node-id="39:21740" className="flex flex-col gap-6 md:flex-row">
            <WorkCard card={workCards[4]} />
            <WorkCard card={workCards[5]} />
            <WorkCard card={workCards[6]} />
          </div>
        </div>
      </section>

      <section id="tests-section" className="relative flex h-[348.532px] flex-col gap-12 overflow-hidden bg-[#131111] px-4 pt-6 text-[#f6f6f6] md:h-[610px] md:gap-8 md:px-16 md:py-10 lg:h-[680px] lg:gap-12 lg:px-24 lg:py-16">
        <div className="absolute inset-0 opacity-20 mix-blend-hard-light [background-image:url('/assets/loader/noise.png')] [background-size:240px_180px]" />
        <div className="relative z-10">
          <SectionHeader title="Tests" tone="dark" viewAllHref={testPageHref} />
        </div>
        <TestsCarousel />
      </section>

      <footer id="the-rising-times" className="relative flex flex-col overflow-hidden bg-white pb-4 md:h-[560px] md:justify-between lg:h-[655px]">
        <div className="relative mb-[-8px] flex flex-col gap-8 overflow-hidden rounded-b-3xl lg:rounded-b-[32px] bg-[#131111] px-4 pb-6 pt-12 text-[#f6f6f6] md:mb-0 md:h-[365px] lg:h-[420px] md:flex-row md:justify-between md:gap-5 md:px-16 md:pb-20 md:pt-16 lg:px-24 lg:pb-24 lg:pt-24">
          <div className="absolute inset-0 opacity-20 mix-blend-hard-light [background-image:url('/assets/loader/noise.png')] [background-size:240px_180px]" />
          <div className="relative flex w-full items-start gap-2.5 md:min-h-[180px] md:max-w-[507px] md:flex-col md:justify-between md:gap-5 lg:min-h-[254px]">
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
                <Link key={link} href={getPageHref(link)}>
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
          className="relative mx-4 h-auto w-[calc(100%-32px)] object-fill md:absolute md:left-1/2 md:top-[334px] lg:top-[389px] md:mx-0 md:mt-0 md:w-[calc(100%-128px)] md:-translate-x-1/2 lg:h-[196px] lg:w-[calc(100%-192px)]"
        />

        <div className="relative z-10 mt-3 flex w-full items-center justify-center px-4 text-center text-[14px] font-medium leading-[1.2] tracking-[-0.03em] text-[#131111] md:mt-0 md:justify-center md:px-16 md:text-[18px] lg:px-24 lg:text-[20px]">
          <p className="whitespace-nowrap">All rights reserved ©smallcrowdd 2026</p>
          <a href="#" className="hidden">
            Privacy policy
          </a>
          <a href="#" className="hidden">
            Terms of service
          </a>
        </div>
      </footer>
      </main>
    </>
  );
}
