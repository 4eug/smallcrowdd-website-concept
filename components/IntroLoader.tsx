"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { consumeIntroBypassForInternalNavigation } from "./introNavigation";

type LoaderImage = {
  id: string;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  sizes: string;
};

const loaderSourceImages = [
  { src: "/assets/loader/tile-01.png", width: 234, height: 244 },
  { src: "/assets/loader/tile-02.png", width: 90, height: 94 },
  { src: "/assets/loader/tile-03.png", width: 150, height: 156 },
  { src: "/assets/loader/tile-04.png", width: 78, height: 81 },
  { src: "/assets/loader/tile-05.png", width: 160, height: 167 },
  { src: "/assets/loader/tile-06.png", width: 100, height: 104 },
  { src: "/assets/loader/tile-07.png", width: 200, height: 209 },
  { src: "/assets/loader/tile-08.png", width: 200, height: 209 },
  { src: "/assets/loader/tile-09.png", width: 200, height: 209 },
  { src: "/assets/loader/tile-10.png", width: 200, height: 209 },
  { src: "/assets/figma-home/workSocial.jpg", width: 1080, height: 1350 },
  { src: "/assets/figma-home/workAfro.jpg", width: 1080, height: 1350 },
  { src: "/assets/figma-home/workFreedom.jpg", width: 1080, height: 720 },
  { src: "/assets/figma-home/workEverYoung.jpg", width: 1080, height: 721 },
  { src: "/assets/figma-home/testSelected.jpg", width: 3840, height: 2160 },
  { src: "/assets/images/Hero/one.jpg", width: 1440, height: 2160 },
  { src: "/assets/images/Hero/two.jpg", width: 1440, height: 2160 },
  { src: "/assets/images/Hero/three.jpg", width: 1440, height: 2160 },
  { src: "/assets/images/Hero/four.jpg", width: 1440, height: 2160 },
  { src: "/assets/images/Hero/five.jpg", width: 1440, height: 2160 },
  { src: "/assets/work/figma-35830616/card-01.png", width: 2624, height: 3936 },
  { src: "/assets/work/figma-35830616/card-02.png", width: 4082, height: 4082 },
  { src: "/assets/work/figma-35830616/card-03.png", width: 2804, height: 3496 },
  { src: "/assets/work/figma-35830616/card-04.png", width: 3226, height: 4096 },
  { src: "/assets/work/figma-35830616/card-05.png", width: 3276, height: 4096 },
];

const loaderLayouts = [
  { source: 6, x: 94, y: 118, width: 178, height: 186, depth: 24 },
  { source: 2, x: 566, y: 30, width: 142, height: 148, depth: 30 },
  { source: 0, x: 1008, y: 92, width: 220, height: 229, depth: 26 },
  { source: 3, x: 802, y: 244, width: 82, height: 85, depth: 44 },
  { source: 1, x: 424, y: 364, width: 98, height: 102, depth: 42 },
  { source: 7, x: 1294, y: 318, width: 156, height: 163, depth: 20 },
  { source: 4, x: 118, y: 626, width: 154, height: 161, depth: 28 },
  { source: 9, x: 616, y: 702, width: 178, height: 186, depth: 32 },
  { source: 5, x: 914, y: 568, width: 106, height: 110, depth: 40 },
  { source: 8, x: 1038, y: 792, width: 160, height: 167, depth: 22 },
  { source: 10, x: -132, y: 292, width: 196, height: 245, depth: 12 },
  { source: 11, x: 1420, y: 544, width: 188, height: 235, depth: 10 },
  { source: 12, x: 396, y: -118, width: 226, height: 151, depth: 14 },
  { source: 13, x: 742, y: 1038, width: 214, height: 143, depth: 16 },
  { source: 14, x: 1254, y: -176, width: 226, height: 127, depth: 8 },
];

const loaderImages: LoaderImage[] = loaderLayouts.map((layout, index) => {
  const source = loaderSourceImages[layout.source];

  return {
    id: `loader-tile-${index}`,
    src: source.src,
    x: layout.x,
    y: layout.y,
    width: layout.width,
    height: layout.height,
    depth: layout.depth,
    sizes: `${Math.ceil(layout.width)}px`,
  };
});

const loaderImageMotion = [
  {
    enterX: 120,
    enterY: -86,
    driftX: 260,
    driftY: -170,
    exitX: 56,
    exitY: -38,
    rotation: 5,
    rotateX: -9,
    rotateY: 12,
  },
  {
    enterX: -86,
    enterY: 18,
    driftX: -190,
    driftY: 34,
    exitX: -46,
    exitY: 10,
    rotation: -6,
    rotateX: 8,
    rotateY: -14,
  },
  {
    enterX: -52,
    enterY: -110,
    driftX: -128,
    driftY: -200,
    exitX: -28,
    exitY: -52,
    rotation: 4,
    rotateX: -10,
    rotateY: -9,
  },
  {
    enterX: 42,
    enterY: -20,
    driftX: 92,
    driftY: -68,
    exitX: 24,
    exitY: -18,
    rotation: -5,
    rotateX: 7,
    rotateY: 11,
  },
  {
    enterX: -122,
    enterY: 86,
    driftX: -260,
    driftY: 178,
    exitX: -60,
    exitY: 42,
    rotation: 6,
    rotateX: 10,
    rotateY: -13,
  },
  {
    enterX: 78,
    enterY: 72,
    driftX: 154,
    driftY: 158,
    exitX: 38,
    exitY: 38,
    rotation: -4,
    rotateX: -7,
    rotateY: 10,
  },
  {
    enterX: -150,
    enterY: -48,
    driftX: -282,
    driftY: -126,
    exitX: -70,
    exitY: -30,
    rotation: -5,
    rotateX: -8,
    rotateY: -16,
  },
  {
    enterX: 154,
    enterY: 20,
    driftX: 286,
    driftY: 54,
    exitX: 72,
    exitY: 14,
    rotation: 5,
    rotateX: 9,
    rotateY: 15,
  },
  {
    enterX: 112,
    enterY: 112,
    driftX: 224,
    driftY: 208,
    exitX: 58,
    exitY: 54,
    rotation: -6,
    rotateX: 11,
    rotateY: 13,
  },
  {
    enterX: -16,
    enterY: 132,
    driftX: -46,
    driftY: 238,
    exitX: -12,
    exitY: 64,
    rotation: 4,
    rotateX: 12,
    rotateY: -8,
  },
];

const loaderProgressDuration = 15;
const getLoaderMotion = (index: number) =>
  loaderImageMotion[index % loaderImageMotion.length];

type IntroLoaderProps = {
  onComplete?: () => void;
};

let hasIntroPlayedInRuntime = false;

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(() => {
    if (hasIntroPlayedInRuntime || consumeIntroBypassForInternalNavigation()) {
      hasIntroPlayedInRuntime = true;
      return false;
    }

    return true;
  });
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    const root = rootRef.current;

    if (!root || !isVisible) {
      return;
    }

    let isActive = true;
    let cleanup: (() => void) | undefined;
    const duration = reducedMotion ? 6 : loaderProgressDuration;
    const progressState = { value: 0 };

    import("gsap").then(({ gsap }) => {
      if (!isActive) {
        return;
      }

      const ctx = gsap.context(() => {
        const motionScale = reducedMotion ? 0.42 : 0.68;
        const imageEnterDuration = reducedMotion ? 0.34 : 0.72;
        const exitDuration = reducedMotion ? 1.1 : 3;
        const exitStart = duration;
        const loaderEnd = duration + exitDuration;

        gsap.set("[data-loader-stage]", {
          scale: 1 + 0.28 * motionScale,
          rotateX: 4 * motionScale,
          rotateY: -3 * motionScale,
          transformOrigin: "50% 50%",
          transformPerspective: 1100,
        });
        gsap.set("[data-loader-image]", {
          autoAlpha: 0,
          clipPath: "inset(14% 14% 14% 14%)",
          filter: "brightness(0.78) saturate(0.72)",
          transformOrigin: "50% 50%",
          transformPerspective: 900,
          x: (index: number) => getLoaderMotion(index).enterX * motionScale,
          y: (index: number) => getLoaderMotion(index).enterY * motionScale,
          z: -120 * motionScale,
          rotateX: (index: number) =>
            getLoaderMotion(index).rotateX * motionScale,
          rotateY: (index: number) =>
            getLoaderMotion(index).rotateY * motionScale,
          scale: 1 + 0.28 * motionScale,
        });
        gsap.set("[data-loader-brand], [data-loader-count]", {
          autoAlpha: 0,
          y: 12,
        });

        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            hasIntroPlayedInRuntime = true;
            setIsVisible(false);
            onComplete?.();
          },
        });

        timeline
          .add("loader-start", 0)
          .add("loader-exit", exitStart)
          .add("loader-end", loaderEnd)
          .to(
            "[data-loader-image]",
            {
              autoAlpha: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              filter: "brightness(1) saturate(1)",
              scale: 1,
              x: 0,
              y: 0,
              z: 0,
              rotateX: 0,
              rotateY: 0,
              duration: imageEnterDuration,
              stagger: reducedMotion ? 0.012 : 0.018,
            },
            "loader-start",
          )
          .to(
            "[data-loader-brand], [data-loader-count]",
            {
              autoAlpha: 1,
              y: 0,
              duration: reducedMotion ? 0.34 : 0.52,
              stagger: reducedMotion ? 0.03 : 0.06,
            },
            "loader-start+=0.08",
          )
          .to(
            progressState,
            {
              value: 100,
              duration,
              ease: "power2.inOut",
              onUpdate: () => setProgress(Math.round(progressState.value)),
            },
            "loader-start",
          )
          .to(
            "[data-loader-stage]",
            {
              scale: 1 - 0.5 * motionScale,
              rotateX: 0,
              rotateY: 0,
              duration,
              ease: "power2.inOut",
            },
            "loader-start",
          )
          .to(
            "[data-loader-image] img",
            {
              scale: 1 + 0.08 * motionScale,
              duration: reducedMotion ? 0.9 : 0.62,
              repeat: reducedMotion ? 8 : 23,
              yoyo: true,
              ease: "sine.inOut",
              transformOrigin: "50% 50%",
            },
            "loader-start",
          )
          .to(
            "[data-loader-image]",
            {
              x: (index: number) => getLoaderMotion(index).driftX * motionScale,
              y: (index: number) => getLoaderMotion(index).driftY * motionScale,
              z: 180 * motionScale,
              rotation: (index: number) =>
                getLoaderMotion(index).rotation * motionScale,
              rotateX: (index: number) =>
                getLoaderMotion(index).rotateX * -0.38 * motionScale,
              rotateY: (index: number) =>
                getLoaderMotion(index).rotateY * -0.38 * motionScale,
              scale: 1 - 0.32 * motionScale,
              duration,
              ease: "power3.inOut",
            },
            "loader-start",
          )
          .to(
            "[data-loader-stage]",
            {
              scale: 0.72,
              duration: exitDuration,
              ease: "power3.inOut",
            },
            "loader-exit",
          )
          .to(
            "[data-loader-image]",
            {
              x: (index: number) => {
                const image = loaderImages[index];
                return (
                  (720 - (image.x + image.width / 2)) * 0.52 * motionScale +
                  getLoaderMotion(index).exitX * 0.35 * motionScale
                );
              },
              y: (index: number) => {
                const image = loaderImages[index];
                return (
                  (512 - (image.y + image.height / 2)) * 0.52 * motionScale +
                  getLoaderMotion(index).exitY * 0.35 * motionScale
                );
              },
              autoAlpha: 0,
              filter: "brightness(0.72) saturate(0.86) blur(1.4px)",
              scale: reducedMotion ? 0.42 : 0.22,
              duration: exitDuration,
              stagger: reducedMotion ? 0.025 : 0.035,
              ease: "power3.inOut",
            },
            "loader-exit",
          )
          .to(
            "[data-loader-brand]",
            {
              scale: reducedMotion ? 1 : 1.04,
              duration: exitDuration,
              ease: "power2.out",
            },
            "loader-exit",
          )
          .to(
            root,
            {
              autoAlpha: 0,
              scale: reducedMotion ? 1 : 1.03,
              duration: reducedMotion ? 0.45 : 0.8,
              ease: "power3.inOut",
            },
            "loader-end",
          );
      }, root);

      cleanup = () => ctx.revert();
    });

    return () => {
      isActive = false;
      cleanup?.();
    };
  }, [isVisible, onComplete, reducedMotion]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[80] h-[100dvh] overflow-hidden bg-[#131111] text-paper"
      aria-label="Loading Smallcrowdd"
      aria-busy={progress < 100}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-left-top bg-repeat opacity-20 mix-blend-hard-light"
        style={{
          backgroundImage: "url(/assets/loader/noise.png)",
          backgroundSize: "240px 180px",
        }}
      />

      <div
        data-loader-stage
        className="absolute inset-0 mx-auto h-full w-full max-w-[1440px] will-change-transform [transform-style:preserve-3d]"
      >
        {loaderImages.map((image, index) => (
          <div
            key={image.id}
            data-loader-image
            className="absolute overflow-hidden opacity-0 will-change-transform"
            style={{
              aspectRatio: `${image.width} / ${image.height}`,
              left: `${(image.x / 1440) * 100}%`,
              top: `${(image.y / 1024) * 100}%`,
              width: `clamp(${Math.max(48, image.width * 0.42)}px, ${(image.width / 1440) * 100}vw, ${image.width}px)`,
              zIndex: image.depth,
            }}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes={image.sizes}
              className="object-cover"
              priority={index < 6}
            />
          </div>
        ))}
      </div>

      <div
        data-loader-brand
        className="absolute left-1/2 top-1/2 w-[min(300px,58vw)] -translate-x-1/2 -translate-y-1/2 opacity-0"
      >
        <Image
          src="/assets/loader/logo.png"
          alt="smallcrowdd."
          width={300}
          height={43}
          className="h-auto w-full"
          priority
        />
      </div>

      <div
        data-loader-count
        className="absolute bottom-[max(3.25rem,5.25vh)] right-[clamp(1.5rem,3.35vw,3rem)] tabular-nums text-[clamp(2rem,2.78vw,2.5rem)] font-medium leading-none tracking-normal text-paper opacity-0"
      >
        {String(progress).padStart(2, "0")}%
      </div>
    </div>
  );
}
